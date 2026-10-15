
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

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollTrigger.normalizeScroll(false);

  // Create the smooth scroller FIRST (desktop only)
  if (window.innerWidth >= 992) {
    ScrollSmoother.create({
      smooth: 2,
      effects: false,
      ignoreMobileResize: true,
    });
  }

  // Sync header glassmorphism with smooth scroller
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.create({
      start: "top top",
      onUpdate: function (self) {
        if (self.scroll() > 15) {
          $(".header-area").addClass("header-scrolled");
          $("#header-sticky").addClass("header-sticky");
        } else {
          $(".header-area").removeClass("header-scrolled");
          $("#header-sticky").removeClass("header-sticky");
        }
      }
    });
  }
});