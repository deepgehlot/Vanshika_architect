/**
 * Architect Vanshika - Dynamic Projects Handler
 * Manages project data via Google Sheets CSV integration + Local High-Res Project Photos
 */

const LOCAL_PROJECT_DATA = {
    "Dinesh": {
        id: "Dinesh",
        name: "Dinesh Goyal Project",
        category: "Interior Architecture",
        description: "Dark Maximalism Luxury Bungalow",
        cover: "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal cover photo.webp",
        images: [
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal cover photo.webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal (1).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal (2).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal (3).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal (4).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal (5).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal (6).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal (8).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal (9).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal (10).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal (11).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal (12).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal (13).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal (14).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal (15).webp"
        ]
    },
    "pratab": {
        id: "pratab",
        name: "Pratap Project",
        category: "Heritage & Modern Architecture",
        description: "Opulent Heritage Villa & Modern Living",
        cover: "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/pratap cover photo.webp",
        images: [
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/pratap cover photo.webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/pratap (1).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/pratap (2).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/pratap (3).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/pratap (5).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/pratap (6).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/pratap (7).webp"
        ],
        isFeatured: false
    },
    "Rajul": {
        id: "Rajul",
        name: "Rajul Project",
        category: "Luxury Residential Interior",
        description: "Bespoke Contemporary Residence",
        cover: "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul cover photo.webp",
        images: [
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul cover photo.webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul (1).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul (3).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul (4).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul (5).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul (6).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul (7).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul (8).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul (9).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul (10).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul (11).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul (12).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul (13).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul (14).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul (15).webp"
        ],
        isFeatured: false
    },
    "Anantara": {
        id: "Anantara",
        name: "Anantara Project",
        category: "Hospitality Architecture",
        description: "Grand Luxury Resort & Suites",
        cover: "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ANANATARA cover photo.webp",
        images: [
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ANANATARA cover photo.webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/anantara (25).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/anantara (1).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/anantara (14).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/anantara (15).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/anantara (16).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/anantara (17).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/anantara (18).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/anantara (19).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/anantara (20).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/anantara (21).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/anantara (22).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/anantara (23).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/anantara (24).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/anantara (26).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/anantara (27).webp"
        ]
    },
    "khwaab_jaipur": {
        id: "khwaab_jaipur",
        name: "Khwaab Jaipur",
        category: "Interior Architecture",
        description: "Khwaab Jaipur Luxury Experience",
        cover: "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/khwaab cover photo.webp",
        images: [
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/khwaab cover photo.webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/khwaab (1).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/khwaab (2).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/khwaab (3).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/khwaab (4).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/khwaab (5).webp"
        ]
    },
    "Tejwani": {
        id: "Tejwani",
        name: "Tejwani Project",
        category: "Modern Bungalow Interior",
        description: "Tejwani's Modern Luxury Bungalow",
        cover: "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/tejwani cover photo.webp",
        images: [
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/tejwani cover photo.webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/tejwani (1).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/tejwani (2).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/tejwani (4).webp"
        ]
    },
    "Ranthambore": {
        id: "Ranthambore",
        name: "Ranthambore Resort",
        category: "Resort & Heritage Architecture",
        description: "Wilderness Heritage Sanctuary & Luxury Resort",
        cover: "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ranthambore cover photo.webp",
        images: [
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ranthambore cover photo.webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ranthambore (1).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ranthambore (8).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ranthambore (9).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ranthambore (11).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ranthambore (12).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ranthambore (13).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ranthambore (14).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ranthambore (15).webp"
        ]
    },
    "BadalMahal": {
        id: "BadalMahal",
        name: "Badal Mahal Kumbhalgarh",
        category: "Heritage & Palace Restoration",
        description: "Historic Kumbhalgarh Heritage Palace Restoration",
        cover: "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/BADAL MAHAL F.jpg (1).webp",
        images: [
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/BADAL MAHAL F.jpg (1).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/badal mahal kumbhalgarh (1).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/badal mahal kumbhalgarh (2).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/badal mahal kumbhalgarh (3).webp",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/badal mahal kumbhalgarh (4).webp"
        ],
        isFeatured: true
    },
    "Taj": {
        id: "Taj",
        name: "Taj Project",
        category: "Heritage Architecture",
        description: "Historic Luxury Heritage Palace",
        cover: "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/taj_mind6j.jpg",
        images: [
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/taj_mind6j.jpg",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/taj2_nf9ocm.jpg",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/taj1_echh4a.jpg",
            "https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/taj_zihfiy.jpg"
        ],
        isFeatured: false
    }
};

const CONFIG = {
    CATEGORIES: ['Architecture', 'Interior', 'Heritage', '3D Modeling'],
    PROJECTS: Object.values(LOCAL_PROJECT_DATA).map(p => ({
        ID: p.id,
        Name: p.name,
        Category: p.category,
        Tags: "Architect,Interior,Heritage,3D",
        Description: p.description,
        Main_Image: p.cover,
        Gallery_Images: p.images.join(','),
        Is_Featured: p.isFeatured !== false ? "TRUE" : "FALSE"
    }))
};

class ProjectsHandler {
    constructor() {
        /** @type {any[]} */
        this.projects = [];
        this.init();
    }

    init() {
        console.log('✅ Loaded projects from local dataset (100% offline & fast)');
        this.projects = [...CONFIG.PROJECTS];
        console.log(`📊 Total Projects Loaded: ${this.projects.length}`);

        // Trigger custom event when data is ready
        $(window).trigger('projectsLoaded', [this.projects]);

        this.router();
    }

    router() {
        const path = window.location.pathname;
        const segments = path.split('/');
        const fileName = segments.length > 0 ? (segments.pop() || '').toLowerCase() : '';

        // Match home page variations
        const isHomePage = fileName === '' ||
            fileName === 'index.html' ||
            path === '/' ||
            path.endsWith('/Vanshika_website/') ||
            path.endsWith('/Vanshika/') ||
            path.includes('index.html') ||
            path.includes('index.php');

        if (isHomePage) {
            console.log('🏠 Rendering Featured Projects Slider');
            this.renderFeatured();
        } else if (fileName.includes('projects.html') || fileName.includes('projects.php')) {
            console.log('📂 Rendering All Projects Grid');
            this.renderAll();
        } else if (fileName.includes('project-detail.html') || fileName.includes('project-detail.php')) {
            console.log('📄 Rendering Project Details');
            this.renderDetail();
        }
    }

    renderFeatured() {
        const container = $('#featured-projects-slider');
        if (!container.length) return;

        // Force remove any manually placed spinner inside the container
        container.find('.spinner-border, .col-12').remove();

        let featured = this.projects.filter(p => p.Is_Featured && p.Is_Featured.trim().toUpperCase() === 'TRUE');

        // Limit to 6 projects max
        featured = featured.slice(0, 6);

        if (featured.length === 0) {
            container.html('<div class="col-12 text-center py-5"><p class="text-white">No featured projects found.</p></div>');
            return;
        }

        let originalLength = featured.length;
        const isSingle = originalLength === 1;

        if (originalLength > 1 && originalLength <= 4) {
            featured = [...featured, ...featured];
            if (featured.length <= 4) featured = [...featured, ...featured];
        }

        let html = '';
        featured.forEach((project, index) => {
            const realNum = (index % originalLength) + 1;
            const num = realNum.toString().padStart(2, '0');
            html += this.getSliderItemHTML(project, num);
        });

        container.html(html);

        if ($.fn.slick) {
            if (container.hasClass('slick-initialized')) container.slick('unslick');

            container.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: !isSingle,
                centerPadding: isSingle ? '0' : '22%',
                arrows: !isSingle,
                dots: false,
                infinite: !isSingle,
                fade: false,
                autoplay: !isSingle,
                speed: 1200,
                autoplaySpeed: 3000,
                pauseOnHover: false,
                pauseOnFocus: false,
                cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
                prevArrow: '<button type="button" class="slick-prev"><i class="las la-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="las la-arrow-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            centerPadding: isSingle ? '0' : '15%',
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
        }

        this.refreshAnimations();
    }

    renderAll() {
        const container = $('.project-grid');
        const filterContainer = $('.project-filters');
        if (!container.length) return;

        const loadingSpinner = $('.loading-spinner');

        // Fixed categories/filters
        let filterHtml = '<button class="filter-btn active" data-filter="*">All</button>';
        CONFIG.CATEGORIES.forEach(cat => {
            const filterClass = cat.toLowerCase().replace(/ /g, '-');
            filterHtml += `<button class="filter-btn" data-filter=".${filterClass}">${cat}</button>`;
        });
        if (filterContainer.length) {
            filterContainer.html(filterHtml);
        }

        // Render projects
        let html = '';
        this.projects.forEach(project => {
            html += this.getProjectCardHTML(project, 'col-lg-4 col-md-6 col-12 grid-item');
        });

        if (loadingSpinner.length) loadingSpinner.remove();

        if (this.projects.length === 0) {
            container.html('<div class="col-12 text-center py-5"><p class="text-muted">No projects found in the gallery.</p></div>');
            return;
        }

        container.html(html);

        // Re-init Isotope
        if ($.fn.isotope) {
            if (container.data('isotope')) container.isotope('destroy');
            container.isotope({
                itemSelector: '.grid-item',
                layoutMode: 'fitRows',
                filter: '*'
            });

            // Re-bind filter clicks
            $('.project-filters button').off('click').on('click', function () {
                $('.project-filters button').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                container.isotope({ filter: selector });
                return false;
            });
        }

        this.refreshAnimations();
    }

    renderDetail() {
        const urlParams = new URLSearchParams(window.location.search);
        const rawId = urlParams.get('id');
        const normalize = (str) => (str || '').toString().toLowerCase().replace(/[^a-z0-9]/g, '');
        const target = normalize(rawId);

        // Find project by ID or Name
        let project = this.projects.find(p => {
            const pId = normalize(p.ID);
            const pName = normalize(p.Name);
            return pId === target || pName === target || (target && (pId.includes(target) || target.includes(pId) || pName.includes(target) || target.includes(pName)));
        });

        // Fallback to local project data if not matched
        if (!project) {
            for (const key of Object.keys(LOCAL_PROJECT_DATA)) {
                const item = LOCAL_PROJECT_DATA[key];
                const keyNorm = normalize(key);
                const nameNorm = normalize(item.name);
                if (keyNorm === target || nameNorm === target || (target && (keyNorm.includes(target) || target.includes(keyNorm) || nameNorm.includes(target) || target.includes(nameNorm)))) {
                    project = {
                        ID: item.id,
                        Name: item.name,
                        Category: item.category,
                        Description: item.description,
                        Main_Image: item.cover,
                        Gallery_Images: item.images.join(',')
                    };
                    break;
                }
            }
        }

        if (!project && this.projects.length > 0) {
            project = this.projects[0];
        }

        if (!project) return;

        // Populate Text
        document.title = `${project.Name} - Architect Vanshika`;
        $('.project-hero-section h1').text(project.Name);
        $('.project-hero-section p').text(project.Category || 'Interior & Architecture');

        // Populate Sliders
        const mainSlider = $('.project-main-slider');
        const thumbSlider = $('.project-thumb-slider');

        if (mainSlider.length && thumbSlider.length && project.Gallery_Images) {
            if (mainSlider.hasClass('slick-initialized')) mainSlider.slick('unslick');
            if (thumbSlider.hasClass('slick-initialized')) thumbSlider.slick('unslick');

            const images = project.Gallery_Images.split(',').map(img => img.trim()).filter(Boolean);
            let mainHtml = '';
            let thumbHtml = '';

            this.injectGalleryStyles();

            images.forEach(img => {
                if (img) {
                    const encodedUrl = this.safeUrl(img);
                    mainHtml += `
                        <div class="project-slide-item">
                            <div class="slide-bg-blur" style="background-image: url('${encodedUrl}')"></div>
                            <a href="${encodedUrl}" class="project-popup-link" title="${project.Name}">
                                <img src="${encodedUrl}" alt="${project.Name}" class="img-fluid">
                            </a>
                        </div>
                    `;
                    thumbHtml += `<div class="thumb-item"><div class="thumb-img-wrap"><img src="${encodedUrl}" alt="Thumbnail" class="img-fluid w-100"></div></div>`;
                }
            });

            mainSlider.html(mainHtml);
            thumbSlider.html(thumbHtml);

            // Re-init Slick
            mainSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                asNavFor: '.project-thumb-slider'
            });
            thumbSlider.slick({
                slidesToShow: Math.min(images.length, 4),
                slidesToScroll: 1,
                asNavFor: '.project-main-slider',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                arrows: false,
                responsive: [
                    { breakpoint: 992, settings: { slidesToShow: Math.min(images.length, 4) } },
                    { breakpoint: 768, settings: { slidesToShow: Math.min(images.length, 3) } },
                    { breakpoint: 480, settings: { slidesToShow: Math.min(images.length, 2) } }
                ]
            });

            // Initialize Magnific Popup on click
            if ($.fn.magnificPopup) {
                mainSlider.magnificPopup({
                    delegate: 'a.project-popup-link',
                    type: 'image',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0, 1]
                    },
                    image: {
                        titleSrc: () => project.Name,
                        markup: '<div class="mfp-figure"><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>'
                    },
                    removalDelay: 0,
                    closeOnContentClick: false,
                    closeBtnInside: false
                });
            }

            setTimeout(() => {
                // @ts-ignore
                if (typeof ScrollTrigger !== 'undefined') {
                    // @ts-ignore
                    ScrollTrigger.refresh();
                }
            }, 300);
        }
    }

    safeUrl(url) {
        if (!url) return '';
        try {
            return encodeURI(decodeURI(url)).replace(/\(/g, '%28').replace(/\)/g, '%29');
        } catch (e) {
            return encodeURI(url).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
    }

    getSliderItemHTML(p, num) {
        const coverUrl = this.safeUrl(p.Main_Image || '');
        return `
            <div class="portfolio-slide-item">
                <div class="portfolio-img-wrap">
                    <div class="portfolio-bg" style="background-image: url('${coverUrl}')"></div>
                    <div class="portfolio-overlay"></div>
                    <a href="project-detail.php?id=${p.ID}" class="portfolio-slide-link" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 5;"></a>
                    <div class="portfolio-content">
                        <div class="port-num">${num}</div>
                        <div class="port-text">
                            <h3>${p.Name}</h3>
                            <p>${p.Description || ''}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getProjectCardHTML(p, colClass = "") {
        const classes = new Set();
        if (colClass) colClass.split(' ').filter(Boolean).forEach(c => classes.add(c));

        const cat = (p.Category || '').toLowerCase();
        const tags = (p.Tags || '').toLowerCase();
        const desc = (p.Description || '').toLowerCase();
        const name = (p.Name || '').toLowerCase();
        const allText = `${cat} ${tags} ${desc} ${name}`;

        if (allText.includes('architect')) classes.add('architecture');
        if (allText.includes('interior')) classes.add('interior');
        if (allText.includes('heritage') || allText.includes('restoration') || allText.includes('palace')) classes.add('heritage');
        if (allText.includes('3d') || allText.includes('model')) classes.add('3d-modeling');
        if (allText.includes('resort') || allText.includes('hospitality')) classes.add('resort');

        // Also add direct category slug
        if (p.Category) {
            const catSlug = p.Category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            if (catSlug) classes.add(catSlug);
        }

        const safeClasses = Array.from(classes).join(' ');
        const coverUrl = this.safeUrl(p.Main_Image || '');

        return `
            <div class="${safeClasses}">
                <div class="project-card-unique">
                    <div class="project-img">
                        <img src="${coverUrl}" alt="${p.Name}" class="img-fluid" style="width: 100%; height: 100%; object-fit: cover;">
                        <div class="project-overlay">
                            <div class="project-info">
                                <span class="category">${p.Category || ''}</span>
                                <h4>${p.Name}</h4>
                                <a href="project-detail.php?id=${p.ID}" class="view-project-btn">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    refreshAnimations() {
        setTimeout(() => {
            // @ts-ignore
            if (typeof ScrollTrigger !== 'undefined') {
                // @ts-ignore
                ScrollTrigger.refresh();
            }
            $(window).trigger('dynamicContentReady');
            this.triggerEntranceAnimations();
        }, 100);
    }

    triggerEntranceAnimations() {
        if (typeof gsap !== 'undefined') {
            $('.project-card-unique').each(function () {
                if (!$(this).data('animated')) {
                    $(this).data('animated', true);
                }
            });
        }
    }

    showUIError(message) {
        const container = $('#featured-projects-slider');
        const grid = $('.project-grid');
        const html = `
            <div class="col-12 text-center py-5">
                <div class="alert alert-warning d-inline-block p-4" style="background: rgba(194, 154, 108, 0.1); border: 1px solid #c29a6c; color: #fff; max-width: 800px;">
                    <i class="las la-exclamation-triangle" style="font-size: 40px; color: #c29a6c; margin-bottom: 15px; display: block;"></i>
                    <h4 style="color: #c29a6c;">Local Access Restricted</h4>
                    <p style="font-size: 16px; opacity: 0.9;">${message}</p>
                </div>
            </div>
        `;
        if (container.length) container.html(html);
        if (grid.length) grid.html(html);
    }

    injectGalleryStyles() {
        if ($('#gallery-blur-styles').length) return;
        const css = `
            .project-slide-item {
                position: relative;
                overflow: hidden;
                display: flex !important;
                align-items: center;
                justify-content: center;
                height: 560px;
                max-height: 62vh;
                min-height: 380px;
                background: #0d0d0d;
                border-radius: 10px;
            }
            .project-slide-item .slide-bg-blur {
                position: absolute;
                top: -20px;
                left: -20px;
                right: -20px;
                bottom: -20px;
                background-size: cover;
                background-position: center;
                filter: blur(25px) brightness(0.6);
                opacity: 0.8;
                z-index: 0;
            }
            .project-slide-item .project-popup-link {
                display: flex !important;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                position: relative;
                z-index: 2;
                cursor: zoom-in;
                text-decoration: none;
            }
            .project-slide-item img {
                position: relative;
                z-index: 1;
                width: 100%;
                height: 100%;
                max-height: 100%;
                object-fit: cover;
                border-radius: 10px;
                display: block;
            }
            .fullscreen-hint {
                display: none !important;
            }
            .project-thumb-slider {
                margin-top: 16px;
            }
            .project-thumb-slider .slick-list {
                margin: 0 -6px;
            }
            .project-thumb-slider .thumb-item {
                padding: 0 6px;
                cursor: pointer;
                outline: none;
            }
            .project-thumb-slider .thumb-img-wrap {
                height: 140px;
                overflow: hidden;
                border-radius: 8px;
                opacity: 0.65;
                border: 2px solid transparent;
                transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                background: #111;
            }
            .project-thumb-slider .slick-current .thumb-img-wrap,
            .project-thumb-slider .thumb-item:hover .thumb-img-wrap {
                opacity: 1;
                border: 2px solid #c29a6c;
                box-shadow: 0 4px 14px rgba(194, 154, 108, 0.35);
            }
            .project-thumb-slider .thumb-img-wrap img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
            .project-main-slider .slick-prev, .project-main-slider .slick-next {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 10;
                width: 48px;
                height: 48px;
                background: rgba(18, 18, 18, 0.65);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                display: flex !important;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 0 !important;
                line-height: 0 !important;
                transition: all 0.3s ease;
                backdrop-filter: blur(4px);
                -webkit-backdrop-filter: blur(4px);
                cursor: pointer;
            }
            .project-main-slider .slick-prev:hover, .project-main-slider .slick-next:hover {
                background: #c29a6c;
                border-color: #c29a6c;
                color: #fff;
                transform: translateY(-50%) scale(1.08);
            }
            .project-main-slider .slick-prev { left: 20px; }
            .project-main-slider .slick-next { right: 20px; }
            .project-main-slider .slick-prev::before {
                content: "\f104";
                font-family: "Line Awesome Free";
                font-weight: 900;
                font-size: 20px;
                line-height: 1;
                display: block;
                color: #fff;
            }
            .project-main-slider .slick-next::before {
                content: "\f105";
                font-family: "Line Awesome Free";
                font-weight: 900;
                font-size: 20px;
                line-height: 1;
                display: block;
                color: #fff;
            }
            .mfp-bg {
                background: #000000 !important;
                opacity: 0.96 !important;
                z-index: 99999 !important;
            }
            .mfp-wrap {
                z-index: 100000 !important;
            }
            .mfp-image-holder .mfp-content {
                max-width: 95vw !important;
            }
            .mfp-figure img.mfp-img {
                max-height: 90vh !important;
                width: auto !important;
                max-width: 95vw !important;
                padding: 0 !important;
                border-radius: 6px !important;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8) !important;
            }
            .mfp-figure .mfp-close,
            .mfp-content .mfp-close {
                display: none !important;
            }
            .mfp-arrow {
                width: 52px !important;
                height: 52px !important;
                background: rgba(255, 255, 255, 0.12) !important;
                border-radius: 50% !important;
                opacity: 0.85 !important;
                transition: all 0.3s ease !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
                margin-top: 0 !important;
            }
            .mfp-arrow:hover {
                background: #c29a6c !important;
                opacity: 1 !important;
                transform: translateY(-50%) scale(1.08) !important;
            }
            .mfp-arrow-left { left: 20px !important; }
            .mfp-arrow-right { right: 20px !important; }
        `;
        $('<style id="gallery-blur-styles">').text(css).appendTo('head');
    }
}

// Initialize on document ready
$(document).ready(() => {
    window.ProjectsManager = new ProjectsHandler();
});
