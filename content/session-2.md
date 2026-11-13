## Feathers, Frameworks, and Functions: The Arc of Adaptive Learning
**From pigeons to AI: how humans and machines learn.**
*Session 2 · Live virtual discussion · October 2023 · 60 min · 5 participants · Creative technology team · Mentimeter, Microsoft Teams*

**The situation**
AI in coding was still new. In standups and team meetings, most teammates had few uses for AI, and the tone was generally pessimistic. I planned this session to make AI feel more familiar and less stressful: a shared hour to learn how AI learns and talk it through together.

**Who was in the room**
Five front-end developers on Epsilon's creative technology team, live on Teams. Teammates in India couldn't join at that time of day.

**Learning objectives**
By the end of the session, learners can:
- Give an example of classical or operant conditioning from their own life.
- Explain how some AI learns the way operant conditioning works: by being rewarded for good results.
- Name one reason to stay curious and cautious about AI as it develops.

**Design choices**
- **Ask the same question at the start and the end.** The session opened and closed with one poll, to see whether anything changed: *Do you think humans and machines learn in similar ways?* (yes / no / maybe / other)
- **Start with how humans learn.** Before talking about machines, I wanted people to look at how they learn. In my experience, a topic sticks when people connect it to their own lives. A short video by Peggy Andover explained classical and operant conditioning. The question was on screen before it played, so people could take notes: *Can you think of an example of operant or classical conditioning in your life?*
  [image: conditioning answers]
- **Let a pigeon make the leap.** Next came a short video on Pablo Escobar's carrier pigeons: a fun story that challenges the idea that only humans learn. If a pigeon can be trained to carry messages, what could a machine be trained to do? So I asked: *What problem would you train an AI algorithm to solve for?*
  [image: train-an-AI answers]
- **Show the good and the bad, from a trusted source.** To a pessimistic group, talking only about AI's benefits would sound unrealistic, like I was just selling AI. I needed to earn their trust. So I chose Geoffrey Hinton's *60 Minutes* interview, where an AI expert talks about AI's benefits and risks. It also shows how AI learns: robots that were never taught soccer learned to play because they were rewarded each time they scored.
- **Give a long video a focus.** The Hinton interview runs 13 minutes and covers a lot. Showing the discussion question first gave people something to listen for: *What threads or connections do you see between the way humans and machines learn?*
  [image: threads answers]
- **Try continuing the discussion in Teams.** The last slide promised one or two follow-up questions in our Teams channel. The experiment was for two groups the live hour didn't serve: people who need time to think before they speak, and teammates in India.

**Results**
- ***"Both still need some sort of human teaching it, it all comes from something a human made."* (a participant, in the live poll, on what connects human and machine learning)**
- Other answers to that question: *"We don't know how either one fully works"* and *"Sounds like we both default to being results-based."*
- Asked what they would train an AI to solve, people gave 8 ideas, from meal prep for *"my specific health needs"* to traffic, medical technology, and *"what our pets are thinking."* None were about our own work.
- All 4 conditioning examples came from everyday life, like a cat who hears a can open and expects tuna.
- The opening poll: 3 *Maybe*, 2 *No*. The closing poll: 3 *Maybe*, 2 *Other*. The poll was anonymous, and I don't know what *Other* meant to people.
- **The Teams discussion got no replies,** while every live question got answers. So I didn't repeat the experiment.

**Learning foundations**
- **Adult learning principles (Knowles):** each discussion question asked people to draw on their own experience, from conditioning in their lives to problems they'd want AI to solve.
- **Bloom's taxonomy:** a first look at the topic, pitched at *understand*: people gave examples from their own lives before comparing human and machine learning.
- **ADKAR:** an early *Awareness* session. The Hinton interview showed why AI matters, risks included, from a credible expert.

**See it**
- **Workshop (Mentimeter):** the full session flow. The live answers are in the screenshots above; the shared deck doesn't show them. https://www.mentimeter.com/app/presentation/alub5b4dswdaz7am52aap2tfvfnh36wc/view

**What I'd do next**
- **Tie it back to our work:** add a follow-up question, *What would we need to teach AI to get it to work well for us?*, so the ideas move from personal life to the team's real tasks.
- **Make the connection explicit:** after the Hinton interview, ask *Did the robots learn through operant or classical conditioning?* so people link the robots back to how they learn themselves.
- **Keep discussion live for this team:** keep reflection inside the live session, since the async thread got no replies.

<!--
Notes for review (not for publishing):
- Objectives were written afterwards, looking back; Teresa approved this wording. Revised Nov 13 to the reinforcement thread: conditioning, then AI rewarded for results (Hinton's soccer robots), then caution. Her broader aims (familiarity, fun, lower AI stress, a foundation to build on) went into "The situation" as intent, not as outcomes. Nothing shows stress went down, so the page doesn't claim it.
- Poll is anonymous: we can't say the same two people moved from No to Other. Teresa doesn't remember what "Other" meant.
- "Diego" appears in a conditioning answer; Teresa approved sharing all Menti images.
- Opening framing before the first poll: Teresa doesn't remember.
- "mouthpiece for the company" softened to "like I was just selling AI" with Teresa's OK.
- Original Mentimeter screenshots (to compress into public/images/session-2/ on approval) are in this session's scratch images folder: 1.png (train an AI), 2.png (threads), 3.png (conditioning).
-->

---

## Proposed sessions.js entry

Not in `public/js/sessions.js` yet. Added only after Teresa approves. The three Menti screenshots get compressed into `public/images/session-2/` at that point, with width and height set.

```js
{
  number: 2,
  title: "Feathers, Frameworks, and Functions: The Arc of Adaptive Learning",
  goal: "From pigeons to AI: how humans and machines learn.",
  meta: {
    format: "Live virtual discussion",
    date: "October 2023",
    duration: "60 min",
    participants: 5,
    audience: "Creative technology team",
    tools: ["Mentimeter", "Microsoft Teams"]
  },
  situation: "AI in coding was still new. In standups and team meetings, most teammates had few uses for AI, and the tone was generally pessimistic. I planned this session to make AI feel more familiar and less stressful: a shared hour to learn how AI learns and talk it through together.",
  audience: "Five front-end developers on Epsilon's creative technology team, live on Teams. Teammates in India couldn't join at that time of day.",
  objectives: [
    "Give an example of classical or operant conditioning from their own life.",
    "Explain how some AI learns the way operant conditioning works: by being rewarded for good results.",
    "Name one reason to stay curious and cautious about AI as it develops."
  ],
  designChoices: [
    {
      label: "Ask the same question at the start and the end.",
      text: "The session opened and closed with one poll, to see whether anything changed: *Do you think humans and machines learn in similar ways?* (yes / no / maybe / other)"
    },
    {
      label: "Start with how humans learn.",
      text: "Before talking about machines, I wanted people to look at how they learn. In my experience, a topic sticks when people connect it to their own lives. A short video by Peggy Andover explained classical and operant conditioning. The question was on screen before it played, so people could take notes: *Can you think of an example of operant or classical conditioning in your life?*",
      image: {
        src: "images/session-2/conditioning-answers.jpg",
        alt: "Mentimeter answers to: Can you think of an example of operant or classical conditioning in your life? Answers: pairing coffee and meditation; I go for runs in the morning and get coffee or tea after; things I do with Diego, I try to focus on positive reinforcement, operant conditioning; when I open a can, the sound makes my cat think it's tuna even if it's beans or something he doesn't like.",
        caption: "Four examples, all from everyday life."
      }
    },
    {
      label: "Let a pigeon make the leap.",
      text: "Next came a short video on Pablo Escobar's carrier pigeons: a fun story that challenges the idea that only humans learn. If a pigeon can be trained to carry messages, what could a machine be trained to do? So I asked: *What problem would you train an AI algorithm to solve for?*",
      image: {
        src: "images/session-2/train-an-ai-answers.jpg",
        alt: "Mentimeter answers to: What problem would you train an AI algorithm to solve for? Answers: world hunger, politics; optimize time and scheduling but personalized for me; meal prep and grocery shopping lists based on the foods I'll actually eat and cook and that are good for my specific health needs; how to optimize my day by taking in all the data from all of my devices; traffic; healthier, affordable food options; advance medical tech; to know what our pets are thinking.",
        caption: "Eight ideas, from meal prep to medical tech."
      }
    },
    {
      label: "Show the good and the bad, from a trusted source.",
      text: "To a pessimistic group, talking only about AI's benefits would sound unrealistic, like I was just selling AI. I needed to earn their trust. So I chose Geoffrey Hinton's *60 Minutes* interview, where an AI expert talks about AI's benefits and risks. It also shows how AI learns: robots that were never taught soccer learned to play because they were rewarded each time they scored."
    },
    {
      label: "Give a long video a focus.",
      text: "The Hinton interview runs 13 minutes and covers a lot. Showing the discussion question first gave people something to listen for: *What threads or connections do you see between the way humans and machines learn?*",
      image: {
        src: "images/session-2/threads-answers.jpg",
        alt: "Mentimeter answers to: What threads or connections do you see between the way humans and machines learn? Answers: we don't know how either one fully works; both still need some sort of human teaching it, it all comes from something a human made; sounds like we both default to being results-based; both develop a neural network based on previous experience.",
        caption: "What people saw in common between human and machine learning."
      }
    },
    {
      label: "Try continuing the discussion in Teams.",
      text: "The last slide promised one or two follow-up questions in our Teams channel. The experiment was for two groups the live hour didn't serve: people who need time to think before they speak, and teammates in India."
    }
  ],
  results: [
    {
      quote: "Both still need some sort of human teaching it, it all comes from something a human made.",
      source: "a participant, in the live poll, on what connects human and machine learning",
      highlight: true
    },
    { text: "Other answers to that question: *\"We don't know how either one fully works\"* and *\"Sounds like we both default to being results-based.\"*" },
    { text: "Asked what they would train an AI to solve, people gave 8 ideas, from meal prep for *\"my specific health needs\"* to traffic, medical technology, and *\"what our pets are thinking.\"* None were about our own work." },
    { text: "All 4 conditioning examples came from everyday life, like a cat who hears a can open and expects tuna." },
    { text: "The opening poll: 3 *Maybe*, 2 *No*. The closing poll: 3 *Maybe*, 2 *Other*. The poll was anonymous, and I don't know what *Other* meant to people." },
    { label: "The Teams discussion got no replies,", text: "while every live question got answers. So I didn't repeat the experiment." }
  ],
  foundations: [
    { name: "Adult learning principles (Knowles)", text: "each discussion question asked people to draw on their own experience, from conditioning in their lives to problems they'd want AI to solve." },
    { name: "Bloom's taxonomy", text: "a first look at the topic, pitched at *understand*: people gave examples from their own lives before comparing human and machine learning." },
    { name: "ADKAR", text: "an early *Awareness* session. The Hinton interview showed why AI matters, risks included, from a credible expert." }
  ],
  mentimeter: {
    link: "https://www.mentimeter.com/app/presentation/alub5b4dswdaz7am52aap2tfvfnh36wc/view",
    embed: "https://www.mentimeter.com/app/presentation/alub5b4dswdaz7am52aap2tfvfnh36wc/embed",
    note: "The full session flow. The live answers are in the screenshots above; the shared deck doesn't show them."
  },
  materials: [
    { type: "Video", title: "The difference between classical and operant conditioning", source: "TED-Ed, Peggy Andover", url: "https://www.youtube.com/watch?v=H6LEcM0E0io", note: "How humans learn: the starting point." },
    { type: "Video", title: "Pablo Escobar's Use of Carrier Pigeons Has a Fascinating History", source: "Smithsonian Channel", url: "https://www.youtube.com/watch?v=PYQzgyMvsn0", note: "The bridge from people to machines." },
    { type: "Video", title: "\"Godfather of AI\" Geoffrey Hinton: The 60 Minutes Interview", source: "60 Minutes", url: "https://www.youtube.com/watch?v=qrvK_KuIeJk", note: "How AI learns, and its benefits and risks." }
  ],
  nextSteps: [
    { label: "Tie it back to our work:", text: "add a follow-up question, *What would we need to teach AI to get it to work well for us?*, so the ideas move from personal life to the team's real tasks." },
    { label: "Make the connection explicit:", text: "after the Hinton interview, ask *Did the robots learn through operant or classical conditioning?* so people link the robots back to how they learn themselves." },
    { label: "Keep discussion live for this team:", text: "keep reflection inside the live session, since the async thread got no replies." }
  ]
}
```
