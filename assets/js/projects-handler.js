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
        cover: "assets/img/project photos/dinesh goyal cover photo.webp",
        images: [
            "assets/img/project photos/dinesh goyal cover photo.webp",
            "assets/img/project photos/dinesh goyal (1).webp",
            "assets/img/project photos/dinesh goyal (2).webp",
            "assets/img/project photos/dinesh goyal (3).webp",
            "assets/img/project photos/dinesh goyal (4).webp",
            "assets/img/project photos/dinesh goyal (5).webp",
            "assets/img/project photos/dinesh goyal (6).webp",
            "assets/img/project photos/dinesh goyal (8).webp",
            "assets/img/project photos/dinesh goyal (9).webp",
            "assets/img/project photos/dinesh goyal (10).webp",
            "assets/img/project photos/dinesh goyal (11).webp",
            "assets/img/project photos/dinesh goyal (12).webp",
            "assets/img/project photos/dinesh goyal (13).webp",
            "assets/img/project photos/dinesh goyal (14).webp",
            "assets/img/project photos/dinesh goyal (15).webp"
        ]
    },
    "pratab": {
        id: "pratab",
        name: "Pratap Project",
        category: "Heritage & Modern Architecture",
        description: "Opulent Heritage Villa & Modern Living",
        cover: "assets/img/project photos/pratap cover photo.webp",
        images: [
            "assets/img/project photos/pratap cover photo.webp",
            "assets/img/project photos/pratap (1).webp",
            "assets/img/project photos/pratap (2).webp",
            "assets/img/project photos/pratap (3).webp",
            "assets/img/project photos/pratap (5).webp",
            "assets/img/project photos/pratap (6).webp",
            "assets/img/project photos/pratap (7).webp"
        ]
    },
    "Rajul": {
        id: "Rajul",
        name: "Rajul Project",
        category: "Luxury Residential Interior",
        description: "Bespoke Contemporary Residence",
        cover: "assets/img/project photos/rajul cover photo.webp",
        images: [
            "assets/img/project photos/rajul cover photo.webp",
            "assets/img/project photos/rajul (1).webp",
            "assets/img/project photos/rajul (3).webp",
            "assets/img/project photos/rajul (4).webp",
            "assets/img/project photos/rajul (5).webp",
            "assets/img/project photos/rajul (6).webp",
            "assets/img/project photos/rajul (7).webp",
            "assets/img/project photos/rajul (8).webp",
            "assets/img/project photos/rajul (9).webp",
            "assets/img/project photos/rajul (10).webp",
            "assets/img/project photos/rajul (11).webp",
            "assets/img/project photos/rajul (12).webp",
            "assets/img/project photos/rajul (13).webp",
            "assets/img/project photos/rajul (14).webp",
            "assets/img/project photos/rajul (15).webp"
        ]
    },
    "Anantara": {
        id: "Anantara",
        name: "Anantara Project",
        category: "Hospitality Architecture",
        description: "Grand Luxury Resort & Suites",
        cover: "assets/img/project photos/ANANATARA cover photo.webp",
        images: [
            "assets/img/project photos/ANANATARA cover photo.webp",
            "assets/img/project photos/anantara (25).webp",
            "assets/img/project photos/anantara (1).webp",
            "assets/img/project photos/anantara (14).webp",
            "assets/img/project photos/anantara (15).webp",
            "assets/img/project photos/anantara (16).webp",
            "assets/img/project photos/anantara (17).webp",
            "assets/img/project photos/anantara (18).webp",
            "assets/img/project photos/anantara (19).webp",
            "assets/img/project photos/anantara (20).webp",
            "assets/img/project photos/anantara (21).webp",
            "assets/img/project photos/anantara (22).webp",
            "assets/img/project photos/anantara (23).webp",
            "assets/img/project photos/anantara (24).webp",
            "assets/img/project photos/anantara (26).webp",
            "assets/img/project photos/anantara (27).webp"
        ]
    },
    "khwaab_jaipur": {
        id: "khwaab_jaipur",
        name: "Khwaab Jaipur",
        category: "Interior Architecture",
        description: "Khwaab Jaipur Luxury Experience",
        cover: "assets/img/project photos/khwaab cover photo.webp",
        images: [
            "assets/img/project photos/khwaab cover photo.webp",
            "assets/img/project photos/khwaab (1).webp",
            "assets/img/project photos/khwaab (2).webp",
            "assets/img/project photos/khwaab (3).webp",
            "assets/img/project photos/khwaab (4).webp",
            "assets/img/project photos/khwaab (5).webp"
        ]
    },
    "Tejwani": {
        id: "Tejwani",
        name: "Tejwani Project",
        category: "Modern Bungalow Interior",
        description: "Tejwani's Modern Luxury Bungalow",
        cover: "assets/img/project photos/tejwani cover photo.webp",
        images: [
            "assets/img/project photos/tejwani cover photo.webp",
            "assets/img/project photos/tejwani (1).webp",
            "assets/img/project photos/tejwani (2).webp",
            "assets/img/project photos/tejwani (4).webp"
        ]
    },
    "Ranthambore": {
        id: "Ranthambore",
        name: "Ranthambore Resort",
        category: "Resort & Heritage Architecture",
        description: "Wilderness Heritage Sanctuary & Luxury Resort",
        cover: "assets/img/project photos/ranthambore cover photo.webp",
        images: [
            "assets/img/project photos/ranthambore cover photo.webp",
            "assets/img/project photos/ranthambore (1).webp",
            "assets/img/project photos/ranthambore (8).webp",
            "assets/img/project photos/ranthambore (9).webp",
            "assets/img/project photos/ranthambore (11).webp",
            "assets/img/project photos/ranthambore (12).webp",
            "assets/img/project photos/ranthambore (13).webp",
            "assets/img/project photos/ranthambore (14).webp",
            "assets/img/project photos/ranthambore (15).webp"
        ]
    },
    "BadalMahal": {
        id: "BadalMahal",
        name: "Badal Mahal Kumbhalgarh",
        category: "Heritage & Palace Restoration",
        description: "Historic Kumbhalgarh Heritage Palace Restoration",
        cover: "assets/img/project photos/BADAL MAHAL F.jpg (1).webp",
        images: [
            "assets/img/project photos/BADAL MAHAL F.jpg (1).webp",
            "assets/img/project photos/badal mahal kumbhalgarh (1).webp",
            "assets/img/project photos/badal mahal kumbhalgarh (2).webp",
            "assets/img/project photos/badal mahal kumbhalgarh (3).webp",
            "assets/img/project photos/badal mahal kumbhalgarh (4).webp"
        ]
    }
};

const CONFIG = {
    // PASTE YOUR PUBLISHED GOOGLE SHEET CSV URL HERE
    SHEET_CSV_URL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRSEn9clTRuerF74EqZLKzceDB4RzSQvBVNWl_z-BQRck6ejdm6IoCKeakx76eZCd22Z2lEi63Af7o6/pub?output=csv',
    CATEGORIES: ['Architecture', 'Interior', 'Heritage', '3D Modeling'],
    FALLBACK_DATA: Object.values(LOCAL_PROJECT_DATA).map(p => ({
        ID: p.id,
        Name: p.name,
        Category: p.category,
        Tags: "Architect,Interior,Heritage,3D",
        Description: p.description,
        Main_Image: p.cover,
        Gallery_Images: p.images.join(','),
        Is_Featured: "TRUE"
    }))
};

class ProjectsHandler {
    constructor() {
        /** @type {any[]} */
        this.projects = [];
        this.init();
    }

    async init() {
        try {
            console.log('🔄 Attempting to fetch project data from Google Sheets...');

            // Check for local file protocol (CORS restriction)
            if (window.location.protocol === 'file:') {
                const msg = '🚨 Browser Security Error: You are opening this file directly as a local file (file://). ' +
                    'Please use a local server like "Live Server" in VS Code or web server.';
                console.error(msg);
                this.showUIError(msg);
                return;
            }

            console.log('🔗 Sheet URL:', CONFIG.SHEET_CSV_URL);

            const data = await this.fetchData();
            this.projects = this.parseCSV(data);
            this.mergeLocalData();

            console.log('✅ Connection Successful!');
            console.log(`📊 Total Projects Loaded: ${this.projects.length}`);

            if (this.projects.length === 0) {
                console.warn('⚠️ No projects found in the sheet. Falling back to local data.');
                this.projects = [...CONFIG.FALLBACK_DATA];
            }

            // Trigger custom event when data is ready
            $(window).trigger('projectsLoaded', [this.projects]);

            this.router();
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : 'Unknown error';
            console.error('❌ Failed to fetch from Google Sheets:', errorMsg);
            console.warn('Using local project data.');
            this.projects = [...CONFIG.FALLBACK_DATA];
            $(window).trigger('projectsLoaded', [this.projects]);
            this.router();
        }
    }

    async fetchData() {
        if (!CONFIG.SHEET_CSV_URL || CONFIG.SHEET_CSV_URL.includes('PASTE_URL_HERE')) {
            throw new Error('No CSV URL provided in CONFIG');
        }

        const response = await fetch(CONFIG.SHEET_CSV_URL);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }

        let text = await response.text();

        // Remove UTF-8 BOM if present
        if (text.charCodeAt(0) === 0xFEFF) {
            text = text.substr(1);
        }
        return text;
    }

    parseCSV(csv) {
        if (!csv) return [];
        const lines = csv.split(/\r?\n/);
        if (lines.length < 2) return [];

        const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
        const result = [];

        for (let i = 1; i < lines.length; i++) {
            if (!lines[i].trim()) continue;

            const obj = {};
            const currentLine = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

            let isEmptyRow = true;
            headers.forEach((header, index) => {
                let val = currentLine[index] ? currentLine[index].trim().replace(/^"|"$/g, '') : '';
                obj[header] = val;
                if (val !== '') {
                    isEmptyRow = false;
                }
            });

            // Skip rows that are completely empty or missing a Project Name/ID
            if (isEmptyRow || (!obj['ID'] && !obj['Name'])) continue;

            result.push(obj);
        }
        return result;
    }

    mergeLocalData() {
        const normalize = (str) => (str || '').toString().toLowerCase().replace(/[^a-z0-9]/g, '');

        const findLocal = (idOrName) => {
            if (!idOrName) return null;
            const term = normalize(idOrName);
            for (const key of Object.keys(LOCAL_PROJECT_DATA)) {
                const cleanKey = normalize(key);
                if (cleanKey === term) return LOCAL_PROJECT_DATA[key];
                const item = LOCAL_PROJECT_DATA[key];
                const cleanName = normalize(item.name);
                if (cleanName === term || cleanName.includes(term) || term.includes(cleanKey) || term.includes(cleanName)) {
                    return item;
                }
            }
            return null;
        };

        const existingKeys = new Set();

        this.projects.forEach(p => {
            const local = findLocal(p.ID) || findLocal(p.Name);
            if (local) {
                existingKeys.add(local.id.toLowerCase());
                if (local.cover) p.Main_Image = local.cover;
                if (local.images && local.images.length > 0) {
                    p.Gallery_Images = local.images.join(',');
                }
                if (!p.Category && local.category) p.Category = local.category;
            }
        });

        // Add any local projects that were not in the Google Sheet
        Object.keys(LOCAL_PROJECT_DATA).forEach(key => {
            if (!existingKeys.has(key.toLowerCase())) {
                const item = LOCAL_PROJECT_DATA[key];
                this.projects.push({
                    ID: item.id,
                    Name: item.name,
                    Category: item.category,
                    Tags: "Architect,Interior,Heritage,3D",
                    Description: item.description,
                    Main_Image: item.cover,
                    Gallery_Images: item.images.join(','),
                    Is_Featured: "TRUE"
                });
            }
        });
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
                    const encodedUrl = encodeURI(img).replace(/\(/g, '%28').replace(/\)/g, '%29');
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

    getSliderItemHTML(p, num) {
        const coverUrl = encodeURI(p.Main_Image || '').replace(/\(/g, '%28').replace(/\)/g, '%29');
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
        const coverUrl = encodeURI(p.Main_Image || '').replace(/\(/g, '%28').replace(/\)/g, '%29');

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
