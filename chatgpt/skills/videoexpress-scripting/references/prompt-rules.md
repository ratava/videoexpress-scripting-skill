# How the engine reads a prompt, and the failure-derived rules

Read before writing or debugging any prompt. The table is the diagnostic index: find the failure the user reports, apply the rule globally, sweep every affected clip.

## How the engine reads a prompt

Rules that hold regardless of format, learned from how VE's own prompt pipeline is tuned and confirmed in our own takes:

- **Quotation marks mean speech.** Anything inside double or single quotes is treated as words a character says: it is lip-synced, voiced, and counted toward the clip's dialogue-length check. Never quote camera instructions, sound descriptions, signage, labels or emphasis inside a prompt. Use quotes once per spoken line and nowhere else. (The examples in this skill quote prompt fragments for the reader; strip those quotes when pasting into VE.)
- **Two speakers per clip, maximum.** A third voice is refused or dropped. Split the exchange across clips.
- **Say what stays still as clearly as what moves.** The engine responds better to positive anchors ("the camera remains locked; the seated man keeps his position; the cup rests on its saucer; the buildings keep their shape and placement") than to a long list of prohibitions. Lead every segment with the anchors, then the motion. Negatives are a short tail of specific project guards, not the primary control; what the frame shows beats what the negatives say (see the chewing case in light-sound-dialogue.md).
- **Physical continuity is assumed until an action changes it.** A held object stays held until it is set down; a walking subject advances through the scene. State the change of state explicitly ("sets the cup down and lets go of the handle"), otherwise the engine keeps the previous state.
- **Camera: locked unless a move is asked for, and every move has a destination.** Distinguish the camera moving closer from the subject approaching the camera, and a physical push-in from a zoom ("a slow physical push toward him, not a zoom"). State the end framing. Don't add camera choreography to a simple beat.
- **One continuous take is the default; cuts must be declared.** A hard cut is stated in prose with its new composition and continuity of subject and sound (see camera-and-motion.md, hard cuts).
- **Chronological, present tense, with sequence words.** "Initially… then… as… while… finally" is how the engine expects order; a trigger and its reaction in one sentence land together or late (see camera-and-motion.md, cause-and-effect).
- **Sound stated positively, tied to the action that makes it.** "A soft clink as the cup meets the saucer" over a free-floating sound list; give every segment its own sound block and close each with what is heard in that segment ("only his voice and the clink of the cup are heard") rather than a music prohibition (see the Sound section).
- **Lettering is never promised.** The engine cannot guarantee spelling or frame-to-frame stability of on-screen text; exact text belongs in captions added in the edit.
- **Prompt length and format.** VE's own enhancer rewrites a prompt into roughly 150 to 220 words of continuous prose; the engine itself accepts far more, and this skill's tagged prompts of five to six thousand characters generate reliably with enhancement off. The prompt box holds about 6,000 characters. **Keep "Automatically enhance my video prompt" off**: with it on, the prompt is rewritten into short prose, the bible blocks, time labels and clip reference are dropped, and the rewriter can refuse a clip whose dialogue it judges too long for the duration.
- **Where this skill departs from the engine's house style on purpose.** The house style is one take, no cuts, no inventory of the image, no description of unseen surroundings, no labels or timestamps, no preamble. This skill uses hard-cut coverage, full character and location blocks, out-of-frame scene description for camera moves, [ACTION 0-5s] labels and a [Clip N] reference, because they are what hold a *sequence* of clips consistent; the house style only ever considers one clip at a time. All of it is proven with enhancement off. Don't "correct" the format toward the house style.

## Failure-derived rules

| Failure observed | Cause | Rule |
|---|---|---|
| Digits or letters rendered in footage | Numerals and text-like nouns in the prompt | Digits only in [ACTION 0-5s] labels and the bracketed clip reference; everything else in words. Describe screens, signs and holograms as "abstract shapes and flowing light, with no letters or numbers". End image prompts with "no text, no letters, no numbers, no watermark". |
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
| Weapon or prop changes shape after a push-in or a swing | It left the frame and was redrawn from the text | Keep it fully in frame through the action: camera locked, prop visible in its pose from the first frame, the move ending inside the frame. |
| Hybrid prop becomes its stronger half (a handgun with a blade bolted on) | A hybrid name or a strong noun ("pistol") in the prompt | Describe the parts and layout as geometry, drop the strong noun; if it keeps reverting, simplify the design (bible.md). |
| Defining features missing from a detailed character image | Image prompt too long, features buried mid-prompt | Short prompt with the features first; build the sheet in stages: head shot, then full body with it in slot 1, then a composite (bible.md). |
| Metal or a cybernetic part spreads onto a nearby body part | Worth checking: that body part named in the same sentence as the metal part | Move or remove the body-part noun, and describe the bare area positively in its own sentence. A suggestion, not a rule. |
| Pose or prop copied from a reference | In-scene image in Reference Photo 2 | Slot 2 only for a second character's reference sheet. |
| Weapon-arm turns into a hand or fist | Named part without structure; gesture on that arm | Joint-by-joint structure, "no hand, no grip, no handle", gestures on the other limb. |
| Action happens in place or in the wrong direction | Direction written relative to facing, not frame geometry | Describe where the obstacle is in the frame and where the subject ends up; "the spot where she stood is left empty". |
| Reaction arrives late (subject stands still under fire) | Trigger and reaction in one beat | Separate timed segments: anticipation, reaction, consequence; negatives on premature events. |
| Shooter fires at nothing; characters swap sides | Over-the-shoulder push-in; no fixed layout | Fixed left/right layout, side-on wide, no over-the-shoulder view. |
| Background hiss or hum across the clip | Sustained sounds (whir, hum, drone) | Transient sounds only, with silence between; no ambient beds. |
| Music or stray sound in early segments; only the last segment sounds as written | One [PRODUCTION SOUND] after the last segment binds to that segment only | One [PRODUCTION SOUND t-ts] block per segment, silent segments stated explicitly. |
| Gunfire sounds thin | "Sharp", "crisp", "crack" | Deep, booming, full-bodied, low-end punch, echo. |
| Speech with closed mouths | Line written without mouth movement, or speaker's face not in frame | Write "lips, jaw and beard moving in sync with every word" with the quoted line in [ACTION] (Lipsync HD unticked), and frame the speaker's face. |
| "Your dialogues are too long" error, or last line cut off | Lines quoted twice (action and sound), or too much speech for the clip length | Quote each line once, in [ACTION]; budget about two seconds per short line plus pauses; set the manual length to fit. |
| Quoted camera or sound phrase gets spoken, or inflates the dialogue check | Quotation marks used for non-speech | Quotes only around spoken words, once each; everything else in plain prose. |
| Prompt rewritten short, bible and labels gone, or dialogue refused | Automatically enhance my video prompt was on | Keep enhancement off; it rewrites to about two hundred words of prose and validates dialogue length itself. |
| Push-in renders as a zoom, or the subject walks toward the camera instead | Camera move described without its physical nature or destination | "A slow physical push toward him, not a zoom, ending on a medium close-up"; distinguish camera approach from subject approach. |
| Invented gestures or business under the lines | Clip length set longer than the speech and actions need | Shorten the manual length or add a real action to fill it. |
| Chewing from the first frame of a dialogue clip | Sip or food-in-hand in the previous clip or chain frame | Nothing in the mouth and nothing edible in either hand at any chain point; sips and bites go in their own clips after the dialogue. |
| A speaker's line never plays | Speaker's head out of frame | Bring the face into frame for the line, or write it as an off-camera voice in [PRODUCTION SOUND]. |
| Lead's accent drifts toward another speaker or the setting's language | Voice adjectives bleed; setting implies a language | Specific voice description per speaker (age, pitch, texture, accent, pace), contrast stated, repeated every clip. |
| Speaker keeps walking or looks away while talking | No reaction beat | "She turns to face [the other character], then answers." |
| Can't tell which tile or take belongs to which clip | Prompt doesn't open with its pack reference | Start every prompt with the pack's bracketed reference (`[Clip 12]`, `[Image 12A]`, `[Clip 12 TEST 1]`), nothing before it; unique per clip, image and variant. |
| Hidden character appears in front of cover | See-through effects | Keep hidden characters out of the shot. |

**Per-take QC checklist** (include in every pack): character hair, face and signature accessory; outfit matches the scene block, per side; environment matches the location block, including newly revealed areas; brightness holds to the last frame; no digits, letters or symbols; camera direction as prompted; motion reads as real time; crowd scale and faces varied; cut frame is clean for the next chain.
