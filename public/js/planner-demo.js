/*
  Planner mini-demo (homepage, Product Finder Planner card).
  Three switches change a sample ad brief; the card shows how many pieces of content the ad would
  need before and after. The counting is the Planner's own (tools/product-finder-planner/model.mjs),
  so the card and the tool always give the same answer.

  To adjust:
    START     the original brief: answers per question, products per result, changing parts
    CHANGES   what each switch does (its name matches data-change on the button in index.html)

  If this script doesn't load, the card still shows the original brief's count (81) in both places,
  and the switches do nothing.
*/
import { calculate } from "../tools/product-finder-planner/model.mjs";

const START = {
  answers: 3,                                         // two questions, each with this many answers
  products: 3,                                        // products shown per result
  parts: ["product_img", "product_text", "price_text"], // the changing parts of each product
};

const CHANGES = {
  products: (brief) => ({ ...brief, products: 5 }),                          // 3 → 5 products
  headline: (brief) => ({ ...brief, parts: [...brief.parts, "headline_text"] }), // one more part per product
  answers: (brief) => ({ ...brief, answers: brief.answers + 1 }),            // 3 → 4 answers per question
};

const demo = document.querySelector(".planner-demo");

// The Planner's count for a brief: results × products × parts.
function count(brief) {
  const plan = calculate({
    questionCount: 2,
    questions: [{ count: brief.answers }, { count: brief.answers }],
    products: brief.products,
    variables: brief.parts.join(", "),
    start: 1,
  });
  return plan.errors.length ? null : plan.entries.length;
}

if (demo) {
  const switches = [...demo.querySelectorAll(".planner-switch")];
  const original = demo.querySelector('[data-count="original"]');
  const changed = demo.querySelector('[data-count="changed"]');

  function update() {
    const brief = switches
      .filter((s) => s.getAttribute("aria-checked") === "true")
      .reduce((b, s) => CHANGES[s.dataset.change](b), START);
    const n = count(brief);
    if (n !== null) changed.textContent = n.toLocaleString();
  }

  const base = count(START);
  if (base !== null) original.textContent = base.toLocaleString();

  switches.forEach((s) => {
    s.addEventListener("click", () => {
      s.setAttribute("aria-checked", String(s.getAttribute("aria-checked") !== "true"));
      update();
    });
  });

  update();
}
