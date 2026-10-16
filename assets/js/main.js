(function ($) {
  "use strict";

  // Header Sticky / Fixed Glassmorphism
  var windowOn = $(window);

  function handleNavbarScroll() {
    var scroll = windowOn.scrollTop();
    if (scroll > 15) {
      $(".header-area").addClass("header-scrolled");
      $("#header-sticky").addClass("header-sticky");
    } else {
      $(".header-area").removeClass("header-scrolled");
      $("#header-sticky").removeClass("header-sticky");
    }
  }

  windowOn.on("scroll", handleNavbarScroll);
  $(document).ready(handleNavbarScroll);

  //Header Search Form

  if ($(".search-trigger").length) {
    $(".search-trigger").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search, .search-back-drop").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  // Offcanvas menu

  $(".menu-trigger").on("click", function () {
    $(".extra-info,.offcanvas-overlay").addClass("active");
    return false;
  });
  $(".menu-close,.offcanvas-overlay").on("click", function () {
    $(".extra-info,.offcanvas-overlay").removeClass("active");
  });

  // data-backround

  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  // magnific popup

  $(".video-play-btn").magnificPopup({
    type: "iframe",
  });

  // Metis Menu

  $("#mobile-menu").metisMenu();

  // Alternative pages with white preloader handle mobile menu in alternative-interactions.js
  const loaderEl = document.getElementById("loader");
  const isAlternativePage = loaderEl && loaderEl.classList.contains("white-preloader");

  if (!isAlternativePage) {
    $("#hamburger").on("click", function () {
      const $nav = $(".mobile-nav");
      const $this = $(this);
      const isOpen = $nav.hasClass("show");
      if (isOpen) {
        $nav.removeClass("show");
        $(".overlay").removeClass("active");
        $this.removeClass("active");
        $("body").removeClass("menu-open");
        $("html").removeClass("menu-open");
      } else {
        $nav.addClass("show");
        $(".overlay").addClass("active");
        $this.addClass("active");
        $("body").addClass("menu-open");
        $("html").addClass("menu-open");
      }
    });

    $(".close-nav").on("click", function () {
      $(".mobile-nav").removeClass("show");
      $(".overlay").removeClass("active");
      $("#hamburger").removeClass("active");
      $("body").removeClass("menu-open");
      $("html").removeClass("menu-open");
    });

    $(".overlay").on("click", function () {
      $(".mobile-nav").removeClass("show");
      $(".overlay").removeClass("active");
      $("#hamburger").removeClass("active");
      $("body").removeClass("menu-open");
      $("html").removeClass("menu-open");
    });
  }

  // Hero Area Slider

  $(".homepage-slides").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateIn: "fadeIn",
    smartSpeed: 2000,
    slideSpeed: 600,

    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
        dots: false,
      },
      768: {
        items: 1,
      },
      1100: {
        items: 1,
      },
    },
  });

  // Portfolio Slider
  $(".portfolio-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '22%', /* Show partial next/prev slides */
    arrows: true,
    dots: false,
    fade: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    prevArrow: '<button type="button" class="slick-prev"><i class="las la-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="las la-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '15%',
        }
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: '0',
          arrows: false,
        }
      }
    ]
  });

  // Testimonial & Service Sliders
  $(function () {
    // Testimonial One
    if ($(".testimonial-wrapper").length) {
      $(".testimonial-wrapper").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        margin: 30,
        navText: [
          "<i class='las la-arrow-left'></i>",
          "<i class='las la-arrow-right'></i>",
        ],
      });
    }

    // Service Slider (Legacy & New Luxury)
    if ($(".service-slider, .services-luxury-slider").length) {
      $(".service-slider, .services-luxury-slider").owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        margin: 30,
        navText: [
          "<i class='las la-arrow-left'></i>",
          "<i class='las la-arrow-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: false,
          },
          768: {
            items: 1,
            nav: true,
          },
          1100: {
            items: 1,
            nav: true,
            dots: true,
          },
        },
      });
    }
  });

  // Testimonial Two

  $(".testimonial-carousel").owlCarousel({
    items: 1,
    dots: false,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 3000,
    slideSpeed: 300,
    margin: 30,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
        dots: false,
      },
      768: {
        items: 2,
        nav: false,
        dots: false,
      },
      1100: {
        items: 3,
        nav: false,
        dots: true,
      },
    },
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
  });

  // Contact Page Testimonial
  // Contact Page Testimonial
  var contactTestimonial = $(".contact-testimonial-carousel");
  contactTestimonial.owlCarousel({
    items: 1,
    dots: false,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
    },
  });

  // Custom Navigation for Contact Page Testimonial
  $('.arrow-icons .la-arrow-left').click(function () {
    contactTestimonial.trigger('prev.owl.carousel');
  });
  $('.arrow-icons .la-arrow-right').click(function () {
    contactTestimonial.trigger('next.owl.carousel');
  });

  // Process Slider

  $(".process-wrapper").owlCarousel({
    items: 1,
    margin: 30,
    dots: true,
    nav: false,
    loop: true,
    autoplay: false,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },

      575: {
        items: 2,
        dots: false,
      },

      767: {
        items: 2,
        dots: true,
      },

      990: {
        items: 3,
        dots: false,
      },
      1200: {
        items: 4,
        dots: true,
      },
    },
  });


  // Project Slider

  $(".project-slider").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    autoplay: false,
    margin: 20,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 2,
        nav: false,
        dots: false,
      },
      768: {
        items: 3,
        nav: true,
        dots: false,
      },
      1100: {
        items: 4,
        nav: true,
        dots: false,
      },
    },
  });

  $(".project-slider-2").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    autoplay: false,
    margin: 15,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
        dots: false,
      },
      768: {
        items: 2,
        nav: true,
        dots: false,
      },
      1100: {
        items: 2,
        nav: true,
        dots: false,
      },
    },
  });


  // Feature Slider

  $(".feature_item_one").slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  });


  //Progress Bar JS

  $("#bar1").barfiller({
    barColor: "#171717",
    duration: 5000,
  });

  $("#bar2").barfiller({
    barColor: "#171717",
    duration: 5000,
  });

  $("#bar3").barfiller({
    barColor: "#171717",
    duration: 5000,
  });

  // Nice select
  $("select").niceSelect();

  // Pure Counter

  new PureCounter();
  new PureCounter({
    filesizing: true,
    selector: ".filesizecount",
    pulse: 2,
  });

  // Active Class

  $(".main-menu ul > li > ul li a").on("mouseover", function () {
    $(".main-menu ul > li > ul li a").removeClass("active");
    $(this).addClass("active");
  });

  // Odometer js

  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });


  // Masonry Filter

  $(window).on("load", function () {
    var e = $(".project-filter"),
      a = $("#menu-filter");
    e.isotope({
      filter: "*",
      layoutMode: "masonry",
      animationOptions: {
        duration: 750,
        easing: "linear",
      },
    }),
      a.find("a").on("click", function () {
        var o = $(this).attr("data-filter");
        return (
          a.find("a").removeClass("active"),
          $(this).addClass("active"),
          e.isotope({
            filter: o,
            animationOptions: {
              animationDuration: 750,
              easing: "linear",
              queue: !1,
            },
          }),
          !1
        );
      });
  });


  // Contact Form

  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    var $action = $(this).prop("action");
    var $data = $(this).serialize();
    var $this = $(this);

    $this.prevAll(".alert").remove();

    $.post(
      $action,
      $data,
      function (data) {
        if (data.response === "error") {
          $this.before(
            '<div class="alert alert-danger">' + data.message + "</div>"
          );
        }

        if (data.response === "success") {
          $this.before(
            '<div class="alert alert-success">' + data.message + "</div>"
          );
          $this.find("input, textarea").val("");
        }
      },
      "json"
    );
  });

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($("#loader").length) {
      var count = 0;
      var counter = setInterval(function () {
        if (count < 101) {
          $('.loading-text').text(count + '%');
          $('.loading-bar').css('width', count + '%');
          count++;
        } else {
          clearInterval(counter);
          $("#loader").fadeOut(500, function () {
            // Reveal header after preloader
            $('body').addClass('preloader-done');
            var $header = $('.header-area');
            if ($header.length && !$header.hasClass('nav-elements-active')) {
              $header.addClass('nav-elements-active');
            }
            $(window).trigger('preloaderDone');
          });
        }
      }, 20); // Adjust speed of counter here
    }
  }

  $(window).on("load", function () {
    handlePreloader();
  });


  // Visible From Right Slowly Animation

  let visibleSlowlyRight = document.querySelectorAll(".visible-slowly-right");
  if ($(visibleSlowlyRight).length > 0) {
    let char_come = gsap.utils.toArray(visibleSlowlyRight);
    char_come.forEach((char_come) => {
      let split_char = new SplitText(char_come, {
        type: "chars, words",
        lineThreshold: 0.5,
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: char_come,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });
      tl2.from(split_char.chars, {
        duration: 0.8,
        x: 70,
        autoAlpha: 0,
        stagger: 0.03,
      });
    });
  }

  // Mouse Custom Cursor removed per client request
  // Hero Slider
  if ($(".hero-slider").length) {
    $(".hero-slider").slick({
      fade: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 2000,
      infinite: true,
      cssEase: 'ease-in-out',
      arrows: false,
      dots: false,
      pauseOnHover: false,
      pauseOnFocus: false,
    });
  }


  // About Image Slider (Split Section)
  $(".about-image-slider").slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    infinite: true,
    cssEase: 'ease-in-out',
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  // Projects Isotope Filter (Handled by projects-handler.js if dynamic, otherwise fallback here)
  if ($('.project-grid').length && !$('.project-grid').hasClass('dynamic-ready')) {
    var $grid = $('.project-grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-item'
      }
    });

    // filter items on button click
    $('.project-filters').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    // active class for buttons
    $('.project-filters button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  }

  // Projects Grid Animation - Disabled scroll entrance animation to keep images static/fixed in place
  $(window).on('preloaderDone', function () {
    if ($('.project-card-unique').length > 0) {
      if (typeof gsap !== 'undefined') {
        gsap.set('.project-card-unique', { opacity: 1, y: 0, clearProps: 'transform,opacity' });
      }
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    }
  });

  // Services Page (.v-service-card) Entrance Stagger (Moved to alternative-interactions.js for reliable scroll trigger refresh)
  /*
  $(window).on('preloaderDone', function () {
    if ($('.v-service-card').length > 0) {
      gsap.utils.toArray('.v-service-card').forEach(function (card, index) {
        gsap.fromTo(card,
          { opacity: 0, y: 30, clipPath: "inset(0% 0% 100% 0%)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power2.out",
            delay: (index % 2) * 0.15, // 2 column stagger
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: 'play none none none' // Play only once on scroll
            }
          }
        );
      });
      ScrollTrigger.refresh();
    }
  });
  */

  // Project Detail Slider
  if ($('.project-main-slider').length) {
    // Set background image from the img src for each slide
    $('.project-main-slider .project-slide-item').each(function () {
      var imgSrc = $(this).find('img').attr('src');
      $(this).css('background-image', 'url(' + imgSrc + ')');
    });

    $('.project-main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.project-thumb-slider'
    });

    $('.project-thumb-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.project-main-slider',
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  }



  $(function () {
    // GSAP slide in animations for about section
    if ($('.gsap-slide-left').length > 0) {
      gsap.utils.toArray('.gsap-slide-left').forEach(function (element) {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 95%',
            end: 'top 45%',
            scrub: 1
          },
          x: -150,
          opacity: 0,
          duration: 5,
          ease: 'power3.in'
        });
      });
    }

    if ($('.gsap-slide-right').length > 0) {
      gsap.utils.toArray('.gsap-slide-right').forEach(function (element) {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 95%',
            end: 'top 45%',
            scrub: 1
          },
          x: 150,
          opacity: 0,
          duration: 5,
          ease: 'power3.in',
          delay: 0.2
        });
      });
    }

    // Mission Vision Animations
    /* 
    // Legacy Mission-Vision Animations (Replaced by alternative-interactions.js)
    if ($('.gsap-fade-up').length > 0) {
      gsap.from('.gsap-fade-up', {
        scrollTrigger: {
          trigger: '.mission-vision-section',
          start: 'top 95%',
          end: 'top 60%',
          scrub: 1
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    }

    if ($('.gsap-slide-up-mission').length > 0) {
      gsap.from('.gsap-slide-up-mission', {
        scrollTrigger: {
          trigger: '.mission-vision-section',
          start: 'top 85%',
          end: 'top 40%',
          scrub: 1
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    }

    if ($('.gsap-slide-up-vision').length > 0) {
      gsap.from('.gsap-slide-up-vision', {
        scrollTrigger: {
          trigger: '.mission-vision-section',
          start: 'top 85%',
          end: 'top 40%',
          scrub: 1
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out'
      });
    }
    */

    // Blog Grid Stagger Animation (Disabled - Cards stay static)
    $(window).on('preloaderDone', function () {
      /*
      if ($('body:not(.awards-page) .gsap-blog-anim').length > 0) {
        gsap.utils.toArray('body:not(.awards-page) .gsap-blog-anim').forEach(function (card, index) {
          gsap.fromTo(card,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 2.5,
              ease: 'power3.out',
              delay: (index % 3) * 0.2,
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play reverse play reverse'
              }
            }
          );
        });
      }
      */

      // Awards Grid Asymmetrical Slide Animation (Left/Right slide in)
      if ($('.awards-page .gsap-blog-anim').length > 0) {
        gsap.utils.toArray('.awards-page .gsap-blog-anim').forEach(function (card, index) {
          const isLeft = index % 2 === 0;
          gsap.fromTo(card,
            { opacity: 0, x: isLeft ? -100 : 100 },
            {
              opacity: 1,
              x: 0,
              duration: 1.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play reverse play reverse'
              }
            }
          );
        });
      }

      // Home Page FAQ Animation
      if ($('.faq-home-section').length > 0) {
        gsap.utils.toArray('.faq-home-section .faq-fade-up').forEach(function (element) {
          gsap.fromTo(element,
            { opacity: 0, y: 70 },
            {
              opacity: 1,
              y: 0,
              duration: 1.8,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                toggleActions: 'play none none none'
              }
            }
          );
        });

        gsap.utils.toArray('.faq-home-section .faq-home-item').forEach(function (element) {
          gsap.fromTo(element,
            { opacity: 0, y: 90 },
            {
              opacity: 1,
              y: 0,
              duration: 1.8,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                toggleActions: 'play none none none'
              }
            }
          );
        });
      }

      ScrollTrigger.refresh();
    });

    // About & Principal Architect GSAP Animations
    if ($('.about-image-reveal').length > 0) {
      gsap.utils.toArray('.about-image-reveal').forEach(function (elem) {
        let img = $(elem).find('img');
        let isPrincipal = $(elem).closest('.principal_architect').length > 0;

        let clipStart = isPrincipal ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
        let clipEnd = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

        // 1. Entrance animation (clip-path reveal)
        gsap.fromTo(elem,
          { clipPath: clipStart },
          {
            clipPath: clipEnd,
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              once: true
            }
          }
        );

        // 2. Smooth Parallax on scroll for the image
        gsap.fromTo(img,
          { yPercent: -15, scale: 1.2 },
          {
            yPercent: 15,
            scale: 1.2,
            ease: "none",
            scrollTrigger: {
              trigger: elem,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5
            }
          }
        );
      });
    }

    // Background Logo Parallax
    if ($('.bg-logo-transparent').length > 0) {
      gsap.utils.toArray('.bg-logo-transparent').forEach(function (bg) {
        gsap.fromTo(bg,
          { yPercent: -40 },
          {
            yPercent: 40,
            ease: "none",
            scrollTrigger: {
              trigger: $(bg).parent(),
              start: "top bottom",
              end: "bottom top",
              scrub: 2
            }
          }
        );
      });
    }

    if ($('.about-info-text-wrap').length > 0) {
      gsap.utils.toArray('.about-info-text-wrap').forEach(function (wrap) {
        gsap.fromTo($(wrap).children(':not(br)'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrap,
              start: 'top 85%',
              once: true
            }
          }
        );
      });
    }



    // Portfolio Initial Entrance (Bottom to Top)
    if ($('.portfolio-section .portfolio-slide-item').length > 0) {
      gsap.fromTo('.portfolio-section .portfolio-slide-item',
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.portfolio-section',
            start: "top 80%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }

    // Featured Work (Gallery) - Completely static without transitions
    if ($('.luxury-gallery-grid').length > 0) {
      gsap.set('.luxury-gallery-grid .gallery-item', { clipPath: "none", opacity: 1, y: 0 });
      gsap.set('.luxury-gallery-grid .gallery-item img', { scale: 1 });
    }

    // Latest Post (Blog) Staggered Reveal
    if ($('.blog-section .single-blog-item').length > 0) {
      gsap.utils.toArray('.blog-section .single-blog-item').forEach(item => {
        gsap.fromTo(item,
          {
            clipPath: () => {
              const rect = item.getBoundingClientRect();
              const center = rect.left + rect.width / 2;
              const winCenter = window.innerWidth / 2;
              if (center < winCenter - 100) return "inset(0% 100% 0% 0%)"; // left
              if (center > winCenter + 100) return "inset(0% 0% 0% 100%)"; // right
              return "inset(0% 50% 0% 50%)"; // center
            },
            opacity: 0,
            y: 30
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }

    // Awards Section Staggered Reveal
    if ($('.awards-section .award-card').length > 0) {
      gsap.utils.toArray('.awards-section .award-card').forEach(item => {
        gsap.fromTo(item,
          {
            clipPath: "inset(100% 0% 0% 0%)",
            opacity: 0,
            y: 30
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play reverse play reverse"
            }
          }
        );

        // Image scale down inside the award card for luxury effect
        const img = item.querySelector('.award-img');
        if (img) {
          gsap.fromTo(img,
            { scale: 1.3 },
            {
              scale: 1,
              duration: 2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play reverse play reverse"
              }
            }
          );
        }
      });

      // Pin the blog section so the gallery section slides up over it
      if (document.querySelector(".blog-section")) {
        ScrollTrigger.create({
          trigger: ".blog-section",
          start: "bottom bottom",
          end: "+=100%",
          pin: true,
          pinSpacing: false
        });
      }
    }

    // Global Luxury Smooth Text Animation
    const testimonialAndInnerElements = gsap.utils.toArray('.testimonial-text p, .testimonial-author h6, .testimonial-author p, .gallery-text-box .text-box-inner *, .port-text h3, .port-text p, .port-num');
    testimonialAndInnerElements.forEach(function (elem) {
      gsap.fromTo(elem,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 95%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    });

    // Unique & Premium Animations for each Section Title, Subheading & Description
    // NOTE: About & Principal Architect text animations are handled by alternative-interactions.js

    // 3. Bespoke Luxury Design Services Section Animations
    const serviceHeading = document.querySelector('.service-section .section-heading');
    const serviceDesc = document.querySelector('.service-section p');
    if (serviceHeading) {
      gsap.fromTo(serviceHeading,
        { opacity: 0, y: -40, rotateX: -20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: serviceHeading,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }
    if (serviceDesc) {
      gsap.fromTo(serviceDesc,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: serviceDesc,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }

    // 4. Luxury & Heritage Portfolio Section Animations
    const projectHeading = document.querySelector('#project-1 .section-title h2');
    const projectDesc = document.querySelector('#project-1 .section-title p');
    if (projectHeading) {
      gsap.fromTo(projectHeading,
        { opacity: 0, scale: 0.88, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectHeading,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }
    if (projectDesc) {
      gsap.fromTo(projectDesc,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectDesc,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }

    // 5. Client Reflections (Testimonials) Section Animations
    const testHeading = document.querySelector('#testimonial-1 .section-title h2');
    const testDesc = document.querySelector('#testimonial-1 .section-title p');
    if (testHeading) {
      gsap.fromTo(testHeading,
        { clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)", x: -20 },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          x: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testHeading,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }
    if (testDesc) {
      gsap.fromTo(testDesc,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: testDesc,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }

    // 6. Our Signature Luxury Projects Section (No transitions - simple clean display)
    const galleryHeading = document.querySelector('.gallery-section .section-title h2');
    const galleryDesc = document.querySelector('.gallery-section .section-title p');
    if (galleryHeading) {
      gsap.set(galleryHeading, { opacity: 1, letterSpacing: "2px", scale: 1 });
    }
    if (galleryDesc) {
      gsap.set(galleryDesc, { opacity: 1, y: 0, rotateX: 0 });
    }

    // 7. Inside the Studio (Blog) Section Animations
    const blogHeading = document.querySelector('.blog-section .section-title h2');
    const blogDesc = document.querySelector('.blog-section .section-title p');
    if (blogHeading) {
      gsap.fromTo(blogHeading,
        { opacity: 0, rotationY: 90, scale: 0.95 },
        {
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: blogHeading,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    }
    if (blogDesc) {
      gsap.fromTo(blogDesc,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: blogDesc,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    // 8. CTA Section Animations
    const ctaHeading = document.querySelector('.cta-inner h2');
    if (ctaHeading) {
      gsap.fromTo(ctaHeading,
        { opacity: 0, scale: 0.85, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaHeading,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }

    // Global Subtle Image Parallax Elements
    const parallaxImages = gsap.utils.toArray('.portfolio-bg, .cta-bg-parallax, .service-img-wrap img, .gallery-img-wrap img');
    parallaxImages.forEach(function (img) {
      // Adding a scale helps prevent exposing edges as the item moves
      gsap.fromTo(img,
        { yPercent: -8, scale: 1.15 },
        {
          yPercent: 8,
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: $(img).parent(),
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        }
      );
    });

    // Footer Brand Text Animation
    const footerBrandText = document.querySelector('.footer-brand-text');
    if (footerBrandText) {
      const firstNameLetters = gsap.utils.toArray('.brand-word.first-name span');
      const lastNameLetters = gsap.utils.toArray('.brand-word.last-name span');

      const footerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: footerBrandText,
          start: "top 95%",
          toggleActions: "play reverse play reverse"
        }
      });

      footerTimeline.fromTo(firstNameLetters,
        { y: "100%" }, // CSS opacity is already 1, y:100% with overflow hidden will hide it
        {
          y: "0%",
          duration: 0.15,
          ease: "power2.out",
          stagger: {
            from: "end",
            each: 0.15
          }
        },
        0
      );

      footerTimeline.fromTo(lastNameLetters,
        { y: "100%" },
        {
          y: "0%",
          duration: 0.15,
          ease: "power2.out",
          stagger: {
            from: "start",
            each: 0.15
          }
        },
        0
      );
    }

  });

})(window.jQuery);
