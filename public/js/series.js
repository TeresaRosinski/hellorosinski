/*
  Builds the AI + Learning series section from SERIES in sessions.js.
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

  // Make an element with an optional class and text.
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  // A pill button that opens a link in a new tab.
  function button(href, text) {
    var a = el("a", "series-button", text);
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener";
    a.appendChild(el("span", "", " ↗")).setAttribute("aria-hidden", "true");
    return a;
  }

  // ---------- Heading and intro ----------

  section.querySelector("#series-title").textContent = SERIES.title;
  section.querySelector("#series-intro").textContent = SERIES.intro;

  // ---------- Session cards ----------

  var list = el("div", "series-cards");
  list.setAttribute("role", "tablist");
  list.setAttribute("aria-label", "Sessions");

  var panel = el("div", "series-panel");
  panel.id = "series-panel";
  panel.setAttribute("role", "tabpanel");
  panel.tabIndex = 0;

  sessions.forEach(function (s, i) {
    var tab = el("button", "series-card");
    tab.type = "button";
    tab.id = "session-tab-" + s.number;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", "series-panel");
    tab.appendChild(el("span", "series-card-number", "Session " + s.number));
    tab.appendChild(el("span", "series-card-title", s.title));
    tab.appendChild(el("span", "series-card-goal", s.goal));
    if (s.tool) tab.appendChild(el("span", "series-tag series-card-tag", "Tool"));

    tab.addEventListener("click", function () { select(i, true); });
    tab.addEventListener("keydown", function (e) {
      var next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: sessions.length - 1 }[e.key];
      if (next === undefined) return;
      e.preventDefault();
      next = (next + sessions.length) % sessions.length;
      select(next, true);
      tabs[next].focus();
    });

    tabs.push(tab);
    list.appendChild(tab);
  });

  // ---------- Detail panel ----------

  function mentimeterBlock(s) {
    var box = el("div", "series-resource");
    box.appendChild(el("h4", "", "Mentimeter"));
    var m = s.mentimeter || {};
    if (m.embed) {
      var frame = el("iframe", "series-embed");
      frame.src = m.embed;
      frame.title = "Mentimeter for session " + s.number + ": " + s.title;
      frame.loading = "lazy";
      frame.allowFullscreen = true;
      box.appendChild(frame);
    }
    if (m.link) {
      box.appendChild(button(m.link, "Open in Mentimeter"));
    } else if (!m.embed) {
      box.appendChild(el("p", "series-soon", "Mentimeter coming soon."));
    }
    return box;
  }

  function toolBlock(tool) {
    var box = el("div", "series-resource");
    box.appendChild(el("h4", "", "Tool"));
    box.appendChild(el("p", "series-tool-title", tool.title));
    box.appendChild(el("p", "", "Supports: " + tool.objective));
    if (tool.builtWith && tool.builtWith.length) {
      box.appendChild(el("p", "series-meta", "Built with"));
      var tags = el("ul", "series-tags");
      tool.builtWith.forEach(function (tech) { tags.appendChild(el("li", "series-tag", tech)); });
      box.appendChild(tags);
    }
    if (tool.credit) box.appendChild(el("p", "series-meta", tool.credit));
    if (tool.url) {
      box.appendChild(button(tool.url, "Try the tool"));
    } else {
      box.appendChild(el("p", "series-soon", "Tool coming soon."));
    }
    return box;
  }

  function showPanel(s) {
    panel.replaceChildren();
    panel.setAttribute("aria-labelledby", "session-tab-" + s.number);
    panel.appendChild(el("h3", "series-panel-title", "Session " + s.number + ": " + s.title));
    panel.appendChild(el("p", "series-panel-goal", s.goal));
    (s.details || []).forEach(function (text) {
      panel.appendChild(el("p", "series-panel-text", text));
    });
    var resources = el("div", "series-resources");
    resources.appendChild(mentimeterBlock(s));
    if (s.tool) resources.appendChild(toolBlock(s.tool));
    panel.appendChild(resources);
  }

  // ---------- Choosing a session ----------

  function select(i, updateLink) {
    tabs.forEach(function (tab, j) {
      tab.setAttribute("aria-selected", j === i ? "true" : "false");
      tab.tabIndex = j === i ? 0 : -1;
    });
    // Scroll the row (not the page) so the chosen card is in view.
    var tab = tabs[i];
    list.scrollLeft = tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2;
    showPanel(sessions[i]);
    if (updateLink) history.replaceState(null, "", "#session-" + sessions[i].number);
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
      select(i, false);
      section.scrollIntoView();
    }
  });
})();
