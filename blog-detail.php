<?php
// Dynamic blog data lookup
$blogs = [
    1 => [
        'title' => 'The Future of Sustainable Homes',
        'category' => 'Architecture',
        'date' => 'Jan 24, 2025',
        'author' => 'Vanshika',
        'image' => 'assets/img/WEB/SERVICES ARCHITECTURE.webp',
        'content' => '
            <p class="mb-4">Sustainable architecture is no longer just a trend; it is a necessity.
                As we move forward, the integration of eco-friendly materials and energy-efficient
                designs is becoming the standard for modern homes. This shift is driven by a
                collective responsibility to reduce our carbon footprint and create healthier living
                environments.</p>

            <h3 class="mt-5 mb-4">Embracing Natural Materials</h3>
            <p class="mb-4">One of the key pillars of sustainable design is the use of natural,
                locally sourced materials. Wood, stone, and bamboo not only provide a warm, organic
                aesthetic but also have a lower environmental impact compared to synthetic
                alternatives. Incorporating these elements connects the home to its surroundings,
                blurring the lines between indoor and outdoor spaces.</p>

            <blockquote class="blockquote-custom my-5">
                <p class="mb-0">"True sustainability lies in the harmony between the
                    built environment and the natural world. It is about creating spaces that
                    breathe and evolve with time."</p>
            </blockquote>

            <h3 class="mt-5 mb-4">Energy Efficiency and Technology</h3>
            <p class="mb-4">Modern homes are smarter than ever. From solar panels to smart
                thermostats, technology plays a crucial role in minimizing energy consumption.
                Passive design strategies, such as optimizing natural light and ventilation, further
                reduce the need for artificial heating and cooling systems.</p>

            <div class="row my-5">
                <div class="col-md-6 mb-4 mb-md-0">
                    <img src="assets/img/WEB/SERVICES ARCHITECTURE.webp" alt="Inner Image" class="img-fluid w-100">
                </div>
                <div class="col-md-6">
                    <img src="assets/img/WEB/SERVICES STYLING.webp" alt="Inner Image" class="img-fluid w-100">
                </div>
            </div>

            <p>In conclusion, the future of sustainable homes is bright. By combining traditional
                wisdom with cutting-edge innovation, we can build homes that are not only beautiful
                but also resilient and responsible.</p>
        ',
        'prev_id' => 3,
        'next_id' => 2
    ],
    2 => [
        'title' => 'Minimalism in 2026',
        'category' => 'Interior',
        'date' => 'Jan 15, 2025',
        'author' => 'Vanshika',
        'image' => 'assets/img/WEB/SERVICES STYLING.webp',
        'content' => '
            <p class="mb-4">Minimalism has evolved. It is no longer about stark white walls and empty spaces, but rather about warm minimalism that combines functionality with comfort, texture, and organic materials.</p>

            <h3 class="mt-5 mb-4">Warm Textures & Earthy Tones</h3>
            <p class="mb-4">We are moving away from cold grey tones and embracing cream, beige, terracotta, and soft wood grains. This evolution creates spaces that feel uncluttered yet incredibly inviting and cozy.</p>

            <blockquote class="blockquote-custom my-5">
                <p class="mb-0">"Minimalism is not about having less. It is about making room for what matters most, surrounded by pieces that bring joy."</p>
            </blockquote>

            <h3 class="mt-5 mb-4">Form Follows Feeling</h3>
            <p class="mb-4">In 2026, minimalism prioritizes emotional well-being. Every furniture piece is selected not just for its aesthetic value, but for how it contributes to a serene, mindful atmosphere in the home.</p>

            <div class="row my-5">
                <div class="col-md-6 mb-4 mb-md-0">
                    <img src="assets/img/WEB/SERVICES ARCHITECTURE.webp" alt="Inner Image" class="img-fluid w-100">
                </div>
                <div class="col-md-6">
                    <img src="assets/img/WEB/HERITAGE LUXURY.webp" alt="Inner Image" class="img-fluid w-100">
                </div>
            </div>

            <p>Ultimately, warm minimalism allows us to declutter our physical environments to find peace in our mental spaces, creating a balanced modern home.</p>
        ',
        'prev_id' => 1,
        'next_id' => 3
    ],
    3 => [
        'title' => 'Lighting Design Essentials',
        'category' => 'Design',
        'date' => 'Dec 10, 2024',
        'author' => 'Vanshika',
        'image' => 'assets/img/WEB/HERITAGE LUXURY.webp',
        'content' => '
            <p class="mb-4">Lighting is the lifeblood of interior design. It has the power to transform a cold room into a warm haven, change the mood instantly, and define how we interact with space.</p>

            <h3 class="mt-5 mb-4">The Three Layers of Lighting</h3>
            <p class="mb-4">A well-designed room incorporates ambient, task, and accent lighting. Ambient lighting sets the overall mood, task lighting allows you to work or read, and accent lighting highlights art or architectural details.</p>

            <blockquote class="blockquote-custom my-5">
                <p class="mb-0">"Light does not just make things visible. It shapes how we feel, how we work, and how we experience the beauty of architecture."</p>
            </blockquote>

            <h3 class="mt-5 mb-4">Smart Integration and Warm Dimming</h3>
            <p class="mb-4">Modern lighting design embraces warm dimming technologies that mimic natural sunlight patterns, shifting from bright cool light in the afternoon to a warm golden glow in the evening.</p>

            <div class="row my-5">
                <div class="col-md-6 mb-4 mb-md-0">
                    <img src="assets/img/WEB/SERVICES STYLING.webp" alt="Inner Image" class="img-fluid w-100">
                </div>
                <div class="col-md-6">
                    <img src="assets/img/WEB/HERITAGE LUXURY.webp" alt="Inner Image" class="img-fluid w-100">
                </div>
            </div>

            <p>By thoughtful placement and layering of light sources, we create interior environments that are functionally versatile and aesthetically inspiring.</p>
        ',
        'prev_id' => 2,
        'next_id' => 1
    ]
];

// Fallback to blog 1 if no valid ID provided
$blog_id = isset($_GET['id']) ? intval($_GET['id']) : 1;
if (!array_key_exists($blog_id, $blogs)) {
    $blog_id = 1;
}

$current_blog = $blogs[$blog_id];
?>
<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">

    <title><?php echo $current_blog['title']; ?> - Architect Vanshika</title>

    <!-- Preconnect for Google Fonts & CDN -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!--Favicon-->
    <link rel="icon" href="assets/img/favicon.png" type="image/png">

    <!-- Bootstrap CSS -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <!-- Line Awesome CSS -->
    <link href="assets/css/line-awesome.min.css" rel="stylesheet">
    <!-- Font Awesome CSS -->
    <link href="assets/css/fontAwesomePro.css" rel="stylesheet">
    <!-- Bar Filler CSS -->
    <link href="assets/css/barfiller.css" rel="stylesheet">
    <!-- Magnific Popup Video -->
    <link href="assets/css/magnific-popup.css" rel="stylesheet">
    <!-- Flaticon CSS -->
    <link href="assets/css/flaticon.css" rel="stylesheet">
    <!-- Owl Carousel CSS -->
    <link href="assets/css/owl.carousel.css" rel="stylesheet">
    <!-- Slick Slider CSS -->
    <link href="assets/css/slick.css" rel="stylesheet">
    <!-- Nice Select  -->
    <link href="assets/css/nice-select.css" rel="stylesheet">
    <!-- Back to Top -->
    <link href="assets/css/backToTop.css" rel="stylesheet">
    <!-- Metis Menu -->
    <link href="assets/css/metismenu.css" rel="stylesheet">
    <!-- Odometer CSS -->
    <link href="assets/css/odometer.min.css" rel="stylesheet">
    <!-- Alternative Style CSS -->
    <link href="assets/css/alternative-style.css?v=1.3.2" rel="stylesheet">
    <!-- Style CSS -->
    <link href="assets/css/style.css?v=1.2.5" rel="stylesheet">
    <!-- Floating Contact Widget -->
    <link href="assets/css/floating-contact.css?v=1.2.3" rel="stylesheet">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">

    <style>
        /* ══════════════════════════════════════════════════════════════
           COMPREHENSIVE BLOG DETAIL RESPONSIVE SYSTEM
           Breakpoints: 1400px+, 1300px, 1200px, 1100px, 900px, 768px, Mobile
           ══════════════════════════════════════════════════════════════ */
        .blog-details-page {
            background-color: #ffffff;
            color: #171717;
        }

        /* Container Proportions */
        .blog-detail-container {
            width: 100%;
            margin: 0 auto;
        }

        @media (min-width: 1400px) {
            .blog-detail-container {
                max-width: 1240px !important;
                padding-left: 20px !important;
                padding-right: 20px !important;
            }
        }
        @media (min-width: 1300px) and (max-width: 1399px) {
            .blog-detail-container {
                max-width: 1180px !important;
                padding-left: 24px !important;
                padding-right: 24px !important;
            }
        }
        @media (min-width: 1200px) and (max-width: 1299px) {
            .blog-detail-container {
                max-width: 1100px !important;
                padding-left: 20px !important;
                padding-right: 20px !important;
            }
        }
        @media (min-width: 1100px) and (max-width: 1199px) {
            .blog-detail-container {
                max-width: 1020px !important;
                padding-left: 20px !important;
                padding-right: 20px !important;
            }
        }
        @media (min-width: 900px) and (max-width: 1099px) {
            .blog-detail-container {
                max-width: 100% !important;
                padding-left: 32px !important;
                padding-right: 32px !important;
            }
        }
        @media (min-width: 768px) and (max-width: 899px) {
            .blog-detail-container {
                max-width: 100% !important;
                padding-left: 24px !important;
                padding-right: 24px !important;
            }
        }
        @media (max-width: 767px) {
            .blog-detail-container {
                max-width: 100% !important;
                padding-left: 16px !important;
                padding-right: 16px !important;
            }
        }

        /* Hero Section Spacing */
        body.blog-details-page .blog-hero-section {
            background-color: #faf9f6 !important;
        }

        @media (min-width: 1400px) {
            body.blog-details-page .blog-hero-section {
                padding-top: 175px !important;
                padding-bottom: 45px !important;
            }
        }
        @media (min-width: 1200px) and (max-width: 1399px) {
            body.blog-details-page .blog-hero-section {
                padding-top: 160px !important;
                padding-bottom: 40px !important;
            }
        }
        @media (min-width: 900px) and (max-width: 1199px) {
            body.blog-details-page .blog-hero-section {
                padding-top: 140px !important;
                padding-bottom: 35px !important;
            }
        }
        @media (min-width: 768px) and (max-width: 899px) {
            body.blog-details-page .blog-hero-section {
                padding-top: 130px !important;
                padding-bottom: 30px !important;
            }
        }
        @media (max-width: 767px) {
            body.blog-details-page .blog-hero-section {
                padding-top: 115px !important;
                padding-bottom: 25px !important;
            }
        }

        /* Hero Title Typography across All Screen Sizes */
        .blog-hero-section h1,
        .blog-hero-section h1.blog-detail-heading {
            font-family: 'Futura PT', sans-serif !important;
            font-weight: 400 !important;
            color: #c29a6c !important;
            letter-spacing: -0.5px !important;
            word-break: break-word !important;
        }

        @media (min-width: 1400px) {
            .blog-hero-section h1,
            .blog-hero-section h1.blog-detail-heading {
                font-size: 50px !important;
                line-height: 1.16 !important;
                margin-bottom: 20px !important;
            }
        }
        @media (min-width: 1300px) and (max-width: 1399px) {
            .blog-hero-section h1,
            .blog-hero-section h1.blog-detail-heading {
                font-size: 45px !important;
                line-height: 1.18 !important;
                margin-bottom: 18px !important;
            }
        }
        @media (min-width: 1200px) and (max-width: 1299px) {
            .blog-hero-section h1,
            .blog-hero-section h1.blog-detail-heading {
                font-size: 41px !important;
                line-height: 1.2 !important;
                margin-bottom: 16px !important;
            }
        }
        @media (min-width: 1100px) and (max-width: 1199px) {
            .blog-hero-section h1,
            .blog-hero-section h1.blog-detail-heading {
                font-size: 37px !important;
                line-height: 1.22 !important;
                margin-bottom: 16px !important;
            }
        }
        @media (min-width: 900px) and (max-width: 1099px) {
            .blog-hero-section h1,
            .blog-hero-section h1.blog-detail-heading {
                font-size: 33px !important;
                line-height: 1.25 !important;
                margin-bottom: 15px !important;
            }
        }
        @media (min-width: 768px) and (max-width: 899px) {
            .blog-hero-section h1,
            .blog-hero-section h1.blog-detail-heading {
                font-size: 29px !important;
                line-height: 1.26 !important;
                margin-bottom: 14px !important;
            }
        }
        @media (max-width: 767px) {
            .blog-hero-section h1,
            .blog-hero-section h1.blog-detail-heading {
                font-size: 24px !important;
                line-height: 1.28 !important;
                letter-spacing: 0px !important;
                margin-bottom: 12px !important;
            }
        }

        /* Category & Meta */
        .blog-hero-section .text-gold {
            font-size: 13px !important;
            letter-spacing: 2px !important;
            font-weight: 600 !important;
        }
        .blog-meta span {
            color: #767676;
            font-size: 13.5px;
            font-weight: 500;
        }
        .blog-meta span i {
            color: #c29a6c;
        }
        @media (max-width: 767px) {
            .blog-hero-section .text-gold {
                font-size: 12px !important;
                letter-spacing: 1.5px !important;
                margin-bottom: 8px !important;
            }
            .blog-meta span {
                font-size: 12px !important;
            }
        }

        /* Featured Image Proportions across All Screens */
        .blog-featured-img {
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.05);
            width: 100%;
        }
        .blog-featured-img img {
            width: 100%;
            height: 100%;
            object-fit: cover !important;
            display: block;
            transform: none !important;
            transition: none !important;
        }
        .blog-featured-img:hover img {
            transform: none !important;
            transition: none !important;
        }

        @media (min-width: 1400px) {
            .blog-featured-img {
                height: 520px;
                max-height: 520px;
            }
        }
        @media (min-width: 1200px) and (max-width: 1399px) {
            .blog-featured-img {
                height: 460px;
                max-height: 460px;
            }
        }
        @media (min-width: 1100px) and (max-width: 1199px) {
            .blog-featured-img {
                height: 420px;
                max-height: 420px;
            }
        }
        @media (min-width: 900px) and (max-width: 1099px) {
            .blog-featured-img {
                height: 380px;
                max-height: 380px;
                border-radius: 6px;
            }
        }
        @media (min-width: 768px) and (max-width: 899px) {
            .blog-featured-img {
                height: 320px;
                max-height: 320px;
                border-radius: 6px;
            }
        }
        @media (max-width: 767px) {
            .blog-featured-img {
                height: 220px;
                max-height: 220px;
                border-radius: 4px;
            }
        }

        /* Content Wrapper & Reading Column Proportions */
        .blog-detail-section {
            padding-top: 40px !important;
            padding-bottom: 60px !important;
        }
        @media (max-width: 767px) {
            .blog-detail-section {
                padding-top: 25px !important;
                padding-bottom: 45px !important;
            }
        }

        .blog-content-wrapper {
            width: 100%;
            margin: 0 auto;
        }
        @media (min-width: 1400px) {
            .blog-content-wrapper {
                max-width: 980px;
            }
        }
        @media (min-width: 1200px) and (max-width: 1399px) {
            .blog-content-wrapper {
                max-width: 920px;
            }
        }
        @media (min-width: 900px) and (max-width: 1199px) {
            .blog-content-wrapper {
                max-width: 860px;
            }
        }

        /* Body Paragraphs */
        .blog-content-text {
            color: #3e3e3e !important;
            font-weight: 400;
        }
        .blog-content-text p {
            margin-bottom: 24px;
        }

        @media (min-width: 1300px) {
            .blog-content-text {
                font-size: 17.5px;
                line-height: 1.88;
            }
        }
        @media (min-width: 1100px) and (max-width: 1299px) {
            .blog-content-text {
                font-size: 17px;
                line-height: 1.85;
            }
        }
        @media (min-width: 900px) and (max-width: 1099px) {
            .blog-content-text {
                font-size: 16.5px;
                line-height: 1.8;
            }
        }
        @media (min-width: 768px) and (max-width: 899px) {
            .blog-content-text {
                font-size: 16px;
                line-height: 1.76;
            }
            .blog-content-text p {
                margin-bottom: 20px;
            }
        }
        @media (max-width: 767px) {
            .blog-content-text {
                font-size: 15px;
                line-height: 1.7;
            }
            .blog-content-text p {
                margin-bottom: 18px;
            }
        }

        /* Subheadings (H3) inside Content */
        .blog-content-text h3 {
            font-family: 'Futura PT', sans-serif !important;
            font-weight: 500 !important;
            color: #c29a6c !important;
            line-height: 1.35;
        }

        @media (min-width: 1400px) {
            .blog-content-text h3 {
                font-size: 28px;
                margin-top: 48px;
                margin-bottom: 22px;
            }
        }
        @media (min-width: 1200px) and (max-width: 1399px) {
            .blog-content-text h3 {
                font-size: 26px;
                margin-top: 44px;
                margin-bottom: 20px;
            }
        }
        @media (min-width: 900px) and (max-width: 1199px) {
            .blog-content-text h3 {
                font-size: 23px;
                margin-top: 38px;
                margin-bottom: 18px;
            }
        }
        @media (min-width: 768px) and (max-width: 899px) {
            .blog-content-text h3 {
                font-size: 21px;
                margin-top: 34px;
                margin-bottom: 16px;
            }
        }
        @media (max-width: 767px) {
            .blog-content-text h3 {
                font-size: 19px;
                margin-top: 28px;
                margin-bottom: 14px;
            }
        }

        /* Blockquote Styling */
        .blockquote-custom {
            border-left: 3px solid #c29a6c;
            position: relative;
        }
        .blockquote-custom p {
            font-family: 'Futura PT', sans-serif !important;
            font-style: italic;
            color: #171717 !important;
            font-weight: 500;
            margin-bottom: 0;
        }

        @media (min-width: 1400px) {
            .blockquote-custom {
                padding-left: 38px;
                margin: 48px 0;
            }
            .blockquote-custom p {
                font-size: 22px !important;
                line-height: 1.6 !important;
            }
        }
        @media (min-width: 1200px) and (max-width: 1399px) {
            .blockquote-custom {
                padding-left: 32px;
                margin: 42px 0;
            }
            .blockquote-custom p {
                font-size: 20px !important;
                line-height: 1.6 !important;
            }
        }
        @media (min-width: 900px) and (max-width: 1199px) {
            .blockquote-custom {
                padding-left: 26px;
                margin: 36px 0;
            }
            .blockquote-custom p {
                font-size: 18.5px !important;
                line-height: 1.55 !important;
            }
        }
        @media (min-width: 768px) and (max-width: 899px) {
            .blockquote-custom {
                padding-left: 22px;
                margin: 30px 0;
            }
            .blockquote-custom p {
                font-size: 17.5px !important;
                line-height: 1.55 !important;
            }
        }
        @media (max-width: 767px) {
            .blockquote-custom {
                padding-left: 16px;
                margin: 24px 0;
            }
            .blockquote-custom p {
                font-size: 16px !important;
                line-height: 1.5 !important;
            }
        }

        /* In-Content Image Grid */
        .blog-content-text .row img {
            border-radius: 6px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
            width: 100% !important;
            object-fit: cover !important;
            display: block;
            transition: none !important;
            transform: none !important;
        }

        @media (min-width: 1400px) {
            .blog-content-text .row img {
                height: 310px !important;
            }
        }
        @media (min-width: 1200px) and (max-width: 1399px) {
            .blog-content-text .row img {
                height: 275px !important;
            }
        }
        @media (min-width: 900px) and (max-width: 1199px) {
            .blog-content-text .row img {
                height: 240px !important;
            }
        }
        @media (min-width: 768px) and (max-width: 899px) {
            .blog-content-text .row img {
                height: 210px !important;
            }
        }
        @media (max-width: 767px) {
            .blog-content-text .row img {
                height: 190px !important;
                border-radius: 4px;
            }
        }

        /* Post Navigation */
        .blog-navigation {
            border-top: 1px solid rgba(194, 154, 108, 0.25) !important;
        }

        .blog-navigation a {
            font-family: 'Futura PT', sans-serif !important;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #171717 !important;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            transition: none !important;
        }

        @media (min-width: 1200px) {
            .blog-navigation {
                margin-top: 55px;
                padding-top: 35px;
            }
            .blog-navigation a {
                font-size: 14px;
            }
            .blog-navigation a i {
                font-size: 18px;
            }
        }
        @media (min-width: 900px) and (max-width: 1199px) {
            .blog-navigation {
                margin-top: 45px;
                padding-top: 30px;
            }
            .blog-navigation a {
                font-size: 13.5px;
            }
            .blog-navigation a i {
                font-size: 16px;
            }
        }
        @media (max-width: 899px) {
            .blog-navigation {
                margin-top: 35px;
                padding-top: 25px;
            }
            .blog-navigation a {
                font-size: 12px;
                letter-spacing: 0.5px;
            }
            .blog-navigation a i {
                font-size: 14px;
            }
        }

        .blog-navigation .nav-prev:hover,
        .blog-navigation .nav-next:hover {
            color: #c29a6c !important;
        }

        /* Zero motion / static content enforcement */
        .blog-details-page .blog-hero-section *,
        .blog-details-page .blog-detail-section * {
            animation: none !important;
            transition: none !important;
        }
    </style>

</head>

<body class="light blog-details-page">

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

            <!-- Blog Detail Hero Section -->
            <div class="blog-hero-section section-padding pb-0">
                <div class="container blog-detail-container">
                    <div class="row">
                        <div class="col-12 text-start">
                            <span class="text-gold text-uppercase letter-spacing-2 mb-3 d-block"><?php echo $current_blog['category']; ?></span>
                            <h1 class="blog-detail-heading text-uppercase mb-4"><?php echo $current_blog['title']; ?></h1>
                            <div class="blog-meta">
                                <span class="me-4"><i class="las la-calendar me-2"></i> <?php echo $current_blog['date']; ?></span>
                                <span><i class="las la-user me-2"></i> By <?php echo $current_blog['author']; ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Blog Detail Content -->
            <div class="blog-detail-section section-padding">
                <div class="container blog-detail-container">
                    <div class="row">
                        <div class="col-12">
                            <div class="blog-featured-img mb-4 mb-md-5">
                                <img src="<?php echo $current_blog['image']; ?>" alt="<?php echo $current_blog['title']; ?>" class="img-fluid w-100">
                            </div>

                            <div class="blog-content-wrapper">
                                <div class="blog-content-text">
                                    <?php echo $current_blog['content']; ?>
                                </div>

                                <div class="blog-navigation">
                                    <div class="row">
                                        <div class="col-6">
                                            <a href="blog-detail.php?id=<?php echo $current_blog['prev_id']; ?>" class="nav-prev"><i class="las la-arrow-left me-2"></i>
                                                Previous Post</a>
                                        </div>
                                        <div class="col-6 text-end">
                                            <a href="blog-detail.php?id=<?php echo $current_blog['next_id']; ?>" class="nav-next">Next Post <i
                                                    class="las la-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Area -->
            <?php include 'footer.php'; ?>

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
    <!-- Main JS -->
    <script src="assets/js/main.js"></script>
    <!-- Floating Contact JS -->
    <script src="assets/js/floating-contact.js?v=1.2.0"></script>

</body>

</html>


