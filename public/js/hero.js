/*
  Hero intro line: reveals "I empower people…" word by word, after the roles and peonies.
  Uses GSAP SplitText (loaded in index.html). Timing and easing follow BRAND.md, Motion.

  To adjust:
    START   when the first word begins, in seconds from page load (the roles finish around 1.9s)
    Everything else (how long words linger, the gap between them, blur, and lift) comes from the
    motion tokens in css/tokens.css, so change it there to change all motion together.

  If GSAP doesn't load, or a visitor's system asks for less motion, this does nothing and the
  CSS in layout.css shows the line instead.
*/
(function () {
  var sub = document.querySelector(".hero-sub");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!sub || reduceMotion || typeof gsap === "undefined" || typeof SplitText === "undefined") return;

  var START = 1.9;

  // Motion tokens from tokens.css, so the words match everything else (BRAND.md, Motion).
  var css = getComputedStyle(document.documentElement);
  function seconds(name, fallback) {
    var v = parseFloat(css.getPropertyValue(name));
    return isNaN(v) ? fallback : v / 1000;
  }
  var LINGER = seconds("--duration-linger", 2.5);
  var STAGGER = seconds("--stagger-words", 0.07);
  var BLUR = css.getPropertyValue("--motion-blur").trim() || "1px";
  var RISE = (parseFloat(css.getPropertyValue("--motion-rise")) || 0.55) * 100; // 0.55em, as a % of each word's height

  gsap.registerPlugin(SplitText);
  sub.classList.add("is-split"); // hands the line over from the CSS fallback to this script

  // Once everything has landed, let the browser stop treating the hero as "about to animate".
  function releaseLayers() {
    gsap.set(".hero h1, .hero-role, .hero-flower, .hero-word", { willChange: "auto", backfaceVisibility: "visible" });
  }

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
        yPercent: RISE,
        filter: "blur(" + BLUR + ")",
        duration: LINGER,
        ease: "expo.out",  // matches --ease-settle
        stagger: STAGGER,
        delay: delay,
        force3D: true,     // keeps each word on the graphics card while it moves (smoother on low-res screens)
        onComplete: releaseLayers
      });
    }
  });
})();
