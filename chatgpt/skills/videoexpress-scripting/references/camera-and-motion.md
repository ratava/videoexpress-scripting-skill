# Timing, chaining, camera and motion

Read when planning the clip grid, chaining clips, writing camera moves, or writing any [ACTION] segment.

## Timing

- VideoExpress clip length is set per generation (3–10 s, default 5). Plan most clips at the length the user actually uses (often 10 s) and let the grid fall on those boundaries — don't force bar-accurate clip lengths the tool can't honour.
- Use short clips (3–5 s) for accents, transitions and inserts; the last clip can be sized to end on the piece's final beat, line or hit.
- If the video is cut to audio (music, narration, dialogue), verify key anchors (big hits, section changes, key lines, the ending) with the user against the real audio before generating the clips around them.
- **Generate full clips, trim tails in the edit.** Heads carry the prompted action; tails wander.
- Mild retimes (0.9–1.2x) fix small tempo mismatches: `ffmpeg -i in.mp4 -filter:v "setpts=<factor>*PTS" -an -c:v libx264 -crf 16 out.mp4` (factor < 1 speeds up). Always work on copies of original outputs.
- Transitions the prompt can't do cleanly (white dips, fades) belong in the edit. A clip can end on pure white or a held pose for the edit to cut from.

## Chaining and the camera

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
- Each shot is its own [ACTION] → [CAMERA] → [LIGHT AND IMAGE] → [PRODUCTION SOUND] group, and each [CAMERA] after the first starts "Hard cut to…". Label the segments "Shot one.", "Shot two."
- Negatives say "no cuts other than the hard cut described" instead of "no cuts".
- **The last shot sets up the next clip.** A chained clip inherits the final shot's framing.
- Keep continuous single shots for moves that must flow (a dive, a long camera move, a chain handoff).

## Motion rules

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
