$(function () {

  // Ensure header and floating contact widget are outside #smooth-wrapper so fixed positioning works
  const $header = $('.header-area');
  const $smoothWrapper = $('#smooth-wrapper');
  if ($header.length && $smoothWrapper.length && $header.parent('#smooth-content').length) {
    $smoothWrapper.before($header);
  }

  const $floatingContact = $('#floatingContactWidget');
  if ($floatingContact.length && $smoothWrapper.length && $floatingContact.closest('#smooth-wrapper').length) {
    $('body').append($floatingContact);
  }

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.normalizeScroll(false);

    // Debounced layout calculations to prevent rapid redundant reflows
    let refreshTimer;
    const debouncedRefresh = function (delay) {
      clearTimeout(refreshTimer);
      refreshTimer = setTimeout(function () {
        ScrollTrigger.refresh();
      }, delay || 100);
    };

    window.addEventListener('load', function () {
      debouncedRefresh(50);
    });
    $(window).on('preloaderDone', function () {
      debouncedRefresh(150);
    });
    $(window).on('projectsLoaded dynamicContentReady', function () {
      debouncedRefresh(200);
    });

    // Official GSAP Butter-Smooth Hide on Scroll Down / Reveal on Scroll Up
    const showHeaderAnim = gsap.fromTo(
      ".header-area",
      { yPercent: -100 },
      {
        yPercent: 0,
        paused: true,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto"
      }
    );
    // Start visible at initial load
    showHeaderAnim.progress(1);

    ScrollTrigger.create({
      start: "top top",
      onUpdate: (self) => {
        const scroll = self.scroll();

        // 1. At the very top (<= 30px): Always visible and transparent
        if (scroll <= 30) {
          showHeaderAnim.play();
          $header.removeClass("header-scrolled");
          $("#header-sticky").removeClass("header-sticky");
          return;
        }

        // 2. Scrolling DOWN (self.direction === 1): Hide navbar smoothly
        if (self.direction === 1 && scroll > 60) {
          showHeaderAnim.reverse();
        }
        // 3. Scrolling UP (self.direction === -1): Reveal navbar smoothly
        else if (self.direction === -1) {
          showHeaderAnim.play();
          $header.addClass("header-scrolled");
          $("#header-sticky").addClass("header-sticky");
        }
      }
    });
  }
});