# What's new

Read at the start of a new project, when the user says yes to a summary of what's new (SKILL.md, Starting a new project). Summarise the latest version in a few short bullets, in plain words; don't paste this file. Older versions are on the [releases page](https://github.com/ratava/videoexpress-scripting-skill/releases).

## 2.5

### Headline

- **New companion skill: VideoExpress Prompt.** A step-by-step wizard for one image or clip prompt, or an image and its clip, using the same rules and styles as this skill. Use it for a single shot; use VideoExpress Scripting for a whole multi-clip video.
  - Ask: "There's a new companion skill, VideoExpress Prompt: a step-by-step wizard for a single image or clip prompt. Would you like to install it?"
  - Skip if: the `videoexpress-prompt` skill is already among your available skills.

### New

- **Grok support.** The skill installs in Grok (free trial and paid plans only) by asking Grok to install it from its GitHub folder link.
- **New style: Graffiti** (aerosol spray-paint toon, caricatures, street mural).
- **Sitting and walking to a mark.** VE ignores collision and which way furniture faces, so seats are now chosen with no front (a crate, stool, low wall or bollard), and a mark a character walks to sits clearly nearer the camera, with a short walk.
- **A gesture under a Lipsync HD line.** The Lipsync dialog's Video Prompt can steer one directed gesture, described in frame terms (which arm by frame side, how high, which third of the frame, hold, return).
- **Tagged start-image prompts.** Start images can use section tags ([SUBJECT], [FRAMING AND POSITION], [BACKGROUND], [LIGHT AND STYLE], [NEGATIVES]) as well as prose.
- **Misread words.** When VE mispronounces a word, respell it inside the quotes ("Skrip-ting") with a plain-English note outside them.

### Changed

- **Consistent Character affects Create Image only.** A video prompt's [REFERENCE USE] now names only the start image, and the browser workflow no longer sets Consistent Character for clips.
- **References and pose.** A reference can carry its pose and props into an image; a pose stated in the prompt overrides it.
- **Numbers.** Ages, lengths and counts can be written as digits; only signs, screens and other text-bearing objects need describing as abstract shapes and light.
- **Chaining inside VE.** Clips chain from VE's Save Last Frame, with no trimming or retiming outside VE. Plan the framing so a clip ends where the next begins, and the skill flags any detail risk for you to decide.
- **Removed:** the claim that face references turn clips realistic, which was never tested. The style anchor rule is unchanged.
