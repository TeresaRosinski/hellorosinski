---
name: workshop-writeup
description: Write a portfolio case study for one of Teresa's workshops or learning sessions (the AI Learning Series in sessions.js). Use when Teresa wants to write up, draft, review, or improve a session for the portfolio, add a new session, or says things like "let's do session 4" or "write up my workshop on X". Interviews her one question at a time, drafts against the gold example, runs three independent reviewers, and saves a draft plus a proposed sessions.js entry for her approval.
---

# Workshop write-up

Turn what Teresa remembers about a session into a strictly accurate, skimmable portfolio case study, in her voice, in the format the site already renders.

**The benchmark** is `content/gold-example-ai-agent-building.md` (Session 9). Read it before drafting. Every write-up should read like it: concrete, honest, short sentences, design choices with reasons, evidence over adjectives.

**Accuracy outranks impact.** Follow the "Content accuracy" rules in CLAUDE.md. If something is ambiguous, ask. Never pick the more impressive reading, never invent numbers, never turn one story into a general claim.

## The workflow

Keep a visible task list for these steps. Do them in order.

### 1. Interview (one question at a time)

Read `references/interview-questions.md` and work through it **one question per message**. Teresa asked for this explicitly. Rough answers are fine; polish comes later.

- After each answer, say in one or two lines what it adds (what's strong, what it unlocks), then ask the next question.
- Ask the follow-ups the guide lists whenever an answer is vague ("How did you know that?", "What were the exact words?").
- If she shares a Mentimeter link, slides, or screenshots, read them and use them as evidence, but confirm anything you infer from them.
- Stop interviewing when every section of the structure has real material or an honest "we don't know."

### 2. Draft

- Follow the fixed structure and data format in `references/structure-and-output.md`.
- Follow the voice rules in `references/voice-guide.md`.
- Run the `learning-theory-alignment` skill on the design choices to fill **Learning foundations** (3–4 theories, evidence required).
- Show Teresa the draft in chat. Keep it short enough to read on a phone.

### 3. Review (three reviewers, in parallel, fresh context)

Start three subagents **in the same message**, each with no access to this conversation. For each one, pass:
- the full rubric file from `references/reviewers/` (copy its contents into the prompt), and
- the path to the draft file (save the draft to `content/session-N-draft.md` first so they can read it).

The hiring-manager reviewer also needs `references/target-roles.md` in its prompt.

Reviewers critique only. They never rewrite.

### 4. Synthesize

Follow `references/synthesis.md`:
- Rank the findings, most important first.
- Keep a **flag checklist**: every reviewer flag is marked *fixed*, *kept on purpose (why)*, or *rejected (why)*. Nothing is dropped silently.
- Where reviewers disagree, or a fix needs a fact only Teresa has, ask her, one question at a time.
- Questions that need new facts go back to her as interview questions. Never fill the gap yourself.

### 5. Revise, then tighten

- Apply the agreed fixes.
- Run Teresa's personal `clear-and-direct` skill on the whole write-up (edit mode), using its portfolio length targets. Show the before/after word counts and the "kept on purpose" list. If that skill isn't available, apply `references/voice-guide.md` and keep "The situation" to 50 words or fewer.
- Re-check the final text against the flag checklist. Tightening must not undo an accuracy fix (e.g. dropping a qualifier like "more than six months").
- Show her the result and the list of what changed.

### 6. Save for approval (don't touch the live data)

- Save the final write-up to `content/session-N.md` (and delete `content/session-N-draft.md`).
- Write the proposed `sessions.js` entry into the same file, under a heading "Proposed sessions.js entry", as a code block.
- **Do not edit `public/js/sessions.js`** until Teresa says the write-up is approved. When she does, follow CLAUDE.md: a `content/<name>` branch **cut from `main`**, one change per commit, and she merges. Give her the pull request link with the base set explicitly: `https://github.com/TeresaRosinski/hellorosinski/compare/main...<branch>?expand=1`. Merging to `main` publishes to hellorosinski.com, so she reviews the preview first.

## Lessons already learned (don't repeat these mistakes)

- "I opened with…" was wrong once. Always confirm the exact sequence and wording of questions.
- "Designed around ADKAR" claimed intent she didn't have. Use "aligned with" unless she says it was deliberate.
- "Awareness" was misplaced in ADKAR. "What's in it for me" is Desire; resources are support, not Reinforcement.
- "The team is still building agents" generalized one story. Tell the story instead.
- "Many felt a quiet fear" stated feelings as fact. Say what she observed (the word cloud, what she heard).
- The tool was built *after* the session. Check when artifacts were made before saying they were used in the room.
- A reviewer flag was once silently kept. That's why the flag checklist exists.
- "The team set the agenda" overstated a vote. Separate what learners *decided* (a vote) from what they *suggested* and she decided.
