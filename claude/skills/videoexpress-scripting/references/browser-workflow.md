# Operating VideoExpress in the browser

How to run an approved prompt pack through app.videoexpress.ai (VE 3.5) with Claude in Chrome, with the user approving every generation. Learned in supervised production runs; follow it step by step.

Assume the script is approved (or approved enough for a test). The user owns every creative decision. Claude drives the UI, enters prompts exactly as written, and stops at each checkpoint.

## Ground rules

- **Stop at every checkpoint.** Never accept an image or take, chain from a frame, or change a prompt without the user's pick. After any image generation, ask which image to use **immediately**, in the same reply.
- **Every review question says what the result should look like.** Before asking the user to pick or accept an image or take, describe what a correct one shows, taken from its prompt: framing and subject position, each action beat in order, the camera move, the ending frame, key props, and for clips the sound and any spoken line. Nobody can review a take properly without knowing what it was meant to be.
- **Every choice is a question card.** Go-ahead questions are yes/no. Cards hold four options at most. If a choice has more (e.g. five takes), use three direct options plus a combined "2/1 (I'll type) / none" option, then ask in plain text if needed.
- **Drift checks are the user's job.** Claude sees sampled frames, not motion, unless asked to run a Clip review (below). Flag obvious drift only. Don't edit prompts unasked.
- **Paste prompts exactly.** Only code-block text from the script. Never paraphrase.
- **Never announce an action without doing it** in the same reply ("Generating image B now" must be followed by the actual clicks).
- **The user may be working in the same tabs.** If a dialog, prompt or selection has changed since Claude last touched it, don't undo it. Report what's there and ask.
- **Say when unsure.** If an image is ambiguous (how a prop is held, whether a feature is present), describe what you see, say it's uncertain, and ask. Don't assert.

## Turn budget and the render cycle

Claude can only act while writing a reply, and each reply has a limit on tool actions. Renders take several minutes. **Never wait inside a reply for renders to finish.** Long chains of waits exhaust the budget and the reply ends silently mid-task.

The cycle per clip:

1. Set up and submit the takes.
2. Confirm the tiles exist in the library (a rendering tile shows a percentage).
3. Straight away, report each take's grid position and ask with a card which take to keep (see Review checkpoint). Don't ask whether the renders have finished; the user watches and reviews them anyway. Include the refresh note: *the grid stops updating partway through a render, so once a tile reaches 50%, click the purple back arrow at the bottom of the Media Library panel and open My AI Videos again; the take has often already finished.*

Be efficient with actions: batch clicks and checks, read page state with one script instead of screenshots where possible, and avoid navigating back and forth in the library.

## Session setup

Run it when the user says yes to opening the tabs after script sign-off (`project-intake.md`, Starting production), or whenever the user asks.

1. **Always work in two tabs; don't ask the user.** Open `https://app.videoexpress.ai` in two tabs. An authorised browser logs straight in. Close any **Latest News and Updates** sidebar with its **Close** button.
2. **Name the tabs:**
   - **Creation tab:** the generator dialog only.
   - **Review tab:** the saved project, the library and the timeline.
3. In the Review tab, start a new project (**New**) or open one (**Open** → pick it → **Open**). VE won't save an empty project (Save only shows "Your project is empty"), so a new project gets its name on the first save, straight after the first **Add to Timeline** (**Save** → project name → **Save**).
4. In the Creation tab: **Create with AI → Create Video From Prompt** (the arrow on that card). Leave the dialog open all session.

### Linked companion products (Artistly, CloneVoice)

When the user says they have Artistly.ai or CloneVoice.ai (asked on the skill's first use, SKILL.md, Companion products) and agrees to a check, or before offering a route that needs one: click the account name (top right of the header) → **Edit profile**. The Profile dialog has an **Artistly.ai API key** field (with an **Import** button beside it) and a **CloneVoice.ai API key** field. **A key in the field means that product is linked.** Read only whether each field is filled; never copy, quote or repeat a key. Close the dialog with **Close**, not **Save**. Use those routes only when the product is linked or the user has said they own it; the VE-only route must always work without them.

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
| Use Creative mode | Always on for image creation, except the Stickman style (tested with Creative mode off and Image Type 2D) |
| Automatically enhance my image prompt | Always off. It re-ticks itself after generations; untick before every Create Image |
| Use Consistent Character | Affects **Create Image only**; Create Video ignores it and its slots, so its state doesn't matter when making clips. On for start images featuring the reference characters; **off** for images with no characters (point of view, empty environments, inserts). Unticking it leaves the reference slots filled, so clear both slots with their trash icons as well |
| Advanced Mode + Manual Video Length | Tick Advanced Mode, then tick **Manual Video Length, sec**: it is unticked by default and the slider is ignored until it is ticked. Set the slider to the clip's length. Setting the slider by dragging can miss; verify its value |
| Video Only (No Sound) | Off when the prompt has a `[PRODUCTION SOUND]` block. It can end up ticked unexpectedly; verify every time |
| Automatically enhance my video prompt | Never on. It rewrites the prompt into about two hundred words of prose, drops the bible blocks, time labels and clip reference, and can refuse a clip whose dialogue it judges too long |
| Lipsync HD Video | On only for dialogue clips using the Lipsync HD dialog (SKILL.md 6b, Method B). Off for dialogue written inside the multishot prompt, which uses the normal Manual Video Length. Set the length **before** ticking it (ticking hides the length controls) and untick it for the next clip |
| Narration Video | On only for narrated-story clips (Narration Video, below) |
| Share this in the public gallery | Off unless asked. Check it before every Create Image and Create Video |

Verify checkbox states and slider value by reading the page (a script on the visible inputs), not from a screenshot.

## Consistent Character reference slots

- Tick **Use Consistent Character**. Clicking **Reference Photo** or **Reference Photo 2** opens the library picker (**Select Image**), not a system file picker.
- In the picker: open **My AI Images**. It loads 20 items at a time; scroll to the bottom and click **More** for older ones. Search doesn't match prompt text, and titles are truncated. Images saved from the generator are titled with the start of their prompt and can't be renamed, so find references by their thumbnail and their `[Image R1]` title prefix.
- Slot 1 is the main character; slot 2 is a second character, or in a narrated story the empty location reference (`narrated-story.md`). Screenshot to confirm each slot shows the right thumbnail. Both buttons share one CSS class, so picking by class alone can fill the wrong slot.
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
7. **Lettering in a start image** (a sign, a title board): VE usually spells it right when it's drawn large and well inside the frame; lettering at the frame edge, or small lettering a later push enlarges, garbles in the clip. If VE still misspells it after a regenerate and the user has **Artistly** linked (Linked companion products, above) or has said they own it, offer to make that start image in Artistly instead and bring it into the library (the **Import** button beside the Artistly key in Edit profile, or **Import Media / Text to Speech** → Artistly; follow the panel's own fields). Otherwise regenerate, enlarge the lettering, or add the text as a title in the edit.

## Generating a clip

1. **Takes:** the usual default is **five simultaneous takes of the same clip**, with the user picking the best. Confirm with the user at the start.
2. Enter the prompt and verify it. Verify the settings.
3. Click **Create Video** once per take, **about eight seconds apart**, checking between clicks that the button is enabled and the prompt is unchanged.
4. **Record positions as you submit.** The library shows newest first, two per row. With five takes: take 5 is row 1 left, take 4 row 1 right, take 3 row 2 left, take 2 row 2 right, take 1 row 3 left. Report this map when asking which take to keep.
5. Confirm the new tiles are in the library, each showing a percentage. The "Your video will appear in your Media Library" message doesn't always show, so the tile is the only confirmation: if the message is missing, check the tile before the next click. Two-actor Lipsync takes can take about half a minute to appear, because the audio is built first.

## Watching progress (Review tab)

- **Media Library → My AI Videos**, sorted Newest.
- **The grid goes stale.** Refresh by clicking the purple back arrow (bottom left of the panel), then reopening **My AI Videos**. If the panel won't reopen, toggle Media Library in the right sidebar.
- **Refresh once a tile reaches 50%.** The grid stops updating partway through a render, so a tile can keep showing a percentage (50% or more) after the take has finished. From the first reading of 50% or more, refresh before every check; don't wait for it to reach 100%.
- The Creation tab's "generation … completed" notification is unreliable.
- Claude's view of the library can lag behind the user's. If the user says tiles exist, believe them.

## Review checkpoint

Ask which take to keep as soon as the takes are submitted, naming positions. Don't ask first whether they've finished: the user watches the renders and reviews them anyway. Say what the take should look like, from its prompt: the opening frame, each action beat in order, the camera move, the ending framing (and whether the next clip chains from it), and the sound or spoken line. Add the note: **check for environment and prompt drift before selecting**, include the refresh note, then leave the call to the user.

If the user asks Claude to review the takes, or has handed take picks to Claude, run a Clip review on each finished take first and include its findings.

Right-click menu on a video tile: Play · Download · Add to Timeline · Details · Redesign · Fix Video · Voice Changer · Save Audio · **Save Last Frame** · Organize · Delete · Create work copy · Share. Close any open Play media window before right-clicking.

## Clip review (frames and sound)

Reviews a finished take in the Review tab without downloading it or playing it: twelve frames from start to end and a spectrogram of its soundtrack, drawn on one sheet over the page. Run it when the user asks, or when the user has handed take picks to Claude. Everything runs as JavaScript in the VE page; no other tool is involved.

1. **Finished takes only.** A take still rendering has no file yet; refresh the library first (see Watching progress).
2. Run the script below with the take's pack reference (`REF`) and its grid position among that clip's takes (`POS`, newest first: 1 is row 1 left, 2 row 1 right, and so on). It fetches the take's file from the library API, so it doesn't depend on the grid being current. Private takes have no public file link (`mediaPath` is empty); the script then fetches the same file through the library's download address in the page.
3. Screenshot the sheet. Zoom into a frame when a detail matters (a prop, a hand, a face). Remove the sheet when done: `document.getElementById('clip-review').remove()`.
4. Report against the prompt, beat by beat:
   - **Frames:** the opening frame, each action beat at its planned time, the camera move and its direction, the ending frame and whether the next clip can chain from it, and drift in characters, outfits, props and location.
   - **Sound:** whether there is a track at all (a take with no audio shows **NO AUDIO TRACK**), overall level, steady hiss or hum (a constant band across the whole clip, often 4–8 kHz), a music bed (level horizontal lines held through the clip), and whether planned sounds and speech land at their times (speech shows as stacked, shifting bands; a single call or horn as one stack of parallel lines).
5. **Limits; say them when reporting.** The spectrogram shows when sound happens and what kind it is, not which words are spoken or exactly what made a sound; name a source only as a likely guess (a stack at about 250 Hz in a paddock scene is probably a cow). Lip-sync accuracy is not checked. Motion between the sampled frames is not seen.
6. Findings are input to the user's pick, not the pick, unless the user has handed picks to Claude. A failed check gets a description of what's wrong; offer a revised full prompt only if the user wants one.

```js
const REF = '[Clip 21C]', POS = 1; // pack reference; grid position among its takes, newest first
const cats = (await fetch('/library/get_categories/4').then(r => r.json())).data;
const cat = cats.find(c => c.name === 'my_ai_videos').id;
const list = (await fetch(`/api/library/get_media/4?categoryId=${cat}&page=1&start=0&limit=100&query=&orderBy=datetime&orderDir=desc&filter=`).then(r => r.json())).results;
const m = list.filter(x => x.type === 'video' && x.name.startsWith(REF))[POS - 1];
if (!m) throw new Error('take not found');
if (m.status && m.status !== 'completed') throw new Error('take still rendering');
const src = m.mediaPath || `/library/download/${m.id}`; // private takes have no mediaPath
const buf = await fetch(src, m.mediaPath ? { mode: 'cors' } : {}).then(r => { if (!r.ok) throw new Error(`take file not available (${r.status})`); return r.arrayBuffer(); });
const v = document.createElement('video'); v.muted = true; v.crossOrigin = 'anonymous';
v.src = URL.createObjectURL(new Blob([buf], { type: 'video/mp4' }));
await new Promise((ok, no) => { v.onloadeddata = ok; v.onerror = no; });
const D = v.duration, cw = 640, chh = 360, SH = 420, c = document.createElement('canvas');
c.width = cw * 3; c.height = chh * 4 + SH + 30; const g = c.getContext('2d');
g.fillStyle = '#000'; g.fillRect(0, 0, c.width, c.height); g.font = 'bold 28px sans-serif';
const times = [...Array(11)].map((_, i) => i * (D - 0.05) / 11).concat(D - 0.05);
for (let i = 0; i < 12; i++) {
  v.currentTime = times[i]; await new Promise(ok => v.onseeked = ok);
  const x = (i % 3) * cw, y = Math.floor(i / 3) * chh; g.drawImage(v, x, y, cw, chh);
  g.fillStyle = 'rgba(0,0,0,.6)'; g.fillRect(x, y, 110, 40); g.fillStyle = '#ff0'; g.fillText(times[i].toFixed(1) + 's', x + 6, y + 30);
}
let audio = 'no audio track', stats = [];
try {
  const ab = await new OfflineAudioContext(1, 1, 48000).decodeAudioData(buf.slice(0));
  const sr = ab.sampleRate, L = ab.getChannelData(0), R = ab.numberOfChannels > 1 ? ab.getChannelData(1) : L;
  const d = new Float32Array(L.length); for (let i = 0; i < d.length; i++) d[i] = (L[i] + R[i]) / 2;
  const N = 2048, hop = 512, F = Math.floor((d.length - N) / hop), spec = [];
  const fft = (re, im) => { const n = re.length; for (let i = 1, j = 0; i < n; i++) { let b = n >> 1; for (; j & b; b >>= 1) j ^= b; j ^= b; if (i < j) { [re[i], re[j]] = [re[j], re[i]]; [im[i], im[j]] = [im[j], im[i]]; } } for (let len = 2; len <= n; len <<= 1) { const a = -2 * Math.PI / len; for (let i = 0; i < n; i += len) for (let k = 0; k < len / 2; k++) { const co = Math.cos(a * k), si = Math.sin(a * k), p = i + k + len / 2, xr = re[p] * co - im[p] * si, xi = re[p] * si + im[p] * co; re[p] = re[i + k] - xr; im[p] = im[i + k] - xi; re[i + k] += xr; im[i + k] += xi; } } };
  for (let f = 0; f < F; f++) { const re = new Float32Array(N), im = new Float32Array(N); for (let i = 0; i < N; i++) re[i] = d[f * hop + i] * (0.5 - 0.5 * Math.cos(2 * Math.PI * i / N)); fft(re, im); const mg = new Float32Array(N / 2); for (let k = 0; k < N / 2; k++) mg[k] = Math.hypot(re[k], im[k]) / (N / 4); spec.push(mg); }
  for (let s = 0; s < Math.floor(ab.duration); s++) {
    let e = 0, hi = 0; for (let f = Math.floor(s * sr / hop); f < Math.min(F, (s + 1) * sr / hop); f++) for (let k = 2; k < N / 2; k++) { const p = spec[f][k] ** 2; e += p; if (k * sr / N > 6000) hi += p; }
    let r = 0; for (let i = s * sr; i < (s + 1) * sr; i++) r += d[i] * d[i];
    stats.push(`${s}s ${(10 * Math.log10(r / sr + 1e-12)).toFixed(0)} dBFS, >6 kHz ${(100 * hi / e).toFixed(0)}%`);
  }
  audio = `${ab.duration.toFixed(2)} s, ${ab.numberOfChannels} ch`;
  const top = chh * 4, W = c.width - 60, lo = 40, fmax = 20000, lr = Math.log(fmax / lo), img = g.createImageData(W, SH);
  for (let x = 0; x < W; x++) { const mg = spec[Math.floor(x * F / W)]; for (let y = 0; y < SH; y++) { const bin = Math.min(N / 2 - 1, Math.round(lo * Math.exp(lr * (1 - y / SH)) / sr * N)); const t = Math.max(0, Math.min(1, (20 * Math.log10(mg[bin] + 1e-9) + 100) / 90)); const p = (y * W + x) * 4; img.data[p] = 255 * Math.min(1, t * 1.6); img.data[p + 1] = 255 * Math.max(0, t * 1.6 - 0.6); img.data[p + 2] = 255 * Math.max(0, t < 0.4 ? t * 1.5 : (1 - t) * 0.6); img.data[p + 3] = 255; } }
  g.putImageData(img, 60, top); g.fillStyle = '#fff'; g.font = '22px sans-serif';
  [100, 500, 1000, 2000, 4000, 8000, 16000].forEach(f => g.fillText(f >= 1000 ? f / 1000 + 'k' : f, 4, top + SH * (1 - Math.log(f / lo) / lr) + 8));
  for (let s = 0; s <= Math.floor(ab.duration); s++) g.fillText(s + 's', 60 + s * W / ab.duration, top + SH + 24);
} catch (e) { g.fillStyle = '#fff'; g.font = '40px sans-serif'; g.fillText('NO AUDIO TRACK', 700, chh * 4 + 200); }
document.getElementById('clip-review')?.remove();
const ov = document.createElement('div'); ov.id = 'clip-review';
ov.style.cssText = 'position:fixed;inset:0;z-index:999999;background:#000;display:flex;align-items:center;justify-content:center';
c.style.cssText = 'max-width:100%;max-height:100%'; ov.appendChild(c); document.body.appendChild(ov);
({ take: m.name.slice(0, 60), id: m.id, length: D.toFixed(2) + ' s', size: v.videoWidth + 'x' + v.videoHeight, audio, stats });
```

The returned summary gives the take's length and size (check the clip ran its planned length and orientation) and per-second level and high-frequency share: a share that stays high and level through silent stretches is hiss.

## After a take is accepted

1. **Scroll the library to the top first.** A right-click lower down can scroll the list and hit the wrong tile.
2. Right-click the take → **Save Last Frame**. **Check the title prefilled in the dialog** (the start of that take's prompt) to confirm it's the right tile. Replace it with a unique name that includes a project or version prefix (`v3 Clip 4`), because earlier projects' frames may already use `Clip 4`. Click **Save**.
3. Right-click the same take → **Add to Timeline**. It lands straight after the last clip on track 1. Check the timeline clip count went up by one. If a gap opens between clips, **Auto Align Clips** (the first icon on the track row) closes it.
4. **Save the project** after each add or two; a new project gets its name on the first save. The timeline only survives a reload if it was saved.

## Setting up a chained clip (Creation tab)

1. **Use from Library** → **My AI Images** → pick the frame **by name**, then **Choose**.
2. **Look at the loaded frame before writing the prompt.** If it's the wrong framing or pose for the next clip, tell the user and offer a fresh start image instead.
3. Enter the prompt, verify it, verify the settings, and generate.

## Lipsync dialogue clips

1. Enter the main video prompt (the action and sound; no dialogue in it). Set the length.
2. Tick **Lipsync HD Video**, then click the lipsync **Create Video** button. The **Create Lipsync Audio** dialog opens.
3. In the dialog's **Video Prompt** field, describe each actor with their actions: "Actor 1 is [description, position], [action], [voice]. Actor 2 is …". This is a separate field from the main prompt, with its own `prompt` name.
4. Put Actor 1's line in **Actor 1 Script**. For a second speaker, click **Add Actor 2** and fill **Actor 2 Script**. Each line must be under 100 characters.
5. **Check the Total characters counter.** If it doesn't match the typed lines, click in each script field and press a key (a space, then Backspace) so it registers.
6. Click **Create** inside the dialog. For each further take, click the lipsync Create Video button again: the dialog reopens with its fields kept, so check them and click **Create**.
7. The dialog keeps Actor 2 between clips; clear it for single-speaker clips. After a page reload, the dialog starts empty.

## Narration Video (narrated stories)

The format: `narrated-story.md`. Tested with VE's own Text to Speech.

1. Select the scene's start image, enter the one-paragraph video prompt and verify it.
2. Tick **Narration Video** (Choose my Audio). Leave Advanced Mode and Lipsync HD off; the narration sets the clip's length.
3. Click **Create Video**. The **Create Narration Video - Create Audio** dialog opens with four tabs:
   - **Text to Speech** (VE's own): Language (146), Voice (for example Andrew Multilingual), Emotions, Speed, Pitch, and a text box of **120 characters**. Type the line (typing registers; check the counter), click **Import Speech** and wait for the waveform and its duration. Keep the same language, voice and settings for every line.
   - **CloneVoice.ai**: Category (Cloned or System), Language, Voice, Boost Similarity, Auto translate, text box. Only when the user owns CloneVoice and has added its API key in VE's settings; untested here.
   - **Voice Recording**: Record and Stop, for the user's own voice.
   - **Import Audio**: select an audio file; **10 seconds at most**.
4. Click **Create Narration Video**. The dialog closes and the generator stays open with its references, so prepare the next scene while this one renders.
5. The library tile's title is VE's rewrite of the video prompt, not the typed text (it starts, for example, "A wide side-on 2D shot…"), so record each scene's submission order and match tiles by thumbnail and order.

**Assembling:** right-click each finished clip in story order → **Add to Timeline**; each add lands straight after the last clip on track 1. If a gap opens, click **Auto Align Clips** (the first icon on the track row) to close it. Check the clip count and order, then save the project.

## Voice Changer

When and why: `light-sound-dialogue.md`, Consistent voices across clips. Every change needs the user's yes, naming the clip, the speaker and the sample.

**Saving a sample from a clip:** right-click the clip (timeline item or library tile) → **Save Audio** → replace the prefilled title (the clip's name) with the character's name (`Barnaby voice`) → **Save**. It lands in **My AI Audio**.

**CloneVoice.ai** (only when it's linked: a key in Edit profile, see Linked companion products): right sidebar → **Import Media / Text to Speech** → **CloneVoice.ai (Text to Speech Integration)** to generate the sample from text, or **Import from CloneVoice.ai** to import audio already made in CloneVoice. Untested here (no API key); follow the panel's own fields.

**Voice Recorder** (the user's own voice): the same panel → **Voice Recorder**. The user records a few clean sentences of their own voice (10–15 s, no music) and uses the recording as the sample.

**VE text to speech:** the same panel → **Text to Speech** (the first option): pick the language and voice, enter a few sentences (10–15 s of speech), generate, and use the audio as the sample.

**Audio Cutter** (right sidebar, bottom), for a long uploaded recording:
1. Click **select** in "Please select an audio file". In the folder picker, **single-click** a folder to open it (a double-click closes the picker), click the file, then **Choose**. A player shows its length.
2. Set **Duration** (seconds per part; the box allows up to 30). The dialog says equal parts, but it cuts fixed-length parts: a file a little over 60 s at 30 gives two 30 s parts plus a fraction-of-a-second tail.
3. Click **Split Audio**. The dialog closes when done (about 10 s for a minute of audio) with no message. The parts appear in the source file's folder as `<name> (part N of M)`.

**Applying it (one speaker):**
1. Right-click the clip: a timeline item (audio items show Properties · Voice Changer · Delete) or a library tile → **Voice Changer**. The dialog shows the source's name, type and the span it will convert.
2. **Choose Sample Audio** → open the folder (single click) → click the sample → **Choose**. A player shows the sample.
3. Click **Apply**. It applies straight away: "Media on the timeline has been successfully replaced". From the timeline, the new file replaces the item in its slot, only the trimmed span is converted, and the new file is saved in the source clip's folder. The original stays in the library.
4. Watch the dialog and the notifications for a warning or error (for example about sample length) and report its exact wording.
5. Check the item's new length and whether anything after it moved; a converted piece came back 28 ms longer once and pushed the next piece along by the same amount.

**Two speakers in one clip:**
1. **Add an empty track first.** Separate Audio and Video puts the audio on the next free track, which may be one already in use (a slides or background track).
2. Right-click the clip on the timeline → **Separate Audio and Video** → confirm. The video becomes a new silent file and the audio a new audio item.
3. Zoom in (the plus magnifier) and find the pause between the two speakers. If the browser tool can run JavaScript in the page, measure it from the audio rather than reading the waveform by eye: decode the item's file, find the quiet stretch between the voices, and check which voice is which by pitch (in one test the man was about 100–120 Hz, the woman about 170–240 Hz). Otherwise ask the user to point to the gap.
4. Click the ruler to put the playhead in the middle of the gap. The playhead time in ms is `$('.ruler.ui-slider').slider('option','value') / app.project.get('zoom')`.
5. Select the audio item and click the **scissors**. There are now two pieces, one per speaker.
6. Apply Voice Changer (above) to the piece that needs it.

## Filters (finishing on the timeline)

Filters are suggestions, not defaults: offer one only when the video or the user's request calls for it (a slow push on a still, a title card, a visualiser over narration, a speed change), and apply it on the user's yes.

Right sidebar → **Filters**, then drag a filter onto a timeline item. The item's **Properties** (right-click → Properties; it also opens after a drop) lists its filters, each with × to remove it and **Setup** where it has settings. A video item's Properties also has **Volume**, 0–200%.

| Filter | Use it for | Settings |
|---|---|---|
| **Camera Pan** | movement on a still image or a static shot | Setup → Animation: Zoom In, Zoom Out, Move Left, Move Right, Move Up, Move Down. Shows only in the rendered video, not the preview. |
| **Resize And Move** | placing a layer (picture-in-picture, a keyed presenter over a background) | Setup: size and position on the frame. |
| **Green Screen** | keying out a green or blue backdrop | Setup → dropper → click the backdrop colour → set Blend → Save. |
| **Titles** | title cards, lower thirds, labels and shapes over the video | Not dropped on an item: drop it on an **empty track** and it becomes its own Titles item. Right-click → **Edit** opens the elements editor (text, image, rectangle, circle, pen, grid, delete). Its menu also has Transition In, Transition Out, Transition Between and Add voiceover. |
| **Zoom In** | drawing attention to part of the frame | Setup → drag the crop box over the area to zoom into. |
| **Audio Wave** | a visualiser over narration, podcast or music sections | Setup → 18 presets (wave, bars, centre bars, lines, circular, circular bars), primary and secondary colour, opacity. |
| **Change Speed** | slow motion or speeding up a shot | 50–200%. |
| **Fade In Audio / Fade Out Audio** | easing sound in at the start or out at the end | No options; not heard in the preview, only in the render. |
| **Opacity** | fading a layer, a translucent overlay | 0–100%. |

**Auto Crop** (no options) is for changing aspect ratio; it's rarely needed, since VE projects are made in their final orientation.

## Screen Recorder (screen captures)

For explainer and training videos that show software, a website or a desktop: VE records the screen straight into the media library, and the recording goes on the timeline like any clip.

1. Right sidebar → **Import Media / Text to Speech** → **Screen Recorder** (last in the list).
2. Set **Media Library Category** to the folder the recording should land in (the project's clips folder). Every My Media folder is listed.
3. Turn the microphone **On/Off** as needed: on to narrate while recording.
4. Click **Record**. Chrome's picker opens ("Choose what to share with app.videoexpress.ai"). **The user picks what to share**: the browser tool can't see or click this picker.
   - **Chrome Tab**: one browser tab. **Share with tab audio** (whatever that tab plays) is **on** by default; turn it off when narrating over a tab that makes sound.
   - **Window**: one app window, chosen from thumbnails; nothing else on the desktop is recorded.
   - **Entire Screen**: one monitor (Screen 1, Screen 2…); check the number on a multi-monitor setup. Pop-ups and notifications are recorded too.
   - Window and Entire Screen have **Share with system audio**, **off** by default; turn it on to record the app's sound.
   - Then **Share** (Chrome Tab: **Share with Audio** when tab audio is on).
5. Click **Stop** when done. The recording lands in the chosen category with no save step; add it to the timeline from there.

Before recording, remind the user that the picker shows every open tab and window: close anything private. No length limit is known, but none is confirmed either; for a long session, check the file in the library before relying on it.

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

Load and inspect the opening frame (by name) → enter and verify the prompt, starting with its [Clip N] reference → verify settings (length, Video Only, Lipsync, sharing) → submit the takes about eight seconds apart, recording positions → confirm the tiles exist → card: which take, with positions, what it should look like and the refresh note → scroll the library to the top, then Save Last Frame (check the title, use a unique name) → Add to Timeline → save the project → card: next step.
