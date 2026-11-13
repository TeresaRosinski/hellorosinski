/*
  Nav menu (small screens): closes the menu after a link is picked, so the section it jumps to
  isn't hidden behind the open menu. Everything else (opening, closing, Escape, tapping outside)
  is handled by the browser's popover feature, so the menu still works if this script doesn't load.
*/
(function () {
  var menu = document.getElementById("nav-menu");
  if (!menu || !menu.hidePopover) return;

  menu.addEventListener("click", function (event) {
    if (event.target.closest("a") && menu.matches(":popover-open")) {
      menu.hidePopover();
    }
  });
})();
