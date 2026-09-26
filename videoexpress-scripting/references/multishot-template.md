# VE 3.5 multishot prompt: structure and template

VideoExpress 3.5 image-to-video prompts are written as one paragraph of tagged sections. The official Create Mode examples all follow this order:

`[REFERENCE USE]` → `[IDENTITY / CONTINUITY]` → `[SCENE]` → `[ACTION t-ts]` → `[CAMERA]` → `[LIGHT AND IMAGE]` → `[PRODUCTION SOUND]` → `[NEGATIVES]`

For longer clips, repeat the `[ACTION]` → `[CAMERA]` → `[LIGHT AND IMAGE]` trio once per segment (e.g. `[ACTION 0-4s]` … `[ACTION 4-10s]`), each with its own camera and lighting. `[NEGATIVES]` comes once at the end.

## What each section does

**[REFERENCE USE]** — tell the model what each supplied image is for.
- Fresh clip: "Use the supplied image as the exact opening frame and visual reference for a ten-second continuous shot."
- Chained clip: "Use the supplied image, the last frame of the previous shot, as the exact opening frame for a ten-second continuous shot."
- Add roles for other images: "use the supplied reference images of [Name] for her face and hair, the supplied outfit reference image for her outfit, and the supplied wide image of the location as the reference for the environment, which matches it exactly whenever it is in view."
- The official 3D example frames it as control: the opening frame "controls the composition, the world, the lighting and the exact framing of this shot".

**[IDENTITY / CONTINUITY]** — who is in the shot and what must not change.
- Paste the character core block and the scene's outfit block verbatim.
- State ownership and exclusivity: "[Name] owns this frame. Characters present: …", "[Name] is the only person wearing [signature accessory]", "Exactly one continuous shot, no cuts."
- List the props and set pieces to hold in position (official examples list them explicitly: "keep the cabinets, awning, marquee… in their original positions").
- For objects/props in a hand: state contact ("keep the cloth in contact with his fingers").

**[SCENE]** — the environment, in full. Paste the location block, including areas out of frame at the start, plus time of day and any sky/weather direction rules. Optional: a line naming the dramatic beat of the shot ("The dramatic beat of this shot: …") — the official 3D example uses this.

**[ACTION t-ts]** — what happens, in real time, sequenced with words ("In the very first frames… Then… In the final moments…"). Keep it to what the clip length can hold: the official examples use **one small, deliberate action per three seconds** (a head turn, one wipe of a cloth, one rowing pull). For a ten-second clip, two or three segments each with one clear beat work best. State what stays still ("his feet and hanging arm remain planted").

**[CAMERA]** — one explicit move per segment, stated absolutely: "One move only: slow steady push in." "One very slow straight push toward the boy." Add "Subject motion and camera motion are separate; hold the rest of the frame steady." Include the end framing ("ends on a medium-wide shot of her full body") and "never reversing".

**[LIGHT AND IMAGE]** — lighting direction and colour, then the style line. Official examples add style-stability phrases: "painted details remain stable rather than boiling or crawling", "maintain coherent square pixel clusters with no smoothing or texture crawling", "materials stay tactile and stable".

**[PRODUCTION SOUND]** — the scene's generated audio. Official examples describe quiet, specific ambience and exclude the rest: "Quiet water lapping against wood and one faint wooden oar creak; no speech or music." For music videos or narration laid in the edit: "natural scene ambience only, no music, no narration, no added speech."

**[NEGATIVES]** — a single list starting "No cuts…" (or "Avoid: …"). Include: cuts, new characters, extra limbs, face or costume drift, style conversion (e.g. "no photorealistic conversion", "no transformation into clay or live action"), unwanted motion (walking, gestures, moving props), text, logos, watermark, plus project-specific guards (camera reversing, cloned crowd, darkening).

## Digits

Digits belong only in the `[ACTION]` time labels. Write everything else in words ("a ten-second shot", "twelve-year-old"). Watch for signs, screens and holograms — describe them as abstract light with no letters or numbers.

## Blank template

```
[REFERENCE USE] Use the supplied image as the exact opening frame and visual reference for a <length>-second continuous shot, and use the supplied reference images of <Name> for her face and hair, and the supplied outfit reference image for her outfit. [IDENTITY / CONTINUITY] <character core block> <outfit block> <exclusivity lines>. Preserve her exactly as the opening frame and reference images throughout. [SCENE] <location block>. <time of day>. <Name> <position in frame>. [ACTION 0-5s] From the very first frame, <subject action in real time>. <background action>. [CAMERA] <one explicit move with direction and end framing>. [LIGHT AND IMAGE] <lighting>. <style line>. [ACTION 5-10s] <subject keeps moving: specific moves>, still <moving> in the very last frame. [CAMERA] <move continues or settles; end framing>. [LIGHT AND IMAGE] <lighting>. <style line>. [PRODUCTION SOUND] <ambience or none>. [NEGATIVES] No cuts, <project guards>, no text, no letters, no numbers, no logos, no watermark.
```

## Worked generic example (cinematic photoreal, chained, 10 s)

```
[REFERENCE USE] Use the supplied image, the last frame of the previous shot, as the exact opening frame for a ten-second continuous shot, and use the supplied reference images of Mara for her face and hair, and the supplied outfit reference image for her outfit. [IDENTITY / CONTINUITY] Mara, a woman in her late twenties with a lean, athletic build, olive skin, dark brown eyes and a calm, focused expression. Her black hair is always cut in a sharp chin-length bob. Mara wears a fitted charcoal hoodie with the hood down, black tapered joggers, and white high-top sneakers. Mara is the only person in the scene. Preserve her exactly as the opening frame and reference images throughout. [SCENE] A long wooden boardwalk beside a calm sea at sunset, lined on the left by a low white rope rail and on the right by a row of closed beach huts painted in faded pastel colours. Soft clouds always travel directly away from the camera toward the horizon, never sideways. Mara skates along the centre of the boardwalk, seen full body. [ACTION 0-5s] From the very first frame, Mara is already skating steadily toward the camera in real time, one foot pushing in a smooth, even rhythm, her arms loose at her sides, her bob swaying gently with her movement. [CAMERA] Tracks backward along the boardwalk at her speed, low and level, keeping her full body centred, never reversing. [LIGHT AND IMAGE] Warm golden sunset light from the left, soft reflections on the wood. Crisp cinematic photorealistic look, vivid saturated colour, natural skin and fabric detail, sharp focus, stable colour and exposure throughout. [ACTION 5-10s] Mara stops pushing and rolls smoothly, turning her head toward the sea, still rolling forward in the very last frame. [CAMERA] Keeps tracking backward at the same speed, then eases to a gentle stop on a medium-wide shot of her full body. [LIGHT AND IMAGE] The same warm light, her face clearly lit. Crisp cinematic photorealistic look, vivid saturated colour, natural skin and fabric detail, sharp focus, stable colour and exposure throughout. [PRODUCTION SOUND] Soft skateboard wheels on wood and gentle waves; no speech or music. [NEGATIVES] No cuts, no camera reversing, no other people, no change to Mara's face, hair or outfit, no slow motion, no jerky movement, no ending closer than her full body, no text, no letters, no numbers, no logos, no watermark.
```
