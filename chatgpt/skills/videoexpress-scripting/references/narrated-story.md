# Narrated story videos (stickman and other simple 2D stories)

A format for short narrated stories: one narration line per clip, VE's **Narration Video** voicing each line, a fresh start image per scene built from a character master and a location reference, and the clips joined in story order. It suits the popular stickman story videos, children's stories, fables, explainers told as a story, and any piece where a narrator carries the plot.

Based on VideoExpress's own published "VideoExpress + CloneVoice Stickman Story Workflow", reproduced and tested in VE with VE's own text to speech (no CloneVoice needed).

## When to offer it

Offer it at intake when the user wants a narrated story, a stickman video, a fable or a children's story told by a narrator, or asks for "one of those stickman videos". It's the user's choice; a narrated piece can also be made the usual way (dialogue or narration inside multishot clips).

## How this format differs from a normal project

| | Normal project | Narrated story |
|---|---|---|
| Clip length | Set per clip (often the full 10 s) | Set by the narration line: VE makes the clip as long as its audio (a ~70-character line gave a 4 s clip) |
| Sound | Prompted `[PRODUCTION SOUND]`, or Video Only | Narration Video: the clip carries the narrator's line |
| Start images | Chained from the last frame by default | A fresh start image per scene, from the character master and location reference |
| Video prompt | Multishot tags and time labels | One plain present-tense paragraph |
| Look | Any style | 2D by default (`styles/stickman.md` for stickman); any style the user asks for |

**Chaining is still offered when it's needed.** When a scene's action must continue unbroken from the previous clip (a fall that lands in the next shot, an object mid-air, a long walk that would visibly restart), offer to chain that clip from the previous take's last frame instead of a fresh start image. Say why for that clip and let the user choose. Otherwise every scene gets a fresh start image.

## Intake

Ask, with suggestions (`project-intake.md`, How to ask):

- **Story or topic**, and a protagonist name (fresh per story; don't reuse an earlier story's).
- **Aspect ratio:** Landscape 16:9 (default) or Vertical 9:16 for shorts and reels.
- **Look:** Stickman (default for this format) or another style from `styles/README.md`.
- **Narrator:** VE's Text to Speech (language, voice, emotion, speed, pitch; the default), the user's own voice (Voice Recording, or Import Audio of a clean recording, up to 10 s per clip), or CloneVoice.ai if the user owns it. Keep one voice and the same settings for every line.
- **Length:** the number of scenes, or let the story decide. Each scene is one line and one clip, typically 3–6 s.

## Planning the story

1. **Beats.** A beginning, a development, a memorable turn and an ending. One visual beat per clip. Readable everyday action (walking, finding, helping, reacting) over complicated choreography.
2. **Narration lines.** One short line per clip, **120 characters at most** (VE's text box limit) and under 10 seconds spoken. Aim for 50–90 characters, about 3–5 s. No scene labels or stage directions in the line; the same tense and tone throughout.
3. **Continuity table.** Before any image, write one row per scene: scene · narration line · incoming state (pose, position, facing, what's in each hand) · the one new action · outgoing state · who and what is in frame, with counts · location. Scene N's outgoing state is scene N+1's incoming state. Each beat changes something visible; don't restart the same approach or reach in consecutive scenes.
4. **Locations.** For each location, a fixed layout: each landmark, its side of the screen and its neighbours (pond far left, bench centre, oak far right). One camera side for the location; tighter shots may crop a landmark but never move it.
5. **Counts.** Every person, animal and story prop is counted and placed in every image prompt ("exactly one stickman and one small yellow bird").

## References: the character master and the location

Build these first, before any scene image (`bible.md` for reference images in general).

- **Character master → Reference Photo (slot 1).** One full-body character alone on a plain light grey background, relaxed three-quarter standing pose, empty hands away from the body, feet visible, nothing else in frame. For a stickman, the sheet's character design. Save it to My AI Images.
- **Location reference → Reference Photo 2.** The empty set: no characters, no animals, the fixed layout as written in the table, seen from the location's camera side. Save it. In the test, scenes built from the master plus the empty location kept the layout exactly (pond left, bench centre, oak right) in every candidate.
- For a recurring second character, slot 2 holds that character instead; then the location rests on the repeated layout text alone. Two references is the maximum.
- Change only slot 2 when the story moves to a new location; keep slot 1 for the whole story.

Settings for these and every scene image: Image Type **2D** (for stickman and other flat 2D looks), Creative mode off, Automatically enhance my image prompt off (it re-ticks itself; check before every Create Image), Use Consistent Character on with both slots filled. Check the dialog's own Landscape/Vertical toggle before the first Create Image; it is separate from the project's ratio.

## Scene start images

Each scene's image shows that scene's **incoming state**, not a neutral pose and not the finished action: the stickman already mid-stride on the path, already seated with the bird beside him. Leave room for the move. Write, in this order:

1. Style and ratio, the exact narrated moment.
2. The character, as in the master, with pose, facing and eyeline first ("walks mid-stride on screen LEFT, body and face turned RIGHT toward the bench").
3. Every other subject with its count, position, facing and relation to the character. Every person, even far in the background, is described in the same style ("a 2D stickman"); a bare "people" can render realistic humans.
4. Story props: count, colour, owner, which hand.
5. The location's fixed layout, word for word from the table.
6. Shot size and camera side; light and time of day.
7. The style's outline, colour and shadow phrases; a closing count line ("Exactly one stickman, no other people, no text, no watermark").

Check each candidate before animating: the identity matches the master, the counts are right (one test candidate drew two birds where one was asked for), the layout holds, and the pose continues from the previous scene. Pick the better candidate or regenerate; animation won't repair a broken still.

## Scene video prompts

One paragraph, present tense, no tags, time labels or brackets:

- Shot size and camera ("Wide side-on 2D shot with a locked camera"); locked or a gentle push from the location's camera side.
- **Initially** the incoming state, **then** the one action with its direction and pace, **finally** the outgoing state the next scene starts from.
- The landmarks restated in place ("The pond stays far left, the bench stays in the centre, the oak stays far right").
- The style held to the end ("Strictly a 2D stickman cartoon with crisp black ink outlines and flat cel colours throughout").
- Narration and voice go in the narration dialog, never in this paragraph. Ambient sound only if the user asks for it.

VE rewrites the video prompt in this route (the saved title wasn't the typed text), so keep the paragraph simple and literal. Small action misses (a hop in the wrong direction) are normal; regenerate only when the user asks or the clip is clearly unusable.

## Generating (Narration Video)

Browser steps: `browser-workflow.md`, Narration Video. In short: select the scene image, enter the paragraph, tick **Narration Video**, click **Create Video**, and in the **Create Narration Video** dialog make the line's audio (Text to Speech: type the line, **Import Speech**, wait for the waveform), then **Create Narration Video**. Prepare the next scene while it renders.

## Assembly

Right-click each finished clip in story order → **Add to Timeline**; each one lands straight after the last. Then click **Auto Align Clips** (the first icon on the track row) to close any gaps, check the clip count and order, and save the project. Narration stays attached to each clip. Captions, a title or an audio fade can be suggested as filters (`browser-workflow.md`, Filters).
