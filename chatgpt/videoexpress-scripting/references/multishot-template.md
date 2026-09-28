# VE 3.5 multishot prompt: structure and template

VideoExpress 3.5 image-to-video prompts are written as one paragraph of tagged sections. The official Create Mode examples all follow this order:

`[REFERENCE USE]` → `[IDENTITY / CONTINUITY]` → `[SCENE]` → `[ACTION t-ts]` → `[CAMERA]` → `[LIGHT AND IMAGE]` → `[PRODUCTION SOUND]` → `[NEGATIVES]`

For longer clips, repeat the `[ACTION]` → `[CAMERA]` → `[LIGHT AND IMAGE]` trio once per segment (e.g. `[ACTION 0-4s]` … `[ACTION 4-10s]`), each with its own camera and lighting. `[NEGATIVES]` comes once at the end.

**Optional first line: caption label.** Library tiles show the first words of the prompt. Start the pasted prompt with a short unique label ("Harbour Run clip four, the landing.") so every take is identifiable. Lipsync takes show VE's own caption instead.

**Custom Creative mode styles: style anchor before [REFERENCE USE].** For a style that isn't one of the ten presets, open the prompt with one sentence naming the medium and its look, ending "drawn and painted, not rendered" (or the equivalent for the medium). Without it, clips (especially with face references attached) drift toward realism. See `create-modes.md`.

## What each section does

**[REFERENCE USE]** — tell the model what each supplied image is for.
- Fresh clip: "Use the supplied image as the exact opening frame and visual reference for a ten-second continuous shot, including its drawing style."
- Chained clip: "Use the supplied image, the last frame of the previous shot, as the exact opening frame for a ten-second continuous shot."
- With Consistent Character: "use the supplied reference image of [Name] for her face, hair, outfit and props, and use the supplied second reference image of [Other] for his face, hair and outfit".
- Add roles for other images: "use the supplied reference images of [Name] for her face and hair, the supplied outfit reference image for her outfit, and the supplied wide image of the location as the reference for the environment, which matches it exactly whenever it is in view."
- The official 3D example frames it as control: the opening frame "controls the composition, the world, the lighting and the exact framing of this shot".

**[IDENTITY / CONTINUITY]** — who is in the shot and what must not change.
- Paste the character core block and the scene's outfit block verbatim.
- State ownership and exclusivity: "[Name] owns this frame. Characters present: …", "[Name] is the only person wearing [signature accessory]", "Exactly one continuous shot, no cuts."
- List the props and set pieces to hold in position (official examples list them explicitly: "keep the cabinets, awning, marquee… in their original positions").
- For objects/props in a hand: state contact ("keep the cloth in contact with his fingers").

**[SCENE]** — the environment, in full. Paste the location block, including areas out of frame at the start, plus time of day and any sky/weather direction rules. Optional: a line naming the dramatic beat of the shot ("The dramatic beat of this shot: …"). The official 3D example uses this, but in climax scenes emotional framing like this can invite a music score in the generated audio; leave it out when the clip has production sound.

**[ACTION t-ts]** — what happens, in real time, sequenced with words ("In the very first frames… Then… In the final moments…"). Keep it to what the clip length can hold: the official examples use **one small, deliberate action per three seconds** (a head turn, one wipe of a cloth, one rowing pull). For a ten-second clip, two or three segments each with one clear beat work best. State what stays still ("his feet and hanging arm remain planted").

**[CAMERA]** — one explicit move per segment, stated absolutely: "One move only: slow steady push in." "One very slow straight push toward the boy." Add "Subject motion and camera motion are separate; hold the rest of the frame steady." Include the end framing ("ends on a medium-wide shot of her full body") and "never reversing".

**[LIGHT AND IMAGE]** — lighting direction and colour, then the style line. Official examples add style-stability phrases: "painted details remain stable rather than boiling or crawling", "maintain coherent square pixel clusters with no smoothing or texture crawling", "materials stay tactile and stable".

**[PRODUCTION SOUND]** — the scene's generated audio. List short, distinct, unpitched sounds in order and fill the clip's duration: "One heavy boot thud on stone, then one short metallic click as she picks up the case, with complete silence before, between and after them." End with an exclusion tail: "Close-miked sound effects only. No ambient hum, no traffic, no ambient sound, no background noise, no hiss, no static, no rain, no wind noise, no hum, no drone, no speech, no voices."
- Sustained ambience (lapping water, wind, hum, whir) renders as a continuous noise floor, so avoid it unless the user wants it.
- Pitched sounds (beeps, rising tones) can turn into music.
- Naming music words ("no music, no score") didn't stop music appearing in testing; see SKILL.md section 6a.
- Dialogue never goes here unless it's a mouthless character's voice. Lip-synced speech uses the Lipsync dialog.

**[NEGATIVES]** — a single list starting "No cuts…" (or "Avoid: …"). Include: cuts, new characters, extra limbs, face or costume drift, style conversion (e.g. "no photorealistic conversion", "no transformation into clay or live action"), unwanted motion (walking, gestures, moving props), text, logos, watermark, plus project-specific guards (camera reversing, cloned crowd, darkening).

## Hard-cut multi-shot variant

One generation can hold two or three shots joined by hard cuts. Declare it in [IDENTITY / CONTINUITY] ("This ten-second generation is a sequence of two shots joined by one hard cut, exactly as described below."), label each segment "Shot one." / "Shot two.", start each later [CAMERA] with "Hard cut to…", and write "no cuts other than the hard cut described" in [NEGATIVES]. The last shot's framing is what a chained clip inherits.

```
[REFERENCE USE] … opening frame for this ten-second generation … [IDENTITY / CONTINUITY] <blocks>. This ten-second generation is a sequence of two shots joined by one hard cut, exactly as described below. [SCENE] <location>. [ACTION 0-4s] Shot one. From the very first frame, <action>. [CAMERA] One move only: <move>. [LIGHT AND IMAGE] <light>. <style line>. [ACTION 4-10s] Shot two. <action>, still <state> in the very last frame. [CAMERA] Hard cut to <framing>; the camera holds still. [LIGHT AND IMAGE] <light>. <style line>. [PRODUCTION SOUND] <transient sounds>. [NEGATIVES] No cuts other than the hard cut described, <guards>.
```

## Digits

Digits belong only in the `[ACTION]` time labels. Write everything else in words ("a ten-second shot", "twelve-year-old"). Watch for signs, screens and holograms — describe them as abstract light with no letters or numbers.

## Blank template

```
[REFERENCE USE] Use the supplied image as the exact opening frame and visual reference for a <length>-second continuous shot, and use the supplied reference images of <Name> for her face and hair, and the supplied outfit reference image for her outfit. [IDENTITY / CONTINUITY] <character core block> <outfit block> <exclusivity lines>. Preserve her exactly as the opening frame and reference images throughout. [SCENE] <location block>. <time of day>. <Name> <position in frame>. [ACTION 0-5s] From the very first frame, <subject action in real time>. <background action>. [CAMERA] <one explicit move with direction and end framing>. [LIGHT AND IMAGE] <lighting>. <style line>. [ACTION 5-10s] <subject keeps moving: specific moves>, still <moving> in the very last frame. [CAMERA] <move continues or settles; end framing>. [LIGHT AND IMAGE] <lighting>. <style line>. [PRODUCTION SOUND] <short unpitched sounds in order, with silence between>. <exclusion tail>. [NEGATIVES] No cuts, <project guards>, no text, no letters, no numbers, no logos, no watermark.
```

## Worked generic example (cinematic photoreal, chained, 10 s)

```
[REFERENCE USE] Use the supplied image, the last frame of the previous shot, as the exact opening frame for a ten-second continuous shot, and use the supplied reference images of Mara for her face and hair, and the supplied outfit reference image for her outfit. [IDENTITY / CONTINUITY] Mara, a woman in her late twenties with a lean, athletic build, olive skin, dark brown eyes and a calm, focused expression. Her black hair is always cut in a sharp chin-length bob. Mara wears a fitted charcoal hoodie with the hood down, black tapered joggers, and white high-top sneakers. Mara is the only person in the scene. Preserve her exactly as the opening frame and reference images throughout. [SCENE] A long wooden boardwalk beside a calm sea at sunset, lined on the left by a low white rope rail and on the right by a row of closed beach huts painted in faded pastel colours. Soft clouds always travel directly away from the camera toward the horizon, never sideways. Mara skates along the centre of the boardwalk, seen full body. [ACTION 0-5s] From the very first frame, Mara is already skating steadily toward the camera in real time, one foot pushing in a smooth, even rhythm, her arms loose at her sides, her bob swaying gently with her movement. [CAMERA] Tracks backward along the boardwalk at her speed, low and level, keeping her full body centred, never reversing. [LIGHT AND IMAGE] Warm golden sunset light from the left, soft reflections on the wood. Crisp cinematic photorealistic look, vivid saturated colour, natural skin and fabric detail, sharp focus, stable colour and exposure throughout. [ACTION 5-10s] Mara stops pushing and rolls smoothly, turning her head toward the sea, still rolling forward in the very last frame. [CAMERA] Keeps tracking backward at the same speed, then eases to a gentle stop on a medium-wide shot of her full body. [LIGHT AND IMAGE] The same warm light, her face clearly lit. Crisp cinematic photorealistic look, vivid saturated colour, natural skin and fabric detail, sharp focus, stable colour and exposure throughout. [PRODUCTION SOUND] The short rhythmic clack of skateboard wheels over the boardwalk seams, then one soft scuff as she pushes, with silence between the sounds. Close-miked sound effects only. No ambient sound, no background noise, no hiss, no wind noise, no hum, no speech, no voices. [NEGATIVES] No cuts, no camera reversing, no other people, no change to Mara's face, hair or outfit, no slow motion, no jerky movement, no ending closer than her full body, no text, no letters, no numbers, no logos, no watermark.
```
