<?php
$page_title = "Awards & Recognitions";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">

    <title>Awards - Architect Vanshika</title>

    <!--Favicon-->
    <link rel="icon" href="assets/img/favicon.png" type="image/png">

    <!-- Bootstrap CSS -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <!-- Line Awesome CSS -->
    <link href="assets/css/line-awesome.min.css" rel="stylesheet">
    <!-- Font Awesome CSS -->
    <link href="assets/css/fontAwesomePro.css" rel="stylesheet">
    <!-- Magnific Popup Video -->
    <link href="assets/css/magnific-popup.css" rel="stylesheet">
    <!-- Owl Carousel CSS -->
    <link href="assets/css/owl.carousel.css" rel="stylesheet">
    <!-- Slick Slider CSS -->
    <link href="assets/css/slick.css" rel="stylesheet">
    <!-- Nice Select  -->
    <link href="assets/css/nice-select.css" rel="stylesheet">
    <!-- Metis Menu -->
    <link href="assets/css/metismenu.css" rel="stylesheet">
    <!-- Back to top CSS -->
    <link href="assets/css/backToTop.css" rel="stylesheet">
    <!-- Dark Style CSS -->
    <!-- <link href="assets/css/dark.css" rel="stylesheet"> -->
    <!-- Style CSS -->
    <link href="assets/css/style.css" rel="stylesheet">
    <!-- Alternative Custom Style Override -->
    <link href="assets/css/alternative-style.css?v=<?php echo time(); ?>" rel="stylesheet">
    <!-- Floating Contact Widget -->
    <link href="assets/css/floating-contact.css?v=<?php echo time(); ?>" rel="stylesheet">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">

    <style>
        .award-card {
            position: relative;
            background-color: #ffffff;
            border: 1px solid rgba(194, 154, 108, 0.15);
            transition: all 0.5s cubic-bezier(0.25, 1, 0.3, 1);
            overflow: hidden;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.02);
            width: 100%;
            height: 100% !important;
            padding: 0 !important;
        }

        .award-card:hover {
            border-color: #c29a6c;
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(194, 154, 108, 0.12);
        }

        .award-img-wrapper {
            width: 100%;
            aspect-ratio: 16 / 10;
            overflow: hidden;
            position: relative;
            margin: 0;
            padding: 0;
            background: #f8f9fa;
        }

        .award-img {
            width: 100%;
            height: 100% !important;
            object-fit: cover !important;
            object-position: center top !important; /* Set to center top to prevent head cutting on 1920/1440 */
            transition: transform 0.6s cubic-bezier(0.25, 1, 0.3, 1);
        }

        .award-img.focus-top {
            object-position: 50% 30% !important;
        }

        .award-img.focus-top-4 {
            object-position: 50% 5% !important; /* Set even higher for Card 4 image to show face */
        }

        .award-card:hover .award-img {
            transform: scale(1.05);
        }

        /* 1. Standard Layout Content Area */
        .standard-layout .award-content {
            padding: 24px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            background-color: #ffffff;
        }


        /* Horizontal layouts */
        @media (min-width: 992px) {
            .standard-layout.reversed {
                flex-direction: column-reverse !important;
            }
            .horizontal-layout {
                flex-direction: row !important;
                align-items: stretch !important;
                height: 280px !important; /* Shorter compact height for Row 1 & Row 3! */
            }
            .horizontal-layout .award-img-wrapper {
                width: 50% !important;
                height: 100% !important;
                aspect-ratio: auto !important;
            }
            .horizontal-layout .award-content {
                width: 50% !important;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 30px !important;
            }
            .horizontal-layout.reversed {
                flex-direction: row-reverse !important;
            }

            /* Match companion cards' heights in Row 1 & Row 3 to the horizontal cards */
            .col-custom-35 .hover-layout {
                height: 280px !important;
            }

            /* Row 2 Slightly increased height & image wrapper sizing */
            .row-2-card {
                height: 420px !important; 
            }
            .row-2-card .award-content {
                padding: 15px 20px !important;
            }
            .row-2-card.standard-layout .award-img-wrapper {
                height: 270px !important;
                aspect-ratio: auto !important;
            }

            /* Custom Grid widths for magazine flow */
            .col-custom-65 {
                flex: 0 0 65% !important;
                max-width: 65% !important;
            }
            .col-custom-35 {
                flex: 0 0 35% !important;
                max-width: 35% !important;
            }
            .col-custom-50 {
                flex: 0 0 50% !important;
                max-width: 50% !important;
            }
            .col-custom-25 {
                flex: 0 0 25% !important;
                max-width: 25% !important;
            }
            .col-custom-60 {
                flex: 0 0 60% !important;
                max-width: 60% !important;
            }
            .col-custom-40 {
                flex: 0 0 40% !important;
                max-width: 40% !important;
            }

            /* 2. Hover Overlay Layout Specifics (Desktop Only) */
            .hover-layout {
                aspect-ratio: 16 / 11;
                border: 1.5px solid #c29a6c !important; /* Default golden/brown border */
            }

            .hover-layout .award-img-wrapper {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
            }

            /* HTML Overlay background on hover */
            .hover-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(11, 12, 14, 0.78) !important;
                z-index: 2;
                opacity: 0 !important;
                visibility: hidden !important;
                transition: all 0.4s ease;
            }

            .hover-layout:hover .hover-overlay {
                opacity: 1 !important;
                visibility: visible !important;
            }

            .hover-layout .award-content {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 24px;
                z-index: 3;
                display: flex;
                flex-direction: column;
                opacity: 0 !important;
                visibility: hidden !important;
                transform: translateY(20px);
                transition: all 0.4s cubic-bezier(0.25, 1, 0.3, 1);
            }

            .hover-layout:hover .award-content {
                opacity: 1 !important;
                visibility: visible !important;
                transform: translateY(0);
            }

            .hover-layout .award-title {
                color: #c29a6c !important; /* Golden title color */
            }

            .hover-layout:hover .award-source {
                color: #ffffff !important; /* White source text on hover */
            }

            .hover-layout .award-link {
                color: #ffffff !important; /* White link color */
            }
        }

        /* Mobile and Tablet Responsive fallback (< 992px) */
        @media (max-width: 991.98px) {
            /* Force all card elements to stack as a normal vertical block (image on top, content below) */
            .award-card {
                flex-direction: column !important;
                height: auto !important;
                aspect-ratio: auto !important;
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                border: 1px solid rgba(194, 154, 108, 0.15) !important;
            }

            .award-img-wrapper {
                position: relative !important;
                width: 100% !important;
                height: auto !important;
                aspect-ratio: 16 / 10 !important;
                padding: 0 !important;
                margin: 0 !important;
                display: block !important;
            }

            .award-img {
                width: 100% !important;
                height: 100% !important;
                display: block !important;
                object-fit: cover !important;
                object-position: center center !important; /* Center the crop on mobile */
            }

            .award-content {
                width: 100% !important;
                padding: 24px !important;
                position: static !important;
                display: flex !important;
                flex-direction: column !important;
                background-color: #ffffff !important;
                opacity: 1 !important;
                visibility: visible !important;
                transform: none !important;
            }

            .award-title {
                color: #171717 !important;
            }

            .award-link {
                color: #171717 !important;
            }

            /* Hide hover overlays completely on mobile */
            .hover-overlay {
                display: none !important;
            }
        }

        /* Shared Typography & Links */
        .award-source {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #c29a6c;
            margin-bottom: 10px;
            font-weight: 600;
            display: block;
        }

        .award-title {
            color: #171717 !important;
            font-size: 17px !important;
            margin-bottom: 18px;
            line-height: 1.45 !important;
            font-family: 'Futura PT', sans-serif;
            font-weight: 500 !important;
            text-transform: none !important;
            flex-grow: 1;
        }

        .award-link {
            color: #171717 !important;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-top: auto;
            transition: color 0.3s ease;
        }

        .award-link i {
            margin-left: 6px;
            font-size: 12px;
            transition: transform 0.3s ease, color 0.3s ease;
            color: #c29a6c;
        }

        .award-card:hover .award-link i {
            transform: translateX(4px);
        }

        .award-icon-bg {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 24px;
            color: rgba(194, 154, 108, 0.25);
            z-index: 4;
            transition: all 0.4s ease;
        }

        .award-card:hover .award-icon-bg {
            color: #c29a6c;
            transform: scale(1.1);
        }

        .awards-section {
            padding-top: 50px !important;
            padding-bottom: 80px !important;
        }

    </style>
</head>

<body class="light awards-page">

    <!-- Pre-Loader -->
    <div id="loader">
        <div class="loader-content">
            <img src="assets/img/logo/Short_logo.png" alt="Loader Logo" class="loader-logo">
            <div class="loading-bar-container">
                <div class="loading-bar"></div>
                <span class="loading-text">0%</span>
            </div>
        </div>
    </div>

    <?php include 'header.php'; ?>

    <div id="smooth-wrapper">
        <div id="smooth-content">
            <main>
                <!-- Awards Hero Section -->
                <div class="project-hero-section pb-2 pt-150">
                    <div class="container-fluid px-md-5 px-3">
                        <div class="row justify-content-center text-center">
                            <div class="col-xl-8">
                                <h6 class="text-uppercase mb-3" style="color: #c29a6c; letter-spacing: 2px;">
                                    Recognitions</h6>
                                <h1 class="display-3 text-dark mb-4" style="font-family: 'Futura PT', sans-serif;">
                                    Awards & Media</h1>
                                <p class="mb-0 text-muted">Celebrating our commitment to design excellence and
                                    innovation in architecture and interior design.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Redesigned Awards, Features & Media Section -->
                <section class="awards-features-main-section py-5">
                    <div class="container-fluid px-lg-5 px-md-4 px-3" style="max-width: 1320px; margin: 0 auto;">
                        
                        <!-- Top Block: Single Profile Photo (Left) + Awards (Right) -->
                        <div class="awards-profile-row row align-items-start gy-5 mb-5">
                            <!-- Left: Single Profile Photo -->
                            <div class="col-lg-5 col-md-5 col-12">
                                <div class="awards-single-profile-card">
                                    <img src="assets/img/vans.jpg" alt="Vanshika Agarwal" class="awards-single-profile-img">
                                </div>
                            </div>

                            <!-- Right: Awards List -->
                            <div class="col-lg-7 col-md-7 col-12 ps-lg-5">
                                <h2 class="awards-editorial-title">AWARDS</h2>
                                <ul class="awards-editorial-list">
                                    <li><strong>D-LIST 2025</strong></li>
                                    <li><strong>FICCI FLO Chennai Chapter</strong> - UPCOMING ENTREPRENEUR 2024</li>
                                    <li><strong>FOAID 2023</strong> - Gold - Residential apartment large for Interiors</li>
                                    <li><strong>Wade Excellence 2023</strong> - Residential upto 3000 sq ft - Interior design - Shortlisted</li>
                                    <li><strong>Wade Excellence 2022</strong> - Residential upto 3000 sq ft - Interior design - Shortlisted</li>
                                    <li><strong>Architecture & Interior Design Excellence 2020</strong> - Premium residential project</li>
                                    <li><strong>Architecture & Interior Design Excellence 2020</strong> - Best interior designer under 40</li>
                                    <li><strong>FOAID 2020</strong> - Silver - Residential apartment large for Interiors</li>
                                    <li><strong>IGEN 2021</strong> - Top 50 Designers in India</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Middle Block: Features & Magazine Logos -->
                        <div class="features-editorial-block pt-5 mt-4">
                            <div class="row align-items-start gy-4 mb-5">
                                <div class="col-lg-3 col-md-4 col-12">
                                    <h2 class="awards-editorial-title">FEATURES</h2>
                                </div>
                                <div class="col-lg-9 col-md-8 col-12">
                                    <p class="features-editorial-desc">
                                        Our projects have been featured in the country's top publications including Architectural Digest, Elle Decor, Goodhomes, Ideal home and Garden, Casa Vogue, Better Interiors to name a few.
                                    </p>
                                </div>
                            </div>

                            <!-- Magazine Logos Cards Grid -->
                            <div class="magazine-logos-editorial-grid">
                                <!-- 1. AD -->
                                <div class="magazine-item-col">
                                    <div class="magazine-white-box">
                                        <svg viewBox="0 0 100 65" width="100" height="65">
                                            <text x="50" y="38" font-family="'Didot', 'Playfair Display', Georgia, serif" font-size="38" font-weight="900" text-anchor="middle" fill="#000" letter-spacing="1">AD</text>
                                            <text x="50" y="56" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="7" font-weight="700" text-anchor="middle" fill="#000" letter-spacing="1.5">ARCHITECTURAL DIGEST</text>
                                        </svg>
                                    </div>
                                    <span class="magazine-box-caption">ARCHITECTURAL DIGEST - JAN 2022</span>
                                </div>

                                <!-- 2. Beautiful Homes -->
                                <div class="magazine-item-col">
                                    <div class="magazine-white-box">
                                        <svg viewBox="0 0 120 60" width="110" height="55">
                                            <text x="18" y="34" font-family="'Helvetica Neue', Arial, sans-serif" font-size="24" font-weight="900" fill="#d9381e">ap</text>
                                            <text x="44" y="24" font-family="'Century Gothic', Arial, sans-serif" font-size="9" font-weight="800" fill="#111" letter-spacing="0.5">BEAUTIFUL</text>
                                            <text x="44" y="36" font-family="'Century Gothic', Arial, sans-serif" font-size="9" font-weight="800" fill="#111" letter-spacing="0.5">HOMES</text>
                                            <text x="44" y="48" font-family="Arial, sans-serif" font-size="7" font-weight="500" fill="#666">with asianpaints</text>
                                        </svg>
                                    </div>
                                    <span class="magazine-box-caption">BEAUTIFUL HOMES - DEC 2021</span>
                                </div>

                                <!-- 3. Elle Decor -->
                                <div class="magazine-item-col">
                                    <div class="magazine-white-box">
                                        <svg viewBox="0 0 100 60" width="105" height="55">
                                            <text x="50" y="32" font-family="'Didot', 'Bodoni MT', Georgia, serif" font-size="30" font-weight="700" text-anchor="middle" fill="#000" letter-spacing="6">ELLE</text>
                                            <text x="50" y="50" font-family="'Century Gothic', 'Futura', sans-serif" font-size="9" font-weight="600" text-anchor="middle" fill="#000" letter-spacing="5">DECOR</text>
                                        </svg>
                                    </div>
                                    <span class="magazine-box-caption">ELLE DECOR - MAR 2023</span>
                                </div>

                                <!-- 4. Livingetc -->
                                <div class="magazine-item-col">
                                    <div class="magazine-white-box">
                                        <svg viewBox="0 0 110 60" width="110" height="55">
                                            <text x="55" y="32" font-family="'Didot', 'Playfair Display', Georgia, serif" font-size="21" font-weight="900" text-anchor="middle" fill="#000" letter-spacing="0.5">Livingetc</text>
                                            <text x="55" y="48" font-family="'Helvetica Neue', Arial, sans-serif" font-size="8.5" font-weight="800" text-anchor="middle" fill="#000" letter-spacing="3">INDIA</text>
                                        </svg>
                                    </div>
                                    <span class="magazine-box-caption">LIVINGETC - OCT 2022</span>
                                </div>

                                <!-- 5. GoodHomes -->
                                <div class="magazine-item-col">
                                    <div class="magazine-white-box">
                                        <svg viewBox="0 0 110 60" width="110" height="55">
                                            <text x="55" y="32" font-family="'Century Gothic', 'Futura', sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#111" letter-spacing="1">GOOD</text>
                                            <text x="55" y="48" font-family="'Century Gothic', 'Futura', sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#c29a6c" letter-spacing="1">HOMES</text>
                                        </svg>
                                    </div>
                                    <span class="magazine-box-caption">GOODHOMES - AUG 2021</span>
                                </div>
                            </div>
                        </div>

                        <!-- Bottom Block: Featured Articles & Press Coverage -->
                        <div class="articles-coverage-block pt-5 mt-5">
                            <h3 class="articles-coverage-title text-center mb-4">FEATURED ARTICLES & PRESS</h3>
                            <div class="row g-4">
                                <!-- Article 1 -->
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="editorial-press-card">
                                        <span class="press-badge">PTI News</span>
                                        <h4 class="press-headline">Elegance with Royalty: How to Infuse Traditional Indian Elements into Modern Interiors</h4>
                                        <a href="https://www.ptinews.com/press-release/elegance-with-royalty-how-to-infuse-traditional-indian-elements-into-modern-interiors/2954579" target="_blank" class="press-read-link">Read Feature <i class="las la-external-link-alt"></i></a>
                                    </div>
                                </div>

                                <!-- Article 2 -->
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="editorial-press-card">
                                        <span class="press-badge">ANI News</span>
                                        <h4 class="press-headline">Elegance With Royalty: How To Infuse Traditional Indian Elements Into Modern Interiors</h4>
                                        <a href="https://www.aninews.in/news/business/elegance-with-royalty-how-to-infuse-traditional-indian-elements-into-modern-interiors20250927162457/" target="_blank" class="press-read-link">Read Feature <i class="las la-external-link-alt"></i></a>
                                    </div>
                                </div>

                                <!-- Article 3 -->
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="editorial-press-card">
                                        <span class="press-badge">The Week</span>
                                        <h4 class="press-headline">Elegance with Royalty: How to Infuse Traditional Indian Elements into Modern Interiors</h4>
                                        <a href="https://www.theweek.in/wire-updates/business/2025/09/29/dcm9-vanshika-agarwal.amp.html" target="_blank" class="press-read-link">Read Feature <i class="las la-external-link-alt"></i></a>
                                    </div>
                                </div>

                                <!-- Article 4 -->
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="editorial-press-card">
                                        <span class="press-badge">Re-thinking The Future</span>
                                        <h4 class="press-headline">Sushobhit By Vanshika Agarwal Designs</h4>
                                        <a href="https://www.re-thinkingthefuture.com/residentail-interior-design/12047-sushobhit-by-vanshika-agarwal-designs/" target="_blank" class="press-read-link">Read Feature <i class="las la-external-link-alt"></i></a>
                                    </div>
                                </div>

                                <!-- Article 5 -->
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="editorial-press-card">
                                        <span class="press-badge">Archello</span>
                                        <h4 class="press-headline">Sushobhit by Vanshika Agarwal Designs | space yellow</h4>
                                        <a href="https://archello.com/project/sushobhit-by-vanshika-agarwal-designs" target="_blank" class="press-read-link">Read Feature <i class="las la-external-link-alt"></i></a>
                                    </div>
                                </div>

                                <!-- Article 6 -->
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="editorial-press-card">
                                        <span class="press-badge">Architect and Interiors India</span>
                                        <h4 class="press-headline">Journey Through Time As This 5400 Sq Ft Jaipur Home Bridges Heritage And Modernity</h4>
                                        <a href="https://www.architectandinteriorsindia.com/projects/journey-through-time-as-this-5400-sq-ft-jaipur-home-bridges-heritage-and-modernity" target="_blank" class="press-read-link">Read Feature <i class="las la-external-link-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <!-- Footer Area -->
                <?php include 'footer.php'; ?>

            </main>
        </div>
    </div>

    <!-- Floating Contact Widget -->
    <?php include 'floating-contact.php'; ?>

    <!-- jquery -->
    <script src="assets/js/jquery-3.6.0.min.js"></script>
    <!-- Bootstrap JS -->
    <script src="assets/js/bootstrap.min.js"></script>
    <!-- Pure Counter JS -->
    <script src="assets/js/pure-counter.js"></script>
    <!-- Owl Carousel JS -->
    <script src="assets/js/owl.carousel.min.js"></script>
    <!-- Slick Slider JS -->
    <script src="assets/js/slick.min.js"></script>
    <!-- Magnific Popup JS -->
    <script src="assets/js/magnific-popup.min.js"></script>
    <!-- Isotope JS -->
    <script src="assets/js/isotope-3.0.6-min.js"></script>
    <!-- Nice Select JS -->
    <script src="assets/js/jquery.nice-select.min.js"></script>
    <!-- Back To Top JS -->
    <script src="assets/js/backToTop.js"></script>
    <!-- Metis Menu JS -->
    <script src="assets/js/metismenu.js"></script>
    <!-- Progress Bar JS -->
    <script src="assets/js/jquery.barfiller.js"></script>
    <!-- Appear JS -->
    <script src="assets/js/jquery.appear.min.js"></script>
    <!-- Odometer JS -->
    <script src="assets/js/odometer.min.js"></script>
    <!-- GSAP Animation JS -->
    <script src="assets/js/gsap.min.js"></script>
    <script src="assets/js/gsap-scroll-to-plugin.js"></script>
    <script src="assets/js/SplitText.min.js"></script>
    <script src="assets/js/ScrollSmoother.min.js"></script>
    <script src="assets/js/ScrollTrigger.min.js"></script>
    <script src="assets/js/smoother-script.js"></script>
    <script src="assets/js/heading-animation.js"></script>
    <script src="assets/js/paragraph-animation.js"></script>
    <!-- Main JS -->
    <script src="assets/js/main.js?v=<?php echo time(); ?>"></script>
    <!-- Alternative Theme Custom JS Animations -->
    <script src="assets/js/alternative-interactions-wipe.js"></script>
    <!-- Floating Contact JS -->
    <script src="assets/js/floating-contact.js?v=<?php echo time(); ?>"></script>

</body>

</html>


