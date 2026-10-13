# VideoExpress Prompt — Claude build

A sister skill to [VideoExpress Scripting](../README.md), packaged as a **Claude plugin**. Where VideoExpress Scripting plans a whole multi-clip video, this one is a wizard for **one shot**: a start-image prompt, a clip prompt, or an image-and-clip pair, written to the same rules. It can also take an image or prompt you already have and improve it.

## How it works

Claude asks about one aspect of the shot at a time, with a suggested answer each step:

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

Add the marketplace `ratava/videoexpress-scripting-skill` in Claude Desktop (Customize → Personal plugins → **+** → Browse plugins → Add Marketplace) and install **VideoExpress Prompt**. For Claude web, mobile or the Free plan, zip the `skills/videoexpress-prompt` folder (so the zip contains the folder itself) and upload it under **Customize → Skills**.

## Contents

```
claude-prompt/                       plugin root
├── .claude-plugin/plugin.json       plugin manifest
└── skills/
    └── videoexpress-prompt/         the skill
        ├── SKILL.md                 the wizard
        └── references/              shared with VideoExpress Scripting, kept identical
```

The references are copies of VideoExpress Scripting's, so a rule fixed there reaches this skill too.
