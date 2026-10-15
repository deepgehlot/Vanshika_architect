/**
 * Architect Vanshika - Dynamic Projects Handler
 * Manages project data via Google Sheets CSV integration
 */

const CONFIG = {
    // PASTE YOUR PUBLISHED GOOGLE SHEET CSV URL HERE
    SHEET_CSV_URL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRSEn9clTRuerF74EqZLKzceDB4RzSQvBVNWl_z-BQRck6ejdm6IoCKeakx76eZCd22Z2lEi63Af7o6/pub?output=csv',
    CATEGORIES: ['Architecture', 'Interior', '3D Modeling'],
    FALLBACK_DATA: [] // Removed dummy data as requested
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
                    'Browsers block data fetching from Google Sheets for security reasons when not running on a web server. ' +
                    'Please use a local server like "Live Server" in VS Code or upload to GitHub to see the data.';
                console.error(msg);
                this.showUIError(msg);
                return;
            }

            console.log('🔗 Sheet URL:', CONFIG.SHEET_CSV_URL);

            const data = await this.fetchData();
            this.projects = this.parseCSV(data);

            console.log('✅ Connection Successful!');
            console.log(`📊 Total Projects Loaded: ${this.projects.length}`);

            if (this.projects.length === 0) {
                console.warn('⚠️ No projects found in the sheet. Please check your data or column headers.');
            }

            // Trigger custom event when data is ready
            $(window).trigger('projectsLoaded', [this.projects]);

            this.router();
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : 'Unknown error';
            console.error('❌ Failed to fetch from Google Sheets:', errorMsg);
            console.warn('Using FALLBACK_DATA (empty array).');
            this.projects = CONFIG.FALLBACK_DATA;
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
            container.html('<div class="col-12 text-center py-5"><p class="text-white">No featured projects found. Check your Google Sheet!</p></div>');
            return;
        }

        let originalLength = featured.length;
        const isSingle = originalLength === 1;

        // Slick slider has a known bug with centerMode and centerPadding where it shows a blank space 
        // during infinite loop reset if there are too few items (like 2, 3, or 4).
        // Duplicating the items ensures there are enough real slides to scroll through smoothly.
        if (originalLength > 1 && originalLength <= 4) {
            featured = [...featured, ...featured];
            if (featured.length <= 4) featured = [...featured, ...featured]; // If it was 2, make it 8
        }

        let html = '';
        featured.forEach((project, index) => {
            // Use modulo to keep the project numbers consistent (01, 02, 03, 04) even for duplicates
            const realNum = (index % originalLength) + 1;
            const num = realNum.toString().padStart(2, '0');
            html += this.getSliderItemHTML(project, num);
        });

        container.html(html);

        // Re-init Slick for Portfolio Slider (Sync with original main.js settings)
        if ($.fn.slick) {
            if (container.hasClass('slick-initialized')) container.slick('unslick');

            container.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: !isSingle, // Enable centerMode to show next/prev slides
                centerPadding: isSingle ? '0' : '22%',
                arrows: !isSingle, // Hide arrows if single
                dots: false,
                infinite: !isSingle,
                fade: false,
                autoplay: !isSingle,
                speed: 1200,      // Slightly slower transition for premium feel
                autoplaySpeed: 3000, // Change every 3 seconds
                pauseOnHover: false, // Don't stop on hover as requested
                pauseOnFocus: false,
                cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', // Smooth high-end easing
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
            html += this.getProjectCardHTML(project, 'col-lg-4 col-md-6 grid-item');
        });

        if (loadingSpinner.length) loadingSpinner.remove();

        if (this.projects.length === 0) {
            container.html('<div class="col-12 text-center py-5"><p class="text-muted">No projects found in the gallery. Check your Google Sheet!</p></div>');
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
        const projectId = urlParams.get('id');
        const project = this.projects.find(p => p.ID === projectId) || (this.projects.length > 0 ? this.projects[0] : null);

        if (!project) return;

        // Populate Text
        document.title = `${project.Name} - Architect Vanshika`;
        $('.project-hero-section h1').text(project.Name);
        $('.project-hero-section p').text(project.Category);

        // Populate Sliders
        const mainSlider = $('.project-main-slider');
        const thumbSlider = $('.project-thumb-slider');

        if (mainSlider.length && thumbSlider.length && project.Gallery_Images) {
            // Destroy existing slick if initialized
            if (mainSlider.hasClass('slick-initialized')) mainSlider.slick('unslick');
            if (thumbSlider.hasClass('slick-initialized')) thumbSlider.slick('unslick');

            const images = project.Gallery_Images.split(',').map(img => img.trim());
            let mainHtml = '';
            let thumbHtml = '';

            this.injectGalleryStyles();

            images.forEach(img => {
                if (img) {
                    mainHtml += `
                        <div class="project-slide-item">
                            <div class="slide-bg-blur" style="background-image: url('${img}')"></div>
                            <img src="${img}" alt="${project.Name}" class="img-fluid">
                        </div>
                    `;
                    thumbHtml += `<div class="thumb-item"><div class="thumb-img-wrap"><img src="${img}" alt="Thumbnail" class="img-fluid w-100"></div></div>`;
                }
            });

            mainSlider.html(mainHtml);
            thumbSlider.html(thumbHtml);

            // Re-init Slick
            mainSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true, // Enabled arrows
                fade: true,
                asNavFor: '.project-thumb-slider',
                prevArrow: '<button type="button" class="slick-prev"><i class="las la-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="las la-arrow-right"></i></button>',
            });
            thumbSlider.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.project-main-slider',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                arrows: false,
                responsive: [
                    { breakpoint: 768, settings: { slidesToShow: 3 } },
                    { breakpoint: 480, settings: { slidesToShow: 2 } }
                ]
            });
        }
    }

    getSliderItemHTML(p, num) {
        return `
            <div class="portfolio-slide-item">
                <div class="portfolio-img-wrap">
                    <div class="portfolio-bg" style="background-image: url('${p.Main_Image}')"></div>
                    <div class="portfolio-overlay"></div>
                    <a href="project-detail.php?id=${p.ID}" class="portfolio-slide-link" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 5;"></a>
                    <div class="portfolio-content">
                        <div class="port-num">${num}</div>
                        <div class="port-text">
                            <h3>${p.Name}</h3>
                            <p>${p.Description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getProjectCardHTML(p, colClass = "") {
        // Use Category for filtering class (slugified)
        const categoryClass = p.Category ? p.Category.toLowerCase().replace(/ /g, '-') : "";
        const tagsClass = p.Tags ? p.Tags.toLowerCase().replace(/[ ,]+/g, ' ') : "";

        return `
            <div class="${colClass} ${categoryClass} ${tagsClass}">
                <div class="project-card-unique">
                    <div class="project-img">
                        <img src="${p.Main_Image}" alt="${p.Name}" class="img-fluid" style="width: 100%; height: 100%; object-fit: cover;">
                        <div class="project-overlay">
                            <div class="project-info">
                                <span class="category">${p.Category}</span>
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
        // Give the DOM a moment to settle
        setTimeout(() => {
            // Trigger GSAP refresh and ScrollTrigger recount
            // @ts-ignore
            if (typeof ScrollTrigger !== 'undefined') {
                // @ts-ignore
                ScrollTrigger.refresh();
            }

            // Signal that dynamic content is ready for reveal
            $(window).trigger('dynamicContentReady');

            // Re-run any specific entrance animations if needed
            this.triggerEntranceAnimations();
        }, 100);
    }

    triggerEntranceAnimations() {
        // If we want to manually trigger the animation for newly added cards
        if (typeof gsap !== 'undefined') {
            $('.project-card-unique').each(function (index) {
                if (!$(this).data('animated')) {
                    $(this).data('animated', true);
                    // Animation logic is already in main.js
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
                    <hr style="border-color: rgba(255,255,255,0.1);">
                    <p style="font-size: 14px; margin-bottom: 0;"><strong>Tip:</strong> If you use VS Code, install the <strong>Live Server</strong> extension and click "Go Live" at the bottom right.</p>
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
                min-height: 600px;
                background: #000;
            }
            .project-slide-item .slide-bg-blur {
                position: absolute;
                top: -30px;
                left: -30px;
                right: -30px;
                bottom: -30px;
                background-size: cover;
                background-position: center;
                filter: blur(30px) brightness(0.7);
                opacity: 0.7;
                z-index: 0;
            }
            .project-slide-item img {
                position: relative;
                z-index: 1;
                // max-height: 80vh;
                // width: auto !important;
                max-width: 100%;
                // margin: 0 auto;
                // box-shadow: 0 30px 60px rgba(0,0,0,0.8);
                border-radius: 4px;
            }
            .project-main-slider .slick-prev, .project-main-slider .slick-next {
                z-index: 10;
                width: 50px;
                height: 50px;
                background: rgba(194, 154, 108, 0.8);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }
            .project-main-slider .slick-prev:hover, .project-main-slider .slick-next:hover {
                background: #c29a6c;
                transform: scale(1.1);
            }
            .project-main-slider .slick-prev { left: 30px; }
            .project-main-slider .slick-next { right: 30px; }
        `;
        $('<style id="gallery-blur-styles">').text(css).appendTo('head');
    }
}

// Initialize on document ready
$(document).ready(() => {
    window.ProjectsManager = new ProjectsHandler();
});
