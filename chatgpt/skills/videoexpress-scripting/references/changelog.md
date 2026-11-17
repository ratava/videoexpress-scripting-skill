# What's new

Read on the skill's first use in a conversation, when the user says yes to a summary of what's new (SKILL.md, First use in a conversation). The current release notes are every section from the top of this file down to and including the latest x.y release (now 2.7.0): show them as a bulleted list: a short heading per version, newest first, then one short bullet per Headline and New item (a version's Fixed items can share one bullet), in plain words, Headline items first. Never fold the notes into a sentence or a parenthesis, and offer every Headline item that has a question. Don't paste this file. Older versions are on the [releases page](https://github.com/ratava/videoexpress-scripting-skill/releases).

## 2.7.2

### Headline

- **Speech clips are written in English.** Any clip prompt with a spoken line, one speaker or two, is now written in English, with only the lines in your language, in plain quotes and with "speaking [language] as a native [language] speaker" in each voice. Written in your language, even partly, two-speaker clips merged the voices, dropped lines or gave them to the wrong mouth; in English they played correctly. Image prompts and clips without speech stay in your language, and the conversation and every spoken line stay in your language.

### Fixed

- **Dialogue timing.** Each line gets its own segment, sized to it: two short lines fit an 8-second clip as 0-4 s and 4-8 s. No pauses are written between lines, and a line, an action and another line are split across two clips.
- **The 2.7.1 voice-description fix is withdrawn.** Wider testing showed the voice wording and open mouths weren't the cause of two speakers sharing a voice; the prompt's language was. A closed-mouth smile in character descriptions stays as optional good practice.

## 2.7.1

### Fixed

- **Two characters talking in one clip.** When both speakers came out in the same voice, or one character's line was dropped or came from the wrong mouth, the cause was in the prompt: a character's voice described two different ways in one prompt, no stated contrast between the two voices, or the listener's mouth open in the start image or the character description. Each character's voice is now written once and repeated word for word everywhere it appears in the prompt, the contrast between the voices is stated, and the listener's mouth is closed. Character descriptions now use a closed-mouth expression ("a closed-mouth smile").
- **Dialogue goes in the prompt by default.** Lines are written into the clip prompt even when the clip is just two people talking with no action between the lines; this worked in VideoExpress, and it controls the pause between the two speakers, which is hard to do in Lipsync HD. Lipsync HD is still there if you prefer it.

## 2.7.0

### Headline

- **Works in your language.** The skill talks to you and writes every prompt in the language you use with it (or have set), section tags and negatives included: `[SCÈNE]`, `[ACTION 0-5s]`, `[NÉGATIFS]` and "Pas de musique" in French, for example. The bible blocks and style lines are translated once and pasted word for word. A fully French prompt, tags, negatives and lip-synced dialogue included, worked first time in VideoExpress. The prompts switch to English only if a test shows the language is causing a failure, and the skill tells you why.
- **Cleaner start images.** Three changes to image prompts, each from VideoExpress tests:
  - **No label on image prompts.** VideoExpress painted a prompt's bracketed reference onto signs, boards and shirts ("3A" on a bakery sign; 3 of 7 tagged signage images, 0 of 6 untagged). Image prompts now start straight with their content; rename each saved image to its reference in the Media Library (right-click its tile → Organize → Rename). Video prompts keep their `[Clip 12]` label.
  - **No negatives in image prompts.** Start images and reference sheets have no [NEGATIVES] section and no "no …" phrases. Each exclusion is written as the positive it stands for: "the rest of the terrace empty", "a blank sign board". Negatives stay in video prompts, where they work.
  - **What's behind the camera stays out of the image.** A location block's "behind the camera, out of frame" sentence was drawn into start images in 5 of 5 tests (0 of 5 without it). It now goes into clip prompts only.

### New

- **Thanksgiving add-on.** A third festive add-on for any style: a harvest dinner table with a roast turkey, pumpkin pie, a cornucopia of gourds and squash, plain orange pumpkins, autumn leaves and warm candle and late-afternoon light, with guards that keep the pumpkins uncarved and Halloween and Christmas out. Tested on one style so far (3 takes, everything held).

### Fixed

- **Prompt rewrites come from auto-enhance, not Consistent Character.** VideoExpress rewrites an image prompt only when "Automatically enhance my image prompt" is ticked, with or without Consistent Character. The skill said otherwise; VideoExpress hasn't changed.
- **Images can be renamed.** Saved images can be renamed from the Media Library (Organize → Rename); only the save step can't set a name.
- Removed the claim that reference images revive features VideoExpress had ignored: there was no recorded evidence for it.
