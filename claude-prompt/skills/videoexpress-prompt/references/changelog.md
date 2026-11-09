# What's new

Read on the skill's first use in a conversation, when the user says yes to a summary of what's new (SKILL.md, First use in a conversation). The current release notes are every section from the top of this file down to and including the latest x.y release (now 1.3): show them as a bulleted list, in plain words: a short heading per version, newest first, then one short bullet per Headline and New item (a version's Fixed items can share one bullet). Never fold the notes into a sentence or a parenthesis. Don't paste this file. Older versions are on the [releases page](https://github.com/ratava/videoexpress-scripting-skill/releases).

## 1.3

### Headline

- **Works in your language.** The wizard asks its questions and writes the prompts in the language you use with it, section tags and negatives included (`[SCÈNE]`, `[NÉGATIFS]`, "Pas de musique" in French, for example). A fully French prompt worked first time in VideoExpress. The prompts switch to English only if a test shows the language is causing a failure, and the wizard tells you why.
- **Cleaner start images.** Image prompts now start straight with their content, with no bracketed label: VideoExpress painted labels onto signs, boards and shirts. Rename the saved image in the Media Library instead (right-click its tile → Organize → Rename). Image prompts also carry no negatives: whatever you want kept out of the image is written as its positive ("the rest of the room empty", "a blank sign board"), and the wizard shows where each one went. And a location's "behind the camera" detail goes into the clip prompt only, because image prompts drew it into the picture.

### New

- **Thanksgiving add-on.** A third festive add-on for any style: a harvest dinner table with a roast turkey, pumpkin pie, a cornucopia, plain orange pumpkins, autumn leaves and warm candlelight, with guards that keep the pumpkins uncarved and Halloween and Christmas out.

### Fixed

- Consistent Character guidance: VideoExpress rewrites an image prompt only when auto-enhance is ticked, and saved images can be renamed from the Media Library. An unevidenced claim about references reviving ignored features was removed.
