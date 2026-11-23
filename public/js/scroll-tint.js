/*
  Scroll tint: the page background shifts tone as you move down the homepage (BRAND.md, Color:
  strength steps). Linen at the hero, a light plum (plum at 6%) around How I work and the first
  tiles, and a light green (green at 8%) when the tool tiles reach the middle of the screen.
  Only the background changes, so text contrast stays the same everywhere.

  To change which part of the page sets which tone, edit the data-tone attribute on that element
  in index.html. The tones themselves live in css/layout.css ("Scroll tint"):
    linen  the default page ground
    plum   plum at 6% (--plum-06)
    green  green at 8% (--green-08)

  An element sets the tone when it crosses a thin strip across the middle of the screen.
  If this script doesn't run, the page stays linen and "What I do" keeps its own sand background.
  People who ask for less motion still get the tones, but they switch at once instead of fading.
*/
(function () {
  var areas = document.querySelectorAll("[data-tone]");
  if (!areas.length || !("IntersectionObserver" in window)) return;

  var body = document.body;
  body.classList.add("has-tint"); // hands the "What I do" background over to the page ground

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) body.setAttribute("data-tone", entry.target.getAttribute("data-tone"));
    });
  }, { rootMargin: "-45% 0px -54% 0px" }); // a thin strip across the middle of the screen

  areas.forEach(function (area) {
    observer.observe(area);
  });
})();
