# VideoExpress Scripting — Claude build

The Claude build of the [VideoExpress Scripting](../README.md) skill, packaged as a **Claude plugin**. This folder is the plugin root: `.claude-plugin/plugin.json` is the manifest and `skills/videoexpress-scripting/` is the skill. The repo's `.claude-plugin/marketplace.json` lists it, so the repo doubles as a plugin marketplace you can add in Claude Desktop. It is written for Claude's environment: Claude in Chrome for the browser workflow, tappable question cards at each checkpoint, and a per-reply action budget that shapes the render cycle.

## Installing

**Claude Desktop (recommended):** open **Customize** in the left sidebar, go to **Personal plugins**, click **+** → **Browse plugins** → **Add Marketplace**, enter `ratava/videoexpress-scripting-skill` and click **Sync**, then install **VideoExpress Scripting** from the list ([walkthrough with screenshots](https://github.com/ratava/videoexpress-scripting-skill/wiki/Install-Claude-Desktop)). To pick up a new version, remove the plugin and install it again from the marketplace; Desktop does not yet update marketplace plugins in place.

**Claude web or mobile:** download `videoexpress-scripting-claude.zip` from the [releases page](../../../releases) (or zip the `skills/videoexpress-scripting` folder yourself so the zip contains the folder itself), then upload it under **Settings → Capabilities → Skills**.

**Claude in Chrome:** needed only if you want Claude to operate app.videoexpress.ai for you. The skill works for planning and prompt writing without it.

## Contents

```
claude/                              plugin root
├── .claude-plugin/plugin.json       plugin manifest
└── skills/
    └── videoexpress-scripting/      the skill
        ├── SKILL.md                 core method and rules
        └── references/
            ├── project-intake.md            design-phase question system
            ├── multishot-template.md        prompt structure, templates, example
            ├── bible.md                     character, outfit and location blocks, references, start images
            ├── camera-and-motion.md         timing, chaining, camera and motion rules
            ├── light-sound-dialogue.md      light, production sound, dialogue and lipsync, POV shots
            ├── prompt-rules.md              how the engine reads a prompt; failure → cause → rule table
            ├── styles/                      one sheet per Create Mode or custom style, with an index
            └── browser-workflow.md          driving VideoExpress with Claude in Chrome
```

## Using it

Ask Claude things like:

- "I've got an idea for a VideoExpress video. Help me plan it."
- "Here's my script. Turn it into a VideoExpress production."
- "Script a ten-clip VideoExpress short film in claymation style."
- "Write a multishot prompt for this start frame: the camera should orbit her while she walks through the market."
- "My chained clips keep reversing camera direction. How do I fix it?"
- "Write a two-character standoff with dialogue, then a fight, for VideoExpress."
- "Open VideoExpress and generate clips 1 to 5 from my approved script, five takes each, stopping for me to pick each take."

## Notes

See the [master README](../README.md) for what the skill covers, affiliation notes and the licence.
