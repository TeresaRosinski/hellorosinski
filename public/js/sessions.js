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
                    title, objective, builtWith (a list of tech), credit (one line),
                    url ("" shows "coming soon")
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
          text: "*autonomy* (the group vote, then personal choices), *competence* (a working agent in one hour), *connection* (sharing ideas live and sharing agents with colleagues)."
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
        objective: "Generate agent instructions with Copilot and a guided prompt.",
        builtWith: ["HTML", "CSS", "JavaScript", "Claude"],
        credit: "Designed by Teresa after the session; built with AI coding assistance.",
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
