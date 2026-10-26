! function (s) {
    "use strict";
    s(".switch").on("click", function () {
            s("body").hasClass("light") ? (s("body").removeClass("light"),
                s(".switch").removeClass("switched")) : (s("body").addClass("light"),
                s(".switch").addClass("switched"))
        }),
        s(document).ready(function () {
            var e = document.querySelector(".progress-wrap path");
            if (!e) return;
            var t = e.getTotalLength();
            e.style.transition = e.style.WebkitTransition = "none",
                e.style.strokeDasharray = t + " " + t,
                e.style.strokeDashoffset = t,
                e.getBoundingClientRect(),
                e.style.transition = e.style.WebkitTransition = "stroke-dashoffset 10ms linear";
            var r = (s(document).height() - s(window).height()) || 1;
            window.addEventListener('resize', function () {
                r = (s(document).height() - s(window).height()) || 1;
            }, { passive: true });
            
            var ticking = false;
            var updateProgress = function () {
                var o = s(window).scrollTop();
                var i = t - o * t / r;
                e.style.strokeDashoffset = i;
                if (o > 50) {
                    jQuery(".progress-wrap").addClass("active-progress");
                } else {
                    jQuery(".progress-wrap").removeClass("active-progress");
                }
                ticking = false;
            };
            var onScroll = function () {
                if (!ticking) {
                    window.requestAnimationFrame(updateProgress);
                    ticking = true;
                }
            };
            updateProgress();
            window.addEventListener("scroll", onScroll, { passive: true });
            jQuery(".progress-wrap").on("click", function (s) {
                return s.preventDefault(),
                    jQuery("html, body").animate({
                        scrollTop: 0
                    }, 550),
                    !1
            });
        });
}(jQuery);
