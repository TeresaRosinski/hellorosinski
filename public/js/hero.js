/*
  Hero intro line: reveals "I empower people…" word by word, after the roles and peonies.
  Uses GSAP SplitText (loaded in index.html). Timing and easing follow BRAND.md, Motion.

  To adjust:
    START   when the first word begins, in seconds from page load (the roles finish around 1.9s)
    STAGGER the gap between words
    the "from" values below: how far each word rises and how blurred it starts

  If GSAP doesn't load, or a visitor's system asks for less motion, this does nothing and the
  CSS in layout.css shows the line instead.
*/
(function () {
  var sub = document.querySelector(".hero-sub");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!sub || reduceMotion || typeof gsap === "undefined" || typeof SplitText === "undefined") return;

  var START = 1.9;
  var STAGGER = 0.07;

  gsap.registerPlugin(SplitText);
  sub.classList.add("is-split"); // hands the line over from the CSS fallback to this script

  // Start on schedule however long the page took to get here.
  var delay = Math.max(0, START - performance.now() / 1000);

  SplitText.create(sub, {
    type: "words",
    wordsClass: "hero-word",
    aria: "auto",       // screen readers still read the whole sentence
    autoSplit: true,    // re-splits cleanly if fonts load late or the screen resizes
    onSplit: function (self) {
      gsap.set(sub, { opacity: 1 });
      return gsap.from(self.words, {
        opacity: 0,
        yPercent: 55,
        filter: "blur(1px)",
        duration: 2.5,
        ease: "expo.out",  // matches --ease-settle
        stagger: STAGGER,
        delay: delay
      });
    }
  });
})();
