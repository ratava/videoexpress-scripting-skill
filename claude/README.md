# VideoExpress Scripting — Claude build

The Claude build of the [VideoExpress Scripting](../README.md) skill. It is written for Claude's environment: Claude in Chrome for the browser workflow, tappable question cards at each checkpoint, and a per-reply action budget that shapes the render cycle.

## Installing

**Claude (web, desktop or mobile):** download `videoexpress-scripting-claude.zip` from the [releases page](../../../releases) (or zip the `videoexpress-scripting` folder yourself so the zip contains the folder itself), then upload it under **Settings → Capabilities → Skills**.

**Claude Code:** copy the `videoexpress-scripting` folder into `~/.claude/skills/` (or your project's `.claude/skills/`).

**Claude in Chrome:** needed only if you want Claude to operate app.videoexpress.ai for you. The skill works for planning and prompt writing without it.

## Contents

```
videoexpress-scripting/
├── SKILL.md                         core method and rules
└── references/
    ├── project-intake.md            design-phase question system
    ├── multishot-template.md        prompt structure, templates, example
    ├── create-modes.md              Create Mode style sheets and custom styles
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
