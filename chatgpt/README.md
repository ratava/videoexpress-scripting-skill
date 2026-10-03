# VideoExpress Scripting — ChatGPT and Codex build

The ChatGPT/Codex build of the [VideoExpress Scripting](../README.md) skill, packaged as a **Codex plugin**. This folder is the plugin root: `plugin.json` is the manifest and `skills/videoexpress-scripting/` is the skill. The repo's `.agents/plugins/marketplace.json` lists it, so the repo doubles as a plugin marketplace you can add to Codex or the ChatGPT desktop app. Same method as the Claude build, with platform-neutral wording, a front-loaded trigger description (Codex shortens long descriptions in its skill list) and platform notes in the browser workflow for agent modes that can run long sessions.

## Installing

**As a plugin from the marketplace (recommended).** In ChatGPT, open Settings → Plugins → Add → Add a Marketplace, enter `ratava/videoexpress-scripting-skill`, then install VideoExpress Scripting from the Personal tab ([walkthrough with screenshots](https://github.com/ratava/videoexpress-scripting-skill/wiki/Install-ChatGPT-Codex)). From the Codex CLI:

```
codex plugin marketplace add ratava/videoexpress-scripting-skill
```

In Codex CLI, open the plugin directory, pick the **VideoExpress Scripting** marketplace and install the plugin. In the ChatGPT desktop app (Work mode), open the Plugins Directory and choose the same marketplace source. Pin a release with `codex plugin marketplace add ratava/videoexpress-scripting-skill --ref v2.2.1`, and pull updates later with `codex plugin marketplace upgrade videoexpress-scripting`. Codex caches the installed copy under `~/.codex/plugins/cache/videoexpress-scripting/videoexpress-scripting/`, so it keeps working when the repo isn't open.

If you clone this repo and open it as a trusted project, the repo-scoped marketplace is discovered automatically and `.codex/config.toml` enables the plugin for that project.

**As a plain skill.** Copy `skills/videoexpress-scripting/` into `~/.agents/skills/` for personal use, or into your repository's `.agents/skills/` to share it with a team. Codex picks it up automatically; restart if it doesn't appear. Invoke it explicitly with `$videoexpress-scripting` or let Codex match it from the description.

**ChatGPT without plugins or skills.** Download `videoexpress-scripting-chatgpt.zip` from the [releases page](../../../releases) (or zip the `skills/videoexpress-scripting` folder yourself) and upload it through ChatGPT's skills settings, or paste `SKILL.md` into a Project's instructions as a fallback. Native skills are rolling out by plan; Enterprise and Edu workspaces have them off by default until an admin enables them.

**Browser operation:** the browser workflow assumes an assistant that can control a browser (ChatGPT agent mode, the Codex app or Codex Chrome extension). The skill works for planning and prompt writing without it.

## Contents

```
chatgpt/                             plugin root
├── plugin.json                      portable plugin manifest (Agent Plugins schema)
├── .codex-plugin/plugin.json        compatibility manifest for older Codex clients
└── skills/
    └── videoexpress-scripting/      the skill
        ├── SKILL.md                 core method and rules
        ├── agents/
        │   └── openai.yaml          display name, description, default prompt
        └── references/
            ├── project-intake.md            design-phase question system
            ├── multishot-template.md        prompt structure, templates, example
            ├── bible.md                     character, outfit and location blocks, references, start images
            ├── camera-and-motion.md         timing, chaining, camera and motion rules
            ├── light-sound-dialogue.md      light, production sound, dialogue and lipsync, POV shots
            ├── prompt-rules.md              how the engine reads a prompt; failure → cause → rule table
            ├── styles/                      one sheet per Create Mode or custom style, with an index
            └── browser-workflow.md          driving VideoExpress in the browser
```

## Using it

Ask ChatGPT or Codex things like:

- "I've got an idea for a VideoExpress video. Help me plan it."
- "Here's my script. Turn it into a VideoExpress production."
- "Script a ten-clip VideoExpress short film in claymation style."
- "Write a multishot prompt for this start frame: the camera should orbit her while she walks through the market."
- "My chained clips keep reversing camera direction. How do I fix it?"
- "Write a two-character standoff with dialogue, then a fight, for VideoExpress."
- "Open VideoExpress and generate clips 1 to 5 from my approved script, five takes each, stopping for me to pick each take."

## Notes

See the [master README](../README.md) for what the skill covers, affiliation notes and the licence.
