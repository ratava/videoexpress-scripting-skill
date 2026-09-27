---
name: videoexpress-scripting
description: Create clip-by-clip production scripts, storyboards and prompt packs for VideoExpress (VE) 3.5 and similar image-to-video tools, where a video is built from 3–10 second clips each defined by a start image plus a motion prompt. Covers the VE multishot prompt format ([REFERENCE USE], [IDENTITY / CONTINUITY], [SCENE], [ACTION], [CAMERA], [LIGHT AND IMAGE], [PRODUCTION SOUND], [NEGATIVES]), the ten Create Mode animation styles plus photoreal, start-image prompts and clip chaining. Use this skill whenever the user wants to script or produce a music video or any multi-clip video with VideoExpress or a comparable tool (Runway, Kling, Hailuo, Pika), asks for video or start-image prompts, a shot list or a multishot prompt, asks Claude to operate app.videoexpress.ai in the browser (Claude in Chrome) to generate start images and clips, review takes, save last frames and build the timeline from an approved script, or reports AI-video problems such as camera direction flipping between clips, outfit or accessory drift, environments changing, wrong dance speed, crowd scale errors, scenes going dark, or text rendering in footage.
---

# VideoExpress Scripting

Produce a production-ready **prompt pack**: a living document that maps a full piece (song, narration, story) onto a sequence of clips, each with a start-image plan and a paste-ready VE multishot prompt.

Two facts drive almost everything in this skill:

1. **The model renders nouns, not intentions.** Every noun, count, simile and stray token is a candidate to appear on screen.
2. **Each generation only knows what it is given.** A chained clip sees one still image — the previous clip's last frame — plus the prompt and any reference images. It has no memory of the previous clip's motion, of anything that was out of frame, or of earlier prompts. Anything not visible in the opening frame or described in the prompt will be invented.

## Reference files

- `references/multishot-template.md` — the VE 3.5 multishot prompt structure, a blank template, block conventions and a worked generic example. Read before writing any video prompt.
- `references/create-modes.md` — the ten VE Create Mode styles (and cinematic photoreal): image-prompt recipe, style vocabulary, motion cadence and style-guard negatives for each. Read when choosing or writing for a style.
- `references/browser-workflow.md` — driving app.videoexpress.ai with Claude in Chrome: Creation and Review tabs, dialog settings, generating and monitoring takes, user review checkpoints, Save Last Frame, the timeline, and prompt hardening. Read before touching the browser.

## Workflow overview

1. **Concept** — scenes, motifs, characters, world, and a visual arc mapped to the source's structure.
2. **Bible** — locked character blocks, outfit blocks and location blocks written once and pasted verbatim everywhere.
3. **Timing** — a clip grid at the tool's clip length, with key hits verified against the real audio by the user.
4. **Prompt pack** — start-image prompts and multishot video prompts for every clip.
5. **Generation support** — diagnose reported failures, fix them globally, sweep every affected clip.

The pack is a living document. Expect many revision rounds as the user generates clips. Apply fixes systemically (a global rule plus a sweep), not just to the clip that failed.

## 1. Concept design

- Design **2–4 recurring motifs** that carry the video (an accent colour, a gesture, a light effect, a returning prop). Motifs give continuity AI generation can't provide on its own.
- Map source structure to a **scene table**: scene → time range → clips → outfit → location → motif state. Escalate motifs across scenes.
- **Musical hits deserve visual events**: drops get reveals or bursts of motion; build-ups get stillness so the hit lands; scene changes land on section boundaries.
- **Give each scene a logical opening.** Don't open mid-action for no reason — establish the character arriving, starting the music, or reacting before the main action.
- Favour what generates reliably: steady camera moves, light changes, drifting atmosphere, one clear subject. Put spectacle in the background, the performance in the foreground.
- Plan lip-sync avoidance unless the tool supports it: profile, silhouette, backs, held poses.
- Background interest (vehicles, crowds, city life) should be named explicitly and kept at a distance ("far beyond the railing") so it never crosses the subject.

## 2. The bible: character, outfit and location blocks

Write these once, paste them **word for word** into every image and video prompt that features them. Never paraphrase — paraphrase is drift.

**Character core block** (identity, constant across scenes): age range, build, skin, face, eye colour, expression baseline, hair (cut, colour, how it's worn — use "always"), signature accessory (e.g. a hat, glasses or jewellery) with material, shape and how it's worn. Give the character a short unique name used in every prompt.

**Outfit blocks** (one per scene): every garment with colour, material, cut, neckline, length, fastenings, and exactly which body parts are bare.
- **Describe asymmetric items per side, positively and separately.** "Her right hand is completely bare, with only a small, snug, flat white wristband at the wrist. Her left hand alone wears a black glove…" Adjacent mentions ("wristbands on both wrists; a glove on her left hand") bleed into each other.
- Prefer **snug, flat, close-fitting** wording for small accessories; "fluffy", "thick" or a second mention of the same item invites extra fabric.
- If the user prefers a look that emerged in a generation, rewrite the block to match that frame rather than fighting it.

**Location blocks** (one per environment): describe the whole space — floor, walls or railings, structures, skyline or ceiling, light sources, atmosphere, crowd — **including what is out of frame at the start**, so camera moves reveal defined space instead of invented space. Add sky/weather direction rules here if clouds are present ("any clouds always travel directly away from the camera toward the horizon, never sideways").

**Crowd rule**: crowds need their own look distinct from the lead (different clothing), "a varied mix of people with different faces, hairstyles and builds", and "only [Name] wears [signature accessory]". For scale, say "every dancer a real person at true human scale with natural proportions", "the foreground dancers are the same size as [Name]", "the crowd recedes naturally with perspective". Avoid wording that invites mixed scales: a very tall stage lifting the lead "high above", "thousands", "shrinking into tiny figures".

**Reference images**: supply a face/hair reference and an outfit reference (a clean frame of the current outfit) with every clip, and an environment reference image when a move will reveal environment seen earlier. State each role explicitly in [REFERENCE USE].

**Start images**: write each start-image prompt as a **self-contained** prompt with the full character, outfit and location blocks inlined — no "derived from reference X" split prompts. Put the subject **mid-action** if the clip must start moving (a still pose in the start frame makes the model hesitate). Always include the character's head. Derive later start images from the best frame of the character, never from a drifted frame.

## 3. Timing

- VideoExpress clip length is set per generation (3–10 s, default 5). Plan most clips at the length the user actually uses (often 10 s) and let the grid fall on those boundaries — don't force bar-accurate clip lengths the tool can't honour.
- Use short clips (3–5 s) for accents, transitions and inserts; the last clip can be sized to end on the track's final hit.
- Verify key anchors (drops, section changes, the final hit) with the user against the real audio before generating the clips around them.
- **Generate full clips, trim tails in the edit.** Heads carry the prompted action; tails wander.
- Mild retimes (0.9–1.2x) fix small tempo mismatches: `ffmpeg -i in.mp4 -filter:v "setpts=<factor>*PTS" -an -c:v libx264 -crf 16 out.mp4` (factor < 1 speeds up). Always work on copies of original outputs.
- Transitions the prompt can't do cleanly (white dips, fades) belong in the edit. A clip can end on pure white or a held pose for the edit to cut from.

## 4. Chaining and the camera

Chaining = starting a clip from the previous clip's cut frame. It gives continuity, but the chained generation knows **only that frame**.

- **Always chain from the frame where you actually cut**, not the raw last frame: `ffmpeg -ss <time> -i clip.mp4 -frames:v 1 frame.png`. Trim before any tail drift and chain from there.
- **Inspect the cut frame before chaining.** If it is mid-flick, motion-blurred, darkened, drifted or oddly framed, the child inherits it. Fix the parent (trim or re-roll), don't prompt harder on the child.
- Deep chains are fine while quality holds; restart fresh (from a clean derived image in the same pose and framing) when the character or outfit drifts badly.
- **Never write camera moves relative to another clip** ("continue the same direction as the previous shot") — the model can't see it. Name the direction explicitly in every clip, using the **identical phrase** each time ("circles slowly clockwise around the stage, as seen from above", "arcs around her to the right").
- **Describe motion already in progress at the start of a chained clip** if the parent ended moving: "From the opening frame the camera is already circling slowly clockwise…" Then ease it ("the pull-out eases to a gentle stop") before any change of direction.
- **Never return the camera to space that has left the frame.** Moves continue forward into unseen space, which the model can invent freely. Returning makes it reinvent what was there, inconsistently.
- **Strip out-of-view landmarks from later prompts.** Naming something that is no longer visible makes the model pan back to find it.
- **End every clip at full-body framing if the next clip chains.** If a clip pushes in, it must pull back out by its last frame ("no ending closer than her full body"). Close framing loses the outfit and environment for the next generation. Closest framing during a clip is waist-up, except deliberate endings and scene transitions.
- If a move is prone to drifting back, add a positive hold rule to [SCENE]: "The camera holds its current view; if it drifts at all, it only keeps moving in the same direction, revealing new space, never turning back toward the earlier view."
- Hands touching the face or accessories (adjusting glasses, touching a hat) risk warping; keep the touch brief and trim just after it.

## 5. Motion rules

- **Lead the action with the subject**, not the crowd or background: "From the very first frame, with no pause and no delay, [Name] is already dancing…" Crowd follows "from that same first frame".
- **Restate continuous motion in every [ACTION] segment** and end with "still dancing in the very last frame". Transition-heavy segments (sky changes, reveals) steal the motion budget unless the subject's moves are restated specifically.
- **Real time vs time-lapse.** When the background is time-lapsed, add: "[Name] moves in normal real time, completely separate from the time-lapse behind her: only the sky and the city are sped up, and her dancing stays a smooth, steady, controlled groove locked to the beat, fluid and never frantic. Her hair also moves in normal real time, bouncing and swaying gently only with her own movements, untouched by the time-lapse or any wind." Negatives: "no sped-up or time-lapsed motion on [Name], no jerky, erratic, twitching or flailing movement, no whipping or flicking hair, no wind-blown hair".
- **Rate words bleed.** Slow words written for the camera slow the dancers; racing words written for the sky speed them up. Keep rate words attached to their own subject, in separate sentences or segments. "Cinematic" plus lasers/smoke/crowds is a strong slow-motion cue — use "real-time footage at natural speed, no slow motion" for energetic scenes.
- **One groove beats many moves.** A smooth repeating pattern (side step, gentle bounce, rolling shoulders, arm pump on every other beat) reads better than many simultaneous actions, which read as flailing.
- **Give features you want kept a motion**: "her ponytail swaying behind her" keeps the ponytail; unmentioned features drift.
- Holds: when a subject must stop (a pose, a point), say so for that segment only, and write "no stopping before…" in negatives so earlier segments keep moving.

## 6. Light and look

- End every [LIGHT AND IMAGE] with the same style line (e.g. "Crisp cinematic photorealistic look, vivid saturated colour, natural skin and fabric detail, sharp focus, stable colour and exposure throughout.") or the Create Mode style line from `references/create-modes.md`.
- **Lasers, neon and smoke drift dark.** Rule: effects add light, never replace it. Keep a key light on the subject ("a soft key light keeps her face and outfit clearly lit"), make smoke "pale, luminous", give the subject a physical light source (a spotlight from above) and restate brightness in the final segment. Never chain from a darkened frame.
- For sky/time transitions, allow the sky to change but state "the subject's lighting stays stable".
- Sun paths and cloud directions must be stated explicitly and consistently if they matter (e.g. the sun rises on the left, sets on the right; clouds travel directly away from the camera).

## 7. Prompt-writing rules (failure-derived)

| Failure observed | Cause | Rule |
|---|---|---|
| Digits or letters rendered in footage | Numerals and text-like nouns in the prompt | Digits only in [ACTION 0-5s] labels; everything else in words. Describe screens, signs and holograms as "abstract shapes and flowing light, with no letters or numbers". End image prompts with "no text, no letters, no numbers, no watermark". |
| Several objects where one was meant | Counting events ("pulses five times") | Never count events; describe a rate on one named source. Only count real plural objects. |
| Water instead of fog | Water vocabulary | Fog is dry, luminous smoke; ban pool, ripple, wave, surface, flood, tide. |
| Features bleeding between characters or crowd cloning the lead | Shared adjectives, one look for everyone | Unique name per character, distinct crowd outfits, "only [Name] wears…", "no crowd member sharing [Name]'s face, hair or outfit, no identical or cloned faces". |
| Camera direction flips between clips | Relative or missing direction | Explicit, identical direction phrase in every clip; describe motion in progress at the start. |
| Environment changes when the camera returns | Out-of-view space regenerated | Move only into unseen space; strip vanished landmarks; supply an environment reference. |
| Accessories migrate or grow | Adjacent, ambiguous item wording | Per-side positive descriptions, snug/flat wording, specific negatives. |
| Dancing too fast, erratic, or hair whipping | Time-lapse or rate-word bleed | Real-time separation sentence plus negatives. |
| Subject frozen at the start or slowing mid-clip | Background mentioned first; still start pose; slow words | Subject first, "no pause and no delay", mid-move start image, restate in every segment. |
| Scene darkens | Laser/smoke default look | Effects add light, key light, spotlight, luminous smoke, restated brightness. |
| Crowd at wrong scale or fake-looking | Scale-mixing wording | True human scale wording, low stage, natural perspective. |
| Similes rendered literally | The model renders nouns | Audit every noun; replace figurative nouns with literal descriptions. |
| Too-close ending ruins the next chain | Close framing | Pull back to full body by the last frame. |

**Per-take QC checklist** (include in every pack): character hair, face and signature accessory; outfit matches the scene block, per side; environment matches the location block, including newly revealed areas; brightness holds to the last frame; no digits, letters or symbols; camera direction as prompted; dance tempo reads as real time; crowd scale and faces varied; cut frame is clean for the next chain.

## 8. The prompt pack document

Structure:

1. **Overview**: scene table (scene, clips, time range, outfit, VE length); prompt format note; references to supply with each clip; paste rule (only text inside code blocks is pasted; headings carry metadata).
2. **Global rules**: the rules above that apply to this project.
3. **Bible**: character core block, outfit blocks, location blocks, style line.
4. **Per scene**: start images (self-contained prompts), then per clip — header line (clip · time range · VE length · FRESH from image X or CHAIN from clip N · role tag) and the full multishot prompt in a code block.
5. **Edit, timing and QC**: trims, retimes, transitions, the QC checklist, open items.

For alternates, add a new tab or section (e.g. "Alternate Scene 1") rather than overwriting working clips, and include any adjacent clips that must change to hand off correctly.

Keep clip numbering stable once generation starts; if clips are cut, keep the gaps and note them.

## 9. Working style during production

- Users report failures one at a time, often with a frame. Diagnose the **mechanism**, fix it globally, and sweep every not-yet-generated clip with the same risk.
- Read the frame the user sends: note what actually rendered (outfit, hologram shape, framing, lighting) and write the next prompt to match what exists rather than what was planned.
- When the user edits the pack directly, re-read before writing and never overwrite their changes without saying so.
- When the user states a preference ("keep it", "I prefer this look"), treat it as a new rule and apply it everywhere.
- Protect payoff shots: guard their preconditions in every earlier prompt.

## 10. Operating VideoExpress in the browser

When the user wants Claude to drive app.videoexpress.ai itself rather than just write the pack, read `references/browser-workflow.md` first and follow it step by step. The user approves every start image, take and prompt change; Claude pastes prompts exactly as written, never skips a checkpoint, and leaves drift judgements to the user unless a problem is obvious. Prompt hardening from a generated frame (section 2's "rewrite the block to match that frame") is offered after the first clip is on the timeline, and again after the second if deferred.
