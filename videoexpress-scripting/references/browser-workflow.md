# Operating VideoExpress in the browser

How to run an approved prompt pack through app.videoexpress.ai with Claude in Chrome, with the user approving every generation. Learned in a supervised training run; follow it step by step.

Assume the script is approved (or approved enough for a test). The user owns every creative decision. Claude drives the UI, enters prompts exactly as written, and stops at each checkpoint.

## Ground rules

- **Stop at every checkpoint.** Never accept an image or take, chain from a frame, or change a prompt without the user's pick.
- **Drift checks are the user's job.** Environment and prompt drift (a structure appearing or vanishing, outfit changes) is judged by the user at review. Flag it only when it's obvious. Don't edit prompts unasked.
- **Go-ahead questions are yes/no** ("Set up and generate clip 6?" → Yes / No).
- **Button questions hold four options at most.** If the choices don't fit, ask in plain text. Never split a choice into a second "confirm" question.
- **Paste prompts exactly.** Only code-block text from the script. Never paraphrase.

## Session setup

1. **Ask:** one browser tab or two? Two is the norm. With one tab, the creation dialog has to be reopened and its settings re-entered for every generation.
2. Open `https://app.videoexpress.ai` in each tab. An authorised browser logs straight in. If a **Latest News and Updates** sidebar appears, close it with the **Close** button at its bottom (it may only show once per session).
3. **Name the tabs:**
   - **Creation tab:** prompting only.
   - **Review tab:** reviewing takes and building the timeline.
4. In the Creation tab: **Create with AI → Create Video From Prompt** (the arrow on that card). Leave the dialog open all session.

## The Create Video From Prompt dialog

**Image side:** Image Prompt box · Image Type (greyed out when Creative mode is on) · Use Creative mode · Automatically enhance my image prompt · Use Consistent Character (reveals Reference Photo + optional Reference Photo 2) · Use from Library.

**Video side:** Video and Audio Prompt box · Lipsync HD Video · Narration Video · Share this in the public gallery · Advanced Mode (reveals Automatically enhance my video prompt · Video Only (No Sound) · Manual Video Length slider, 3–10 s).

**Buttons:** Enhance Prompt · Create Image · Consistent Character · Create Video (active once an image is selected) · Close.

"Multi-Shot" is only a label beside the video box. Multi-shot is the prompt structure itself (timed `[ACTION]` segments, each with `[CAMERA]` and `[LIGHT AND IMAGE]`), not a setting.

### Settings rules

| Setting | Rule |
|---|---|
| Use Creative mode | Always on for image creation |
| Automatically enhance my image prompt | Always off |
| Use Consistent Character | On only if the user uses that feature. Off once a chained clip's opening frame is loaded from the library |
| Advanced Mode + Manual Video Length | On whenever the clip isn't 5 s; set the slider to the clip's length |
| Video Only (No Sound) | On unless the prompt has a `[Production Sound]` tag or clear sound design |
| Automatically enhance my video prompt | Never on |
| Lipsync, Narration, Share to public gallery | Off unless the script calls for them |

Before any generation, verify the checkbox states and slider value by reading the page (e.g. JavaScript on the visible inputs), not from a screenshot.

## Entering a prompt

1. Find the textarea by its reference and click it, then Ctrl+A, then Delete. Confirm the box is empty.
2. Type the prompt.
3. **Verify the content, not just the length.** Check a phrase unique to this clip is present, and a phrase unique to the previous clip is gone. A click can silently miss, leaving the old prompt in place.

## Starting image (project start only)

1. **Ask about the consistent character:** already built, use the starting image as the character, or write a consistent-character image prompt first. If one is built, the user loads the reference photos. The Reference Photo button opens a file picker Claude can't use.
2. Paste the start-image prompt, confirm the settings, click **Create Image**. VideoExpress makes **two candidates**.
3. **Checkpoint:** accept the left candidate, accept the right, regenerate with the same prompt, or regenerate with an altered prompt. Report honestly where the candidates miss the prompt (e.g. an eye-level shot when an aerial was asked for).
4. Click the chosen candidate to select it (a tick appears). On hover it shows zoom and save icons. Click **save** to store it in Media Library → My AI Images. **Do this only for the project's starting image.**

## Generating a clip

1. **Before the first clip, ask:** how many simultaneous generations each time, 1 to 5?
2. Enter the clip's video prompt and verify it. Confirm the settings.
3. Click **Create Video** once per generation, **about six seconds apart**. Clicks two seconds apart can fail to register.
4. In the Review tab, check the tile count matches the click count. If one is missing, click Create Video again.

## Watching progress (Review tab)

- Go to **Media Library → My AI Videos** (sorted Newest).
- **Library bug:** the grid doesn't refresh on its own. Every ~10 s, click the **back arrow** (bottom left of the panel), then reopen **My AI Videos**.
- The Creation tab shows a "generation … completed" notification, but it's unreliable. Only trust a refreshed tile.
- **~50% usually means done.** Once a tile passes about 50%, refresh to confirm it's complete (ring gone, video icon and title showing).
- **Order is newest first.** The last Create Video click is the first tile. Number generations in click order: with two, Generation 1 is top right and Generation 2 top left.

## Review checkpoint

Ask which to do, naming every generation, e.g. *Accept Generation 1 (top right)*, *Accept Generation 2 (top left)*, *Generate again with the same prompt*, *Generate again with an altered prompt*. Always add the note: **check for environment and prompt drift before selecting.**

Claude only sees single frames, so it can't judge motion. Point out what to watch for in that clip (camera move, ending framing, sun direction, whether a chained element persists), then leave the call to the user. Hovering a tile plays a preview, with thumbs up/down.

Right-click menu on a video tile: Play · Download · Add to Timeline · Details · Redesign · Fix Video · Voice Changer · Save Audio · **Save Last Frame** · Organize · Delete · Create work copy · Share. Close any open Play media window before right-clicking.

## After a take is accepted

1. **If the next clip chains from it:** right-click → **Save Last Frame** → clear the title → name it after the clip (`Clip 1`, `Clip 2` …) → **Save**. Wait for the confirmation ("The last frame has been saved to the 'My AI Images' category"). An earlier toast can linger, so confirm the named frame is really in the library when loading it.
2. Right-click the take → **Add to Timeline.** It appends to the end of track 1, keeping clips in order.

## Setting up a chained clip (Creation tab)

1. **Use from Library** → **My AI Images** → pick the frame **by name**, not position. Other saves, like a hardening frame, can push it off the top. Then **Choose**.
2. The frame becomes the dialog's main image. If Use Consistent Character is on, untick it.
3. Replace the video prompt (see "Entering a prompt"), confirm the settings, and generate.

## Prompt hardening

After the **first** clip is added to the timeline, ask whether to harden prompts. If the user defers, ask again after the **second**.

1. Ask the user to park the timeline playhead on the frame that best shows the character and environment.
2. The preview window is usually too small for detail. Click the **film strip icon** (timeline toolbar) to save the current frame to My AI Images, and give it a clear name (e.g. `Hardening reference`).
3. In My AI Images, right-click the frame → **Preview**, then the expand button to view it at full size. Pan around to inspect it. (Download also works, but files land on the user's computer, where Claude can't read them.)
4. Compare the frame against the script's character, outfit and location blocks. Pay close attention to **clothing** (trim, fabrics, fastenings, soles) and **environment** (railings, structures and their position in frame, skyline landmarks, vehicles), so later scenes drift less.
5. Propose hardened blocks, and note where camera moves mean an element should leave the scene (e.g. a version without a structure for later clips).
6. On approval, update the script **only for clips not yet generated**, and label the blocks as hardened, with the frame they came from. Generated clips stay as they were.

## Per-clip cycle, at a glance

Load the opening frame (by name) → untick Consistent Character → paste and verify the prompt → verify settings → Create Video ×N, ~6 s apart → confirm N tiles → refresh every ~10 s until complete → review checkpoint (with the drift note) → Save Last Frame as `Clip N` if the next clip chains → Add to Timeline → yes/no: set up the next clip?
