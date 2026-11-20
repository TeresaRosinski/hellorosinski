/*
  Section blooms: when a section heading marked with data-bloom scrolls into view, its flower
  opens (like the hero peonies) and its plum period pops in like a seed. Plays once per heading.
  The animations themselves live in css/layout.css ("Section blooms"); this only says when.

  To adjust:
    AFTER_HERO  if the heading is already on screen when the page loads, wait until about this many
                milliseconds after load, so it plays after the hero instead of on top of it
    THRESHOLD   how much of the heading must be visible before it blooms (0.6 = 60%)

  If this script doesn't run, or a visitor's system asks for less motion, the flower and period
  simply show, finished, with no animation.
*/
(function () {
  var headings = document.querySelectorAll("[data-bloom]");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!headings.length || reduceMotion || !("IntersectionObserver" in window)) return;

  var AFTER_HERO = 2600;
  var THRESHOLD = 0.6;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var heading = entry.target;
      observer.unobserve(heading);

      var delay = Math.max(0, AFTER_HERO - performance.now());
      heading.style.setProperty("--bloom-delay", Math.round(delay) + "ms");
      heading.classList.remove("is-waiting");
      heading.classList.add("is-blooming");

      // Once the last part (the period) has landed, let go of the animation (BRAND.md, Motion).
      heading.addEventListener("animationend", function (event) {
        if (event.animationName === "hero-seed") heading.classList.remove("is-blooming");
      });
    });
  }, { threshold: THRESHOLD });

  headings.forEach(function (heading) {
    heading.classList.add("is-waiting"); // hides the flower and period until the heading is in view
  });

  // Start watching once the page and its fonts have settled. Before then the layout can still
  // shift (the fonts swap in), and a heading below the fold can look briefly on screen.
  function start() {
    headings.forEach(function (heading) {
      observer.observe(heading);
    });
  }
  var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  var pageLoaded = document.readyState === "complete" ? Promise.resolve() : new Promise(function (resolve) {
    window.addEventListener("load", resolve, { once: true });
  });
  Promise.all([fontsReady, pageLoaded]).then(start, start);
})();
