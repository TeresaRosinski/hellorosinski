/*
  Builds the AI Learning Series section from SERIES in sessions.js.
  To change content, edit sessions.js; this file only handles how it's shown.

  The session cards work like tabs: choosing one shows its details in the panel below.
  Keyboard: Tab to the cards, then the arrow keys, Home and End move between sessions.
  Each session has its own link (#session-3), so a shared link opens that session.
*/
(function () {
  var section = document.getElementById("ai-learning");
  if (!section || typeof SERIES === "undefined") return;

  // Newest first: highest session number on the left, whatever order sessions.js lists them in.
  var sessions = SERIES.sessions.slice().sort(function (a, b) { return b.number - a.number; });
  var tabs = [];

  // Motion (see BRAND.md, Motion). GSAP and Flip are optional: without them, or when a visitor's
  // system asks for less motion, everything still works and simply changes instantly.
  // GSAP loads in the background (index.html), so check for it when it's needed, not up front.
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function canAnimate() {
    if (reduceMotion || typeof gsap === "undefined" || typeof Flip === "undefined") return false;
    gsap.registerPlugin(Flip);
    return true;
  }
  var EASE = "expo.out";   // matches --ease-settle
  var QUICK = 0.45;        // seconds; close to --duration-quick, a touch longer for the slide

  // Make an element with an optional class and text.
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  // Fill a node with text, showing *asterisk-wrapped* words in italics.
  // Builds text nodes and <em> elements only, so content is never read as HTML.
  function rich(node, text) {
    String(text).split(/\*([^*]+)\*/).forEach(function (part, i) {
      if (!part) return;
      node.appendChild(i % 2 ? el("em", "", part) : document.createTextNode(part));
    });
    return node;
  }

  // A paragraph or list item with an optional bold lead-in, like "Afterwards: …".
  function leadIn(tag, className, label, text) {
    var node = el(tag, className);
    if (label) {
      node.appendChild(el("strong", "", label));
      if (text) node.appendChild(document.createTextNode(" "));
    }
    if (text) rich(node, text);
    return node;
  }

  // A pill button. Links to other sites open in a new tab with a ↗;
  // links within this site (like tools/…) open in the same tab.
  function button(href, text) {
    var a = el("a", "series-button", text);
    a.href = href;
    if (/^https?:/.test(href)) {
      a.target = "_blank";
      a.rel = "noopener";
      a.appendChild(el("span", "", " ↗")).setAttribute("aria-hidden", "true");
    }
    return a;
  }

  // ---------- Heading and intro ----------

  section.querySelector("#series-title").textContent = SERIES.title;
  section.querySelector("#series-intro").textContent = SERIES.intro;
  if (SERIES.summary) {
    section.querySelector(".series-head").appendChild(rich(el("p", "series-summary"), SERIES.summary));
  }

  // ---------- Session cards ----------

  // A short cue so it's clear the cards switch the panel below.
  section.appendChild(el("p", "series-cards-cue", "Choose a session to see how it was designed and what happened."));

  var list = el("div", "series-cards");
  list.setAttribute("role", "tablist");
  list.setAttribute("aria-label", "Sessions");

  var panel = el("div", "series-panel");
  panel.id = "series-panel";
  panel.setAttribute("role", "tabpanel");
  panel.tabIndex = 0;

  // The plum highlight behind the selected card, with a small pointer down to the panel.
  // It slides from card to card when the selection changes.
  var indicator = el("span", "series-card-indicator");
  indicator.setAttribute("aria-hidden", "true");

  sessions.forEach(function (s, i) {
    var tab = el("button", "series-card");
    tab.type = "button";
    tab.id = "session-tab-" + s.number;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", "series-panel");
    tab.appendChild(el("span", "series-card-number", "Session " + s.number));
    tab.appendChild(el("span", "series-card-title", s.title));
    tab.appendChild(el("span", "series-card-goal", s.goal));
    if (s.tool) tab.appendChild(el("span", "series-tag series-card-tag", "+ Custom tool I built"));

    tab.addEventListener("click", function () { select(i, true, true); });
    tab.addEventListener("keydown", function (e) {
      var next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: sessions.length - 1 }[e.key];
      if (next === undefined) return;
      e.preventDefault();
      next = (next + sessions.length) % sessions.length;
      select(next, true, true);
      tabs[next].focus();
    });

    tabs.push(tab);
    list.appendChild(tab);
  });

  // ---------- Detail panel ----------

  function mentimeterBlock(s) {
    var m = s.mentimeter || {};
    // With an embed, the box takes the full width so the slides are readable.
    var box = el("div", m.embed ? "series-resource series-resource-wide" : "series-resource");
    box.appendChild(el("h5", "", "Mentimeter"));
    if (m.note) box.appendChild(rich(el("p", ""), m.note));
    if (m.embed) {
      var frame = el("iframe", "series-embed");
      frame.setAttribute("allow", "fullscreen");
      frame.src = m.embed;
      frame.title = "Mentimeter for session " + s.number + ": " + s.title;
      frame.loading = "lazy";
      frame.allowFullscreen = true;
      // Mentimeter's player is a 16:9 slide plus a control bar, so the frame sits in a sized wrapper.
      var wrap = el("div", "series-embed-frame");
      wrap.appendChild(frame);
      box.appendChild(wrap);
    }
    if (m.link) {
      box.appendChild(button(m.link, "Open in Mentimeter"));
    } else if (!m.embed) {
      box.appendChild(el("p", "series-soon", "Mentimeter coming soon."));
    }
    return box;
  }

  function toolBlock(tool) {
    var box = el("div", "series-resource series-tool");
    var info = el("div", "series-tool-info");
    info.appendChild(el("h5", "", "Custom tool"));
    info.appendChild(el("p", "series-tool-title", tool.title));
    if (tool.description) info.appendChild(rich(el("p"), tool.description));
    info.appendChild(el("p", "", "Supports: " + tool.objective));
    if (tool.builtWith && tool.builtWith.length) {
      info.appendChild(el("p", "series-meta", "Built with"));
      var tags = el("ul", "series-tags");
      tool.builtWith.forEach(function (tech) { tags.appendChild(el("li", "series-tag", tech)); });
      info.appendChild(tags);
    }
    if (tool.credit) info.appendChild(el("p", "series-meta", tool.credit));
    box.appendChild(info);
    if (tool.url) {
      box.appendChild(button(tool.url, "Try the tool"));
    } else {
      box.appendChild(el("p", "series-soon", "Tool coming soon."));
    }
    return box;
  }


  // A section label inside the panel, like "The situation".
  function heading(text) {
    panel.appendChild(el("h4", "series-panel-heading", text));
  }

  function paragraph(text, parent) {
    (parent || panel).appendChild(rich(el("p", "series-panel-text"), text));
  }

  // A section that starts closed: its label opens it. Used for detail a skimmer can skip.
  function fold(text) {
    var details = el("details", "series-fold");
    var summary = el("summary");
    summary.appendChild(el("h4", "series-panel-heading", text));
    details.appendChild(summary);
    panel.appendChild(details);
    return details;
  }

  // "Live virtual workshop · March 2026 · 60 min · 27 participants · …"
  function metaLine(meta) {
    var parts = [meta.format, meta.date, meta.duration];
    if (meta.participants) parts.push(meta.participants + " participants");
    parts.push(meta.audience);
    parts = parts.concat(meta.tools || []).filter(Boolean);
    return parts.length ? el("p", "series-panel-meta", parts.join(" · ")) : null;
  }

  // Each design choice shows its label; the explanation, steps and image open on click.
  function designChoice(choice) {
    var li = el("li");
    var details = el("details", "series-choice");
    var summary = el("summary");
    summary.appendChild(el("strong", "", choice.label));
    details.appendChild(summary);
    var body = el("div", "series-choice-body");
    if (choice.text) body.appendChild(rich(el("p"), choice.text));
    if (choice.steps && choice.steps.length) {
      var steps = el("ol", "series-steps");
      choice.steps.forEach(function (step) {
        var item = rich(el("li"), step.text);
        if (step.items && step.items.length) {
          var sub = el("ul");
          step.items.forEach(function (text) { sub.appendChild(rich(el("li"), text)); });
          item.appendChild(sub);
        }
        steps.appendChild(item);
      });
      body.appendChild(steps);
    }
    if (choice.image) body.appendChild(figure(choice.image));
    details.appendChild(body);
    li.appendChild(details);
    return li;
  }

  // A slide or screenshot with alt text and an optional caption.
  function figure(image) {
    var fig = el("figure", "series-figure");
    var img = el("img");
    img.src = image.src;
    img.alt = image.alt || "";
    img.loading = "lazy";
    if (image.width && image.height) {
      img.width = image.width;
      img.height = image.height;
    }
    fig.appendChild(img);
    if (image.caption) fig.appendChild(rich(el("figcaption"), image.caption));
    return fig;
  }

  function result(r) {
    var li = el("li", r.highlight ? "series-result series-result-highlight" : "series-result");
    if (r.label || r.text) li.appendChild(leadIn("p", "", r.label, r.text));
    if (r.quote) {
      var figure = el("figure", "series-quote");
      figure.appendChild(rich(el("blockquote"), "\u201C" + r.quote + "\u201D"));
      if (r.source) figure.appendChild(el("figcaption", "", "\u2014 " + r.source));
      li.appendChild(figure);
    }
    return li;
  }

  // A bulleted list from entries, built by makeItem.
  function bulletList(entries, className, makeItem, parent) {
    if (!entries || !entries.length) return;
    var ul = el("ul", className);
    entries.forEach(function (entry) { ul.appendChild(makeItem(entry)); });
    (parent || panel).appendChild(ul);
  }

  function showPanel(s) {
    panel.replaceChildren();
    panel.setAttribute("aria-labelledby", "session-tab-" + s.number);
    panel.appendChild(el("h3", "series-panel-title", "Session " + s.number + ": " + s.title));
    panel.appendChild(rich(el("p", "series-panel-goal"), s.goal));
    if (s.meta) {
      var meta = metaLine(s.meta);
      if (meta) panel.appendChild(meta);
    }
    // Always visible: the links, the situation, the design-choice labels and the results.
    // Folded: detail a skimmer can skip (who was there, objectives, theory, next steps).
    heading("See it");
    // With a Mentimeter embed, the resources stack: the embed, then the tool as a full-width strip.
    var resources = el("div", s.mentimeter && s.mentimeter.embed ? "series-resources series-resources-stacked" : "series-resources");
    resources.appendChild(mentimeterBlock(s));
    if (s.tool) resources.appendChild(toolBlock(s.tool));
    panel.appendChild(resources);
    if (s.situation) { heading("The situation"); paragraph(s.situation); }
    if (s.role) { heading("My role"); paragraph(s.role); }
    if (s.audience) { paragraph(s.audience, fold("Who was in the room")); }
    if (s.objectives && s.objectives.length) {
      var objectives = fold("Learning objectives");
      paragraph("By the end of the session, learners can:", objectives);
      bulletList(s.objectives, "series-list", function (text) { return rich(el("li"), text); }, objectives);
    }
    if (s.designChoices && s.designChoices.length) {
      heading("Design choices");
      bulletList(s.designChoices, "series-choices", designChoice);
    }
    // Older entries describe the session as plain paragraphs instead of design choices.
    if (s.details && s.details.length) {
      heading("Process");
      s.details.forEach(function (text) { paragraph(text); });
    }
    if (s.results && s.results.length) {
      heading("Results");
      // The standout result goes first, whatever order sessions.js lists them in.
      var ordered = s.results.filter(function (r) { return r.highlight; })
        .concat(s.results.filter(function (r) { return !r.highlight; }));
      bulletList(ordered, "series-results", result);
    }
    if (s.foundations && s.foundations.length) {
      bulletList(s.foundations, "series-list", function (f) { return leadIn("li", "", f.name + ":", f.text); }, fold("Learning foundations"));
    }
    if (s.nextSteps && s.nextSteps.length) {
      bulletList(s.nextSteps, "series-list", function (n) { return leadIn("li", "", n.label, n.text); }, fold("What I'd do next"));
    }
  }

  // ---------- Choosing a session ----------

  // animate: true when a visitor picks a session (not on first load).
  function select(i, updateLink, animate) {
    var tab = tabs[i];
    animate = animate && canAnimate();
    var moving = animate && indicator.parentNode && indicator.parentNode !== tab;
    var indicatorState = moving ? Flip.getState(indicator) : null;
    var oldHeight = panel.offsetHeight;

    tabs.forEach(function (t, j) {
      t.setAttribute("aria-selected", j === i ? "true" : "false");
      t.tabIndex = j === i ? 0 : -1;
    });
    tab.insertBefore(indicator, tab.firstChild);
    // Scroll the row (not the page) so the chosen card is in view.
    list.scrollLeft = tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2;
    showPanel(sessions[i]);
    if (updateLink) history.replaceState(null, "", "#session-" + sessions[i].number);

    if (!animate) return;
    // The highlight slides to the new card.
    if (indicatorState) Flip.from(indicatorState, { duration: QUICK, ease: EASE });
    // The panel eases to its new height, and its contents rise in, top to bottom.
    gsap.fromTo(panel, { height: oldHeight }, {
      height: panel.offsetHeight, duration: QUICK, ease: EASE,
      clearProps: "height"
    });
    gsap.from(panel.children, {
      opacity: 0, y: 12, duration: 0.6, ease: EASE, stagger: 0.035, clearProps: "opacity,transform"
    });
  }

  // Which session a link like #session-3 points to, or -1.
  function indexFromLink() {
    var match = /^#session-(\d+)$/.exec(location.hash);
    if (!match) return -1;
    for (var i = 0; i < sessions.length; i++) {
      if (String(sessions[i].number) === match[1]) return i;
    }
    return -1;
  }

  section.appendChild(list);
  section.appendChild(panel);

  var start = indexFromLink();
  select(start >= 0 ? start : 0, false);
  if (start >= 0) section.scrollIntoView();

  window.addEventListener("hashchange", function () {
    var i = indexFromLink();
    if (i >= 0) {
      select(i, false, true);
      section.scrollIntoView();
    }
  });
})();
