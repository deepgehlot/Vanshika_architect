/**
 * Floating Contact Widget Interactivity
 * Accessible expandable contact menu with keyboard support & outside-click dismissal
 */
(function () {
  "use strict";

  function initFloatingContact() {
    const widget = document.getElementById("floatingContactWidget");
    if (!widget) return;

    // Ensure widget is outside #smooth-wrapper so it isn't affected by scroll transforms
    const smoothWrapper = document.getElementById("smooth-wrapper");
    if (smoothWrapper && widget.closest("#smooth-wrapper")) {
      document.body.appendChild(widget);
    }

    const toggleBtn = document.getElementById("floatingContactToggleBtn");
    const closeBtn = document.getElementById("floatingContactCloseBtn");
    const menu = document.getElementById("floatingContactMenu");

    if (!toggleBtn || !menu) return;

    function openMenu() {
      widget.classList.add("is-open");
      toggleBtn.setAttribute("aria-expanded", "true");
      menu.setAttribute("aria-hidden", "false");
      if (closeBtn) {
        closeBtn.focus();
      }
    }

    function closeMenu() {
      widget.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
      toggleBtn.focus();
    }

    // Toggle button click
    toggleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (widget.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close button click
    if (closeBtn) {
      closeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        closeMenu();
      });
    }

    // Dismiss on clicking outside
    document.addEventListener("click", function (e) {
      if (widget.classList.contains("is-open") && !widget.contains(e.target)) {
        closeMenu();
      }
    });

    // Dismiss on Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && widget.classList.contains("is-open")) {
        closeMenu();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFloatingContact);
  } else {
    initFloatingContact();
  }
})();
