/**
 * Custom Scroll & Loading Animations for Vanshika Website (Alternative Theme)
 */

document.addEventListener("DOMContentLoaded", function () {
    // 1. Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 992;

    // Force-play hero video on mobile (bypass browser autoplay restrictions)
    const playHeroVideo = () => {
        const video = document.querySelector('.hero-bg-video');
        if (video) {
            video.muted = true;
            video.play().catch(err => {
                console.log("Muted autoplay retry failed:", err);
            });
        }
    };
    $(window).on('preloaderDone', playHeroVideo);
    ['touchstart', 'click', 'scroll'].forEach(evt => {
        window.addEventListener(evt, playHeroVideo, { once: true, passive: true });
    });

    // Auto-pause hero video when scrolled out of view to save massive CPU/GPU decoding resources
    const heroVideoEl = document.querySelector('.hero-bg-video');
    if (heroVideoEl && 'IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroVideoEl.play().catch(() => {});
                } else {
                    heroVideoEl.pause();
                }
            });
        }, { threshold: 0.05 });
        videoObserver.observe(heroVideoEl);
    }

    // ── Portfolio fade-in via IntersectionObserver (mobile only) ──
    if (isMobile) {
        const portfolioItems = document.querySelectorAll('.portfolio-slide-item');
        if (portfolioItems.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.02 });
            portfolioItems.forEach(item => observer.observe(item));
        }

        // ── Mobile menu toggle (alternative theme owns this; main.js skips binding) ──
        let menuScrollY = 0;
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.querySelector('.mobile-nav');
        const htmlEl = document.documentElement;

        const preventMenuScroll = (e) => {
            if (!document.body.classList.contains('menu-open')) return;
            const scrollable = e.target.closest('.mobile-nav');
            if (scrollable && scrollable.scrollHeight > scrollable.clientHeight) return;
            e.preventDefault();
        };

        const openMobileMenu = () => {
            menuScrollY = window.scrollY || window.pageYOffset;
            if (mobileNav) mobileNav.classList.add('show');
            document.body.classList.add('menu-open');
            htmlEl.classList.add('menu-open');
            if (hamburger) hamburger.classList.add('active');
            document.body.style.top = `-${menuScrollY}px`;
            document.addEventListener('touchmove', preventMenuScroll, { passive: false });
            document.addEventListener('wheel', preventMenuScroll, { passive: false });
        };

        const closeMobileMenu = () => {
            document.body.classList.remove('menu-open');
            htmlEl.classList.remove('menu-open');
            if (hamburger) hamburger.classList.remove('active');
            if (mobileNav) mobileNav.classList.remove('show');
            document.body.style.top = '';
            document.removeEventListener('touchmove', preventMenuScroll, { passive: false });
            document.removeEventListener('wheel', preventMenuScroll, { passive: false });
            window.scrollTo(0, menuScrollY);
        };

        const toggleMobileMenu = (e) => {
            if (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }
            if (mobileNav && mobileNav.classList.contains('show')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        };

        // Ensure menu starts closed on page load
        closeMobileMenu();

        // Prevent duplicate handlers from main.js
        if (typeof $ !== 'undefined') {
            $('#hamburger').off('click');
            $('.close-nav').off('click');
            $('.overlay').off('click');
        }

        if (hamburger) {
            hamburger.addEventListener('click', toggleMobileMenu, true);
        }
        document.querySelectorAll('.close-nav, .mobile-nav a').forEach(el => {
            el.addEventListener('click', closeMobileMenu);
        });
    }

    const loader = document.getElementById("loader");
    const loaderLogoMask = document.querySelector(".loader-logo-mask");
    const circleProgress = document.querySelector(".loader-circle-progress");
    const loadingBar = document.querySelector(".white-preloader .loading-bar");
    const progressText = document.querySelector(".white-preloader .loading-text");
    const loaderLogo = document.querySelector(".white-preloader .loader-logo");

    // Hide original nav logos initially so we can animate into their positions
    const desktopNavLogo = document.querySelector('.d-none.d-xl-block .logo img');
    const mobileNavLogo = document.querySelector('.d-block.d-xl-none .logo img');
    const headerArea = document.querySelector(".header-area");

    const isAlternativePreloader = loader && loader.classList.contains("white-preloader");

    if (isAlternativePreloader) {
        if (desktopNavLogo) desktopNavLogo.style.opacity = "0";
        if (mobileNavLogo) mobileNavLogo.style.opacity = "0";

        // Set up navigation header reference
        if (headerArea) {
            headerArea.classList.remove("nav-elements-active");
        }

    // Start with a small size for the preloader logo so it can "increase in size" as it flies
    if (loaderLogo) {
        gsap.set(loaderLogo, { width: "120px", height: "auto" });
    }

    // Flag to track actual window load state
    let windowLoaded = document.readyState === "complete";
    if (!windowLoaded) {
        window.addEventListener("load", function () {
            windowLoaded = true;
        });
    }

    // Preloader Percentage Fill & Circular reveal (tied to actual load state)
    let progress = 0;
    const progressInterval = setInterval(() => {
        if (progress < 90) {
            progress += Math.floor(Math.random() * 4) + 1; // gradual loading up to 90%
        } else if (windowLoaded) {
            progress += 5; // accelerate quickly to 100% once page is fully loaded
        }

        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            triggerLogoTransition();
        }

        // Update circular SVG path offset (dasharray is 289.02)
        if (circleProgress) {
            const offset = 289.02 - (progress / 100) * 289.02;
            circleProgress.style.strokeDashoffset = offset;
        }

        // Update straight loading bar
        if (loadingBar) {
            loadingBar.style.width = `${progress}%`;
        }

        if (progressText) {
            progressText.textContent = `${progress}%`;
        }
        // Circle mask reveals from center outward
        if (loaderLogoMask) {
            loaderLogoMask.style.clipPath = `circle(${progress * 0.7}% at 50% 50%)`;
        }
    }, 40);

    // Fly to Navbar animation
    function triggerLogoTransition() {
        // Determine active header logo based on viewport width
        const activeNavLogo = window.innerWidth >= 1200 ? desktopNavLogo : mobileNavLogo;

        if (!activeNavLogo || !loaderLogo) {
            // Fallback if logo element is not found
            gsap.to(loader, { opacity: 0, duration: 0.5, onComplete: () => {
                if (loader) loader.style.display = "none";
                document.body.classList.add('preloader-done');
                $(window).trigger('preloaderDone');
                initScrollAnimations();
            } });
            return;
        }

        // Force header logo visibility to 0 initially
        activeNavLogo.style.opacity = "0";

        // Wait a small bit to ensure DOM layout has finalized
        setTimeout(() => {
            const targetRect = activeNavLogo.getBoundingClientRect();
            const sourceRect = loaderLogo.getBoundingClientRect();

            // Move original loader logo to body to prevent duplication
            loaderLogo.style.position = "fixed";
            loaderLogo.style.left = `${sourceRect.left}px`;
            loaderLogo.style.top = `${sourceRect.top}px`;
            loaderLogo.style.width = `${sourceRect.width}px`;
            loaderLogo.style.height = `${sourceRect.height}px`;
            loaderLogo.style.zIndex = "999999";
            loaderLogo.style.margin = "0";
            loaderLogo.style.transform = "none";
            loaderLogo.style.transition = "none";
            document.body.appendChild(loaderLogo);

            // Animate progress bar/circle and text out instantly
            const elementsToFade = [];
            const loaderCircle = document.querySelector(".loader-circle-svg");
            const loadingBarContainer = document.querySelector(".white-preloader .loading-bar-container");
            if (loaderCircle) elementsToFade.push(loaderCircle);
            if (loadingBarContainer) elementsToFade.push(loadingBarContainer);
            if (progressText) elementsToFade.push(progressText);
            if (elementsToFade.length > 0) {
                gsap.to(elementsToFade, {
                    opacity: 0,
                    duration: 0.2
                });
            }

            // IMMEDIATELY fade out preloader screen and make it click-through
            gsap.to(loader, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    if (loader) loader.style.display = "none";
                    document.body.classList.add('preloader-done');
                    $(window).trigger('preloaderDone');
                }
            });

            // IMMEDIATELY show header menu items as logo begins to fly
            if (headerArea) {
                headerArea.classList.add("nav-elements-active");
            }

            // Animate About Hero Image reveal / cutout and texts
            const aboutHeroPersonImg = document.querySelector(".about-hero-person-img");
            if (aboutHeroPersonImg) {
                gsap.fromTo(aboutHeroPersonImg,
                    { y: 150, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.6,
                        ease: "power4.out",
                        delay: 0.2
                    }
                );
            }

            const aboutHeroName = document.querySelector(".about-hero-name");
            if (aboutHeroName) {
                gsap.fromTo(aboutHeroName,
                    { scale: 0.85, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 2.0,
                        ease: "power3.out",
                        delay: 0.4
                    }
                );
            }

            const aboutHeroCursive = document.querySelector(".about-hero-cursive");
            if (aboutHeroCursive) {
                gsap.fromTo(aboutHeroCursive,
                    { scale: 0.6, opacity: 0, rotate: -25 },
                    {
                        scale: 1,
                        opacity: 1,
                        rotate: -8,
                        duration: 1.8,
                        ease: "back.out(1.7)",
                        delay: 0.8
                    }
                );
            }

            // Animate logo sliding up to the header logo position and scaling up
            gsap.to(loaderLogo, {
                left: targetRect.left,
                top: targetRect.top,
                width: targetRect.width,
                height: targetRect.height,
                duration: 0.9,
                ease: "power3.out",
                onComplete: () => {
                    // Make final header logo visible
                    activeNavLogo.style.opacity = "1";
                    // Remove loader logo from page now that header logo is active
                    loaderLogo.remove();

                    // Trigger scroll reveals initialization
                    initScrollAnimations();
                }
            });
        }, 50);
    }
} else {
        // Non-white-preloader pages (about.php): keep header visible, don't hide logos
        if (desktopNavLogo) desktopNavLogo.style.opacity = "1";
        if (mobileNavLogo) mobileNavLogo.style.opacity = "1";
        if (headerArea) {
            headerArea.classList.add("nav-elements-active");
        }

        // Mobile-specific entrance animations for about/services pages
        let animationsInitialized = false;
        function runEntranceAnimations() {
            if (animationsInitialized) return;
            animationsInitialized = true;

            // 1. Hero section: fade-up cutout image and text on page load
            const heroPersonImg = document.querySelector(".about-hero-person-img");
            const heroName = document.querySelector(".about-hero-name");
            if (heroPersonImg) {
                gsap.fromTo(heroPersonImg,
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.1 }
                );
            }
            if (heroName) {
                gsap.fromTo(heroName,
                    { y: 60, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.3 }
                );
            }

            // Services Page Hero: fade-up heading and subtitle (Disabled - stays static)
            /*
            const servicesHeroContent = document.querySelector(".services-hero-content");
            if (servicesHeroContent) {
                const elements = servicesHeroContent.querySelectorAll("h1, p");
                gsap.fromTo(elements,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }
                );
            }
            */

            // 2. Who I Am section: fade-up text on scroll (MOBILE ONLY)
            if (window.innerWidth < 992) {
                const whoIAmContent = document.querySelector("#reveal-about .alternative-content-reveal");
                if (whoIAmContent) {
                    const whoIAmChildren = whoIAmContent.querySelectorAll("h6, h2, blockquote, p, .blockquote-footer");
                    gsap.fromTo(whoIAmChildren,
                        { y: 40, opacity: 0 },
                        {
                            y: 0, opacity: 1,
                            duration: 0.8, stagger: 0.12,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: "#reveal-about",
                                start: "top 80%",
                                once: true
                            }
                        }
                    );
                }

                // 3. Mission/Vision cards: slide from left/right on scroll (MOBILE ONLY)
                const missionCard = document.querySelector(".gsap-slide-up-mission");
                const visionCard = document.querySelector(".gsap-slide-up-vision");
                if (missionCard) {
                    gsap.fromTo(missionCard,
                        { x: -80, opacity: 0 },
                        {
                            x: 0, opacity: 1,
                            duration: 0.9, ease: "power3.out",
                            scrollTrigger: {
                                trigger: missionCard,
                                start: "top 85%",
                                once: true
                            }
                        }
                    );
                }
                if (visionCard) {
                    gsap.fromTo(visionCard,
                        { x: 80, opacity: 0 },
                        {
                            x: 0, opacity: 1,
                            duration: 0.9, ease: "power3.out", delay: 0.15,
                            scrollTrigger: {
                                trigger: visionCard,
                                start: "top 85%",
                                once: true
                            }
                        }
                    );
                }
            }

            initScrollAnimations();
        }

        $(window).on('preloaderDone', runEntranceAnimations);
        
        // Fallback: If preloaderDone event doesn't trigger or triggers too early, run after 2.5 seconds
        setTimeout(runEntranceAnimations, 2500);
    }


    function initScrollAnimations() {
        // Services Page (.v-service-card-wipe) Entrance Stagger (Disabled - Cards stay static)
        /*
        const serviceCards = document.querySelectorAll('.v-service-card-wipe');
        if (serviceCards.length > 0) {
            serviceCards.forEach(function (card, index) {
                gsap.fromTo(card,
                    { opacity: 0, y: 80 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "power3.out",
                        delay: (index % 2) * 0.15,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 95%",
                            toggleActions: 'play none none none'
                        }
                    }
                );
            });
        }
        */

        // Blog Page Hero Title & Subtitle Fadeup (All viewports)
        const blogHeroContent = document.querySelector(".blog-hero-content");
        if (blogHeroContent) {
            const elements = blogHeroContent.querySelectorAll("h1, p");
            gsap.fromTo(elements,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.4, stagger: 0.2, ease: "power3.out" }
            );
        }

        // Blog Page Cards Directional Wipe Reveal (Disabled - Cards stay static)
        /*
        const blogCards = document.querySelectorAll('.blog-section .gsap-blog-anim');
        if (blogCards.length > 0) {
            blogCards.forEach(function (col, index) {
                const card = col.querySelector('.blog-card-unique');
                if (card) {
                    gsap.fromTo(card,
                        { opacity: 0 },
                        {
                            opacity: 1,
                            clipPath: "inset(0% 0% 0% 0%)",
                            duration: 1.6,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: col,
                                start: "top 90%",
                                toggleActions: 'play none none none'
                            }
                        }
                    );
                }
            });
        }
        */

        let mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {
            // About Page Overlapping Slide-Up Sections (Pinning previous sections so the next one covers it)
            if (document.querySelector('.about-hero-section')) {
                ScrollTrigger.create({
                    trigger: ".about-hero-section",
                    start: "top top",
                    end: "+=100%",
                    pin: true,
                    pinSpacing: false,
                    id: "pin-about-hero"
                });
                if (!document.getElementById('reveal-about')) {
                    ScrollTrigger.create({
                        trigger: ".about-split-section",
                        start: "top top",
                        end: "+=100%",
                        pin: true,
                        pinSpacing: false,
                        id: "pin-about-split"
                    });
                }
            }

            // About Section (Row 1 - Left Image, Right Content OR Centered Content)
            const aboutImageReveal = document.querySelector("#reveal-about .alternative-image-reveal");
            const isAboutPage = !!document.querySelector('.about-hero-section');
            const pinDuration = isAboutPage ? "+=200%" : "+=100%";

            if (aboutImageReveal) {
                // Natural scrolling without transitions or scroll-pinning on index.php
                gsap.set("#reveal-about .alternative-image-reveal", { clipPath: "none", opacity: 1 });
                gsap.set("#reveal-about .alternative-content-reveal", { opacity: 1, y: 0 });
                gsap.set("#reveal-about .alternative-content-reveal > *", { opacity: 1, y: 0 });
            } else {
                // Centered Content Animation for about.php
                gsap.fromTo("#reveal-about .about-content-bg",
                    { opacity: 0, scale: 1.15 },
                    {
                        opacity: 0.15,
                        scale: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: "#reveal-about",
                            start: "top bottom",
                            end: "top top",
                            scrub: true
                        }
                    }
                );

                const aboutTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#reveal-about",
                        start: "top top",
                        end: pinDuration,
                        pin: true,
                        pinSpacing: true,
                        scrub: true
                    }
                });

                gsap.set("#reveal-about .alternative-content-reveal > *", { opacity: 0, y: 35 });

                aboutTimeline
                    // A. Show container wrapper
                    .to("#reveal-about .alternative-content-reveal", {
                        opacity: 1,
                        y: 0,
                        duration: 0.4
                    })
                    // B. Fade and slide in internal elements with a staggered delay
                    .to("#reveal-about .alternative-content-reveal > *", {
                        opacity: 1,
                        y: 0,
                        stagger: 0.2,
                        duration: 1.2,
                        ease: "power2.out"
                    }, "-=0.2");

                if (isAboutPage) {
                    aboutTimeline.to({}, { duration: 1.0 });
                }
            }

            // 3. Mission & Vision Section Scroll Reveal & Overlap
            if (document.querySelector('.mission-vision-section')) {
                // Set initial states for animation (cards start completely off-screen)
                gsap.set(".gsap-fade-up", { opacity: 0, y: 50 });
                gsap.set(".gsap-slide-up-mission", { opacity: 0, x: "-100vw" });
                gsap.set(".gsap-slide-up-vision", { opacity: 0, x: "100vw" });

                const missionTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".mission-vision-section",
                        start: "top top",
                        end: "+=200%", // 200vh scroll duration
                        pin: true,
                        pinSpacing: false, // Restore parallax overlap (stack scroll)
                        scrub: true
                    }
                });

                missionTimeline
                    // A. Fade up title
                    .fromTo(".gsap-fade-up", { opacity: 0, y: 50 }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                    // B. Slide in Mission box from left
                    .fromTo(".gsap-slide-up-mission", { opacity: 0, x: "-100vw" }, {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        ease: "power2.out"
                    }, "-=0.1")
                    // C. Slide in Vision box from right
                    .fromTo(".gsap-slide-up-vision", { opacity: 0, x: "100vw" }, {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        ease: "power2.out"
                    }, "<")
                    // D. Add a large hold so they stay visible while the next section takes its time scrolling up over them
                    .to({}, { duration: 2.5 });
            }


            // Principal Architect Section (Row 2 - Left Content, Right Image) - Natural scrolling without transitions
            gsap.set("#reveal-architect .alternative-image-reveal", { clipPath: "none", opacity: 1 });
            gsap.set("#reveal-architect .alternative-content-reveal", { opacity: 1, y: 0 });
            gsap.set("#reveal-architect .alternative-content-reveal > *", { opacity: 1, y: 0 });


            // --- PORTFOLIO PROJECT SECTIONS (SINGLE PINNED TIMELINE OVERLAPPING FLOW) ---
            const stackSection = document.getElementById("portfolio-stack-section");
            if (stackSection) {
                // First, pre-set the initial states of the items and images to open from a center-bottom box
                gsap.set(["#p-item-1", "#p-item-2", "#p-item-3", "#p-item-4"], { clipPath: "polygon(30% 65%, 70% 65%, 70% 100%, 30% 100%)" });
                gsap.set([
                    "#p-item-1 .project-text-content",
                    "#p-item-2 .project-text-content",
                    "#p-item-3 .project-text-content",
                    "#p-item-4 .project-text-content"
                ], { opacity: 0, y: 30 });

                // Layer 1 Animation (Khwaab)
                const tl1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".layer-1",
                        start: "top bottom",
                        end: "top top",
                        scrub: 1
                    }
                });
                tl1.to("#p-item-1", {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 1.2,
                    ease: "power2.inOut"
                })
                    .to("#p-item-1 .project-text-content", {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out"
                    }, "-=0.6");

                // Layer 2 Animation (Tejwani & Anantara)
                const tl2 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".layer-2",
                        start: "top bottom",
                        end: "top top",
                        scrub: 1
                    }
                });
                tl2.to(["#p-item-2", "#p-item-3"], {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 1.2,
                    ease: "power2.inOut"
                })
                    .to(["#p-item-2 .project-text-content", "#p-item-3 .project-text-content"], {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        stagger: 0.2
                    }, "-=0.6");

                // Layer 3 Animation (Dinesh)
                const tl3 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".layer-3",
                        start: "top bottom",
                        end: "top top",
                        scrub: 1
                    }
                });
                tl3.to("#p-item-4", {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 1.2,
                    ease: "power2.inOut"
                })
                    .to("#p-item-4 .project-text-content", {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out"
                    }, "-=0.6");
            }

            // --- SERVICES GRID (NO PINNING / NO SCROLL TRANSITIONS) ---
            if (document.querySelector('.services-stacked-container')) {
                gsap.set(".services-stacked-container .service-stack-item", { opacity: 1 });
                gsap.set(".services-stacked-container .img-curtain", { clipPath: "none" });
                gsap.set(".services-stacked-container .service-stack-text", { opacity: 1, y: 0 });
            }

            // --- Custom Horizontal Scroll-Driven Testimonials (Scrubbed Pinned Animation - Desktop version) ---
            const testimonialSection = document.getElementById("testimonial-1");
            if (testimonialSection) {
                const track = testimonialSection.querySelector(".alt-testimonial-track");
                const cards = gsap.utils.toArray(testimonialSection.querySelectorAll(".alt-testimonial-card"));

                if (track && cards.length > 0) {
                    gsap.set(cards[0], { opacity: 1, scale: 1 });
                    gsap.set(cards[0].querySelector(".alt-testimonial-img-wrap"), { scale: 1.15 });

                    for (let i = 1; i < cards.length; i++) {
                        gsap.set(cards[i], { opacity: 0.4, scale: 0.9 });
                        gsap.set(cards[i].querySelector(".alt-testimonial-img-wrap"), { scale: 0.85 });
                    }

                    const testimonialTimeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#testimonial-1",
                            start: "top top",
                            end: "+=300%",
                            pin: true,
                            scrub: 1,
                            anticipatePin: 1
                        }
                    });

                    testimonialTimeline.to(track, {
                        x: "-195vw", // Desktop card translation (65vw * 3)
                        ease: "none",
                        duration: 1.5
                    }, 0);

                    testimonialTimeline.to(cards[0], { opacity: 0.4, scale: 0.9, duration: 0.5, ease: "power1.inOut" }, 0)
                                       .to(cards[0].querySelector(".alt-testimonial-img-wrap"), { scale: 0.85, duration: 0.5, ease: "power1.inOut" }, 0);

                    testimonialTimeline.to(cards[1], { opacity: 1, scale: 1, duration: 0.5, ease: "power1.inOut" }, 0)
                                       .to(cards[1].querySelector(".alt-testimonial-img-wrap"), { scale: 1.15, duration: 0.5, ease: "power1.inOut" }, 0)
                                       .to(cards[1], { opacity: 0.4, scale: 0.9, duration: 0.5, ease: "power1.inOut" }, 0.5)
                                       .to(cards[1].querySelector(".alt-testimonial-img-wrap"), { scale: 0.85, duration: 0.5, ease: "power1.inOut" }, 0.5);

                    testimonialTimeline.to(cards[2], { opacity: 1, scale: 1, duration: 0.5, ease: "power1.inOut" }, 0.5)
                                       .to(cards[2].querySelector(".alt-testimonial-img-wrap"), { scale: 1.15, duration: 0.5, ease: "power1.inOut" }, 0.5)
                                       .to(cards[2], { opacity: 0.4, scale: 0.9, duration: 0.5, ease: "power1.inOut" }, 1.0)
                                       .to(cards[2].querySelector(".alt-testimonial-img-wrap"), { scale: 0.85, duration: 0.5, ease: "power1.inOut" }, 1.0);

                    testimonialTimeline.to(cards[3], { opacity: 1, scale: 1, duration: 0.5, ease: "power1.inOut" }, 1.0)
                                       .to(cards[3].querySelector(".alt-testimonial-img-wrap"), { scale: 1.15, duration: 0.5, ease: "power1.inOut" }, 1.0);
                }
            }

        });

        mm.add("(max-width: 991px)", () => {
            // Mobile/Tablet resets and fallback behaviors
            // 1. Reset About image & text columns (including about.php centered layout)
            gsap.set("#reveal-about .alternative-image-reveal", { clipPath: "none", opacity: 1 });
            gsap.set("#reveal-about .alternative-content-reveal", { opacity: 1, y: 0 });
            gsap.set("#reveal-about .alternative-content-reveal > *", { opacity: 1, y: 0 });
            gsap.set("#reveal-about .about-content-bg", { opacity: 0.1, scale: 1 });
            
            // 2. Reset Principal Architect image & text columns
            gsap.set("#reveal-architect .alternative-image-reveal", { clipPath: "none", opacity: 1 });
            gsap.set("#reveal-architect .alternative-content-reveal", { opacity: 1, y: 0 });

            // 3. Reset Mission & Vision Section
            gsap.set(".gsap-fade-up", { opacity: 1, y: 0 });
            gsap.set(".gsap-slide-up-mission", { opacity: 1, x: 0 });
            gsap.set(".gsap-slide-up-vision", { opacity: 1, x: 0 });

            // 3. Mobile Portfolio – IntersectionObserver handles fade-in; keep text visible
            const portfolioStackSection = document.getElementById("portfolio-stack-section");
            if (portfolioStackSection) {
                const portfolioItems = portfolioStackSection.querySelectorAll('.portfolio-slide-item');
                portfolioItems.forEach(item => {
                    const text = item.querySelector('.project-text-content');
                    if (text) gsap.set(text, { opacity: 1, y: 0 });
                    gsap.set(item, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" });
                });
            }

            // 4. Mobile Services (No scroll transitions)
            const serviceContainer = document.querySelector('.services-stacked-container');
            if (serviceContainer) {
                gsap.set(".services-stacked-container .service-stack-item", { opacity: 1 });
                gsap.set(".services-stacked-container .img-curtain", { clipPath: "none" });
                gsap.set(".services-stacked-container .service-stack-text", { opacity: 1, y: 0 });
            }
            
            // 5. Testimonials: On mobile/tablet, translate track dynamically based on mobile card widths
            const testimonialSection = document.getElementById("testimonial-1");
            if (testimonialSection) {
                const track = testimonialSection.querySelector(".alt-testimonial-track");
                const cards = gsap.utils.toArray(testimonialSection.querySelectorAll(".alt-testimonial-card"));
                if (track && cards.length > 0) {
                    gsap.set(cards[0], { opacity: 1, scale: 1 });
                    gsap.set(cards[0].querySelector(".alt-testimonial-img-wrap"), { scale: 1.15 });

                    for (let i = 1; i < cards.length; i++) {
                        gsap.set(cards[i], { opacity: 0.4, scale: 0.9 });
                        gsap.set(cards[i].querySelector(".alt-testimonial-img-wrap"), { scale: 0.85 });
                    }

                    const testimonialTimeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#testimonial-1",
                            start: "top top",
                            end: "+=300%",
                            pin: true,
                            scrub: 1,
                            anticipatePin: 1
                        }
                    });

                    // Translate track horizontally based on mobile card width (80vw + 5vw = 85vw per card)
                    testimonialTimeline.to(track, {
                        x: "-255vw", // 3 cards * 85vw each translation on mobile
                        ease: "none",
                        duration: 1.5
                    }, 0);

                    testimonialTimeline.to(cards[0], { opacity: 0.4, scale: 0.9, duration: 0.5, ease: "power1.inOut" }, 0)
                                       .to(cards[0].querySelector(".alt-testimonial-img-wrap"), { scale: 0.85, duration: 0.5, ease: "power1.inOut" }, 0);

                    testimonialTimeline.to(cards[1], { opacity: 1, scale: 1, duration: 0.5, ease: "power1.inOut" }, 0)
                                       .to(cards[1].querySelector(".alt-testimonial-img-wrap"), { scale: 1.15, duration: 0.5, ease: "power1.inOut" }, 0)
                                       .to(cards[1], { opacity: 0.4, scale: 0.9, duration: 0.5, ease: "power1.inOut" }, 0.5)
                                       .to(cards[1].querySelector(".alt-testimonial-img-wrap"), { scale: 0.85, duration: 0.5, ease: "power1.inOut" }, 0.5);

                    testimonialTimeline.to(cards[2], { opacity: 1, scale: 1, duration: 0.5, ease: "power1.inOut" }, 0.5)
                                       .to(cards[2].querySelector(".alt-testimonial-img-wrap"), { scale: 1.15, duration: 0.5, ease: "power1.inOut" }, 0.5)
                                       .to(cards[2], { opacity: 0.4, scale: 0.9, duration: 0.5, ease: "power1.inOut" }, 1.0)
                                       .to(cards[2].querySelector(".alt-testimonial-img-wrap"), { scale: 0.85, duration: 0.5, ease: "power1.inOut" }, 1.0);

                    testimonialTimeline.to(cards[3], { opacity: 1, scale: 1, duration: 0.5, ease: "power1.inOut" }, 1.0)
                                       .to(cards[3].querySelector(".alt-testimonial-img-wrap"), { scale: 1.15, duration: 0.5, ease: "power1.inOut" }, 1.0);
                }
            }
        });

        // Typewriter effect for CTA heading using GSAP SplitText
        try {
            const ctaHeading = document.querySelector('.cta-typewriter-text');
            if (ctaHeading && typeof SplitText !== "undefined") {
                const split = new SplitText(ctaHeading, { type: "words,chars" });
                const chars = split.chars;
                
                gsap.set(chars, { opacity: 0 });
                
                gsap.to(chars, {
                    opacity: 1,
                    stagger: 0.04,
                    duration: 0.05,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: ctaHeading,
                        start: "top 85%",
                        once: true
                    }
                });
            }
        } catch (e) {
            console.error("SplitText typewriter error: ", e);
        }

        // Magnetic Button Hover follow effect
        const magneticWraps = document.querySelectorAll('.magnetic-wrap');
        magneticWraps.forEach(wrap => {
            const btn = wrap.querySelector('.circle-btn-talk');
            if (!btn) return;
            
            wrap.addEventListener('mousemove', (e) => {
                const rect = wrap.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                gsap.to(btn, {
                    x: x * 0.35,
                    y: y * 0.35,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            wrap.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });

        // Debounced layout calculations and ScrollTrigger refresh
        let altRefreshTimer;
        const debounceRefresh = (delay) => {
            clearTimeout(altRefreshTimer);
            altRefreshTimer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, delay || 150);
        };

        window.addEventListener('load', () => debounceRefresh(200));
        $(window).on('preloaderDone', () => debounceRefresh(300));

    }

    // ── Infinite Magazine Logos Marquee (Featured on - Mobile Touch Pause) ──
    const marqueeTrack = document.querySelector('.featured-logos-track');
    if (marqueeTrack) {
        marqueeTrack.addEventListener('touchstart', function () {
            this.style.animationPlayState = 'paused';
        }, { passive: true });
        marqueeTrack.addEventListener('touchend', function () {
            this.style.animationPlayState = 'running';
        }, { passive: true });
        marqueeTrack.addEventListener('touchcancel', function () {
            this.style.animationPlayState = 'running';
        }, { passive: true });
    }
});
