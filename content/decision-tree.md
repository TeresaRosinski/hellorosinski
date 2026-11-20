## Saving Days on High-Value Work
**A planning tool, new training, and reusable code that made a complex ad faster to build and clearer for every team.**
*My role: Creative Technologist · Epsilon · Self-initiated · 2024–2025 · Built with ChatGPT and Claude*

*Product quiz ads ask shoppers a couple of questions, then show products that match their answers.*

**Key gains**
- **At least 3 days faster per ad**, out of a typical 10–15 days of build time, by my conservative estimate.
- **Everyone on the same page:** every role can see how much work a request creates, and what each answer should show, before anything is promised or tested.
- **Training where there was none:** fewer than half the team had built one, so I created a five-step process and led a workshop.
- **Used on real client work:** every one of the four or five product quizzes I know were built afterwards.

**The situation**
At Epsilon, a product quiz ad (internally, a *decision tree*) asks a shopper up to two questions. Each combination of answers shows its own set of products, with its own images, text, and links to the client's website. One usually took 10 to 15 days to build, depending on how many sizes the ad came in (from 2 to 14) and what else the client asked for, like animation. These ads brought in high revenue, but teams often avoided them because of the effort.

My director had said that shortening the timeline was important. My manager doubted it could be done, given how product quizzes work. I decided to try. Over 2024 and 2025, I built improvements on my own, with ChatGPT and Claude.

**What was getting in the way**
- **A skills gap.** Fewer than half of the eight-person Creative Technology team had built a product quiz, and there was no training: only one long, hard-to-follow page of directions on the internal site, plus finished projects to look at.
- **Promises came before anyone knew the cost.** Art directors and account managers sometimes agreed to client requests without seeing how much work they would create. Small changes multiply: a basic quiz needs 81 pieces of content, and three small additions (more products, a headline, one more answer per question) push it to 320. Each piece means an image to supply, text to write, a file to prepare, and another case to test.
- **Testing was unclear.** People checking a quiz weren't always sure which answers should show which products, or which page on the client's site each product should link to.
- **New code for every quiz.** Creative technologists wrote time-intensive tracking code for each one: the code that follows a shopper's answers and shows the right products.

**My process**
1. **Built a planning tool.** The Product Quiz Planner lets anyone on a project enter the questions, answers, and what changes with each result, and see right away how much work it creates. It also generates:
   - **starter code** that creative technologists would otherwise write by hand,
   - **notes for the other teams** on the project,
   - **a testing guide** listing what each combination of answers should show and where it should link.
2. **Created the training.** Drawing on my own experience, I created a five-step process with an example for each step and links to finished projects, so people could read how to build a quiz and see it done. In January 2025, I planned and led a one-hour live virtual workshop, recorded for later viewing, for the five other members of the US Creative Technology team: what a product quiz is, how to build one, and how to answer the questions we often got about them in meetings.
3. **Automated the tracking.** I wrote a reusable JavaScript module that tracks every selection a shopper makes. When they make their final choice, it hands those choices to the creative technologist's own code, which plays the final animation with the matching products. Creative technologists set it up by answering the same questions as the Planner, so their time goes to what makes each ad unique, like animation and custom features.

**Results**
- **Where the 3 days come from:** at least 2–3 days of coding saved by the tracking module, and at least a day by the Planner. This is a conservative estimate; I believe the real savings are higher.
- **Tested on real assignments:** supervisors assigned each quiz, so the tools were used on whatever client work came in, not on examples I chose.

**See it**
- **Workshop (Mentimeter, an interactive slide tool):** the session I used to train the team. https://www.mentimeter.com/app/presentation/alfgf2232k7gtmmcudrmbk44qvtb2za8/embed
- **Product Quiz Planner (redesigned):** the same calculations as the tool I built at Epsilon, with clearer outputs and a redesigned layout: outputs in tabs instead of one long list, plainer terms, a sharper color palette, and better-balanced type. It uses sample data; the original is internal. Try the example (2 questions, 3 answers each), then add products, a headline, or a fourth answer and watch the count climb. tools/product-quiz-planner/

**What I'd do next**
- **Measure it directly:** track build time and the number of fixes found in testing for each quiz, before and after, so the savings are measured instead of estimated.
- **Check who uses the Planner:** ask account managers and art directors whether they use it before client conversations, and track how often it's opened.

<!--
Notes for review (not for publishing):
- Plain-language pass (2026-11-19) for a non-technical recruiter: role added, one-line definition under the title, jargon replaced (build → ad, elements/rotator → content, clickout → link to the right page, repos → finished projects, code module → reusable code, assets → images/files, digital producers → production team), 81→320 shortened to start and end (full steps saved for the Planner demo), Results no longer repeats Key gains.
- Correction from Teresa (2026-11-19): developers did NOT rewrite the same code each time (that would have been easier); they created new, time-intensive tracking logic for each treatment. "I moved the code…" also changed to "I wrote one shared piece of code," since nothing shared existed before. Second correction (same day): the module handles selection tracking only, not all the logic a quiz needs; some treatments need more.
- Planner outputs added from Teresa (2026-11-19): auto-generated starter code developers would otherwise hand-create, cross-team communication notes, and a testing / results guide. What the team notes contained isn't described yet; the recreation could show a sample.
- Copy edit (2026-11-19): about 90 words cut; Results now explains where the 3 days come from instead of repeating Key gains; "tracking logic" → "tracking code"; no facts changed.
- Planner is a redesign, not a recreation (Teresa, 2026-11-19): same calculations and outputs as the Epsilon original; new: tabbed outputs (original listed everything vertically), clearer palette (original was light greens and blues on white), better-balanced type. Results (3 days, 4–5 quizzes) belong to the original, not the redesign. Unconfirmed whether the original had the beginner guidance / worked example, so the page doesn't say.
- Terminology (Teresa, 2026-11-19): "developer" means the creative technologist, who is on the creative team with art directors and digital producers. Use "creative technologist," never "developer."
- Role names (Teresa, 2026-11-19): use "account managers" (not project managers) on both the case study and the Planner.
- Tracking module removed from "See it" for now (Teresa, 2026-11-19). Ideas for later: a plain flow diagram, a ~15-line illustrative setup snippet, or having the Planner recreation generate the setup. Never post the original (Epsilon's).
- Correction from Teresa (2026-11-19): the five-step process was NOT a rewrite of the old directions; she created it from her own experience. Heading changed from "Rebuilt" to "Created the training."
- "My process" structure from Teresa (2026-11-19): tool, training, tracking. Outcome words ("enhanced communication / understanding") kept out; each step says what it gave people. Module behavior from Teresa: tracks all selections; on final selection it calls a developer callback with the selections, and the developer's code animates the final frame with the matching products.
- Role: résumé title is "Creative Technologist / Front-End Developer"; page uses "Creative Technologist."
- Baseline 10–15 days per quiz, from Teresa (2026-11-19), varying with ad sizes (2–14) and extra requests like animation. Confirmed by Teresa (2026-11-19): 10–15 days is the Creative Technology build only, matching the résumé ("from the Creative Technology portion").
- "A skills gap addressed" (not "closed"): no "after" number for how many people can now build one.
- Removed "I don't know how many people opened it" from Results; the next step "Check who uses the Planner" still says usage isn't known.
- Key gains (Teresa's idea, 2026-11-19): she proposed "improved cross-team communication." Rewritten as what the Planner gives every role, since nothing measured a change in communication.
- Title chosen by Teresa (2026-11-19): "Saving Days on High-Value Work." Résumé calls it a product quiz; the page names "decision tree" once as the internal term.
- Manager line: accurate to what Teresa said ("my manager said it couldn't be done"), softened to "doubted it could be done." Teresa chose to keep it (2026-11-19).
- AI tools (ChatGPT, Claude), dates (2024–2025), workshop (Jan 2025, 1 hour, 6-person US Creative Technology team including Teresa) confirmed by Teresa on 2026-11-19. Workshop was live, virtual, and recorded (Teresa, 2026-11-19).
- "High revenue": Teresa's words. Keep as stated; no figures.
- Content-count example from Teresa; math checked: answer combinations × linked elements × rotator items (9×3×3=81, 9×3×5=135, 9×4×5=180, 16×4×5=320). The Planner recreation should use this formula and these four steps as its demo.
- "Fewer than half the team": the Creative Technology team was 6 people in the US (all attended the workshop) and 2 in India (Teresa, 2026-11-19). "Fewer than half" is out of all 8 (confirmed by Teresa, 2026-11-19).
- Mentimeter: Teresa gave the embed code; the src URL is stored above. Embed it full-width like the session decks.
- Résumé also says she "helped account managers and art directors assess complexity before client conversations." The page says the tool is for that; it doesn't claim how often they used it.
- Learning foundations section left out for now. Can run learning-theory-alignment once the workshop details are in.
-->
