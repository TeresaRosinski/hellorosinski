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
- **Reading a Mentimeter deck:** open the link in the built-in browser and use `get_page_text` for the slide text. Video slides show no text; their YouTube IDs are in the page HTML (search it for `youtube-nocookie.com/embed/<id>`). Get each video's exact title and channel from YouTube's oEmbed endpoint (`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<id>&format=json`). Shared decks often show **0 responses**, so live results must come from her screenshots; never read zeros as "no one answered."
- **Confirm answers that read backwards.** A quick typed answer once said "most people *did* have many use cases" when she meant "did not." If an answer contradicts the rest of what she's said, check it before using it.
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
- **Do not edit `public/js/sessions.js`** until Teresa says the write-up is approved. Until then the session isn't in the site's code, so it won't show in Live Server or a preview; say so if she asks where it is. When she approves, follow CLAUDE.md: a `content/session-N` branch **cut from `main`**, one change per commit (screenshots; the sessions.js entry; the `content/session-N.md` source), and she merges.
- **Screenshots:** convert to JPEG with `sips -s format jpeg -s formatOptions 80 in.png --out public/images/session-N/<name>.jpg` (Session 2's came out at 31–36 KB), and set `width` and `height` from `sips -g pixelWidth -g pixelHeight`.
- **Check it renders:** parse `sessions.js` with node, then open `#session-N` in the `portfolio` preview. If changes don't appear, the browser is serving a cached `sessions.js`; reload it with `fetch(url, {cache: "reload"})` before reloading the page (for Teresa: Cmd+Shift+R). Give her the pull request link with the base set explicitly: `https://github.com/TeresaRosinski/hellorosinski/compare/main...<branch>?expand=1`. Merging to `main` publishes to hellorosinski.com, so she reviews the preview first.

## Lessons already learned (don't repeat these mistakes)

- "I opened with…" was wrong once. Always confirm the exact sequence and wording of questions.
- "Designed around ADKAR" claimed intent she didn't have. Use "aligned with" unless she says it was deliberate.
- "Awareness" was misplaced in ADKAR. "What's in it for me" is Desire; resources are support, not Reinforcement.
- "The team is still building agents" generalized one story. Tell the story instead.
- "Many felt a quiet fear" stated feelings as fact. Say what she observed (the word cloud, what she heard).
- The tool was built *after* the session. Check when artifacts were made before saying they were used in the room.
- A reviewer flag was once silently kept. That's why the flag checklist exists.
- "The team set the agenda" overstated a vote. Separate what learners *decided* (a vote) from what they *suggested* and she decided.

From Session 2:
- **An objective needs an activity that produced evidence.** "Describe one benefit and one risk Hinton raised" had no prompt that asked it, and all three reviewers flagged it. Check each objective against a slide, poll, or answer.
- **Objectives are often written afterwards.** That's fine, but say so in the review notes, and build them from what learners actually did. The site's header ("By the end of the session, learners can:") is fixed.
- **Intent goes in "The situation," not in objectives or results.** Her aims (make AI familiar and less stressful, have fun) are real reasons, but nothing measured stress, so the page says "I planned this session to make AI… less stressful," never that it did.
- **Anonymous before/after polls can't show anyone changed their mind.** Report both counts plainly, say what's unknown (what "Other" meant), and don't make it the headline result.
- **One unanswered async thread isn't a trait of the team.** Say what happened (live questions got answers; the thread got none) and what she decided.
- **"What I'd do next" must not imply something was missing.** "Build in reflection time" was wrong because the session already had it; "keep reflection inside the live session" was right.
- **Shorten an employer-critical phrase, with her OK.** "Like a mouthpiece for the company" became "like I was just selling AI," since Epsilon is named on the page.
- **Gather the videos and articles used** for the `materials` field during the interview (question 13). Link to the originals; don't re-host them.
