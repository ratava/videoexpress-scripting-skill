# What's new

Read on the skill's first use in a conversation, when the user says yes to a summary of what's new (SKILL.md, First use in a conversation). The current release notes are every section from the top of this file down to and including the latest x.y release (now 1.3): show them as a bulleted list, in plain words: a short heading per version, newest first, then one short bullet per Headline and New item (a version's Fixed items can share one bullet). Never fold the notes into a sentence or a parenthesis. Don't paste this file. Older versions are on the [releases page](https://github.com/ratava/videoexpress-scripting-skill/releases).

## 1.3.2

### Headline

- **Speech clips are written in English.** A clip prompt with spoken lines is written in English, with only the lines in your language (plain quotes, "speaking [language] as a native [language] speaker"). Written in your language, even partly, two-speaker clips merged the voices, dropped lines or gave them to the wrong mouth. Image prompts and clips without speech stay in your language.

### Fixed

- **Dialogue timing.** One segment per line, sized to it (two short lines: 8 s as 0-4 s and 4-8 s), no pauses written between lines, and a line, an action and a line split into two clips.
- **The 1.3.1 voice-description fix is withdrawn:** the prompt's language was the cause, not the voice wording or open mouths. A closed-mouth smile stays as optional good practice.

## 1.3.1

### Fixed

- **Two characters talking in one clip.** When both speakers came out in the same voice, or one line was dropped or came from the wrong mouth, the cause was in the prompt: a voice described two different ways, no stated contrast, or the listener's mouth open. The wizard now writes each voice once, word for word everywhere it appears, states the contrast and keeps the listener's mouth closed.
- **Dialogue goes in the prompt by default**, even for two people talking with no action between the lines: it controls the pause between speakers, which is hard to do in Lipsync HD. Lipsync HD is still there if you prefer it.

## 1.3

### Headline

- **Works in your language.** The wizard asks its questions and writes the prompts in the language you use with it, section tags and negatives included (`[SCÈNE]`, `[NÉGATIFS]`, "Pas de musique" in French, for example). A fully French prompt worked first time in VideoExpress. The prompts switch to English only if a test shows the language is causing a failure, and the wizard tells you why.
- **Cleaner start images.** Image prompts now start straight with their content, with no bracketed label: VideoExpress painted labels onto signs, boards and shirts. Rename the saved image in the Media Library instead (right-click its tile → Organize → Rename). Image prompts also carry no negatives: whatever you want kept out of the image is written as its positive ("the rest of the room empty", "a blank sign board"), and the wizard shows where each one went. And a location's "behind the camera" detail goes into the clip prompt only, because image prompts drew it into the picture.

### New

- **Thanksgiving add-on.** A third festive add-on for any style: a harvest dinner table with a roast turkey, pumpkin pie, a cornucopia, plain orange pumpkins, autumn leaves and warm candlelight, with guards that keep the pumpkins uncarved and Halloween and Christmas out.

### Fixed

- Consistent Character guidance: VideoExpress rewrites an image prompt only when auto-enhance is ticked, and saved images can be renamed from the Media Library. An unevidenced claim about references reviving ignored features was removed.
