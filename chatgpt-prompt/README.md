# VideoExpress Prompt — ChatGPT build

A sister skill to [VideoExpress Scripting](../README.md), packaged as a plugin for ChatGPT. Where VideoExpress Scripting plans a whole multi-clip video, this one is a wizard for **one shot**: a start-image prompt, a clip prompt, or an image-and-clip pair, written to the same rules. It can also take an image or prompt you already have and improve it.

## How it works

The assistant asks about one aspect of the shot at a time, with a suggested answer each step:

0. What you have already (an image, an image prompt, a clip prompt, or nothing) and what you want out of it
1. Look: style (with links to the [style catalogue](https://github.com/ratava/videoexpress-scripting-skill/wiki/Styles)), aspect ratio, characters and Consistent Character, location
2. What happens
3. Any talking, and what is said
4. Sound
5. Camera
6. Light and image
7. Negatives

Then it gives each prompt in a code block with the VideoExpress dialog settings to use.

## Installing

In ChatGPT, open Settings → Plugins → Add → Add a Marketplace, enter `ratava/videoexpress-scripting-skill`, then install **VideoExpress Prompt**. Without plugins, zip the `skills/videoexpress-prompt` folder and upload it through ChatGPT's skills settings.

**Grok (xAI).** This build is also the one for Grok. Grok skills are available on the free trial and paid plans only. Ask Grok to install it from GitHub, giving it this folder, not the repo root (the root also holds the Claude build with the same name):

```
Install this skill into my skill library from GitHub. The link is one skill folder (SKILL.md plus its references folder); install only this folder:
https://github.com/ratava/videoexpress-scripting-skill/tree/main/chatgpt-prompt/skills/videoexpress-prompt
```

Answer yes when Grok asks whether to check for updates regularly. Step-by-step: [Install in Grok](https://github.com/ratava/videoexpress-scripting-skill/wiki/Install-Grok).

For the local Grok Build CLI instead, use the open-source [skills CLI](https://github.com/vercel-labs/skills) (needs Node.js); skills installed this way are seen only by Grok Build on that computer:

```
npx skills add https://github.com/ratava/videoexpress-scripting-skill/tree/main/chatgpt-prompt/skills/videoexpress-prompt -a grok -g
```

## Contents

```
chatgpt-prompt/                      plugin root
├── plugin.json                      portable plugin manifest (Agent Plugins schema)
├── .codex-plugin/plugin.json        compatibility manifest
└── skills/
    └── videoexpress-prompt/         the skill
        ├── SKILL.md                 the wizard
        ├── agents/openai.yaml       app metadata
        └── references/              shared with VideoExpress Scripting, kept identical
```

The references are copies of VideoExpress Scripting's, so a rule fixed there reaches this skill too.
