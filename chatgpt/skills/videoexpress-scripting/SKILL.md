---
name: videoexpress-scripting
description: Use whenever the user wants to start or run a VideoExpress project, asks for VideoExpress image, video or multishot prompts, asks the assistant to operate VideoExpress in a browser, or reports VideoExpress problems such as drifting characters or outfits, camera direction flips, stylised clips turning realistic, props changing shape, actions in the wrong place or order, dark scenes, text in footage, background hiss or unwanted music. Plans, scripts and produces multi-clip videos in VideoExpress (VE) 3.5 and later by PaulPonna.com, where each 3–10 second clip is a start image plus a motion prompt. Covers guided project intake from a concept or script, the Core Bible, the VE multishot prompt format, Create Mode and custom Creative mode styles, clip chaining, Consistent Character references, lip-synced dialogue (in the multishot prompt or the Lipsync HD dialog), production sound, and driving app.videoexpress.ai with a browser-capable agent.
metadata:
  version: "2.2"
  author: Brent Wesley
---

# VideoExpress Scripting

Produce a production-ready **prompt pack**: a living document that maps a full piece (song, narration, story) onto a sequence of clips, each with a start-image plan and a paste-ready VE multishot prompt. Then support generation: diagnose reported failures, fix them globally, sweep every affected clip.

Two facts drive almost everything in this skill:

1. **The model renders nouns, not intentions.** Every noun, count, simile and stray token is a candidate to appear on screen.
2. **Each generation only knows what it is given.** A chained clip sees one still image (the previous clip's last frame) plus the prompt and any reference images. It has no memory of the previous clip's motion, of anything that was out of frame, or of earlier prompts. Anything not visible in the opening frame or described in the prompt will be invented.

## Where to read next

Read only what the current step needs. Everything in `references/` is self-contained.

| When you are… | Read |
|---|---|
| Starting a new project, or the user has a concept or script | `references/project-intake.md` — the question system, feasibility check, development tests, brief and Core Bible sign-off |
| Writing or revising character, outfit or location blocks; start images; Consistent Character references; non-human characters | `references/bible.md` |
| Choosing a look, or writing any prompt in a Create Mode or custom style | `references/styles/README.md` (shared recipe and index), then the one style sheet you need |
| Writing any video prompt | `references/multishot-template.md` — the tag structure, blank template and worked example |
| Planning the clip grid, chaining, camera moves, or any [ACTION] segment | `references/camera-and-motion.md` |
| Writing [LIGHT AND IMAGE] or [PRODUCTION SOUND], any clip with speech, or point-of-view / HUD shots | `references/light-sound-dialogue.md` |
| Writing or debugging any prompt; the user reports a failure | `references/prompt-rules.md` — how the engine reads a prompt, and the failure → cause → rule table |
| Asked to drive app.videoexpress.ai with a browser-capable agent | `references/browser-workflow.md` — read first, follow step by step |

For a single prompt request mid-project, the usual set is `multishot-template.md` + `prompt-rules.md` + whichever of `bible.md`, `camera-and-motion.md`, `light-sound-dialogue.md` and a style sheet the clip touches. For a reported failure, start with the table in `prompt-rules.md`.

## Workflow

0. **Intake** — run `references/project-intake.md`: starting point (concept or script), decision checklist with suggestions, feasibility check, any development tests, sign-off on the brief and Core Bible.
1. **Concept** — scenes, motifs, characters, world, and a visual arc mapped to the source's structure (below).
2. **Bible** — locked character blocks, outfit blocks and location blocks, written once and pasted verbatim everywhere (`bible.md`).
3. **Timing** — a clip grid at the tool's clip length, with key hits verified against the real audio by the user (`camera-and-motion.md`).
4. **Prompt pack** — start-image prompts and multishot video prompts for every clip (`multishot-template.md` plus the relevant references).
5. **Generation support** — diagnose reported failures by mechanism, fix them globally, sweep every affected clip (`prompt-rules.md`).

The pack is a living document. Expect many revision rounds as the user generates clips.

## Concept design

- Design **2–4 recurring motifs** that carry the video (an accent colour, a gesture, a light effect, a returning prop). Motifs give continuity AI generation can't provide on its own.
- Map source structure to a **scene table**: scene → time range → clips → outfit → location → motif state. Escalate motifs across scenes.
- **Key moments deserve visual events.** Big hits or key lines get reveals or bursts of motion, build-ups get stillness so the hit lands, and scene changes land on section boundaries.
- **Give each scene a logical opening.** Establish the character arriving, noticing something, or reacting before the main action.
- Favour what generates reliably: steady camera moves, light changes, drifting atmosphere, one clear subject. Spectacle in the background, performance in the foreground.
- Dialogue is lip-synced two ways (a quoted line in the multishot prompt, or the Lipsync HD dialog; see `light-sound-dialogue.md`). In shots without dialogue, keep mouths closed or out of view so no speech is invented, and never end a clip with something in the mouth or food in a hand if the next clip has dialogue.
- Background interest (vehicles, crowds, city life) is named explicitly and kept at a distance so it never crosses the subject.

## Rules that apply to every prompt

These are the ones that cause the most damage when forgotten. The references hold the detail and the rest.

- **Bible blocks are pasted word for word.** Paraphrase is drift. When a start image nails the look, the video prompts reuse that image prompt's exact wording, not the bible's older wording.
- **Match the frame, not the plan.** Look at the chained opening frame or accepted start image before writing: describe props, framing and the geometry of obstacles exactly as the frame shows them.
- **Quotation marks mean speech.** Quote each spoken line once, in [ACTION], and quote nothing else. Two speakers per clip, maximum.
- **Positive anchors first, negatives as a short tail.** Say what stays still as clearly as what moves; lead every segment with the subject's motion, "no pause and no delay".
- **Camera: locked unless asked, every move named identically in every clip, every move has a destination, never return to space that has left the frame.** Never write a move relative to another clip.
- **End at full-body framing if the next clip chains.** Inspect and trim the cut frame before chaining; fix the parent, don't prompt harder on the child.
- **Digits only in [ACTION 0-5s] labels; no counted events; no lettering promised.** Describe screens and signs as abstract shapes and light.
- **Effects add light, never replace it.** Keep a key light on the subject; restate brightness in the final segment; never chain from a darkened frame.
- **Transient sounds with silence between them; no ambient beds; close [PRODUCTION SOUND] with what is heard in total.**
- **Stylised looks need the style anchor at the very start of the video prompt** (before [REFERENCE USE]) and in every [LIGHT AND IMAGE], plus anti-realism negatives. References pull toward realism; counter with wording, not by dropping the reference.
- **Keep "Automatically enhance my video prompt" off.** It rewrites to short prose and drops the bible, labels and caption. The prompt box holds about 6,000 characters; trim repeated style text and negatives first.
- **Turn Consistent Character off** for shots with no characters (empty environments, point-of-view, inserts).

## The prompt pack document

1. **Overview**: scene table (scene, clips, time range, outfit, VE length); prompt format note; references to supply with each clip; paste rule (only text inside code blocks is pasted; headings carry metadata).
2. **Global rules**: the rules above and from the references that apply to this project.
3. **Bible**: character core block, outfit blocks, location blocks, style line.
4. **Per scene**: start images (self-contained prompts), then per clip — header line (clip · time range · VE length · FRESH from image X or CHAIN from clip N · role tag) and the full multishot prompt in a code block.
5. **Edit, timing and QC**: trims, retimes, transitions, the per-take QC checklist (in `prompt-rules.md`), open items.

For alternates, add a new tab or section rather than overwriting working clips, and include any adjacent clips that must change to hand off correctly. Keep clip numbering stable once generation starts; if clips are cut, keep the gaps and note them.

## Working style during production

- Users report failures one at a time, often with a frame. Diagnose the **mechanism** (table in `prompt-rules.md`), fix it globally, and sweep every not-yet-generated clip with the same risk.
- Read the frame the user sends: note what actually rendered and write the next prompt to match what exists.
- When the user edits the pack directly, re-read before writing and never overwrite their changes without saying so.
- When the user states a preference ("keep it", "I prefer this look"), treat it as a new rule and apply it everywhere, including rewriting the bible block to match the frame.
- Protect payoff shots: guard their preconditions in every earlier prompt.
- **When the user asks to see a prompt before a run, show the full paste-ready prompt,** then ask to run it. Don't run first.
- **Isolate stubborn failures.** When a problem survives two prompt rounds, stop rewording. Hold a base prompt fixed and run one take per variant, each changing one variable, with a unique caption label per variant ("clip N TEST 1, ending"), plus a control take of a previously clean prompt. Record which variables mattered.
- **Know when to stop.** If a sequence has drifted far from the concept, say so and offer to restart the sequence or the project rather than patching clip by clip.

## Operating VideoExpress in the browser

When the user wants the assistant to drive app.videoexpress.ai itself rather than just write the pack, read `references/browser-workflow.md` first and follow it step by step. The user approves every start image, take and prompt change; the assistant pastes prompts exactly as written, never skips a checkpoint, and leaves drift judgements to the user unless a problem is obvious. Prompt hardening from a generated frame is offered after the first clip is on the timeline, and again after the second if deferred.

Renders take several minutes. On platforms where the assistant can only act while writing a reply and each reply has an action budget (see the platform notes in the browser workflow), never wait inside a reply for renders: submit the takes, confirm they exist, report their positions, and ask the user whether they've finished. On platforms that can run long agent sessions, polling the library until the tiles finish is acceptable, but still stop at every user checkpoint. Never announce an action ("generating now") without performing it in the same reply.
