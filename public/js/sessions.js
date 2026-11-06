/*
  AI + Learning series: the content for the series section on the home page.
  To edit a session, change its entry below. To add one, copy the template at the end of this note.
  Sessions show newest first (highest number on the left), so they can be listed in any order.
  series.js builds the session cards and the detail panel from this list.

  Each session:
    number      shown as "Session 1"; also its link, like hellorosinski.com/#session-1
    title       the card and panel heading
    goal        one line, shown on the card and under the panel heading
    details     paragraphs about the process and learning goals, one string per paragraph
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

  PLACEHOLDERS: Session 9's text is placeholder until its materials are ready.
*/
var SERIES = {
  title: "AI + Learning series",
  intro: "Helping a creative team learn to work with AI.",
  sessions: [
    {
      number: 9,
      title: "Session title coming soon",
      goal: "One-line session goal coming soon.",
      details: ["Process and learning goals for this session coming soon."],
      mentimeter: { link: "", embed: "" }
    }
  ]
};
