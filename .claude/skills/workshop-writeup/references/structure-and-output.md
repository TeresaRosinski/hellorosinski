# Structure and output

## How the site shows a session (so the write-up fits)

On the site, the panel shows these in order. **Bold** = always visible; *italic* = folded (one click to open).

1. **Title, promise (one line), facts line**
2. **See it:** Mentimeter embed (full width) and the custom tool, if any
3. **The situation:** why the session was needed (aim for 50 words or fewer)
4. *Who was in the room*
5. *Learning objectives:* 2–4, measurable, action verbs, each backed by something that happened
6. **Design choices:** the bold label is always visible, so labels must make sense on their own as a scannable list. The explanation, steps, and image open on click.
7. **Results:** the standout result (`highlight: true`) shows first. Quotes are set off.
8. *Learning foundations:* 3–4 theories, each tied to a design choice (from the learning-theory-alignment skill)
9. *What I'd do next*

## Writing rules per section
- **Promise:** one line, what a learner walks away with. Must be backed by the results.
- **Facts line:** format (live/self-paced, virtual/in person), Month Year, duration, participants, audience, tools.
- **Design choice labels:** an imperative or short phrase, e.g. "Read the room, then set the pace." Each body says what she did, then why.
- **Results:** say what happened, not what was designed to happen. Quotes need a source ("a director, on open mic"). One story stays one story.
- **Images:** only evidence (polls, word clouds, example answers), not decoration. Alt text says what the image shows, including the main words or results.

## sessions.js entry format

The authoritative field list is the comment at the top of `public/js/sessions.js`. Read it before writing the entry. Summary:

```js
{
  number: 0,
  title: "",
  goal: "",                       // the one-line promise
  meta: { format: "", date: "", duration: "", participants: 0, audience: "", tools: [""] },
  situation: "",
  audience: "",
  objectives: [""],
  designChoices: [
    { label: "", text: "", steps: [{ text: "", items: [""] }],
      image: { src: "images/session-N/name.jpg", alt: "", caption: "", width: 0, height: 0 } }
  ],
  results: [
    { label: "", text: "", quote: "", source: "", highlight: true }
  ],
  foundations: [{ name: "", text: "" }],
  mentimeter: { link: "", embed: "", note: "" },
  tool: { title: "", description: "", objective: "", builtWith: [""], credit: "", url: "" },
  nextSteps: [{ label: "", text: "" }]
}
```

- Escape double quotes inside strings (`\"`).
- Use `*asterisks*` for italics; nothing else is formatted.
- Leave out optional fields that have no real content rather than filling them.
- Images go in `public/images/session-N/`, compressed (aim for under about 60 KB), with `width` and `height` set.

## Where things are saved
- While reviewing: `content/session-N-draft.md`
- When final: `content/session-N.md`, with the proposed `sessions.js` entry at the bottom in a code block
- `public/js/sessions.js` is only changed after Teresa approves.
