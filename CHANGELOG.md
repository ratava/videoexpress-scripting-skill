# Changelog

Release notes for the skills in this repo. Full notes for each release are on the [releases page](https://github.com/ratava/videoexpress-scripting-skill/releases).

Each skill also carries its latest notes in `references/changelog.md`, and offers a short summary of what's new the first time it's used in a conversation.

## VideoExpress Scripting 2.6.0 and VideoExpress Prompt 1.2.0 (2026-10-30)

### VideoExpress Scripting 2.6.0: headline

- **Consistent voices with Voice Changer.** When a character speaks in more than one clip, the skill keeps their voice the same with VideoExpress's Voice Changer, from a voice sample per character: audio saved from one of their clips, a clean upload or Voice Recorder take, CloneVoice.ai (sold separately), or VE's own text to speech. Asked at intake; the sample is saved when a speaker's first dialogue clip is accepted, and a voice pass is offered once the timeline is trimmed. Two-speaker clips are separated and cut at the pause so only one voice changes.
- **Narrated story videos.** A new format (`references/narrated-story.md`) for stickman videos, fables and children's stories: one narrated line per clip through Narration Video (VE text to speech, Voice Recording, Import Audio up to 10 s, or CloneVoice.ai), a character master in Reference Photo 1 and an empty-location reference in Reference Photo 2, a fresh start image per scene (chaining offered when the action needs it), then Add to Timeline and Auto Align Clips. Based on VideoExpress's own stickman workflow.
- **Festive styles and scenes for Christmas.** Four Christmas styles (Christmas Diorama, Snow Globe, Gingerbread, Holiday Stop-Motion) and two add-ons for any style, Festive Winter and Festive Summer, for the half of the world that has Christmas in summer. The add-ons were tested on ten styles across 2D, 3D, craft, painted and print looks; `styles/festive-addons.md` has the rules for limited-palette and character styles.

### VideoExpress Scripting 2.6.0: new

- **Artistly and CloneVoice.ai, if you have them.** On first use the skill asks once whether you have VideoExpress's companion products, offers to check in your browser that their API keys are added to VideoExpress (Edit profile; a key means linked), and remembers the answer. Artistly can make the start images; CloneVoice, voices. Products you don't have are named with an affiliate link, disclosed beside it. Everything works with VideoExpress alone.
- **Screen captures for training videos.** VideoExpress's Screen Recorder records a tab, window or screen with tab or system audio and your microphone, straight into the media library.
- **Timeline filters as suggestions.** Camera Pan, Zoom In, Titles, Audio Wave, Change Speed, audio fades, Opacity, Resize And Move and Green Screen, suggested when a video calls for them and applied on your yes.
- **18 new styles:** Greyscale Airbrush, Steampunk, Flat Vector Explainer, Marker Doodle, Modern 2D Cartoon, Chibi, Crayon Drawing, Impressionist, Colour Comic, Game Cinematic, Fantasy Painting, Travel Poster, Tilt-Shift Miniature, Voxel, Folk Art, Vintage Horror, Stickman, Miniature Pan. Style sheets gain an optional "Artistly match" field.
- **Browser workflow.** Reference Photo 2 can hold an empty location; Add to Timeline appends and Auto Align Clips closes gaps; lettering in start images is drawn large and well inside the frame.

### VideoExpress Prompt 1.2.0

- **Festive styles and scenes for Christmas** (headline), the **18 new styles**, **consistent voices** guidance, **Reference Photo 2 for a location**, and **companion product links** (affiliate, disclosed), all from the shared references.

## VideoExpress Scripting 2.5.6 (2026-10-23)

- **Straight into production.** As soon as the script is signed off, the skill gives the first paste-ready prompt in pack order (usually the first Consistent Character reference, otherwise Image 1A) in full with its settings, whoever operates VideoExpress. If the assistant operates it, the skill also asks whether to open the two VideoExpress tabs in the browser now, and runs Session setup on yes.
- **What's new as a list.** The what's-new summary is shown as a bulleted list, a heading per version and a bullet per item, never folded into a sentence. The same change is in VideoExpress Prompt's SKILL.md and changelog, without a version change (still 1.1.0).

## VideoExpress Scripting 2.5.5 and VideoExpress Prompt 1.1.0 (2026-10-23)

### VideoExpress Prompt 1.1.0

- **What's new.** The first time the prompt skill is used in a conversation it asks whether you'd like a summary of what's new, from its own `references/changelog.md`. Where memory is on, it asks once per version.
- **Conversations named after the shot.** Once the shot has a subject, the skill renames the conversation "[subject] · VideoExpress Prompt" where it has a tool for that (Claude Desktop's session title, Grok); ChatGPT can't rename chats.
- **Chat or Code (Claude build).** After the what's-new question, the skill checks for local file access; in Chat it tells you once that it can't open or save files on your computer, to upload images and copy prompts from the chat, and that the Code tab in Claude Desktop works with your files.
- **Bare invocation.** Started with only its name or slash command, the skill goes straight to the "Do you have something to start from?" card instead of a prose menu; a first message that already says what's wanted is acted on without asking.

### VideoExpress Scripting 2.5.5: new

- **Clip review: video and sound checks.** Asked to review takes, or handed take picks, the assistant checks each finished take inside VideoExpress without downloading it: a page script fetches the take from the library and draws twelve frames from start to end plus a spectrogram of its soundtrack on one sheet, with per-second level and high-band share. It reports the opening and ending frames, action beats, camera moves and drift, and the sound: no audio track, level, steady hiss or hum, a music bed, and whether planned sounds and speech land on time. It doesn't identify words, check lip-sync or see motion between the sampled frames. Part of the browser workflow; offered as a headline item in what's new.
- **Conversations named after the project.** Once a new project has a working title, the skill renames the conversation "[title] · VideoExpress" where it has a tool for that (Claude Desktop's session title, Grok); ChatGPT can't rename chats, so the name is left as it is there.
- **Chat or Code (Claude build).** After the what's-new questions, the skill checks for local file access; in Chat it tells you once that it can't open or save files on your computer, to upload scripts or images and download the pack, and that the Code tab in Claude Desktop works with your files for a full project.

### VideoExpress Scripting 2.5.5: fixed

- **Bare invocation.** Started with only its name or slash command, the skill goes straight to the "How do you want to start?" card instead of a prose menu; a first message that already says what's wanted is acted on without asking.
- **Private takes.** Takes with an empty `mediaPath` are fetched through `/library/download/<id>`, so Clip review no longer stops with "take not found or still rendering".
- **What's new once per version.** Before asking, the skill checks memory it can read for a note that this version's what's-new questions were shown, and skips them if so; after asking it saves that note when memory is on. Without memory it asks on first use in each conversation, as before.
- What's new only asks a Headline item's question when it has one.

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
