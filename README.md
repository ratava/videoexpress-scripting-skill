# VideoExpress Scripting — a Claude skill

A Claude skill for planning and scripting multi-clip AI videos in **VideoExpress 3.5** and similar image-to-video tools (Runway, Kling, Hailuo, Pika). It turns a song, story or narration into a clip-by-clip prompt pack: start-image prompts, VE multishot video prompts, timing, and a generation QC checklist.

## What it covers

- **The VE 3.5 multishot prompt format**: `[REFERENCE USE]`, `[IDENTITY / CONTINUITY]`, `[SCENE]`, `[ACTION]`, `[CAMERA]`, `[LIGHT AND IMAGE]`, `[PRODUCTION SOUND]`, `[NEGATIVES]`, with a blank template and a worked example.
- **The ten Create Mode styles**: 3D animation, claymation, 8-bit pixel, stop-motion, comic book, watercolor, wool, paper cut, hand-drawn Japanese animation and low-poly, plus cinematic photoreal. Each has an image-prompt recipe, style vocabulary, motion cadence and style-guard negatives.
- **Continuity across chained clips**: character, outfit and location blocks; reference-image roles; chaining from the cut frame; explicit camera direction; ending on full-body framing.
- **Driving VideoExpress in the browser**: with Claude in Chrome, Claude can run an approved pack through app.videoexpress.ai — separate Creation and Review tabs, the right dialog settings, simultaneous generations, the library refresh workaround, user review checkpoints, saving last frames for chaining, building the timeline and prompt hardening from a generated frame.
- **Failure-mode fixes**: camera direction flipping between clips, accessory and outfit drift, environments changing when the camera returns, time-lapse bleeding onto the subject, frozen or erratic dancing, crowd scale and cloning, scenes darkening, and text rendering in footage.

## Contents

```
videoexpress-scripting/
├── SKILL.md                         core method and rules
└── references/
    ├── multishot-template.md        prompt structure, template, example
    ├── create-modes.md              the Create Mode style sheets
    └── browser-workflow.md          driving VideoExpress in the browser
```

## Installing

**Claude (web, desktop or mobile):** zip the `videoexpress-scripting` folder (the zip should contain the folder itself), then upload it under Settings → Capabilities → Skills.

**Claude Code:** copy the `videoexpress-scripting` folder into `~/.claude/skills/` (or your project's `.claude/skills/`).

## Using it

Ask Claude things like:

- "Script a ten-clip VideoExpress music video for my track, in claymation style."
- "Write a multishot prompt for this start frame: the camera should orbit her while she dances."
- "My chained clips keep reversing camera direction. How do I fix it?"
- "Open VideoExpress and generate clips 1 to 5 from my approved script, stopping for me to pick each take."

## Notes

This is an independent community skill. It is not affiliated with, endorsed by or supported by VideoExpress or its makers. VideoExpress and other product names are trademarks of their respective owners. The guidance reflects hands-on production experience with VideoExpress 3.5 and may need updating as the tool changes.

## License

[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) © 2026 Brent Wesley. You may share and adapt this skill for non-commercial purposes with attribution. See `LICENSE`.
