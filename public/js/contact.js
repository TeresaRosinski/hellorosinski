/*
  Contact section: the "Copy email" button.
  Copies the address in its data-copy attribute and confirms with "Copied" (screen readers hear it too).
*/
(function () {
  var button = document.querySelector("[data-copy]");
  var status = document.querySelector(".contact-status");
  if (!button) return;

  function confirm(text) {
    if (status) status.textContent = text;
    button.textContent = text === "Copied" ? "Copied ✓" : "Copy email";
    setTimeout(function () {
      button.textContent = "Copy email";
      if (status) status.textContent = "";
    }, 2000);
  }

  button.addEventListener("click", function () {
    var email = button.getAttribute("data-copy");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(function () { confirm("Copied"); }, function () { confirm("Couldn't copy. The address is below."); });
    } else {
      confirm("Couldn't copy. The address is below.");
    }
  });
})();
