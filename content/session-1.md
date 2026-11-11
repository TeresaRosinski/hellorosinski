## Kickoff: What Should We Learn Together?
**A real AI story, open questions, and an agenda built on team input.**
*Session 1 · Live virtual discussion · September 2023 · 60 min · 6 participants · Creative technology team · Mentimeter*

**The situation**
My director asked our team to start experimenting with ChatGPT. It felt powerful but vague, and in team discussions people saw it as mostly for writing creative stories. The team also wanted learning sessions, but no one had started any. So I did, on top of my day-to-day work.

**Who was in the room**
Six front-end developers on Epsilon's creative technology team. Our roles went beyond code to ideas for improving digital ads. Everyone had tried ChatGPT.

**Learning objectives**
By the end of the session, learners can:
- Describe a real AI use case from their own industry: an ad that recreated a late performer with AI.
- Identify the creative possibilities and ethical questions that use case raises.
- Suggest topics, and choose the format and frequency, for the team's future learning sessions.

**Design choices**
- **Start with a story from our own industry.** Since the team saw AI as mostly for creative writing, I started with a creative use of AI from our own field: a Guardian article about a 2023 Volkswagen Brazil ad that recreated the late singer Elis Regina. Our roles included ideas for digital ads, so it was directly relevant. Everyone took 10 minutes to read it and watch the ad.
- **Pick a topic with no right answer.** The ad divided opinion, partly because of Volkswagen's history in Brazil during the military dictatorship that Elis Regina had criticized. I chose it because there's no clear right answer, so no one had to worry about being wrong.
- **Move from reaction to reflection.** Over 20 minutes, three questions built on each other:
  1. *What was your initial reaction to the idea of using AI to recreate the likeness and performance of a deceased person?* (word cloud)
  2. *Do you think it's appropriate to use technology to recreate the likeness and performances of deceased individuals for advertising purposes?* (yes / no / it depends)
  3. *Can AI-generated art and performances evoke the same emotional connections and artistic value as those created by living artists?* (open answers)
  [image: the reaction word cloud]
- **Let learners do the talking.** I follow a 75/25 rule: I speak 25% of the time or less, and learners speak 75% or more.
- **Ask the team what to learn next.** In the last 15 minutes, the team suggested topics and voted on how and how often to meet.
  [image: the topics word cloud]

**Results**
- **The team chose monthly video meetings, and Session 2 followed in October 2023. This kickoff began a nine-session series; by Session 9, 27 people took part, up from 6 here.**
- The discussion ran longer than planned and filled the full hour.
- Asked whether recreating a late performer for an ad was appropriate, all 5 who answered chose *It depends*. No one said yes or no.
- *"It is more about connection (or nostalgia) than whether they are alive or not. Kind of like looking at a photograph, it is about the memory."* (a participant, in the live poll)
- AI appeared in 3 of the 16 topics the team suggested, more than any other theme. Later sessions covered two of them: AI use cases, and generating code with AI.
- *"I hardly even heard you say anything, even though you were leading the session."* (my manager, afterwards)
- **Afterwards:** my director reached out to say he loved the session. I sent a follow-up form to confirm which topics the team wanted to go deeper on, and chose to focus the series on AI.

**Learning foundations**
- **Adult learning principles (Knowles):** an ad-industry story connected AI to the team's real work, and the team's input shaped what came next.
- **Self-determination theory:** *autonomy* (the team suggested topics and chose the format and frequency) and *relatedness* (a shared discussion where colleagues heard each other's views).
- **Psychological safety (Edmondson):** I chose a topic with no clear right answer, so everyone could speak up without risk of being wrong.

**See it**
- **Workshop (Mentimeter):** the full session, including the live polls and open answers. https://www.mentimeter.com/app/presentation/ald7uhkf7x1zuno4rqtvptd9xsfrhrhb/embed

**What I'd do next**
- **Focus the closing question on AI:** ask only what people want to learn about AI, since the series went on to focus on it.
- **End with a quick pulse check:** one rating question on how useful the session felt, so I'd have more than anecdotes to learn from.

<!--
Notes for review (not for publishing):
- Display title is new; the session's original name was "Kick-off Learning And Development Discussion".
- Teresa's personal "why" (teaching showed her anything given the right tools improves) is kept for the series intro, not this session.
- Her interest in political history was a personal reason for the article choice; left out of the page.
-->

---

## Proposed sessions.js entry

Not in `public/js/sessions.js` yet. Added only after Teresa approves. The two images get captured from the Mentimeter embed at that point.

```js
{
  number: 1,
  title: "Kickoff: What Should We Learn Together?",
  goal: "A real AI story, open questions, and an agenda built on team input.",
  meta: {
    format: "Live virtual discussion",
    date: "September 2023",
    duration: "60 min",
    participants: 6,
    audience: "Creative technology team",
    tools: ["Mentimeter"]
  },
  situation: "My director asked our team to start experimenting with ChatGPT. It felt powerful but vague, and in team discussions people saw it as mostly for writing creative stories. The team also wanted learning sessions, but no one had started any. So I did, on top of my day-to-day work.",
  audience: "Six front-end developers on Epsilon's creative technology team. Our roles went beyond code to ideas for improving digital ads. Everyone had tried ChatGPT.",
  objectives: [
    "Describe a real AI use case from their own industry: an ad that recreated a late performer with AI.",
    "Identify the creative possibilities and ethical questions that use case raises.",
    "Suggest topics, and choose the format and frequency, for the team's future learning sessions."
  ],
  designChoices: [
    {
      label: "Start with a story from our own industry.",
      text: "Since the team saw AI as mostly for creative writing, I started with a creative use of AI from our own field: a Guardian article about a 2023 Volkswagen Brazil ad that recreated the late singer Elis Regina. Our roles included ideas for digital ads, so it was directly relevant. Everyone took 10 minutes to read it and watch the ad."
    },
    {
      label: "Pick a topic with no right answer.",
      text: "The ad divided opinion, partly because of Volkswagen's history in Brazil during the military dictatorship that Elis Regina had criticized. I chose it because there's no clear right answer, so no one had to worry about being wrong."
    },
    {
      label: "Move from reaction to reflection.",
      text: "Over 20 minutes, three questions built on each other:",
      steps: [
        { text: "*What was your initial reaction to the idea of using AI to recreate the likeness and performance of a deceased person?* (word cloud)" },
        { text: "*Do you think it's appropriate to use technology to recreate the likeness and performances of deceased individuals for advertising purposes?* (yes / no / it depends)" },
        { text: "*Can AI-generated art and performances evoke the same emotional connections and artistic value as those created by living artists?* (open answers)" }
      ],
      image: {
        src: "images/session-1/reaction-word-cloud.jpg",
        alt: "Mentimeter word cloud for: What was your initial reaction to the idea of using AI to recreate the likeness and performance of a deceased person? Answers: concerning, cool, copyrights, curious, engaging, futuristic, innovative, intelligent, precedence, questioning, realistic, recreate, uncanny.",
        caption: "First reactions, from excitement to concern."
      }
    },
    {
      label: "Let learners do the talking.",
      text: "I follow a 75/25 rule: I speak 25% of the time or less, and learners speak 75% or more."
    },
    {
      label: "Ask the team what to learn next.",
      text: "In the last 15 minutes, the team suggested topics and voted on how and how often to meet.",
      image: {
        src: "images/session-1/topics-word-cloud.jpg",
        alt: "Mentimeter word cloud for: What are 3 (or more) topics, ideas, or things you'd be curious to discuss as a team? Answers include ai, ai generated code, ai use cases, ad industry, augmented reality, big data, css, javascript, javascript frameworks, our competition, python, team pain points, the qr code, third party cookies, topics in codepen emails, and ui current trends.",
        caption: "The 16 topics the team suggested."
      }
    }
  ],
  results: [
    {
      text: "The team chose monthly video meetings, and Session 2 followed in October 2023. This kickoff began a nine-session series; by Session 9, 27 people took part, up from 6 here.",
      highlight: true
    },
    { text: "The discussion ran longer than planned and filled the full hour." },
    { text: "Asked whether recreating a late performer for an ad was appropriate, all 5 who answered chose *It depends*. No one said yes or no." },
    {
      quote: "It is more about connection (or nostalgia) than whether they are alive or not. Kind of like looking at a photograph, it is about the memory.",
      source: "a participant, in the live poll"
    },
    { text: "AI appeared in 3 of the 16 topics the team suggested, more than any other theme. Later sessions covered two of them: AI use cases, and generating code with AI." },
    {
      quote: "I hardly even heard you say anything, even though you were leading the session.",
      source: "my manager, afterwards"
    },
    {
      label: "Afterwards:",
      text: "my director reached out to say he loved the session. I sent a follow-up form to confirm which topics the team wanted to go deeper on, and chose to focus the series on AI."
    }
  ],
  foundations: [
    { name: "Adult learning principles (Knowles)", text: "an ad-industry story connected AI to the team's real work, and the team's input shaped what came next." },
    { name: "Self-determination theory", text: "*autonomy* (the team suggested topics and chose the format and frequency) and *relatedness* (a shared discussion where colleagues heard each other's views)." },
    { name: "Psychological safety (Edmondson)", text: "I chose a topic with no clear right answer, so everyone could speak up without risk of being wrong." }
  ],
  mentimeter: {
    link: "https://www.mentimeter.com/app/presentation/ald7uhkf7x1zuno4rqtvptd9xsfrhrhb/embed",
    embed: "https://www.mentimeter.com/app/presentation/ald7uhkf7x1zuno4rqtvptd9xsfrhrhb/embed",
    note: "The full session, including the live polls and open answers."
  },
  nextSteps: [
    { label: "Focus the closing question on AI:", text: "ask only what people want to learn about AI, since the series went on to focus on it." },
    { label: "End with a quick pulse check:", text: "one rating question on how useful the session felt, so I'd have more than anecdotes to learn from." }
  ]
}
```
