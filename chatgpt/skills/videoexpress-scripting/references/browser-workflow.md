# Operating VideoExpress in the browser

How to run an approved prompt pack through app.videoexpress.ai (VE 3.5) with an assistant that can control a browser (ChatGPT agent mode, the Codex app or Chrome extension, or similar), with the user approving every generation. Learned in supervised production runs; follow it step by step.

Assume the script is approved (or approved enough for a test). The user owns every creative decision. The assistant drives the UI, enters prompts exactly as written, and stops at each checkpoint.

## Ground rules

- **Stop at every checkpoint.** Never accept an image or take, chain from a frame, or change a prompt without the user's pick. After any image generation, ask which image to use **immediately**, in the same reply.
- **Every review question says what the result should look like.** Before asking the user to pick or accept an image or take, describe what a correct one shows, taken from its prompt: framing and subject position, each action beat in order, the camera move, the ending frame, key props, and for clips the sound and any spoken line. Nobody can review a take properly without knowing what it was meant to be.
- **Every choice is a short, numbered question.** Go-ahead questions are yes/no. Offer at most four options per question; if the platform provides a tappable-options widget, use it, otherwise ask in plain text with numbered options and wait for the user's reply.
- **Drift checks are the user's job.** The assistant sees single frames, not motion. Flag obvious drift only. Don't edit prompts unasked.
- **Paste prompts exactly.** Only code-block text from the script. Never paraphrase.
- **Never announce an action without doing it** in the same reply ("Generating image B now" must be followed by the actual clicks).
- **The user may be working in the same tabs.** If a dialog, prompt or selection has changed since the assistant last touched it, don't undo it. Report what's there and ask.
- **Say when unsure.** If an image is ambiguous (how a prop is held, whether a feature is present), describe what you see, say it's uncertain, and ask. Don't assert.

## Platform notes

This workflow was developed with an assistant that can only act while writing a reply, has a limit on tool actions per reply, and offers a tappable question widget. Adjust for the platform in use:

- **ChatGPT agent mode / Codex app or Chrome extension:** sessions can run for many minutes, so the assistant may poll the library until renders finish instead of ending the reply. Keep every user checkpoint below regardless; a long session is not permission to pick images or takes.
- **Reply-bounded assistants:** follow the render cycle below exactly. Never wait inside a reply for renders.
- **No question widget:** ask in plain text with numbered options and stop until the user answers.

## Turn budget and the render cycle

Where the assistant can only act while writing a reply and each reply has a limit on tool actions: renders take several minutes, so **never wait inside a reply for renders to finish.** Long chains of waits exhaust the budget and the reply ends silently mid-task.

The cycle per clip:

1. Set up and submit the takes.
2. Confirm the tiles exist in the library (a rendering tile shows a percentage).
3. Straight away, report each take's grid position and ask which take to keep (see Review checkpoint). Don't ask whether the renders have finished; the user watches and reviews them anyway. Include the refresh note: *the grid stops updating partway through a render, so once a tile reaches 50%, click the purple back arrow at the bottom of the Media Library panel and open My AI Videos again; the take has often already finished.*

Be efficient with actions: batch clicks and checks, read page state with one script instead of screenshots where possible, and avoid navigating back and forth in the library.

## Session setup

1. **Always work in two tabs; don't ask the user.** Open `https://app.videoexpress.ai` in two tabs. An authorised browser logs straight in. Close any **Latest News and Updates** sidebar with its **Close** button.
2. **Name the tabs:**
   - **Creation tab:** the generator dialog only.
   - **Review tab:** the saved project, the library and the timeline.
3. In the Review tab, start a new project (**New**) or open one (**Open** → pick it → **Open**). VE won't save an empty project (Save only shows "Your project is empty"), so a new project gets its name on the first save, straight after the first **Add to Timeline** (**Save** → project name → **Save**).
4. In the Creation tab: **Create with AI → Create Video From Prompt** (the arrow on that card). Leave the dialog open all session.

## The Create Video From Prompt dialog

**Top:** orientation toggle, **Landscape 16:9** / **Vertical 9:16**.

**Image side:** Image Prompt box · Image Type · Use Creative mode · Automatically enhance my image prompt · Use Consistent Character (reveals **Reference Photo** and optional **Reference Photo 2**) · Use from Library.

**Video side:** Video and Audio Prompt box · Lipsync HD Video · Narration Video · Share this in the public gallery · Advanced Mode (reveals Automatically enhance my video prompt · Video Only (No Sound) · **Manual Video Length, sec** checkbox and its slider, 3–10 s).

**Buttons:** Enhance Prompt · Create Image · Consistent Character · Create Video (active once an image is selected) · Close.

"Multi-Shot" is only a label beside the video box. Multi-shot is the prompt structure itself (timed `[ACTION]` segments; optionally hard cuts between shots), not a setting.

The dialog's state can reset (after a page reload, or unexpectedly): prompts cleared, images gone, references cleared, Advanced Mode off, length back to 5. **Re-verify all settings, references and the opening image before every submission.**

### Settings rules

| Setting | Rule |
|---|---|
| Landscape 16:9 / Vertical 9:16 | Match the pack's aspect ratio; check it before the first Create Image |
| Use Creative mode | Always on for image creation |
| Automatically enhance my image prompt | Always off. It re-ticks itself after generations; untick before every Create Image |
| Use Consistent Character | On for images and clips featuring the reference characters; **off** for shots with no characters (point of view, empty environments, inserts). Unticking it leaves the reference slots filled, so clear both slots with their trash icons as well |
| Advanced Mode + Manual Video Length | Tick Advanced Mode, then tick **Manual Video Length, sec**: it is unticked by default and the slider is ignored until it is ticked. Set the slider to the clip's length. Setting the slider by dragging can miss; verify its value |
| Video Only (No Sound) | Off when the prompt has a `[PRODUCTION SOUND]` block. It can end up ticked unexpectedly; verify every time |
| Automatically enhance my video prompt | Never on. It rewrites the prompt into about two hundred words of prose, drops the bible blocks, time labels and clip reference, and can refuse a clip whose dialogue it judges too long |
| Lipsync HD Video | On only for dialogue clips using the Lipsync HD dialog (SKILL.md 6b, Method B). Off for dialogue written inside the multishot prompt, which uses the normal Manual Video Length. Set the length **before** ticking it (ticking hides the length controls) and untick it for the next clip |
| Narration, Share to public gallery | Off unless the script calls for them. Check sharing before every Create Image and Create Video |

Verify checkbox states and slider value by reading the page (a script on the visible inputs), not from a screenshot.

## Consistent Character reference slots

- Tick **Use Consistent Character**. Clicking **Reference Photo** or **Reference Photo 2** opens the library picker (**Select Image**), not a system file picker.
- In the picker: open **My AI Images**. It loads 20 items at a time; scroll to the bottom and click **More** for older ones. Search doesn't match prompt text, and titles are truncated. Images saved from the generator are titled with the start of their prompt and can't be renamed, so find references by their thumbnail and their `[Image R1]` title prefix.
- Slot 1 is the main character; slot 2 is a second character. Screenshot to confirm each slot shows the right thumbnail. Both buttons share one CSS class, so picking by class alone can fill the wrong slot.
- Remove a reference with the trash icon on its thumbnail. The icon itself ignores clicks, so when clicking by script, click the element around it.
- If the picker shows **Empty.**, close it and reopen it from the Reference Photo button.

## Entering a prompt

1. Select the textarea's content and replace it. Typing is reliable. Setting the value programmatically also works, but then **nudge it with a real keystroke** (click in the box, press Ctrl+End, type a space, then Backspace) so the page registers the change.
2. **Verify the content, not just the length.** Check a phrase unique to this clip is present and one unique to the previous clip is gone.
3. **Check the prompt starts with its pack reference** in square brackets, exactly as the pack declares it (`[Clip 12]`, `[Image 12A]`, `[Clip 12 TEST 1]`), with nothing before it. Library tiles show the first words of the prompt, so this is how each tile is matched to the pack, and how takes are reported to the user ("Clip 12, take 3"). Lipsync takes show VE's own caption instead, so identify those by position.

## Start images

1. Paste the start-image prompt, confirm the settings (Creative mode on, enhancement off, Consistent Character as required) and click **Create Image**.
2. VideoExpress makes **one candidate per pass with Consistent Character off, and two with it on**. The carousel keeps every pass from the session, so check the pass count (the dots under the carousel) and describe **only the newest pass**, unless the user refers to another.
3. **Checkpoint, straight away:** say what the image should show, from its prompt, describe honestly where each candidate misses it, and ask: left or right (or use it, when there is one candidate), or regenerate (same or altered prompt). Ask when you can't tell.
4. **Selection is per pass.** Each pass has its own tick, so several ticks can show across the carousel. The active pass's tick is the one used. Click the chosen candidate so its tick moves.
5. Save accepted start images and references with the hover **save** icon (they land in My AI Images). VE saves them under the start of their prompt and they can't be renamed, so find them later by their `[Image 12A]` prefix. Only Save Last Frame lets you choose a name.
6. With Consistent Character on, VE may rewrite the image prompt. Read the box after generation and tell the user if it changed.

## Generating a clip

1. **Takes:** the usual default is **five simultaneous takes of the same clip**, with the user picking the best. Confirm with the user at the start.
2. Enter the prompt and verify it. Verify the settings and both reference slots.
3. Click **Create Video** once per take, **about eight seconds apart**, checking between clicks that the button is enabled and the prompt is unchanged.
4. **Record positions as you submit.** The library shows newest first, two per row. With five takes: take 5 is row 1 left, take 4 row 1 right, take 3 row 2 left, take 2 row 2 right, take 1 row 3 left. Report this map when asking which take to keep.
5. Confirm the new tiles are in the library, each showing a percentage. The "Your video will appear in your Media Library" message doesn't always show, so the tile is the only confirmation: if the message is missing, check the tile before the next click. Two-actor Lipsync takes can take about half a minute to appear, because the audio is built first.

## Watching progress (Review tab)

- **Media Library → My AI Videos**, sorted Newest.
- **The grid goes stale.** Refresh by clicking the purple back arrow (bottom left of the panel), then reopening **My AI Videos**. If the panel won't reopen, toggle Media Library in the right sidebar.
- **Refresh once a tile reaches 50%.** The grid stops updating partway through a render, so a tile can keep showing a percentage (50% or more) after the take has finished. From the first reading of 50% or more, refresh before every check; don't wait for it to reach 100%.
- The Creation tab's "generation … completed" notification is unreliable.
- The assistant's view of the library can lag behind the user's. If the user says tiles exist, believe them.

## Review checkpoint

Ask which take to keep as soon as the takes are submitted, naming positions. Don't ask first whether they've finished: the user watches the renders and reviews them anyway. Say what the take should look like, from its prompt: the opening frame, each action beat in order, the camera move, the ending framing (and whether the next clip chains from it), and the sound or spoken line. Add the note: **check for environment and prompt drift before selecting**, include the refresh note, then leave the call to the user.

Right-click menu on a video tile: Play · Download · Add to Timeline · Details · Redesign · Fix Video · Voice Changer · Save Audio · **Save Last Frame** · Organize · Delete · Create work copy · Share. Close any open Play media window before right-clicking.

## After a take is accepted

1. **Scroll the library to the top first.** A right-click lower down can scroll the list and hit the wrong tile.
2. Right-click the take → **Save Last Frame**. **Check the title prefilled in the dialog** (the start of that take's prompt) to confirm it's the right tile. Replace it with a unique name that includes a project or version prefix (`v3 Clip 4`), because earlier projects' frames may already use `Clip 4`. Click **Save**.
3. Right-click the same take → **Add to Timeline**. Check the timeline clip count went up by one.
4. **Save the project** after each add or two; a new project gets its name on the first save. The timeline only survives a reload if it was saved.

## Setting up a chained clip (Creation tab)

1. **Use from Library** → **My AI Images** → pick the frame **by name**, then **Choose**.
2. **Look at the loaded frame before writing the prompt.** If it's the wrong framing or pose for the next clip, tell the user and offer a fresh start image instead.
3. Confirm Consistent Character and both reference slots are as needed, enter the prompt, verify it, verify the settings, and generate.

## Lipsync dialogue clips

1. Enter the main video prompt (the action and sound; no dialogue in it). Set the length.
2. Tick **Lipsync HD Video**, then click the lipsync **Create Video** button. The **Create Lipsync Audio** dialog opens.
3. In the dialog's **Video Prompt** field, describe each actor with their actions: "Actor 1 is [description, position], [action], [voice]. Actor 2 is …". This is a separate field from the main prompt, with its own `prompt` name.
4. Put Actor 1's line in **Actor 1 Script**. For a second speaker, click **Add Actor 2** and fill **Actor 2 Script**. Each line must be under 100 characters.
5. **Check the Total characters counter.** If it doesn't match the typed lines, click in each script field and press a key (a space, then Backspace) so it registers.
6. Click **Create** inside the dialog. For each further take, click the lipsync Create Video button again: the dialog reopens with its fields kept, so check them and click **Create**.
7. The dialog keeps Actor 2 between clips; clear it for single-speaker clips. After a page reload, the dialog starts empty.

## Recovery

- **Page reloaded or tab lost:** reopen the saved project in the Review tab (**Open** → project → **Open**) and check the timeline clip count against the last known state. Clips added after the last save are gone; re-add them in order.
- **The tab group changed** (a tab isn't reachable, or a new tab appears): list the tabs again before acting.
- **The window shrank or resized:** stop. Coordinates are no longer valid. Ask the user to restore the window, then re-screenshot.
- **The user fixed something themselves:** re-read the state and carry on from there. Don't redo their work.

## Prompt hardening

After the **first** clip is added to the timeline, ask whether to harden prompts. If the user defers, ask again after the **second**.

1. Ask the user to park the timeline playhead on the frame that best shows the character and environment.
2. Click the **film strip icon** (timeline toolbar) to save the current frame to My AI Images, with a clear name (e.g. `Hardening reference`).
3. Open it at full size (right-click → Preview → expand) and inspect it.
4. Compare it against the character, outfit and location blocks: clothing details, hair side, props and how they're carried, structures and their positions.
5. Propose hardened blocks. On approval, update only clips not yet generated, and label the blocks as hardened, noting the frame they came from.

## Per-clip cycle, at a glance

Load and inspect the opening frame (by name) → set Consistent Character and the reference slots → enter and verify the prompt, starting with its [Clip N] reference → verify settings (length, Video Only, Lipsync, sharing) → submit the takes about eight seconds apart, recording positions → confirm the tiles exist → card: which take, with positions, what it should look like and the refresh note → scroll the library to the top, then Save Last Frame (check the title, use a unique name) → Add to Timeline → save the project → card: next step.
