/*
  AI Learning Series: the content for the series section on the home page.
  To edit a session, change its entry below. To add one, copy the template at the end of this note.
  Sessions show newest first (highest number on the left), so they can be listed in any order.
  series.js builds the session cards and the detail panel from this list.
  The benchmark for how a session should read is content/gold-example-ai-agent-building.md.

  Text formatting: wrap words in *asterisks* to show them in italics. Nothing else is formatted.

  The series:
    title       the section heading
    intro       one line under the heading: what the series is and who led it
    summary     optional: a few sentences under the intro, like how it started and grew

  Each session (every field except number, title and goal is optional):
    number        shown as "Session 9"; also its link, like hellorosinski.com/#session-9
    title         the card and panel heading
    goal          one-line promise, shown on the card and under the panel heading
    meta          the facts line under the promise, shown in this order:
                    format ("Live virtual workshop"), date ("March 2026"), duration ("60 min"),
                    participants (a number), audience ("Creative team"), tools (a list)
    situation     why the session was needed (shown under "The situation")
    audience      who was in the room and their starting point (shown under "Who was in the room")
    objectives    what learners can do by the end, one measurable string each (2–3)
    designChoices what I did and why, one entry each:
                    label   the short bold lead-in
                    text    the explanation
                    steps   optional: numbered steps; each is { text, items } where items is
                            an optional list shown under that step
                    image   optional: a slide or screenshot shown under the choice:
                            { src, alt, caption, width, height }. Keep images in
                            public/images/session-N/, compressed, with alt text that says
                            what the image shows.
    results       what happened, one entry each. Use any of:
                    label      optional bold lead-in, like "Afterwards:"
                    text       the result in my words
                    quote      someone's words (shown as a quote)
                    source     who said it, like "a director, on open mic"
                    highlight  true to make it the standout result (use for one at most)
    foundations   learning theories the session aligns with: { name, text } where text says
                  which design choice matches. Only claim what a design choice backs up.
    mentimeter    link:  the public view link ("" shows "coming soon")
                  embed: the embed link, if it has one ("" shows a button to the link instead)
                  note:  optional one line about what's in it
    tool          optional: leave it out if the session has no tool
                    title, description (optional: one line on what it is and why I built it),
                    objective, builtWith (a list of tech), credit (one line),
                    url ("" shows "coming soon")
    materials     optional: videos and articles used in the session, shown under "See it" as
                  "Shared in the session". One entry each: { type, title, source, url, note }
                    type    a short tag, like "Video" or "Article"
                    title   the original title, linked to url (opens in a new tab)
                    source  who published it, like "TED-Ed" or "60 Minutes"
                    note    optional: one line on how it was used in the session
                  Link to the original; don't copy or re-host other people's videos.
    nextSteps     what I'd do next time: { label, text }

  Template for a new session (paste it inside "sessions: [ ... ]", with a comma between entries):

    {
      number: 8,
      title: "",
      goal: "",
      meta: { format: "", date: "", duration: "", participants: 0, audience: "", tools: [""] },
      situation: "",
      audience: "",
      objectives: [""],
      designChoices: [
        { label: "", text: "" }
      ],
      results: [
        { text: "" },
        { quote: "", source: "" }
      ],
      foundations: [
        { name: "", text: "" }
      ],
      mentimeter: { link: "", embed: "", note: "" },
      tool: {
        title: "",
        objective: "",
        builtWith: ["HTML", "CSS", "JavaScript"],
        credit: "Designed by Teresa; built with AI coding assistance.",
        url: ""
      },
      materials: [
        { type: "Video", title: "", source: "", url: "", note: "" }
      ],
      nextSteps: [
        { label: "", text: "" }
      ]
    }

*/
var SERIES = {
  title: "AI Learning Series",
  intro: "From 2023 to 2026, I initiated, designed, and led nine AI discussion and learning sessions to help my colleagues at Epsilon learn from each other.",
  summary: "It began with one question to the creative technology team: *What do we want to learn together?* AI came up again and again, and my director agreed it should be our focus. After six sessions, I opened the series to the whole creative team.",
  sessions: [
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
            caption: "First reactions, from excitement to concern.",
            width: 514,
            height: 400
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
            caption: "The 16 topics the team suggested.",
            width: 786,
            height: 400
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
    },
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
            caption: "Four examples, all from everyday life.",
            width: 625,
            height: 348
          }
        },
        {
          label: "Let a pigeon make the leap.",
          text: "Next came a short video on Pablo Escobar's carrier pigeons: a fun story that challenges the idea that only humans learn. If a pigeon can be trained to carry messages, what could a machine be trained to do? So I asked: *What problem would you train an AI algorithm to solve for?*",
          image: {
            src: "images/session-2/train-an-ai-answers.jpg",
            alt: "Mentimeter answers to: What problem would you train an AI algorithm to solve for? Answers: world hunger, politics; optimize time and scheduling but personalized for me; meal prep and grocery shopping lists based on the foods I'll actually eat and cook and that are good for my specific health needs; how to optimize my day by taking in all the data from all of my devices; traffic; healthier, affordable food options; advance medical tech; to know what our pets are thinking.",
            caption: "Eight ideas, from meal prep to medical tech.",
            width: 618,
            height: 355
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
            caption: "What people saw in common between human and machine learning.",
            width: 640,
            height: 373
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
    },
    {
      number: 9,
      title: "AI Agent Building",
      goal: "From first-timer to your own AI agent in one hour.",
      meta: {
        format: "Live virtual workshop",
        date: "March 2026",
        duration: "60 min",
        participants: 27,
        audience: "Creative team",
        tools: ["Microsoft Copilot Agent Builder"]
      },
      situation: "Two weeks earlier, every employee had been given Copilot Agent Builder, with a clear message from leadership: bring AI into everything. What I kept hearing from my team: *we don't know where to start.* So I designed this session and led it on my second-to-last day at Epsilon.",
      audience: "27 creatives (art directors, copywriters, front-end developers, producers), from associates to directors, mostly first-timers with agents. AI replacing people's work was a constant topic, at work and in the news.",
      objectives: [
        "Generate agent instructions by answering three guiding questions with a ready-made Copilot prompt.",
        "Build and personalize their own agent in Copilot Agent Builder.",
        "Test their agent and refine its instructions to improve the output.",
        "Share their agent with colleagues."
      ],
      designChoices: [
        {
          label: "Read the room, then set the pace.",
          text: "I opened with two questions: *When you hear \"AI agents,\" what thoughts come to mind?* and *Have you experimented with creating AI agents?* To the second, 19 people answered: 3 yes, 14 no, 2 maybe. I usually open the floor every few slides and wait for three people to share, so the group learns from each other. With mostly first-timers, I waited for one or two and kept the build moving."
        },
        {
          label: "Reframe \"agent\" as \"assistant.\"",
          text: "In the opening word cloud, the most common answers were \"assistant\" and \"helper,\" next to \"suspicious,\" \"insecurity,\" \"confusion,\" and \"Agent Smith from The Matrix.\" The next question built on the helpful side: *If you could have an assistant help you with anything, what would it be?* Answers appeared live on screen, then people unmuted to share.",
          image: {
            src: "images/session-9/word-cloud.jpg",
            alt: "Mentimeter word cloud for the question: When you hear \"AI Agents\", what thoughts come to mind? The largest words are assistant and helper. Other answers include personal assistant, quick help, task helper, automation, suspicious, confusion, insecurity, hallucinations, clippy, James Bond, the Matrix and Agent Smith from the Matrix.",
            caption: "The opening word cloud, with participants' anonymous answers.",
            width: 786,
            height: 404
          }
        },
        {
          label: "Let the group choose.",
          text: "In a 60-second live poll, participants chose between three agents: a *Skill Sidekick* to help you improve something you want to learn, a *Deadline Therapist* for those \"how is this due tomorrow?\" moments, or a *Creative Partner* for ideas, writing, or design inspiration. The Skill Sidekick won. We built it together, and each person made it their own.",
          image: {
            src: "images/session-9/agent-vote.jpg",
            alt: "Mentimeter ranking results for: Out of these options, which Agent would you like to create? First, a Skill Sidekick to help you improve something you want to learn. Second, a Deadline Therapist for those how-is-this-due-tomorrow moments. Third, a Creative Partner for ideas, writing, or design inspiration.",
            caption: "The group's ranking: the Skill Sidekick came first.",
            width: 786,
            height: 408
          }
        },
        {
          label: "Skip the lecture, start building.",
          text: "No explanation of what agents are; we went straight to building one together."
        },
        {
          label: "Remove the biggest barrier.",
          text: "From my own experience and conversations with colleagues, I knew where people struggled with AI: explaining clearly what they need. Clear instructions take time, and it's hard to know what to focus on or how to structure them. So I took that off their plate. Each participant:",
          steps: [
            {
              text: "Answered three simple questions in a shared template, with example answers to keep things moving:",
              items: [
                "*When would this agent be helpful?*",
                "*What kind of helper do I want?*",
                "*How should it respond when helping you?*"
              ]
            },
            { text: "Gave those answers to Copilot with a ready-made prompt, and Copilot wrote the agent's instructions for them." },
            { text: "Pasted the instructions into Agent Builder, added extra context, and learned how to share the agent with colleagues." },
            { text: "Tested their agents: asked them questions, reviewed the answers, and updated the instructions to better match the output they wanted." }
          ],
          image: {
            src: "images/session-9/skill-sidekick-examples.jpg",
            alt: "Slide titled Skill Sidekick listing example answers: when I'm learning something new, when I don't understand a concept, when I'm stuck on a problem, when I want to practice a skill, when I need help studying, when I want to improve at something, when I make mistakes and need help fixing them, when I need help understanding code, when I want to review something, when I want to get better over time.",
            caption: "Example answers for *When would this agent be helpful?*, shown for the Skill Sidekick.",
            width: 786,
            height: 404
          }
        }
      ],
      results: [
        {
          text: "We completed every step together within the hour, so everyone who followed along left with a working agent and knew how to share it.",
          quote: "That was amazing. In one hour I built my own agent start to finish.",
          source: "participant"
        },
        {
          quote: "You hit this out of the park.",
          source: "a director, on open mic"
        },
        {
          label: "Afterwards:",
          text: "a request for a follow-up check-in, a one-on-one brainstorm for a live project, and requests from several people (some through my manager) for the recording and resources."
        },
        {
          text: "More than six months after I left the company, a former colleague told me her team was building an agent. When someone started overcomplicating it, a teammate said:",
          quote: "Why don't we just use what Teresa showed us?",
          highlight: true
        }
      ],
      foundations: [
        {
          name: "Adult learning principles (Knowles)",
          text: "the opening question started from participants' own work, not from the tool."
        },
        {
          name: "Self-determination theory",
          text: "*autonomy* (the group vote, then personal choices), *competence* (a working agent in one hour), *relatedness* (sharing ideas live and sharing agents with colleagues)."
        },
        {
          name: "Worked examples (cognitive load theory)",
          text: "the template and example answers removed the blank-page problem, so attention went to building."
        },
        {
          name: "ADKAR",
          text: "strongest at *Desire* and *Knowledge*, with first practice toward *Ability*. *Reinforcement* would come from follow-up, which participants asked for."
        }
      ],
      mentimeter: {
        link: "https://www.mentimeter.com/app/presentation/alvc2e8sjr76qr4f512i2kni1fwgevh5/embed",
        embed: "https://www.mentimeter.com/app/presentation/alvc2e8sjr76qr4f512i2kni1fwgevh5/embed",
        note: "The full session flow, including the live polls."
      },
      tool: {
        title: "Make it your agent",
        description: "I built this after the session to turn the template and prompt into a guided, step-by-step tool for future learners.",
        objective: "Generate agent instructions with Copilot and a guided prompt.",
        builtWith: ["HTML", "CSS", "JavaScript", "Claude"],
        credit: "Designed by Teresa; built with AI coding assistance.",
        url: "tools/make-it-your-agent/"
      },
      nextSteps: [
        {
          label: "Follow up with a quick poll:",
          text: "how many people built a working agent, what would make a follow-up session valuable, and what questions or confusion remain. It would give me a real completion number and start the reinforcement participants asked for."
        },
        {
          label: "For returning learners:",
          text: "small groups that choose their own use cases and refine instructions together, moving from guided steps to independence."
        }
      ]
    }
  ]
};
