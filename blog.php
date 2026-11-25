<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">

    <title>Blog - Architect Vanshika</title>

    <?php include 'head-includes.php'; ?>

</head>

<body class="light blog-page">

    <!-- Pre-Loader -->
    <div id="loader">
        <div class="loader-content">
            <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/logo/Short_logo.png" alt="Loader Logo" class="loader-logo">
            <div class="loading-bar-container">
                <div class="loading-bar"></div>
                <span class="loading-text">0%</span>
            </div>
        </div>
    </div>

    <?php include 'header.php'; ?>

    <div id="smooth-wrapper">

        <div id="smooth-content">

            <!-- Blog Hero Section -->
            <div class="blog-hero-section pb-2 pt-150">
                <div class="container-fluid px-md-5 px-3">
                    <div class="row justify-content-center text-center">
                        <div class="col-xl-8 blog-hero-content">
                            <h1 class="display-3 text-uppercase mb-4 mt-4">Inside the Studio</h1>
                            <p class="mb-0 text-muted">A curated look at the spaces where ideas take shape and
                                creativity flourishes.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Blog Grid Section -->
            <div class="blog-section pb-5 mb-5 mt-2">
                <div class="container-fluid px-md-5 px-3">
                    <div class="row blog-grid">

                        <!-- Blog Post 1 -->
                        <div class="col-lg-4 col-md-6 gsap-blog-anim">
                            <div class="blog-card-unique">
                                <div class="blog-img">
                                    <a href="blog-detail.php?id=1">
                                        <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/WEB/SERVICES ARCHITECTURE.webp"
                                            alt="Blog Post" class="img-fluid w-100">
                                    </a>
                                    <div class="blog-date">
                                        <span>24</span>
                                        <span>Jan</span>
                                    </div>
                                </div>
                                <div class="blog-content">
                                    <span class="blog-category-tag">Architecture</span>
                                    <h3><a href="blog-detail.php?id=1">The Future of Sustainable Homes</a></h3>
                                    <p>Exploring eco-friendly materials and design principles that define modern living.
                                    </p>
                                    <a href="blog-detail.php?id=1" class="read-more-btn">Read More <i
                                            class="las la-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <!-- Blog Post 2 -->
                        <div class="col-lg-4 col-md-6 gsap-blog-anim">
                            <div class="blog-card-unique">
                                <div class="blog-img">
                                    <a href="blog-detail.php?id=2">
                                        <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/WEB/SERVICES STYLING.webp"
                                            alt="Blog Post" class="img-fluid w-100">
                                    </a>
                                    <div class="blog-date">
                                        <span>15</span>
                                        <span>Jan</span>
                                    </div>
                                </div>
                                <div class="blog-content">
                                    <span class="blog-category-tag">Interior</span>
                                    <h3><a href="blog-detail.php?id=2">Minimalism in 2026</a></h3>
                                    <p>How the minimalist movement is evolving with warmer tones and textures.</p>
                                    <a href="blog-detail.php?id=2" class="read-more-btn">Read More <i
                                            class="las la-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <!-- Blog Post 3 -->
                        <div class="col-lg-4 col-md-6 gsap-blog-anim">
                            <div class="blog-card-unique">
                                <div class="blog-img">
                                    <a href="blog-detail.php?id=3">
                                        <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/WEB/HERITAGE LUXURY.webp"
                                            alt="Blog Post" class="img-fluid w-100">
                                    </a>
                                    <div class="blog-date">
                                        <span>10</span>
                                        <span>Dec</span>
                                    </div>
                                </div>
                                <div class="blog-content">
                                    <span class="blog-category-tag">Design</span>
                                    <h3><a href="blog-detail.php?id=3">Lighting Design Essentials</a></h3>
                                    <p>Why good lighting is the most crucial element of any interior space.</p>
                                    <a href="blog-detail.php?id=3" class="read-more-btn">Read More <i
                                            class="las la-arrow-right"></i></a>
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

    <?php include 'scripts-includes.php'; ?>

</body>

</html>
