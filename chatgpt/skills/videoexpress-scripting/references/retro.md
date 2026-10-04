# Take log, retro and the findings ledger

How the skill learns from production. During a project, every take gets one line in the pack's take log. At the end of a project or sequence, a retro turns the log into graded findings, and findings go to the user's findings ledger (a private GitHub repo of issues, here `ratava/videoexpress-findings`). Validated findings are later promoted into this skill by pull request.

The point is to separate **what happened** from **what we now believe**. A video model is noisy: one take proves little, and a wrong rule in this skill is applied to every future prompt. So the log records everything, the retro grades it honestly, and only tested results change the rules.

## The take log (during production)

The pack's **Edit, timing and QC** section holds a take log table. Add a line every time the user reports a take's outcome, or the assistant inspects a take while operating VE in the browser. Don't interrupt production to fill it in: infer the fields from what the user said, and ask only for the result if it's genuinely unclear.

| Take | Ref | Start | Result | Category | Change from previous take | Note |
|---|---|---|---|---|---|---|
| 1 | [Clip 12] | chain 11 | fail | Camera direction flips between clips | — | pans right instead of left |
| 2 | [Clip 12] | chain 11 | keep | — | direction phrase copied from Clip 11 | |
| 3 | [Clip 12 TEST 1] | fresh 12A | fail | new: hat brim melts into hair | brim wording "wide" → "narrow, stiff" | |

- **Take**: running number within the clip.
- **Ref**: the bracketed reference the prompt opened with, exactly.
- **Start**: `fresh <image ref>` or `chain <clip>`.
- **Result**: `keep` (used in the edit), `usable` (acceptable, not chosen), `fail`.
- **Category**: the matching "Failure observed" row from the table in `prompt-rules.md`, or `new: <short description>`, or `—` for a clean take.
- **Change from previous take**: the one thing that differed from the previous take of the same clip. This column is what makes the log useful; write it every time a take is a retry.
- **Note**: what actually rendered, in a few words.

Record the VE version and video model once in the pack overview, and add a log line if either changes mid-project. Log isolation tests (`[Clip 12 TEST 1]`, `[Clip 12 TEST 2]`, and the control) like any other take, with the variable in the Change column.

## Running a retro

Run one when the user asks ("run a retro", "what did we learn"), and offer one at the end of a project, at the end of a long sequence, or when an isolation test concludes. Don't edit any skill reference during a retro.

1. **Read** the take log, the pack's revision history and any global fixes made during production.
2. **Group** the log by category. Note which clips, takes and changes each group covers.
3. **Draft findings.** Each finding is one of:
   - **failure**: something went wrong and no fix held;
   - **fix**: a change that resolved a failure;
   - **technique**: something that worked well, not tied to a failure;
   - **no-effect**: a change that was tried and didn't help. These are worth recording; they stop the next project wasting takes on the same idea.
4. **Grade the evidence** strictly:
   - **anecdote**: one take, or several takes of one clip;
   - **replicated**: the same result in at least three takes across at least two clips, or in two separate projects;
   - **validated**: an isolation test with a fixed base prompt, one variable changed per variant, a control take of a previously clean prompt, and the result held on a rerun.
   A fix that worked once on a retry is an anecdote even if it felt obvious. Several changes made at once can't credit any one of them.
5. **Compare with the skill.** For each finding, say whether it confirms an existing rule, contradicts one, or isn't covered. A contradiction is the most valuable kind of finding; flag it first and propose a test.
6. **Propose tests** for the most promising anecdotes and every contradiction: base prompt, the one variable, variant references, and the control take, following the isolation method in SKILL.md.
7. **Report** in chat: a short summary (what held up, what didn't, what to test next), then one ledger entry per finding.

### Ledger entries

Write each entry in the field order of the ledger's Finding form, so it can be pasted straight in:

- **Title**: `[Finding] <area>: <what happened, in a few words>`
- **Kind**, **Area** (text-and-counts, character, outfit-and-props, camera, environment, motion-and-timing, light, style, dialogue, sound, chaining, prompt-format, other)
- **Failure-table row** (or `new`), **Relation to the skill**
- **VideoExpress version**, **Model and settings**, **Start method**
- **Evidence gathered** (single take, repeated, isolation test) — the grade itself is applied as a label at triage
- **Takes** (references and results), **What happened**, **What was changed**
- **Prompts** (the relevant prompt or before and after, in full where the finding depends on wording)
- **Frames** (say which frames the user should attach), **Project**, **Proposed rule** (optional)

If a GitHub tool is connected and the user approves, file the entries as issues on the ledger. Search the ledger first: when an open issue already covers the same finding, add a comment with the new takes instead of opening a duplicate, and say whether the new evidence raises its grade. Never apply evidence labels without the user's agreement.

## Promotion

Promotion is a separate step from the retro and always the user's decision. A **validated** finding can change a rule; a **replicated** one can be added as guidance if the user wants it. To promote:

- Edit the relevant reference in **both builds** (`claude/` and `chatgpt/`), keeping shared files identical. Usually that's a row added to or rewritten in the failure table in `prompt-rules.md`, or a line in a style sheet or reference.
- Keep the skill text clean: state the rule, not the history. The pull request links the ledger issue for the evidence.
- When the PR merges, close the issue with `status: promoted`.

## Retirement

Findings and promoted rules are tied to the VE version they were observed on. When VideoExpress updates, rules that encode a workaround (rather than a general principle such as "the model renders nouns") are candidates for re-testing. If a rule no longer holds, remove or rewrite it by PR and close the issue with `status: retired`.
