// DeepSeek Harness (dsh) skill provider for the VideoExpress skills.
//
// A Cordis plugin that registers one provider on `ctx.skills`. It serves the
// ChatGPT builds of both skills straight from this package, so dsh gets the
// same files as ChatGPT, Grok and Gemini. Bodies are reread on every load.
//
// @module videoexpress-scripting dsh provider
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const name = 'videoexpress-skills'
const inject = ['skills']

// Below dsh's bundled root (600) and the user's own skill folders (400, 500),
// so a copy the user put in ~/.agents/skills wins over the packaged one.
const RANK = 550
const SOURCE = 'custom'

const PACKAGE_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SKILL_DIRS = [
  'chatgpt/skills/videoexpress-scripting',
  'chatgpt-prompt/skills/videoexpress-prompt',
].map((dir) => join(PACKAGE_ROOT, ...dir.split('/')))

function unquote(value) {
  const v = value.trim()
  if (v.length >= 2 && (v[0] === '"' || v[0] === "'") && v[v.length - 1] === v[0]) return v.slice(1, -1)
  return v
}

/**
 * Split a SKILL.md into frontmatter and body. Reads top-level `key: value`
 * scalars plus one level of nested scalars (the `metadata:` block).
 * @returns `{ metadata, body }`, or undefined without a frontmatter block.
 */
function parseSkill(text) {
  const lines = text.replace(/^﻿/, '').split(/\r?\n/)
  if (lines[0].trim() !== '---') return undefined
  const end = lines.indexOf('---', 1)
  if (end === -1) return undefined
  const metadata = {}
  let parent
  for (const line of lines.slice(1, end)) {
    if (!line.trim() || line.trim().startsWith('#')) continue
    const nested = /^\s+([A-Za-z][\w-]*):\s*(.*)$/.exec(line)
    if (nested && parent) {
      metadata[parent][nested[1]] = unquote(nested[2])
      continue
    }
    const top = /^([A-Za-z][\w-]*):\s*(.*)$/.exec(line)
    if (!top) continue
    if (top[2].trim() === '') {
      parent = top[1]
      metadata[parent] = {}
    } else {
      parent = undefined
      metadata[top[1]] = unquote(top[2])
    }
  }
  return { metadata, body: lines.slice(end + 1).join('\n').replace(/^\n+/, '') }
}

async function readSkill(dir, signal) {
  const path = join(dir, 'SKILL.md')
  let text
  try {
    text = await readFile(path, { encoding: 'utf8', signal })
  } catch {
    return undefined
  }
  const parsed = parseSkill(text)
  if (!parsed || typeof parsed.metadata.name !== 'string' || typeof parsed.metadata.description !== 'string') return undefined
  const { name: skillName, description, ...rest } = parsed.metadata
  return {
    summary: {
      name: skillName,
      description,
      invocation: {
        modelInvocable: rest['disable-model-invocation'] !== 'true',
        userInvocable: rest['user-invocable'] !== 'false',
      },
      source: SOURCE,
      provider: name,
      resourceBase: { kind: 'directory', path: dir },
      path,
      ...(Object.keys(rest).length > 0 ? { metadata: rest } : {}),
    },
    content: parsed.body,
  }
}

function apply(ctx) {
  ctx.skills.registerProvider(() => ({
    name,
    async list(options) {
      const skills = await Promise.all(SKILL_DIRS.map((dir) => readSkill(dir, options?.signal)))
      return skills
        .map((skill, i) => skill && { ...skill.summary, rank: RANK, locator: SKILL_DIRS[i] })
        .filter(Boolean)
    },
    async get(candidate, options) {
      const skill = await readSkill(candidate.locator, options?.signal)
      return skill && { ...skill.summary, content: skill.content }
    },
  }))
}

export { apply, name, inject }
export default { apply, name, inject }
