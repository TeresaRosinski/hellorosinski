/*
  AI + Learning series: the content for the series section on the home page.
  To edit a session, change its entry below. To add one, copy the template at the end of this note.
  Sessions show newest first (highest number on the left), so they can be listed in any order.
  series.js builds the session cards and the detail panel from this list.

  Each session:
    number      shown as "Session 1"; also its link, like hellorosinski.com/#session-1
    title       the card and panel heading
    goal        one line, shown on the card and under the panel heading
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
  intro: "Helping a creative team learn to work with AI.",
  sessions: [
    {
      number: 9,
      title: "AI Agent Building Session",
      goal: "Learners build and personalize their own AI agent in the agent builder in Microsoft 365 Copilot.",
      objectives: [
        "Build and personalize an AI agent using the agent builder in Microsoft 365 Copilot.",
        "Explain why instructions are the foundation of an AI agent.",
        "Use Copilot and a guided prompt to generate instructions for their agent.",
        "Work in the agent builder with enough familiarity to keep exploring on their own."
      ],
      details: [
        "The session opened with interactive questions and discussion to get learners talking about AI agents. Relating agents to assistants helped them brainstorm more tangible ideas for how they could use one.",
        "Learners then voted on one of three types of agent to build, giving them agency and control as the session moved forward.",
        "To prevent information overload, learners got only the essentials of how to build an agent, along with tools to work through the process themselves. The aim was familiarity with the process and the means to do it on their own, so they could build further skills from there.",
        "We discussed why instructions matter, since they are the foundation of an agent. Rather than writing instructions from scratch, learners answered a few questions in a pre-created prompt and gave it to Copilot, which wrote the instructions for them. They then used those instructions to create their agent.",
        "The session walked learners through the agent-building process end to end, using assisted tools so they could get familiar with new technology in a low-key setting."
      ],
      mentimeter: {
        link: "https://www.mentimeter.com/app/presentation/alvc2e8sjr76qr4f512i2kni1fwgevh5/view?question=627aka2dfbb2",
        embed: ""
      }
    }
  ]
};
