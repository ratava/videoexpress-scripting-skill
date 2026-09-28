# Project intake: the design-phase question system

Every new VideoExpress project starts here, before any prompt is written. The goal is a signed-off **Core Bible** and **production plan**, built from the user's answers, with optional development tests before full production.

## How to ask

- **Question cards, one topic at a time.** Each card has one to three questions, each with two to four short options. Include a "Something else (I'll type)" or "You suggest" option where the choice is open.
- **Suggest, then ask.** For every decision, give a one-line recommendation based on what the user has said so far and on what VE does well ("Landscape suits a two-character fight; portrait suits a single character talking to camera"). Then ask.
- **Never ask what the user has already answered.** Pull answers from their idea or script first, then confirm them in one summary card instead of asking again.
- **Keep a running brief.** After each round, show a short "decisions so far" list so the user can correct anything.
- **Order matters.** Delivery decisions (platform, aspect ratio, length) come first because they constrain everything else. Style and characters come next, then sound and dialogue, then production logistics.
- **Stop at gates.** The user signs off the brief, the Core Bible, the script, and any test results before production starts.

## Step 1: choose the starting point

Card: **"How do you want to start?"**
1. With a concept or idea
2. With a full or partial script
3. With existing images or footage (a character, a location, a storyboard)
4. Something else (I'll type)

Path 1 is "Concept first" below. Path 2 is "Script first". Path 3 uses the Concept first path, but starts by reading the user's images and treating them as fixed references.

## Path A: concept first

1. **Get the idea in the user's words.** Ask for the concept in a sentence or two, plus anything they already know (a scene, a character, a feeling, a reference film or video).
2. **Reflect it back with options.** Offer two or three ways it could be realised in VE (e.g. "a single continuous character journey", "a two-character confrontation with dialogue", "a montage of short atmospheric shots"). Note what each costs in clips and what's risky (see the feasibility check).
3. **Run the decision rounds** (the checklist below), suggesting a default for each.
4. **Script development.** Ask who writes it (card below). Draft the scene table and beat outline, then the full script, with a review round after each.
5. **Build the Core Bible** from the decisions and the script.
6. **Offer development tests** (below), then the production plan.

## Path B: script first

1. **Ask for the script** (paste, upload, or a link). A partial script is fine: an outline, a scene list, dialogue only.
2. **Read it and extract everything it already decides:** characters, locations, props, dialogue lines, sound cues, runtime hints, tone. Flag gaps and contradictions.
3. **Confirm the extracted decisions** in one summary card, then run only the decision rounds the script doesn't answer.
4. **Adapt the script to VE:** break it into clips of 3–10 seconds, mark dialogue lines for Lipsync (each under 100 characters per speaker per clip), mark beats that need splitting, and flag anything on the "does badly" list with a suggested workaround.
5. **Review round** on the adapted script and clip breakdown.
6. **Build the Core Bible**, offer development tests, then the production plan.

## Decision checklist

Work through these in order. Each line is a card or part of one; skip anything already settled.

### Delivery
- **Intended use:** social post, YouTube or web video, advert or promo, music video, story or short film, explainer or training, pitch or test piece.
- **Platform and delivery spec:** e.g. TikTok, Reels or Shorts (portrait, usually under 60 s), YouTube (landscape, any length), website or presentation. Suggest the aspect ratio and length that suit it.
- **Aspect ratio:** Landscape 16:9 or Portrait 9:16. It's set per generation in VE and must stay the same for every image and clip.
- **Target length:** e.g. under 30 s, 30–60 s, one to two minutes, longer. Convert it to a clip count (a ten-second clip is the usual unit) and state it.
- **Target audience:** age range, familiarity with the subject, and any content limits (e.g. no violence, family friendly, brand safe).
- **Tone and mood:** e.g. tense, playful, epic, calm, heartfelt, eerie.

### Look
- **Production art style:** one of the ten Create Mode presets, cinematic photoreal, or a custom Creative mode style described in the prompt (see `create-modes.md`). Offer three that suit the concept, each with a one-line note on its strengths and risks. Custom styles need a style anchor, and are pulled toward realism by face references.
- **Colour palette and lighting mood:** e.g. muted cool with warm accents, bright and saturated, golden hour, neon night. Night and neon scenes need brightness rules.
- **Camera language:** e.g. calm and steady, handheld energy, sweeping moves, fixed side-on staging. Suggest steady single moves for reliability.
- **Text on screen:** titles, captions or signage. VE renders text in footage badly, so titles and captions should be added with VE's Text Animations or Automatic Captions tools rather than generated in the clip.

### Characters and world
- **Number of characters,** and which are recurring.
- **Consistent Character:** yes or no. Slot 1 holds the main character and slot 2 a second. More than two recurring characters needs a plan (start images carrying the others, or fewer speaking roles).
- **Character design:** for each, age, build, face, hair, outfit per scene, signature accessory, and how props are carried. For non-human characters, suggest humanoid builds and joint-by-joint weapon descriptions.
- **Reference assets:** does the user have images of a character, a product, a logo or a location? Use them as references. Check they have the rights to any real person's likeness, and never recreate a real person without consent.
- **Locations:** each environment, including what's out of frame, time of day and weather.
- **Key props, vehicles or effects,** and any hero or payoff shots that earlier clips must set up.

### Sound and dialogue
- **Production sound:** VE-generated effects per clip, no sound at all (Video Only), or sound added in the edit. If VE-generated, explain the transient-only rule and the unresolved music risk.
- **Music:** none, a user-supplied track added in the edit, or a track the video is cut to. If cut to music, get the track, key timings and tempo first.
- **Dialogue and lip-sync:** which clips have on-screen speaking (Lipsync HD, up to two speakers per clip, short lines), and which characters speak without a visible mouth (a voice written into production sound).
- **Narration or voice-over:** none, or VE's Narration Video, or recorded by the user. Get the narration text and pacing.
- **Voices:** a voice description for each speaker (age, gender, pitch, accent, delivery), kept identical in every clip, plus the language.

### Script
- **Who develops the script:** Claude writes it from the concept; Claude and the user write it together scene by scene; the user writes it and Claude adapts it; or the user provides it complete.
- **Structure:** number of scenes, the beat per scene, and the ending (a final image, a fade, a line, a hard cut).
- **Transitions:** hard cuts, match cuts, or fades and white dips done in the edit.

### Production logistics
- **Generation budget:** how many credits or generations the user is prepared to spend. With five takes per clip, a twelve-clip video is about sixty generations plus start images and tests.
- **Takes per clip:** one to five (five is the usual default). More takes cost more but give more choice.
- **Who operates VideoExpress:** Claude drives the browser, the user does, or both. If Claude drives, follow `browser-workflow.md`.
- **Chaining strategy:** mostly chained clips (smoother continuity, and drift builds up) or mostly fresh starts from designed start images (more control, more images to make). Suggest a mix: fresh starts at each scene and at difficult beats.
- **Edit and finishing:** who edits, whether trims, transitions and audio happen in VE's timeline or elsewhere, VE Filters, and the export format.
- **Review cadence:** approve every image and take, or approve in batches.
- **Sharing:** keep "Share this in the public gallery" off unless the user wants it.

## Feasibility check (always run before the Bible)

Compare the concept or script against what VE handles well and badly, and propose workarounds before anyone commits to it.

Generates reliably:
- One clear subject and steady camera moves.
- Light changes and drifting atmosphere.
- Two-character staging with a fixed left/right layout.
- Short dialogue in medium shots.
- Simple, single-beat actions per segment.

Needs care:
- Chained continuity over many clips.
- Timing a reaction to a trigger.
- Point-of-view shots.
- Night, neon and smoke scenes (keep them bright).
- Crowds (control their scale and variety).

Does badly (plan around these):
- Text and numbers in footage.
- Multi-legged or many-limbed characters.
- See-through-wall or thermal effects.
- Athletic moves over obstacles written relative to facing rather than frame geometry.
- Complex fights inside a single clip.
- Guaranteed music-free audio in climax shots.

## Development tests (optional, offered before production)

Offer each test as a yes/no card. Tests use one take each unless the user wants more, and every result gets a review round that can change the Bible.

- **Style test (image):** one start image in the chosen style with the main character. Confirms the look before references are built.
- **Character reference test (image):** a clean full-length reference on a plain grey background for each Consistent Character. It becomes slot 1 or slot 2.
- **Location test (image):** a key environment as a start image.
- **Motion test (video):** one representative clip, such as the hardest action beat, to check the action, camera and style hold.
- **Sound test (video):** one clip with the planned production sound, to check for hiss, music and weapon sound.
- **Lip-sync test (video):** one dialogue clip with the planned voices and framing.

After the tests, update the Bible with any wording that worked, since a prompt that produced the right look should be reused exactly.

## Outputs

1. **Project brief:** the decisions list, grouped as in the checklist, with the reasons for any non-default choice.
2. **Core Bible:** style anchor and style line; character core blocks and outfit blocks; reference image plan (which image goes in which slot); location blocks; prop and effect descriptions; voice descriptions; sound palette (per weapon, per environment); the fixed screen layout for multi-character scenes; and the global rules that apply.
3. **Script and clip breakdown:** the scene table, then each clip with its length, fresh or chained start, dialogue (speaker and line), sound cues and role (establishing, action, dialogue, payoff).
4. **Production plan:** start images to generate, takes per clip, the generation budget, the test results, and the order of work.

The user signs off each output. Then production moves to the prompt pack (SKILL.md sections 1–9) and, if Claude operates VE, `browser-workflow.md`.
