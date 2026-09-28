# VideoExpress Scripting — a Claude skill

A Claude skill for planning and scripting multi-clip AI videos in **VideoExpress 3.5** and similar image-to-video tools (Runway, Kling, Hailuo, Pika). It turns a song, story or narration into a clip-by-clip prompt pack: start-image prompts, VE multishot video prompts, timing, and a generation QC checklist.

## What it covers

- **The VE 3.5 multishot prompt format**: `[REFERENCE USE]`, `[IDENTITY / CONTINUITY]`, `[SCENE]`, `[ACTION]`, `[CAMERA]`, `[LIGHT AND IMAGE]`, `[PRODUCTION SOUND]`, `[NEGATIVES]`, with a blank template, a worked example, and a hard-cut multi-shot variant (several shots in one generation).
- **The ten Create Mode styles**: 3D animation, claymation, 8-bit pixel, stop-motion, comic book, watercolor, wool, paper cut, hand-drawn Japanese animation and low-poly, plus cinematic photoreal. Each has an image-prompt recipe, style vocabulary, motion cadence and style-guard negatives. It also covers **custom Creative mode styles** (e.g. cel-shaded anime) and the style anchor that keeps them from drifting toward realism.
- **Continuity across chained clips**: character, outfit and location blocks; Consistent Character reference slots and their side effects; matching prompts to the frame; chaining from the cut frame; explicit camera direction; ending on the framing the next clip needs.
- **Action and staging**: describing actions against the frame's real geometry, cause-and-effect beat order, fixed left/right layouts for two-character fights, near-misses, and when to split a beat into its own clip.
- **Characters and props**: why humanoid designs beat multi-limbed ones, describing weapon-limbs joint by joint, and stopping mechanical arms turning into hands.
- **Sound**: transient-only production sound that avoids background hiss, heavy weapon sound vocabulary, and what's known (and not) about unwanted music.
- **Dialogue**: the Lipsync HD dialog with one or two actors, and voices for mouthless characters.
- **Point-of-view and special shots**: helmet POV framing, tints, HUD overlays, and what didn't work (see-through-wall thermal effects).
- **Driving VideoExpress in the browser**: with Claude in Chrome, Claude can run an approved pack through app.videoexpress.ai. That covers separate Creation and Review tabs, the right dialog settings, Consistent Character slots, image candidate passes, five-take batches with position tracking, a question-driven render cycle that respects Claude's per-reply action budget, the library refresh workaround, user review checkpoints, saving last frames, building and saving the timeline, recovery after reloads, and prompt hardening.
- **Failure-mode fixes**: camera direction flipping, accessory and outfit drift, environments changing, time-lapse bleeding onto the subject, frozen or erratic motion, crowd scale and cloning, scenes darkening, text in footage, stylised clips turning realistic, props changing shape, actions happening in place or late, and background hiss. It also sets out a method for isolating stubborn failures with single-variable test takes and a control.

## Contents

```
videoexpress-scripting/
├── SKILL.md                         core method and rules
└── references/
    ├── multishot-template.md        prompt structure, templates, example
    ├── create-modes.md              Create Mode style sheets and custom styles
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
- "Write a two-character standoff with dialogue, then a fight, for VideoExpress."
- "Open VideoExpress and generate clips 1 to 5 from my approved script, five takes each, stopping for me to pick each take."

## Notes

This is an independent community skill. It is not affiliated with, endorsed by or supported by VideoExpress or its makers. VideoExpress and other product names are trademarks of their respective owners. The guidance reflects hands-on production experience with VideoExpress 3.5 and may need updating as the tool changes.

## License

[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) © 2026 Brent Wesley. You may share and adapt this skill for non-commercial purposes with attribution. See `LICENSE`.
