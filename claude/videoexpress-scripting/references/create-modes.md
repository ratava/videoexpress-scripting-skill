# VE 3.5 Create Mode styles

VideoExpress 3.5 Create Mode offers ten animation styles, each with an image prompt (the start frame) and an image-to-video prompt. This file distils the patterns from the official examples, plus cinematic photoreal, which uses the same structure.

## Contents
1. The image-prompt recipe (all styles)
2. The video-prompt pattern (all styles)
3. Style sheets: 3D Animation · Claymation · 8-Bit Pixel · Stop-Motion · Comic Book · Watercolor · Wool · Paper Cut · Ghibli-style · Low-Poly · Cinematic Photoreal
4. Tested custom styles: Pencil Sketch Stop-Motion · Pencil-over-Watercolour Picture Book

## 1. Image-prompt recipe

The official image prompts are long, precise and ordered. Follow this order:

1. **Medium and format first**: the style's medium phrase + "still, widescreen 16:9" (e.g. "Cinematic high-end 3D animated feature film still, widescreen 16:9").
2. **Subject, placement and framing**: who, where in the frame ("slightly left of center", "in the right third"), how much of them ("waist-up", "full length", "from the top of her hood to just below her knees"), pose and gaze, expression.
3. **Face details**: shape, eyes, brows, nose, cheeks, distinguishing marks.
4. **Hair, accessories, wardrobe**: each item with colour, material, wear and fastenings.
5. **Environment by image region**: foreground, left, right, background, sky ("Below her on the left… Behind her on the upper right…").
6. **Lighting**: key direction and colour, fill, rim ("soft warm light from the front left, balanced by cool twilight and subtle rim light").
7. **Material and render vocabulary** for the style, depth of field, what is sharp and what is soft.
8. **Mood** in a few words.
9. **Closing guards**: "No text or watermark", plus readability ("keep the mole, cloth, flowers and rosettes clearly readable"), and style exclusions ("no smooth photographic surfaces").

**Left and right**: when a body side and an image side differ, say both — "a thick braid hanging over her right shoulder on the left side of the image". This avoids mirrored accessories.

**Text-like objects** (signs, marquees, screens): describe them as shapes and light "with no legible lettering".

## 2. Video-prompt pattern

Every official video prompt uses the multishot tags (see `multishot-template.md`) and the same restraint:

- **Short, single-beat clips.** The examples are three-second shots with **one small action** (a head tilt, a chin lowering, one wipe, one rowing pull, one running stride) that then settles or holds.
- **One camera move**, usually a slow push: "One move only: slow steady push in." Subject motion and camera motion are kept separate.
- **Explicit holds**: what stays planted or still is named ("his feet and hands remain in place", "everything else stays structurally stable").
- **Style-specific stability** in [LIGHT AND IMAGE]: materials stay tactile, painted details don't boil, pixels don't crawl, cadence matches the medium.
- **Quiet, specific [PRODUCTION SOUND]**: one or two sounds, "no speech or music". In production, prefer short transient sounds with silence between them over sustained ambience, which renders as background noise (see SKILL.md section 6a).
- **Negatives guard the style** as well as anatomy: no conversion to another medium.

For longer clips in any style, keep the same restraint per segment: one clear beat and one camera move per [ACTION] segment.

### Custom styles (not one of the ten presets)

Creative mode also renders styles described entirely in the prompt, such as cel-shaded anime or ink-and-wash. What made them hold:
- **Image prompt:** open with the medium ("Cinematic hand-drawn [genre] anime film still, widescreen 16:9."), then describe every garment, prop and background element in detail, and close with the look ("Clean ink outlines, two-tone cel shading with hard shadow edges, [palette], richly painted detailed background, mature realistic character proportions."). A long, specific prompt held the style far better than a short one.
- **Video prompt:** open with a style anchor sentence before [REFERENCE USE] ("Two-dimensional hand-drawn anime cel animation in the style of a late-1990s … anime feature film: flat cel colours, bold clean black ink outlines, two-tone cel shading with hard shadow edges, richly hand-painted backgrounds, drawn and painted, not rendered."). Say "including its drawing style" in the opening-frame sentence, and end each [LIGHT AND IMAGE] with "Strictly two-dimensional hand-drawn … cel art, clean ink outlines, … stable line art and colour throughout."
- **Negatives:** "no 3D rendering, no photorealism, no realistic skin or fabric textures, no live-action look, no realistic lighting".
- **Consistent Character pulls toward realism.** A clip generated with a face reference in slot 1 came out far more realistic until the style anchor was added. Keep the anchor in every clip once references are in use.
- **Reusing a good image's exact prompt** (with only the needed changes) beat rewriting the look from scratch.
- **Mixed media are a distinct risk.** When a style uses two media (a drawn character over a painted background), the model tends to unify them: the character picks up washes or the background turns into hatching. Name the medium per layer in every prompt, state the contrast as a rule ("strictly two media: … only, … only"), and negate each cross-over explicitly. Section 4 has worked examples.

Section 4 collects custom styles that have been tried in production, with their medium phrases, anchors and guards, so they can be reused like the presets.

## 3. Style sheets

### 3D Animation (stylised feature-film CG)
- **Medium phrase**: "Cinematic high-end 3D animated feature film still, widescreen 16:9."
- **Character design**: rounded youthful faces, large expressive eyes, soft natural skin shading, carefully groomed hair.
- **Materials**: detailed knitted fibres, weathered leather, polished stylised rendering.
- **Light**: warm key on the face, cool ambient fill, subtle rim light, atmospheric haze, shallow depth of field.
- **Motion**: smooth, natural animation; a slow push-in suits emotional beats. The official example adds a "dramatic beat of this shot" line and "photographic depth, no plastic flatness".
- **Guards**: distorted faces, warped mouths, extra limbs, morphing, flicker, slow motion, frozen frames.

### Claymation
- **Medium phrase**: "A beautifully crafted claymation stop-motion film still, widescreen 16:9."
- **Character design**: stout sculpted forms, softly stippled clay skin, simple bead eyes, oversized readable props.
- **Materials**: tactile clay with fingerprints, handmade fabric, imperfect miniature props, subdued earthy colours.
- **Light**: warm diffused light, gentle shadows, shallow cinematic depth of field.
- **Motion**: one short gentle gesture with restrained stop-motion cadence; feet stay planted; held props stay in contact.
- **Guards**: additional gestures, new props, sliding feet, extra claws or fingers, glossy plastic surfaces, facial distortion.

### 8-Bit Pixel
- **Medium phrase**: "Detailed retro pixel-art cinematic scene, wide landscape composition", evoking a classic adventure game.
- **Rendering**: clearly visible square pixels, crisp stepped silhouettes, clustered pixel shading, selective dithering, strong cool-shadow and warm-light contrast.
- **Motion**: minimal (a head tilt), everything else structurally stable; one very slow straight push.
- **Stability line**: "maintain coherent square pixel clusters and stepped edges during movement, with no smoothing or texture crawling."
- **Guards**: morphing pixels, flicker, photorealism, smooth gradients, readable text, walking, moving vehicles, camera shake.

### Stop-Motion (miniature puppet)
- **Medium phrase**: "Cinematic photograph of a handcrafted stop-motion miniature…", authentic puppet-scale photography.
- **Materials**: carved wood grain, visible joints and strings, worn velvet, miniature stitching, tiny chips and handmade imperfections.
- **Light**: a single practical spotlight, a pool of light, long soft shadows, dark surroundings, dust in the air.
- **Motion**: one slight hesitant movement then a pause; gentle stop-motion cadence; strings respond subtly; keep the full body in frame.
- **Guards**: walking, dancing, new gestures, disappearing strings, moving backdrop, glossy plastic, lighting changes, camera shake.

### Comic Book (noir graphic novel)
- **Medium phrase**: "Cinematic noir graphic-novel illustration, widescreen 16:9."
- **Rendering**: bold expressive ink contours, fine crosshatching, textured brush shading, etched backgrounds, strong chiaroscuro, restrained palette with one warm accent.
- **Motion**: very small (a gaze lift), hands stay put, other characters still; one slow push with foreground framing retained.
- **Guards**: lip movement, speech balloons, lettering, panel divisions, saturation changes, photorealistic conversion, facial morphing, extra fingers.

### Watercolor (storybook)
- **Medium phrase**: "Detailed watercolor-and-ink storybook illustration, widescreen 16:9."
- **Rendering**: transparent washes on visibly textured cream paper, delicate irregular ink and graphite lines, pigment granulation, soft bleeding edges, atmospheric perspective.
- **Motion**: a slow head turn of a few degrees, body still; one gentle push.
- **Stability line**: "painted details remain stable rather than boiling or crawling."
- **Guards**: walking, waving, weather or sunlight changes, changing architecture, photorealistic textures, 3D rendering, warped limbs.

### Wool (needle-felt miniature)
- **Medium phrase**: "Cinematic handmade wool-and-felt miniature scene, widescreen 16:9."
- **Materials**: needle-felted fibres, visible knit stitches, loose wool hairs, braided edging, felt density, miniature wood.
- **Light**: warm interior key with cool moonlight fill, shallow depth of field, soft bokeh.
- **Motion**: a small deliberate movement with subtle stop-motion timing; held creatures and hands stay steady.
- **Guards**: melting fibres, changing stitches, morphing, facial redesign, moving mouth, exaggerated motion.

### Paper Cut (layered diorama)
- **Medium phrase**: "Cinematic dimensional paper-cut miniature diorama, widescreen 16:9."
- **Materials**: thick textured handmade paper, layered cardboard, folded cardstock, torn edges, flat overlapping planes, delicate shadows between layers; one strong colour accent.
- **Motion**: restrained, slightly stepped puppet movement (a few-degree head turn), everything else fixed.
- **Guards**: rippling cardboard, flutter, realistic skin, glossy plastic, moving props, changing facial features.

### Ghibli-style (hand-drawn Japanese animation)
- **Medium phrase**: "A cinematic hand-drawn Japanese animated film still, widescreen 16:9" (the official example names the studio; for shared or published prompts, describe the look instead of naming it).
- **Rendering**: clean delicate ink outlines, expressive traditional character design, restrained cel shading, richly painted watercolour-and-gouache backgrounds.
- **Motion**: one small cautious action with correct hand contact; gentle natural secondary motion (water, cloth); a very slow push.
- **Guards**: detached hands, object disappearance, changing clothing, dramatic effects, photorealism, camera shake.

### Low-Poly
- **Medium phrase**: "Cinematic low-poly 3D animation still, widescreen 16:9."
- **Rendering**: distinctly faceted polygonal modelling, broad angular planes, crisp geometric silhouettes, triangular fabric folds, flat-shaded surfaces.
- **Motion**: suits dynamic action (a running stride) matched by a single tracking move.
- **Guards**: texture smoothing, face drift, skating feet, costume changes, transformation into clay or live action.

### Cinematic Photoreal (not a Create Mode preset, same structure)
- **Medium phrase**: "Crisp cinematic photorealistic still, widescreen 16:9."
- **Style line**: "Crisp cinematic photorealistic look, vivid saturated colour, natural skin and fabric detail, sharp focus, stable colour and exposure throughout."
- **Notes**: the most prone to drift in long chains and to darkening in neon or smoke scenes; use the full bible, reference images and brightness rules. Energetic scenes need "real-time footage at natural speed, no slow motion".
- **Guards**: add "no stylised, cartoon or animated look" if a style drift appears.

## 4. Tested custom styles

Styles described entirely in the prompt that have held in Creative mode. Use them like the preset style sheets: keep the medium phrase, the video style anchor and the [LIGHT AND IMAGE] closing line identical in every prompt of a scene. Status notes record how far each has been verified.

### Pencil Sketch Stop-Motion (graphite on paper)
- **Status**: image and clip prompts written to the recipe; verify the first generated frame and harden the wording to it before chaining.
- **Medium phrase (image)**: "Hand-drawn pencil sketch stop-motion animation frame, graphite on textured cream drawing paper, widescreen 16:9. A single frame from a frame-by-frame paper animation: every line visibly hand-drawn in soft graphite with slight pencil wobble, light construction lines faintly showing through, gentle smudged graphite shading."
- **Colour**: a pure graphite sketch flattens a character's markings into grey tones. Add "light coloured-pencil tinting laid over the graphite so colours read softly through the pencil texture", then map the character's colours explicitly: tinted areas as soft coloured pencil, dark areas as dense graphite, white areas "left as bare untinted cream paper with only a thin outline". Offer strict greyscale as the alternative.
- **Rendering**: visible paper grain, soft graphite edges, the subject drawn sharp and detailed, the background looser and lighter; lighting as graphite shading and hatched cast shadows.
- **Style anchor (video, before [REFERENCE USE])**: "Hand-drawn pencil sketch stop-motion animation: graphite on textured cream paper, visibly hand-drawn lines that slightly re-draw and flicker frame to frame in a gentle stepped stop-motion cadence, light coloured-pencil tinting, drawn, not rendered."
- **[LIGHT AND IMAGE] closing line**: "Strictly hand-drawn graphite pencil on cream paper, stepped stop-motion cadence, paper grain visible throughout, stable composition and consistent character drawing."
- **Motion**: one beat per segment (a few walking strides, a head turn, a stop and look), described as "each stride drawn in a gentle stepped stop-motion rhythm"; one slow tracking or push move.
- **Guards**: no photorealism, no 3D rendering, no realistic fur or skin texture, no ink or paint look, no smooth digital lines, no live-action look; plus the usual anatomy and framing guards.

### Pencil-over-Watercolour Picture Book (mixed media)
- **Status**: start image verified in production; the user described the result as an old mid-century children's picture book. Clip prompt written to the same recipe; harden to the generated frame before chaining.
- **Why it holds**: the Ghibli-style preset already pairs line-drawn characters with painted watercolour backgrounds, so this is a known-good pairing with graphite swapped for ink and a stepped cadence added.
- **Medium phrase (image)**: "Mixed-media animation frame, widescreen 16:9: a hand-drawn graphite pencil character placed over a loosely painted watercolour background, in the manner of a frame-by-frame paper animation. Two distinct layers in two distinct media. The character is drawn only in soft graphite pencil with light coloured-pencil tinting, visibly hand-drawn with slight pencil wobble and faint construction lines. The background is painted only in transparent watercolour washes on textured cream paper, with soft bleeding edges, pigment granulation and no pencil hatching."
- **Character layer**: "[Name] is drawn entirely in pencil, never painted", with the colour mapping from the pencil style above, and "crisp pencil lines with no watercolour bleed touching [her]".
- **Background layer**: every element named in wash vocabulary ("warm grey and ochre washes", "blotted blue-green foliage", "very dilute blue wash fading to bare paper"), by image region. Anything the camera will reveal later (a house, a door) is also written in wash vocabulary in [SCENE] so it doesn't arrive as pencil.
- **Lighting**: state how light reads on each layer: graphite shading on the character, a soft watercolour shadow pooled on the ground.
- **Style anchor (video)**: "Mixed-media stop-motion animation: a graphite pencil character with light coloured-pencil tinting, hand-drawn lines that slightly re-draw and flicker frame to frame in a gentle stepped cadence, moving over a still, loosely painted watercolour background on textured cream paper, drawn and painted, not rendered."
- **[LIGHT AND IMAGE] closing line**: "Strictly two media: [Name] in graphite pencil only, the background in watercolour wash only; painted details remain stable rather than boiling or crawling, paper grain visible throughout, consistent character drawing."
- **Motion**: the watercolour layer behaves like a painted stop-motion backdrop ("the whole background behaves like a still painted backdrop and does not change"); a tracking move slides it past rather than animating it. One subject beat and one camera move per segment.
- **Guards**: no watercolour on [Name], no pencil hatching in the background, no ink outlines, no boiling or crawling washes, no photorealism, no 3D rendering, no realistic fur or skin texture, no smooth digital lines, no live-action look.
- **Naming**: describe the look (mid-century picture-book illustration, graphite figure over soft gouache and watercolour washes) rather than naming a book series or publisher.

## Style consistency across a video

- Pick one style per scene and keep the medium phrase and style line identical in every prompt of that scene.
- A style drift (e.g. stylised to photoreal) mid-chain can be accepted as a deliberate transition, but then update every later prompt to the new style rather than fighting it.
- When switching styles between scenes, start the new scene fresh from a start image in the new style; don't chain across a style change.
