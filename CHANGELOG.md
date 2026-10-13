# Changelog

Release notes for the skills in this repo. Full notes for each release are on the [releases page](https://github.com/ratava/videoexpress-scripting-skill/releases).

Each skill also carries its latest notes in `references/changelog.md`, and offers a short summary of what's new the first time it's used in a conversation.

## VideoExpress Scripting 2.5.1 (2026-10-13)

- **What's new is asked on first use.** The scripting skill now asks whether you'd like a summary of what's new (and offers headline additions) the first time it's used in a conversation, whatever the first message is, instead of only at the start of a new project. The summary covers 2.5 and 2.5.1 together.
- **Changelog wording.** The Consistent Character entry says plainly that VideoExpress hasn't changed: the skill's guidance was corrected.
- Also on `main` since 2.5.0, without a version change: VideoExpress Prompt's SKILL.md no longer says a clip sees reference images.

## VideoExpress Scripting 2.5.0 and VideoExpress Prompt 1.0.0 (2026-10-13)

### New

- **VideoExpress Prompt 1.0.0**, a companion skill: a step-by-step wizard for one image or clip prompt, or an image and its clip, using the same rules and styles. Installed from the same marketplace ([install guide](https://github.com/ratava/videoexpress-scripting-skill/wiki/Install-VideoExpress-Prompt)).
- **Grok support.** Both skills install in Grok (free trial and paid plans only) by asking Grok to install them from their GitHub folder links, with regular update checks; the local Grok Build CLI can use `npx skills add`. Grok uses the ChatGPT builds ([install guide](https://github.com/ratava/videoexpress-scripting-skill/wiki/Install-Grok)).
- **What's new on update.** The first time the scripting skill is used in a conversation it asks whether you'd like a summary of what's new, and offers headline additions such as VideoExpress Prompt with a link to install them.
- **New style: Graffiti** (aerosol spray-paint toon, caricatures, street mural).
- **Sitting and walking to a mark.** VE ignores collision and which way furniture faces: seats are chosen with no front (a crate, stool, low wall or bollard) with clear space around them, and a mark a character walks to sits clearly nearer the camera, with a short (1-2 s) walk.
- **A gesture under a Lipsync HD line.** The Lipsync dialog's Video Prompt steers one directed gesture described in frame terms: which arm by frame side, how high, which third of the frame, a hold, and a return to the opening pose.
- **Tagged start-image prompts.** Start images can use [SUBJECT], [FRAMING AND POSITION], [BACKGROUND], [LIGHT AND STYLE] and [NEGATIVES] tags as well as prose.
- **Misread words.** Respell a mispronounced word inside the quotes ("Skrip-ting") with a plain-English note outside them; never IPA inside the quotes.

### Changed

- **Corrected: Consistent Character in clips.** The skill no longer sets Consistent Character or its slots for clips, and a video prompt's [REFERENCE USE] names only the start image. VideoExpress hasn't changed: Consistent Character has only ever affected Create Image, and earlier versions of the skill wrongly treated it as affecting clips.
- **References and pose.** A reference in either slot can carry its pose and props; a pose stated in the prompt overrides it.
- **Numbers.** The blanket "digits only in labels" rule is replaced: ages, lengths and counts can be digits (tested, no numerals appeared), and only signs, screens and other text-bearing objects are described as abstract shapes and light.
- **Chaining inside VE.** Clips chain from VE's Save Last Frame, with no trimming or retiming outside VE. Plan the framing so a clip ends where the next begins; the skill flags detail risk and you decide.

### Removed

- The claim that face references turn clips realistic, which was never tested. The style anchor rule is unchanged.

## VideoExpress Scripting 2.4.0 (2026-10-08)

Exclusions only in [NEGATIVES]; never ask for silence; a detail holds only at the size VE last drew it; lip-sync in other languages; new style Anime: Shōnen Cyberpunk (44 styles); reference images made in VE; a tighter browser workflow.

## VideoExpress Scripting 2.3.0 (2026-10-05)

One [PRODUCTION SOUND] block per segment; detailed character reference sheets built in stages; props that hold their shape.

## VideoExpress Scripting 2.2.1 (2026-10-05)

Every prompt starts with its pack reference (`[Clip 12]`, `[Image 12A]`); install from the plugin marketplace in Claude Desktop and ChatGPT.

## VideoExpress Scripting 2.2.0 (2026-10-03)

32 new tested Creative mode styles (43 in all) with demo clips; the project wiki and style catalogue; SKILL.md restructured as a short router with on-demand references.

## VideoExpress Scripting 2.1.0 (2026-10-01)

Lip-synced dialogue inside the multishot prompt; how the engine reads a prompt.

## VideoExpress Scripting 2.0.0 (2026-09-29)

VE 3.5 production learnings and guided project intake.
