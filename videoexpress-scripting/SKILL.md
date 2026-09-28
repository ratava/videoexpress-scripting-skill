---
name: videoexpress-scripting
description: Create clip-by-clip scripts and prompt packs for VideoExpress (VE) 3.5 and later by PaulPonna.com, where a video is built from 3–10 second clips, each a start image plus a motion prompt. Covers the VE multishot prompt format, the ten Create Mode styles plus cinematic photoreal, custom Creative mode styles, start-image prompts, clip chaining, Consistent Character references, Lipsync dialogue, multi-shot hard cuts, and driving app.videoexpress.ai in the browser with Claude in Chrome (generating clips, review checkpoints, saving last frames, building the timeline). Use whenever the user wants to start a new VideoExpress project from an idea or a script (guided project intake), or to script or produce a multi-clip video in VideoExpress; asks for VideoExpress video, start-image or multishot prompts or a shot list; asks Claude to operate VideoExpress from an approved script; or reports VideoExpress generation problems such as camera direction flipping, outfit or accessory drift, changing environments, stylised clips turning realistic, props or weapons changing shape, actions happening in place or in the wrong order, motion at the wrong speed, crowd scale errors, dark scenes, text in footage, background hiss, thin gunfire or unwanted music.
---

# VideoExpress Scripting

Produce a production-ready **prompt pack**: a living document that maps a full piece (song, narration, story) onto a sequence of clips, each with a start-image plan and a paste-ready VE multishot prompt.

Two facts drive almost everything in this skill:

1. **The model renders nouns, not intentions.** Every noun, count, simile and stray token is a candidate to appear on screen.
2. **Each generation only knows what it is given.** A chained clip sees one still image — the previous clip's last frame — plus the prompt and any reference images. It has no memory of the previous clip's motion, of anything that was out of frame, or of earlier prompts. Anything not visible in the opening frame or described in the prompt will be invented.

## Reference files

- `references/project-intake.md` — the design-phase question system: starting from a concept or a script, the decision checklist (delivery, look, characters, sound and dialogue, script, logistics), the feasibility check, development tests, and the outputs (project brief, Core Bible, clip breakdown, production plan). Read first on every new project.
- `references/multishot-template.md` — the VE 3.5 multishot prompt structure, a blank template, block conventions and a worked generic example. Read before writing any video prompt.
- `references/create-modes.md` — the ten VE Create Mode styles (and cinematic photoreal): image-prompt recipe, style vocabulary, motion cadence and style-guard negatives for each. Read when choosing or writing for a style.
- `references/browser-workflow.md` — driving app.videoexpress.ai with Claude in Chrome: Creation and Review tabs, dialog settings, Consistent Character reference slots, image candidates, the Lipsync dialog, generating takes and tracking their positions, user review checkpoints, Save Last Frame, the timeline, project saving and recovery, and prompt hardening. Read before touching the browser.

## Workflow overview

0. **Intake** — run the question system in `references/project-intake.md`: choose the starting point (concept or script), work through the decision checklist with suggestions, run the feasibility check and any development tests the user wants, and get sign-off on the brief and Core Bible.
1. **Concept** — scenes, motifs, characters, world, and a visual arc mapped to the source's structure.
2. **Bible** — locked character blocks, outfit blocks and location blocks written once and pasted verbatim everywhere.
3. **Timing** — a clip grid at the tool's clip length, with key hits verified against the real audio by the user.
4. **Prompt pack** — start-image prompts and multishot video prompts for every clip.
5. **Generation support** — diagnose reported failures, fix them globally, sweep every affected clip.

The pack is a living document. Expect many revision rounds as the user generates clips. Apply fixes systemically (a global rule plus a sweep), not just to the clip that failed.

## 1. Concept design

- Design **2–4 recurring motifs** that carry the video (an accent colour, a gesture, a light effect, a returning prop). Motifs give continuity AI generation can't provide on its own.
- Map source structure to a **scene table**: scene → time range → clips → outfit → location → motif state. Escalate motifs across scenes.
- **Key moments deserve visual events.** If the piece is set to music or narration, big hits or key lines get reveals or bursts of motion, build-ups get stillness so the hit lands, and scene changes land on section boundaries.
- **Give each scene a logical opening.** Don't open mid-action for no reason — establish the character arriving, noticing something, or reacting before the main action.
- Favour what generates reliably: steady camera moves, light changes, drifting atmosphere, one clear subject. Put spectacle in the background, the performance in the foreground.
- VE supports lip-synced dialogue (section 6b). In shots without dialogue, keep mouths closed or out of view (profiles, backs, held poses) so no speech is invented.
- Background interest (vehicles, crowds, city life) should be named explicitly and kept at a distance ("far beyond the railing") so it never crosses the subject.

## 2. The bible: character, outfit and location blocks

Write these once, paste them **word for word** into every image and video prompt that features them. Never paraphrase — paraphrase is drift.

**Character core block** (identity, constant across scenes): age range, build, skin, face, eye colour, expression baseline, hair (cut, colour, how it's worn — use "always"), signature accessory (e.g. a hat, glasses or jewellery) with material, shape and how it's worn. Give the character a short unique name used in every prompt.

**Outfit blocks** (one per scene): every garment with colour, material, cut, neckline, length, fastenings, and exactly which body parts are bare.
- **Describe asymmetric items per side, positively and separately.** "Her right wrist wears a slim silver watch. Her left wrist is bare." Adjacent mentions ("a watch and a bracelet on her wrists") bleed into each other.
- Prefer **snug, flat, close-fitting** wording for small accessories; "fluffy", "thick" or a second mention of the same item invites extra fabric.
- If the user prefers a look that emerged in a generation, rewrite the block to match that frame rather than fighting it.

**Location blocks** (one per environment): describe the whole space — floor, walls or railings, structures, skyline or ceiling, light sources, atmosphere, crowd — **including what is out of frame at the start**, so camera moves reveal defined space instead of invented space. Add sky/weather direction rules here if clouds are present ("any clouds always travel directly away from the camera toward the horizon, never sideways").

**Crowd rule**: crowds need their own look distinct from the lead (different clothing), "a varied mix of people with different faces, hairstyles and builds", and "only [Name] wears [signature accessory]". For scale, say "every person a real person at true human scale with natural proportions", "the nearest people are the same size as [Name]", "the crowd recedes naturally with perspective". Avoid wording that invites mixed scales: a raised platform lifting the lead "high above", "thousands", "shrinking into tiny figures".

**Reference images**: supply a face/hair reference and an outfit reference (a clean frame of the current outfit) with every clip, and an environment reference image when a move will reveal environment seen earlier. State each role explicitly in [REFERENCE USE].

**Consistent Character references (VE 3.5)**:
- Reference Photo (slot 1) holds the main character; Reference Photo 2 holds a second character. Both are picked from the library (Media Library → My AI Images), so build them first as clean full-length reference images on a plain grey background.
- **Slot 2 copies more than identity.** An in-scene frame used as a style reference in slot 2 also copies its pose and props (e.g. a weapon held in the hands when the prompt says slung). Use slot 2 only for a second character's reference sheet.
- **References pull toward realism.** Attaching a face reference can shift a stylised clip toward a realistic render. Counter it with the style anchor at the start of the prompt and anti-realism negatives (section 6), not by dropping the reference.
- **References revive features VE used to ignore.** A feature written in the character block that never rendered before (a glowing facial line, a tattoo) can suddenly appear, sometimes multiplied, once references are attached. Remove unwanted features from the block entirely and state the positive: "Her face is plain, unmarked skin with no lines, markings or glowing lights."
- **Turn Consistent Character off for shots with no characters** (empty environments, point-of-view shots, insert shots). With it on, VE puts the reference character in the frame.
- With Consistent Character on, VE may rewrite the image prompt before generating, even with auto-enhance unticked. Check the image prompt box after generation and report any rewrite.

**Match prompts to the image that worked.** When a start-image prompt produces the look you want, reuse its exact character, outfit and location wording in the video prompts for that sequence, rather than the bible's older wording. A mismatch between the frame and the text (different hair side, garment names, a feature that isn't drawn) makes the video drift toward the text.

**Props: describe exactly how the frame shows them.** If the start image shows a bag hanging from one shoulder and resting at the hip, write that, not "a backpack on her back". The model reconciles the frame and the text by moving the prop, often mid-clip.

**Non-human and mechanical characters**:
- **Humanoid designs generate far more reliably** than multi-legged or unusual body plans. Leg and limb counts are ignored, and bodies with many thin limbs lose consistency between frames. Prefer two arms and two legs with a distinctive head, silhouette and weapon.
- **Describe complex limbs and weapons by structure, joint by joint**, in the order they attach: "a rounded shoulder plate over an armoured upper arm and a large cylindrical elbow joint; from the elbow down there is no forearm and no hand, the forearm is the weapon itself, a boxy housing leading into a cluster of barrels". Naming the part ("arm cannon", "rotary gun") alone lets the model draw a hand holding a gun.
- **Mechanical limbs revert to hands during gestures.** When a character with a weapon-arm yells, points or raises an arm, the weapon can morph into a fist. Give gestures to the other limb ("raising its left fist while its right-arm weapon stays pointed at the ground") and add "the weapon keeps exactly the same shape, never turning into a hand or fist".
- VE adds generic gun furniture (carry handles, grips, top rails). Negate it explicitly: "nothing mounted on top: no carry handle, no top handle, no grip".

**Start images**: write each start-image prompt as a **self-contained** prompt with the full character, outfit and location blocks inlined — no "derived from reference X" split prompts. Put the subject **mid-action** if the clip must start moving (a still pose in the start frame makes the model hesitate). Always include the character's head. Derive later start images from the best frame of the character, never from a drifted frame.

## 3. Timing

- VideoExpress clip length is set per generation (3–10 s, default 5). Plan most clips at the length the user actually uses (often 10 s) and let the grid fall on those boundaries — don't force bar-accurate clip lengths the tool can't honour.
- Use short clips (3–5 s) for accents, transitions and inserts; the last clip can be sized to end on the piece's final beat, line or hit.
- If the video is cut to audio (music, narration, dialogue), verify key anchors (big hits, section changes, key lines, the ending) with the user against the real audio before generating the clips around them.
- **Generate full clips, trim tails in the edit.** Heads carry the prompted action; tails wander.
- Mild retimes (0.9–1.2x) fix small tempo mismatches: `ffmpeg -i in.mp4 -filter:v "setpts=<factor>*PTS" -an -c:v libx264 -crf 16 out.mp4` (factor < 1 speeds up). Always work on copies of original outputs.
- Transitions the prompt can't do cleanly (white dips, fades) belong in the edit. A clip can end on pure white or a held pose for the edit to cut from.

## 4. Chaining and the camera

Chaining = starting a clip from the previous clip's cut frame. It gives continuity, but the chained generation knows **only that frame**.

- **Always chain from the frame where you actually cut**, not the raw last frame: `ffmpeg -ss <time> -i clip.mp4 -frames:v 1 frame.png`. Trim before any tail drift and chain from there.
- **Inspect the cut frame before chaining.** If it is mid-flick, motion-blurred, darkened, drifted or oddly framed, the child inherits it. Fix the parent (trim or re-roll), don't prompt harder on the child.
- Deep chains are fine while quality holds; restart fresh (from a clean derived image in the same pose and framing) when the character or outfit drifts badly.
- **Never write camera moves relative to another clip** ("continue the same direction as the previous shot") — the model can't see it. Name the direction explicitly in every clip, using the **identical phrase** each time ("circles slowly clockwise around her, as seen from above", "arcs around her to the right").
- **Describe motion already in progress at the start of a chained clip** if the parent ended moving: "From the opening frame the camera is already circling slowly clockwise…" Then ease it ("the pull-out eases to a gentle stop") before any change of direction.
- **Never return the camera to space that has left the frame.** Moves continue forward into unseen space, which the model can invent freely. Returning makes it reinvent what was there, inconsistently.
- **Strip out-of-view landmarks from later prompts.** Naming something that is no longer visible makes the model pan back to find it.
- **End every clip at full-body framing if the next clip chains.** If a clip pushes in, it must pull back out by its last frame ("no ending closer than her full body"). Close framing loses the outfit and environment for the next generation. Closest framing during a clip is waist-up, except deliberate endings and scene transitions.
- If a move is prone to drifting back, add a positive hold rule to [SCENE]: "The camera holds its current view; if it drifts at all, it only keeps moving in the same direction, revealing new space, never turning back toward the earlier view."
- Hands touching the face or accessories (adjusting glasses, touching a hat) risk warping; keep the touch brief and trim just after it.
- **If the accepted take ends on the wrong framing for the next clip** (a close-up when the next clip needs the full body, a pose that doesn't lead into the next action), don't prompt the child to reframe. Start the next clip fresh from a new start image of the needed pose and framing.

### Multi-shot generations with hard cuts

A single VE 3.5 generation can contain two or three shots joined by hard cuts. Use it where coverage helps: a wide action shot, then a close-up for a line of dialogue, or a detail insert on a prop.
- Declare it in [IDENTITY / CONTINUITY]: "This ten-second generation is a sequence of two shots joined by one hard cut, exactly as described below."
- Each shot is its own [ACTION] → [CAMERA] → [LIGHT AND IMAGE] trio, and each [CAMERA] after the first starts "Hard cut to…". Label the segments "Shot one.", "Shot two."
- Negatives say "no cuts other than the hard cut described" instead of "no cuts".
- **The last shot sets up the next clip.** A chained clip inherits the final shot's framing.
- Keep continuous single shots for moves that must flow (a dive, a long camera move, a chain handoff).

## 5. Motion rules

- **Lead the action with the subject**, not the crowd or background: "From the very first frame, with no pause and no delay, [Name] is already [walking / running / working]…" Background action follows "from that same first frame".
- **Restate continuous motion in every [ACTION] segment** and end with "still [moving] in the very last frame". Transition-heavy segments (sky changes, reveals) steal the motion budget unless the subject's moves are restated specifically.
- **Real time vs time-lapse.** When the background is time-lapsed, add: "[Name] moves in normal real time, completely separate from the time-lapse behind her: only the sky and the city are sped up, and her movement stays smooth, steady and controlled, never frantic. Her hair also moves in normal real time, swaying gently only with her own movements, untouched by the time-lapse or any wind." Negatives: "no sped-up or time-lapsed motion on [Name], no jerky, erratic, twitching or flailing movement, no whipping or flicking hair, no wind-blown hair".
- **Rate words bleed.** Slow words written for the camera slow the subject; racing words written for the sky speed it up. Keep rate words attached to their own subject, in separate sentences or segments. "Cinematic" plus lights, smoke or crowds is a strong slow-motion cue — use "real-time footage at natural speed, no slow motion" for energetic scenes.
- **One repeating motion beats many moves.** A smooth, steady pattern (a walk, a rhythmic step, a repeated gesture) reads better than many simultaneous actions, which read as flailing.
- **Give features you want kept a motion**: "her ponytail swaying behind her" keeps the ponytail; unmentioned features drift.
- Holds: when a subject must stop (a pose, a point), say so for that segment only, and write "no stopping before…" in negatives so earlier segments keep moving.

### Actions, geometry and cause-and-effect

- **Describe actions against the frame's real geometry.** Look at where things are in the start image: is the wall beside her, or behind her running parallel to the camera? "Backflips backwards over the wall" failed when the wall was behind her in depth, because "backwards" relative to her facing pointed at empty space. Write the direction as it exists in the frame: "a backflip that carries her away from the camera, up and over the low wall directly behind her; she lands on the far side, so the wall is now between her and the camera; the spot where she stood is left empty."
- **One direction of action per beat.** Opposed motions in one beat (running one way while shooting behind) get simplified or dropped. Give each beat one mover or one shooter.
- **Cause-and-effect needs an explicit beat order in separate timed segments.** A reaction written in the same sentence as its trigger happens late or not at all (the subject "just stands there until the firing is almost over"). Write the anticipation, the reaction and the consequence as separate segments: "[ACTION 0-3s] the weapon powers up, not firing yet… [ACTION 3-5s] while it is still powering up, before a single shot is fired, she dives for cover… [ACTION 5-10s] only now, with her already behind cover, it opens fire…". Add negatives such as "no firing before she has dived".
- **If a complex beat still fails after two rounds, split it** into separate short clips (a three-second clip is enough for one athletic move), or change the point of view (e.g. a shot from the attacker's viewpoint for the attack itself).
- **Near-misses:** "misses her by a narrow margin, hitting the wall and paving beside her" is safer than a dodge that must be perfectly timed. Add "no bolts hitting her".
- **Hidden characters:** if a character is behind cover, keep them out of the shot entirely rather than trying to show them through the cover.

### Two-character fights and standoffs

- **Fix the screen layout for the whole sequence**: "A is always on the left side of the frame and B is always on the right; neither ever crosses to the other side." Repeat it in every clip and in the negatives.
- **Colour-code shots per shooter** (one colour for each side) and give directions ("from left to right"). This keeps "who is firing at whom" readable.
- **Cuts keep the layout.** A close-up after a cut keeps the subject facing the other character's side.
- **Avoid over-the-shoulder push-ins in key beats.** They let the model rearrange the pair (one ends up behind the other, or the shooter fires at nothing). A side-on wide that holds both characters head to foot is the most reliable.
- **Distance rules need a hard number in two places**: "at least three of its own body-lengths away" in the identity block and the negatives. Don't let the start image contradict it.

## 6. Light and look

- **Custom Creative mode styles need a style anchor at the very start of the video prompt**, before [REFERENCE USE], or clips drift toward realism: "Two-dimensional hand-drawn anime cel animation in the style of a late-1990s [genre] anime feature film: flat cel colours, bold clean black ink outlines, two-tone cel shading with hard shadow edges, richly hand-painted backgrounds, drawn and painted, not rendered." Add "strictly two-dimensional hand-drawn … cel art" to each [LIGHT AND IMAGE], and "no 3D rendering, no photorealism, no realistic skin or fabric textures, no live-action look, no realistic lighting" to the negatives. Also add "including its drawing style" to the opening-frame sentence in [REFERENCE USE].
- A detailed, specific image prompt (every garment, prop and background element named) produces better style fidelity than a short one. When one start image nails the style, reuse its wording.
- End every [LIGHT AND IMAGE] with the same style line (e.g. "Crisp cinematic photorealistic look, vivid saturated colour, natural skin and fabric detail, sharp focus, stable colour and exposure throughout.") or the Create Mode style line from `references/create-modes.md`.
- **Lasers, neon, smoke and night scenes drift dark.** Rule: effects add light, never replace it. Keep a key light on the subject ("a soft key light keeps her face and outfit clearly lit"), make smoke "pale, luminous", give the subject a physical light source (a spotlight from above) and restate brightness in the final segment. Never chain from a darkened frame.
- For sky/time transitions, allow the sky to change but state "the subject's lighting stays stable".
- Sun paths and cloud directions must be stated explicitly and consistently if they matter (e.g. the sun rises on the left, sets on the right; clouds travel directly away from the camera).

## 6a. Sound ([PRODUCTION SOUND])

VE 3.5 generates audio with the clip. The prompt wording controls it only partly.
- **Transient sounds only.** Name short, distinct, unpitched sounds (clicks, footsteps, slaps, thuds, single shots, impacts, crashes) and say "with complete silence before, between and after them". Sustained sounds (whir, hum, drone, rumble, wind, rain, a rising tone) render as a noise floor across the whole clip.
- **No ambient beds.** Add "no city hum, no traffic, no ambient city sound, no background noise, no hiss, no static, no rain, no wind noise, no hum, no drone" even for outdoor or city scenes. Visible rain or wet streets don't need rain sound.
- **Avoid pitched sounds.** Beeps, chimes, rising or descending tones read as notes and can grow into music.
- **Fill the clip.** Long stretches with no specified sound invite the model to fill them, usually with music. Spread concrete sounds across the whole duration.
- **Heavy weapons:** describe weight, low end, rhythm and space, not the calibre: "fast, fully automatic bursts from a heavy battle rifle, each shot a deep, booming, full-bodied report with a powerful low-end punch, echoing off the tall buildings". Never "sharp", "crisp", "pop" or "crack" for gunshots; they produce thin, small-calibre sounds. Give each weapon its own palette (fast bursts vs slow single booms, each preceded by a distinct mechanical sound).
- **Music can appear regardless of negatives.** In testing, one climax clip (charge-up, a single decisive shot, an emotional close-up, and a flash to white) had music in every take. That held with the music words removed, with the ending changed, and from a fresh start image, while ten other clips in the same sequence were clean. Naming music words in the sound block ("no music, no score, no soundtrack") didn't help and may prime it. The cause wasn't isolated. If music persists, run a control take of a previously clean prompt to check whether VE itself has changed, and treat Video Only (No Sound) as the fallback only when the user can add sound in the edit.
- A generated voice can be written into [PRODUCTION SOUND] for a character with no mouth ("a deep, distorted mechanical voice booming from behind its visor: '…'"). Keep it to one short line.

## 6b. Dialogue and lipsync

- **Lipsync goes through the Lipsync HD dialog, never the main prompt.** Speech written into the Video and Audio Prompt comes out as narration with closed mouths. See `references/browser-workflow.md` for the dialog.
- **Describe every speaker in the dialog's own Video Prompt**: "Actor 1 is [description], [position], [action while speaking], in a [voice description]. Actor 2 is [description], [action], answers in a [voice]." Include each actor's actions while they speak (turning to face the other, raising a weapon).
- **Each actor's script is short** (under 100 characters) and entered in its own field (Actor 1 Script; Add Actor 2 → Actor 2 Script). A two-actor exchange in one generation works, including a helmeted or mouthless character as one of the actors.
- **Speaking shots** are medium close-ups or medium shots with the speaker's face visible. In a multi-shot generation, put the line in a shot framed for it.
- **Reaction first, then the line.** The speaker should turn to face, or aim at, whoever they address; say so explicitly ("she turns to face the figure behind her… then answers"). Otherwise VE keeps the previous action (walking toward the camera) under the line.
- Keep the same voice description for a character in every clip.

## 6c. Point-of-view, HUD and special-vision shots

- **Point-of-view shots show only what the viewer would see.** From inside a helmet, only the tip of a weapon pokes into the frame; describe exactly which part is visible and where ("in the bottom right corner, only the very tip of the weapon pokes up into the frame, pointing straight ahead"), and that nothing else of the arm is visible.
- **Put foreground objects in a named image region** ("well to the right of centre; the centre and left of the view are clear"). Otherwise VE centres them.
- **Tint and framing:** "the entire picture is evenly tinted deep translucent red from edge to edge, framed by the dark curved edges of the helmet interior" worked. A partial tint needs "from edge to edge".
- **HUD overlays and numerals can work in stills** when asked for explicitly and simply ("a thin vertical bar graph on the right edge; a few small plain white numerals near the top and bottom edges; flat, thin, white, never covering the centre"). Warn that digits can flicker or morph in motion.
- **See-through-wall effects (thermal/FLIR silhouettes) are unreliable.** The silhouette lands in front of the cover or on the open ground. Prefer keeping the hidden character out of the shot.
- **Turn Consistent Character off** for point-of-view and empty-environment shots.

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
| Motion too fast, erratic, or hair whipping | Time-lapse or rate-word bleed | Real-time separation sentence plus negatives. |
| Subject frozen at the start or slowing mid-clip | Background mentioned first; still start pose; slow words | Subject first, "no pause and no delay", mid-move start image, restate in every segment. |
| Scene darkens | Laser/smoke default look | Effects add light, key light, spotlight, luminous smoke, restated brightness. |
| Crowd at wrong scale or fake-looking | Scale-mixing wording | True human scale wording, no raised platforms, natural perspective. |
| Similes rendered literally | The model renders nouns | Audit every noun; replace figurative nouns with literal descriptions. |
| Too-close ending ruins the next chain | Close framing | Pull back to full body by the last frame, or start the next clip fresh from a new start image. |
| Stylised clip turns realistic | Face references pull toward realism; weak style wording | Style anchor at the start of the prompt, cel-art style line in every segment, anti-realism negatives. |
| Unwanted facial markings appear | A feature in the block that references now render | Remove the feature entirely; "plain, unmarked skin with no lines, markings or glowing lights". |
| Prop moves or duplicates mid-clip | Text says one carry position, frame shows another | Describe the prop exactly as the frame shows it. |
| Pose or prop copied from a reference | In-scene image in Reference Photo 2 | Slot 2 only for a second character's reference sheet. |
| Weapon-arm turns into a hand or fist | Named part without structure; gesture on that arm | Joint-by-joint structure, "no hand, no grip, no handle", gestures on the other limb. |
| Action happens in place or in the wrong direction | Direction written relative to facing, not frame geometry | Describe where the obstacle is in the frame and where the subject ends up; "the spot where she stood is left empty". |
| Reaction arrives late (subject stands still under fire) | Trigger and reaction in one beat | Separate timed segments: anticipation, reaction, consequence; negatives on premature events. |
| Shooter fires at nothing; characters swap sides | Over-the-shoulder push-in; no fixed layout | Fixed left/right layout, side-on wide, no over-the-shoulder view. |
| Background hiss or hum across the clip | Sustained sounds (whir, hum, drone) | Transient sounds only, with silence between; no ambient beds. |
| Gunfire sounds thin | "Sharp", "crisp", "crack" | Deep, booming, full-bodied, low-end punch, echo. |
| Speech with closed mouths | Dialogue in the main prompt | Lipsync dialog, actors described in the dialog's Video Prompt. |
| Speaker keeps walking or looks away while talking | No reaction beat | "She turns to face [the other character], then answers." |
| Hidden character appears in front of cover | See-through effects | Keep hidden characters out of the shot. |

**Per-take QC checklist** (include in every pack): character hair, face and signature accessory; outfit matches the scene block, per side; environment matches the location block, including newly revealed areas; brightness holds to the last frame; no digits, letters or symbols; camera direction as prompted; motion reads as real time; crowd scale and faces varied; cut frame is clean for the next chain.

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
- Read the frame the user sends: note what actually rendered (outfit, props, framing, lighting) and write the next prompt to match what exists rather than what was planned.
- When the user edits the pack directly, re-read before writing and never overwrite their changes without saying so.
- When the user states a preference ("keep it", "I prefer this look"), treat it as a new rule and apply it everywhere.
- Protect payoff shots: guard their preconditions in every earlier prompt.
- **Look at the frame before writing the prompt.** Check each chained opening frame and each accepted start image for framing, prop position and the geometry of obstacles, and write the prompt to match it.
- **When the user asks to see a prompt before a run, show the full paste-ready prompt,** then ask to run it. Don't run first.
- **Isolate stubborn failures.** When a problem survives two prompt rounds, stop rewording. Hold a base prompt fixed and run one take per variant, each changing one variable (the ending, a word, the opening frame, a combination), with a unique caption label per variant ("clip N TEST 1, ending"). Add a control take of a previously clean prompt, then record which variables mattered.
- **Know when to stop.** If a sequence has drifted far from the concept, say so and offer to restart the sequence or the project rather than patching clip by clip.

## 10. Operating VideoExpress in the browser

When the user wants Claude to drive app.videoexpress.ai itself rather than just write the pack, read `references/browser-workflow.md` first and follow it step by step. The user approves every start image, take and prompt change; Claude pastes prompts exactly as written, never skips a checkpoint, and leaves drift judgements to the user unless a problem is obvious. Prompt hardening from a generated frame (section 2's "rewrite the block to match that frame") is offered after the first clip is on the timeline, and again after the second if deferred.

Claude only acts while replying and each reply has an action budget, so never wait inside a reply for renders. Submit the takes, confirm they exist, report their positions, and ask the user whether they've finished (see the browser workflow). Never announce an action ("generating now") without performing it in the same reply.
