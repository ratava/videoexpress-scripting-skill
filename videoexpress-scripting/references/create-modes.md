# VE 3.5 Create Mode styles

VideoExpress 3.5 Create Mode offers ten animation styles, each with an image prompt (the start frame) and an image-to-video prompt. This file distils the patterns from the official examples, plus cinematic photoreal, which uses the same structure.

## Contents
1. The image-prompt recipe (all styles)
2. The video-prompt pattern (all styles)
3. Style sheets: 3D Animation · Claymation · 8-Bit Pixel · Stop-Motion · Comic Book · Watercolor · Wool · Paper Cut · Ghibli-style · Low-Poly · Cinematic Photoreal

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
- **Image prompt:** open with the medium ("Cinematic hand-drawn cyberpunk anime film still, widescreen 16:9."), then describe every garment, prop and background element in detail, and close with the look ("Clean ink outlines, two-tone cel shading with hard shadow edges, muted … palette with warm neon accents, richly painted detailed city background, mature realistic character proportions."). A long, specific prompt held the style far better than a short one.
- **Video prompt:** open with a style anchor sentence before [REFERENCE USE] ("Two-dimensional hand-drawn anime cel animation in the style of a late-1990s … anime feature film: flat cel colours, bold clean black ink outlines, two-tone cel shading with hard shadow edges, richly hand-painted backgrounds, drawn and painted, not rendered."). Say "including its drawing style" in the opening-frame sentence, and end each [LIGHT AND IMAGE] with "Strictly two-dimensional hand-drawn … cel art, clean ink outlines, … stable line art and colour throughout."
- **Negatives:** "no 3D rendering, no photorealism, no realistic skin or fabric textures, no live-action look, no realistic lighting".
- **Consistent Character pulls toward realism.** A clip generated with a face reference in slot 1 came out far more realistic until the style anchor was added. Keep the anchor in every clip once references are in use.
- **Reusing a good image's exact prompt** (with only the needed changes) beat rewriting the look from scratch.

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

## Style consistency across a video

- Pick one style per scene and keep the medium phrase and style line identical in every prompt of that scene.
- A style drift (e.g. stylised to photoreal) mid-chain can be accepted as a deliberate transition, but then update every later prompt to the new style rather than fighting it.
- When switching styles between scenes, start the new scene fresh from a start image in the new style; don't chain across a style change.
