# VideoExpress Scripting — ChatGPT and Codex build

The ChatGPT/Codex build of the [VideoExpress Scripting](../README.md) skill. Same method as the Claude build, with platform-neutral wording, a front-loaded trigger description (Codex shortens long descriptions in its skill list), platform notes in the browser workflow for agent modes that can run long sessions, and an `agents/openai.yaml` for Codex app metadata.

## Installing

**ChatGPT:** download `videoexpress-scripting-chatgpt.zip` from the [releases page](../../../releases) (or zip the `videoexpress-scripting` folder yourself), then upload it through ChatGPT's skills settings. Native skills are rolling out by plan; Enterprise and Edu workspaces have skills off by default until an admin enables them. If your plan doesn't show skills yet, you can paste `SKILL.md` into a Project's instructions as a fallback.

**Codex (CLI, IDE extension, app):** copy the `videoexpress-scripting` folder into `~/.agents/skills/` for personal use, or into your repository's `.agents/skills/` to share it with a team. Codex picks it up automatically; restart if it doesn't appear. Invoke it explicitly with `$videoexpress-scripting` or let Codex match it from the description.

**Browser operation:** the browser workflow assumes an assistant that can control a browser (ChatGPT agent mode, the Codex app or Codex Chrome extension). The skill works for planning and prompt writing without it.

## Contents

```
videoexpress-scripting/
├── SKILL.md                         core method and rules
├── agents/
│   └── openai.yaml                  display name, description, default prompt
└── references/
    ├── project-intake.md            design-phase question system
    ├── multishot-template.md        prompt structure, templates, example
    ├── create-modes.md              Create Mode style sheets and custom styles
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
