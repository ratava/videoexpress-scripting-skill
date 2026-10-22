# What's new

Read on the skill's first use in a conversation, when the user says yes to a summary of what's new (SKILL.md, First use in a conversation). The current release notes are every section from the top of this file down to and including the latest x.y release (now 2.5.5, 2.5.1 and 2.5): summarise them together in a few short bullets, in plain words, leading with the Headline items, and offer every Headline item that has a question. Don't paste this file. Older versions are on the [releases page](https://github.com/ratava/videoexpress-scripting-skill/releases).

## 2.5.5

### Headline

- **Clip review: video and sound checks.** When you ask for a review of your takes, or hand take picks over, each finished take is checked in VideoExpress without downloading it: twelve frames from start to end and a spectrogram of its soundtrack on one sheet. The review reports the opening and ending frames, each action beat and camera move, drift in characters, outfits, props and location, and the sound: no audio track, overall level, steady hiss or hum, a music bed, and whether planned sounds and speech land on time. It can't tell which words are spoken or check lip-sync, and it doesn't see motion between the sampled frames. Needs the browser workflow.

### New

- **Conversations named after the project.** Once a new project has a working title, the conversation is renamed "[title] · VideoExpress" where the app allows it (such as Claude Desktop or Grok); elsewhere the name is left as it is.

### Fixed

- **Starting with just the skill's name** (or its slash command) now goes straight to the "How do you want to start?" card instead of a list of options in text. A first message that already says what you want is acted on without asking.
- **What's new once per version.** Where memory is on, these questions are asked once per version, not in every conversation; without memory they're still asked on first use in each conversation.
- **Private takes** with no public file link are fetched through the library's download address, so Clip review works on them too.

## 2.5.1

- **What's new is asked on first use.** These questions now come the first time the skill is used in a conversation, whatever the first message is, instead of only at the start of a new project.
- **Changelog wording.** The Consistent Character entry below now says plainly that VideoExpress hasn't changed: the skill's guidance was corrected.

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

- **Corrected: Consistent Character in clips.** The skill no longer sets Consistent Character for clips or names reference images in video prompts; [REFERENCE USE] names only the start image. VideoExpress hasn't changed: Consistent Character has only ever affected Create Image.
- **References and pose.** A reference can carry its pose and props into an image; a pose stated in the prompt overrides it.
- **Numbers.** Ages, lengths and counts can be written as digits; only signs, screens and other text-bearing objects need describing as abstract shapes and light.
- **Chaining inside VE.** Clips chain from VE's Save Last Frame, with no trimming or retiming outside VE. Plan the framing so a clip ends where the next begins, and the skill flags any detail risk for you to decide.
- **Removed:** the claim that face references turn clips realistic, which was never tested. The style anchor rule is unchanged.
