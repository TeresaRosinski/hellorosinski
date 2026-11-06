/*
  AI + Learning series: the content for the series section on the home page.
  To edit a session, change its entry below. To add one, copy the template at the end of this note.
  Sessions show newest first (highest number on the left), so they can be listed in any order.
  series.js builds the session cards and the detail panel from this list.

  The series:
    title       the section heading
    intro       one line under the heading
    summary     optional: one line under the intro, like scope and dates

  Each session:
    number      shown as "Session 1"; also its link, like hellorosinski.com/#session-1
    title       the card and panel heading
    goal        one line, shown on the card and under the panel heading
    role        optional: what Teresa did in this session, shown under "My role"
    objectives  optional: what learners can do by the end, one string per objective
    details     the process, one string per paragraph (shown under "Process")
    mentimeter  link:  the public view link ("" shows "coming soon")
                embed: the embed link, if it has one ("" shows a button to the link instead)
    tool        optional: leave it out if the session has no tool
                  title, objective, builtWith (a list of tech), credit (one line),
                  url ("" shows "coming soon")

  Template for a new session (paste it inside "sessions: [ ... ]", with a comma between entries):

    {
      number: 8,
      title: "",
      goal: "",
      role: "",
      objectives: [""],
      details: [""],
      mentimeter: { link: "", embed: "" },
      tool: {
        title: "",
        objective: "",
        builtWith: ["HTML", "CSS", "JavaScript"],
        credit: "Designed by Teresa; built with AI coding assistance.",
        url: ""
      }
    }

*/
var SERIES = {
  title: "AI + Learning series",
  intro: "Helping the creative team at Epsilon learn to work with AI.",
  summary: "I initiated, planned, and led 9 discussion and learning sessions from 2023 to 2026.",
  sessions: [
    {
      number: 9,
      title: "AI Agent Building Session",
      goal: "A hands-on introduction to building AI agents in Microsoft 365 Copilot.",
      role: "Ideated, planned, and led the session.",
      objectives: [
        "Build and personalize an AI agent using the agent builder in Microsoft 365 Copilot.",
        "Explain why instructions are the foundation of an AI agent.",
        "Use Copilot and a guided prompt to generate instructions for their agent.",
        "Work in the agent builder with enough familiarity to keep exploring on their own."
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
      }
    }
  ]
};
