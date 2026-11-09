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
  title: "AI + Learning Series",
  intro: "Helping the creative team at Epsilon learn to work with AI.",
  summary: "I initiated, planned, and led 9 discussion and learning sessions from 2023 to 2026.",
  sessions: [
    {
      number: 9,
      title: "AI Agent Building Session",
      goal: "A hands-on introduction to building AI agents in Microsoft 365 Copilot.",
      role: "Ideated, planned, and led the session.",
      audience: "Creative team. Starting point: familiar with AI, with little experience building agents.",
      objectives: [
        "Explain why instructions are the foundation of an AI agent.",
        "Generate agent instructions with Copilot and a guided prompt.",
        "Build and personalize their own agent in the agent builder.",
        "Keep building agents on their own after the session."
      ],
      details: [
        "Discussion and interactive questions helped learners relate AI agents to assistants and brainstorm tangible uses.",
        "Learners voted on one of three agents to build, giving them control over the session.",
        "To prevent overload, they learned only the essentials, with tools to work through the build themselves in a low-key setting.",
        "Rather than write instructions from scratch, they filled in a pre-created prompt and had Copilot write them."
      ],
      mentimeter: {
        link: "https://www.mentimeter.com/app/presentation/alvc2e8sjr76qr4f512i2kni1fwgevh5/view?question=ia77d66nx96m",
        embed: ""
      },
      tool: {
        title: "Make it your agent",
        objective: "Generate agent instructions with Copilot and a guided prompt.",
        builtWith: ["HTML", "CSS", "JavaScript", "Claude"],
        credit: "Designed by Teresa; built with AI coding assistance.",
        url: "tools/make-it-your-agent/"
      }
    }
  ]
};
