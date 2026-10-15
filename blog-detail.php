<?php
// Dynamic blog data lookup
$blogs = [
    1 => [
        'title' => 'The Future of Sustainable Homes',
        'category' => 'Architecture',
        'date' => 'Jan 24, 2025',
        'author' => 'Vanshika',
        'image' => 'assets/img/blog/blog-1.jpg',
        'content' => '
            <p class="mb-4">Sustainable architecture is no longer just a trend; it is a necessity.
                As we move forward, the integration of eco-friendly materials and energy-efficient
                designs is becoming the standard for modern homes. This shift is driven by a
                collective responsibility to reduce our carbon footprint and create healthier living
                environments.</p>

            <h3 class="text-dark mt-5 mb-4">Embracing Natural Materials</h3>
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

            <h3 class="text-dark mt-5 mb-4">Energy Efficiency and Technology</h3>
            <p class="mb-4">Modern homes are smarter than ever. From solar panels to smart
                thermostats, technology plays a crucial role in minimizing energy consumption.
                Passive design strategies, such as optimizing natural light and ventilation, further
                reduce the need for artificial heating and cooling systems.</p>

            <div class="row my-5">
                <div class="col-md-6 mb-4 mb-md-0">
                    <img src="assets/img/blog/blog-2.jpg" alt="Inner Image" class="img-fluid w-100">
                </div>
                <div class="col-md-6">
                    <img src="assets/img/blog/blog-3.jpg" alt="Inner Image" class="img-fluid w-100">
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
        'image' => 'assets/img/blog/blog-2.jpg',
        'content' => '
            <p class="mb-4">Minimalism has evolved. It is no longer about stark white walls and empty spaces, but rather about warm minimalism that combines functionality with comfort, texture, and organic materials.</p>

            <h3 class="text-dark mt-5 mb-4">Warm Textures & Earthy Tones</h3>
            <p class="mb-4">We are moving away from cold grey tones and embracing cream, beige, terracotta, and soft wood grains. This evolution creates spaces that feel uncluttered yet incredibly inviting and cozy.</p>

            <blockquote class="blockquote-custom my-5">
                <p class="mb-0">"Minimalism is not about having less. It is about making room for what matters most, surrounded by pieces that bring joy."</p>
            </blockquote>

            <h3 class="text-dark mt-5 mb-4">Form Follows Feeling</h3>
            <p class="mb-4">In 2026, minimalism prioritizes emotional well-being. Every furniture piece is selected not just for its aesthetic value, but for how it contributes to a serene, mindful atmosphere in the home.</p>

            <div class="row my-5">
                <div class="col-md-6 mb-4 mb-md-0">
                    <img src="assets/img/blog/blog-1.jpg" alt="Inner Image" class="img-fluid w-100">
                </div>
                <div class="col-md-6">
                    <img src="assets/img/blog/blog-3.jpg" alt="Inner Image" class="img-fluid w-100">
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
        'image' => 'assets/img/blog/blog-3.jpg',
        'content' => '
            <p class="mb-4">Lighting is the lifeblood of interior design. It has the power to transform a cold room into a warm haven, change the mood instantly, and define how we interact with space.</p>

            <h3 class="text-dark mt-5 mb-4">The Three Layers of Lighting</h3>
            <p class="mb-4">A well-designed room incorporates ambient, task, and accent lighting. Ambient lighting sets the overall mood, task lighting allows you to work or read, and accent lighting highlights art or architectural details.</p>

            <blockquote class="blockquote-custom my-5">
                <p class="mb-0">"Light does not just make things visible. It shapes how we feel, how we work, and how we experience the beauty of architecture."</p>
            </blockquote>

            <h3 class="text-dark mt-5 mb-4">Smart Integration and Warm Dimming</h3>
            <p class="mb-4">Modern lighting design embraces warm dimming technologies that mimic natural sunlight patterns, shifting from bright cool light in the afternoon to a warm golden glow in the evening.</p>

            <div class="row my-5">
                <div class="col-md-6 mb-4 mb-md-0">
                    <img src="assets/img/blog/blog-1.jpg" alt="Inner Image" class="img-fluid w-100">
                </div>
                <div class="col-md-6">
                    <img src="assets/img/blog/blog-2.jpg" alt="Inner Image" class="img-fluid w-100">
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
    <link href="assets/css/alternative-style.css?v=<?php echo time(); ?>" rel="stylesheet">
    <!-- Style CSS -->
    <link href="assets/css/style.css" rel="stylesheet">
    <!-- Floating Contact Widget -->
    <link href="assets/css/floating-contact.css?v=<?php echo time(); ?>" rel="stylesheet">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">

    <style>
        /* Blog Detail Spacing & Logo Overlap Fix */
        body.blog-details-page .blog-hero-section {
            padding-top: 150px !important;
            padding-bottom: 50px !important;
            background-color: #faf9f6;
        }
        @media (max-width: 991.98px) {
            body.blog-details-page .blog-hero-section {
                padding-top: 110px !important;
                padding-bottom: 30px !important;
            }
        }

        /* Typography & Layout adjustments */
        .blog-details-page {
            background-color: #ffffff;
            color: #171717;
        }

        .blog-hero-section h1 {
            font-family: 'Futura PT', sans-serif;
            font-weight: 300 !important;
            color: #171717 !important;
            line-height: 1.25;
            letter-spacing: -0.5px;
        }

        .blog-meta span {
            color: #767676;
            font-size: 13px;
            font-weight: 500;
        }

        .blog-meta span i {
            color: #c29a6c;
        }

        .blog-featured-img {
            border-radius: 4px;
            overflow: hidden;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.04);
            max-height: 520px;
            width: 100%;
        }

        .blog-featured-img img {
            width: 100%;
            height: 100%;
            object-fit: cover !important;
            transition: transform 0.8s ease;
        }

        .blog-featured-img:hover img {
            transform: scale(1.02);
        }

        .blog-content-text {
            color: #3e3e3e !important;
            font-size: 17px;
            line-height: 1.85;
            font-weight: 400;
        }

        .blog-content-text p {
            margin-bottom: 25px;
        }

        .blog-content-text h3 {
            font-family: 'Futura PT', sans-serif;
            font-weight: 500 !important;
            color: #171717 !important;
            margin-top: 45px;
            margin-bottom: 20px;
            font-size: 24px;
            line-height: 1.35;
        }

        /* Premium Quote Box */
        .blockquote-custom {
            border-left: 3px solid #c29a6c;
            padding-left: 35px;
            margin: 45px 0;
            position: relative;
        }

        .blockquote-custom p {
            font-family: 'Cinzel', serif;
            font-style: italic;
            font-size: 21px !important;
            line-height: 1.6;
            color: #171717 !important;
            font-weight: 500;
            margin-bottom: 0;
        }

        /* Post Navigation style */
        .blog-navigation {
            border-top: 1px solid rgba(194, 154, 108, 0.2) !important;
            margin-top: 60px;
            padding-top: 40px;
        }

        .blog-navigation a {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #171717 !important;
            transition: color 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
        }

        .blog-navigation a i {
            font-size: 18px;
            transition: transform 0.3s ease;
        }

        .blog-navigation .nav-prev:hover {
            color: #c29a6c !important;
        }

        .blog-navigation .nav-prev:hover i {
            transform: translateX(-4px);
        }

        .blog-navigation .nav-next:hover {
            color: #c29a6c !important;
        }

        .blog-navigation .nav-next:hover i {
            transform: translateX(4px);
        }

        /* Responsive image grid in blog content */
        .blog-content-text img {
            border-radius: 4px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
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
                <div class="container-fluid px-md-5 px-3">
                    <div class="row">
                        <div class="col-12 text-start">
                            <span class="text-gold text-uppercase letter-spacing-2 mb-3 d-block"><?php echo $current_blog['category']; ?></span>
                            <h1 class="display-3 text-dark mb-4"><?php echo $current_blog['title']; ?></h1>
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
                <div class="container-fluid px-md-5 px-3">
                    <div class="row">
                        <div class="col-12">
                            <div class="blog-featured-img mb-5">
                                <img src="<?php echo $current_blog['image']; ?>" alt="<?php echo $current_blog['title']; ?>" class="img-fluid w-100">
                            </div>

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
    <script src="assets/js/heading-animation.js"></script>
    <script src="assets/js/paragraph-animation.js"></script>
    <!-- Main JS -->
    <script src="assets/js/main.js"></script>

    <!-- Custom GSAP Blog Detail Animations -->
    <script>
        window.addEventListener("load", function() {
            if (typeof gsap !== 'undefined') {
                // Register ScrollTrigger
                gsap.registerPlugin(ScrollTrigger);

                // Fade Up Hero Text, category tag, and meta line on load
                gsap.from(".blog-hero-section span, .blog-hero-section h1, .blog-hero-section .blog-meta", {
                    opacity: 0,
                    y: 60,
                    duration: 1.4,
                    stagger: 0.15,
                    ease: "power3.out"
                });

                // Main Image elegant parallax scroll effect (no clip-path)
                gsap.fromTo(".blog-featured-img img", {
                    scale: 1.15
                }, {
                    scale: 1.0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".blog-featured-img",
                        start: "top 95%",
                        end: "bottom 15%",
                        scrub: true
                    }
                });

                // Left image slides in from left, right image slides in from right (re-triggers on scroll)
                if (document.querySelector(".blog-content-text .row")) {
                    gsap.from(".blog-content-text .row .col-md-6:first-child", {
                        opacity: 0,
                        x: -120,
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".blog-content-text .row",
                            start: "top 85%",
                            toggleActions: "play reverse play reverse"
                        }
                    });
                    gsap.from(".blog-content-text .row .col-md-6:last-child", {
                        opacity: 0,
                        x: 120,
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".blog-content-text .row",
                            start: "top 85%",
                            toggleActions: "play reverse play reverse"
                        }
                    });
                }

                // General content paragraphs, headings, and quotes fade-up (re-triggers on scroll)
                gsap.utils.toArray(".blog-content-text > p, .blog-content-text > h3, .blog-content-text > blockquote").forEach(function(element) {
                    gsap.from(element, {
                        opacity: 0,
                        y: 40,
                        duration: 1.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 90%",
                            toggleActions: "play reverse play reverse"
                        }
                    });
                });
            }
        });
    </script>
    <!-- Floating Contact JS -->
    <script src="assets/js/floating-contact.js?v=<?php echo time(); ?>"></script>

</body>

</html>


