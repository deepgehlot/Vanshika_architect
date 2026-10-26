<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">

    <title>Gallery - Architect Vanshika</title>

    <!--Favicon-->
    <link rel="icon" href="assets/img/favicon.png" type="image/png">

    <!-- Bootstrap CSS -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <!-- Line Awesome CSS -->
    <link href="assets/css/line-awesome.min.css" rel="stylesheet">
    <!-- Font Awesome CSS -->
    <link href="assets/css/fontAwesomePro.css" rel="stylesheet">
    <!-- Magnific Popup Video / Images -->
    <link href="assets/css/magnific-popup.css" rel="stylesheet">
    <!-- Back to Top -->
    <link href="assets/css/backToTop.css" rel="stylesheet">
    <!-- Metis Menu -->
    <link href="assets/css/metismenu.css" rel="stylesheet">
    <!-- Style CSS -->
    <link href="assets/css/style.css?v=1.2.3" rel="stylesheet">
    <!-- Floating Contact Widget -->    
    <link href="assets/css/floating-contact.css?v=1.2.3" rel="stylesheet">
    <!-- Alternative Custom Style Override -->
    <link href="assets/css/alternative-style.css?v=1.2.6" rel="stylesheet">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">

</head>

<body class="light gallery-page">

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
    <script>
        // Failsafe: Ensure loader always dismisses swiftly on Gallery page
        (function() {
            var dismiss = function() {
                var l = document.getElementById('loader');
                if (l && l.style.display !== 'none') {
                    l.style.transition = 'opacity 0.4s ease';
                    l.style.opacity = '0';
                    setTimeout(function() { l.style.display = 'none'; }, 400);
                    document.body.classList.add('preloader-done');
                    var h = document.querySelector('.header-area');
                    if (h) h.classList.add('nav-elements-active');
                }
            };
            if (document.readyState === 'complete') {
                setTimeout(dismiss, 300);
            } else {
                window.addEventListener('load', function() { setTimeout(dismiss, 200); });
                setTimeout(dismiss, 900); // 900ms absolute fallback
            }
        })();
    </script>

    <?php include 'header.php'; ?>

    <div id="smooth-wrapper">

        <div id="smooth-content">

            <!-- Gallery Hero Section (Clean H1 Heading, No Filters) -->
            <div class="gallery-hero-section pt-150 pb-2">
                <div class="container-fluid px-md-5 px-3">
                    <div class="row justify-content-center text-center">
                        <div class="col-xl-8">
                            <h1 class="gallery-hero-title">GALLERY</h1>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Gallery 3x2 Grid Section (6 Project Images) -->
            <div class="gallery-grid-section">
                <div class="container-fluid px-lg-5 px-md-4 px-3" style="max-width: 1400px; margin: 0 auto;">
                    <div class="row g-4" id="galleryGrid">
                        
                        <!-- 1. Dinesh Goyal Project -->
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="custom-gallery-item">
                                <a href="assets/img/project photos/dinesh goyal cover photo.webp" class="gallery-popup-link" title="Dinesh Goyal Project">
                                    <div class="custom-gallery-img-wrap">
                                        <img src="assets/img/project photos/dinesh goyal cover photo.webp" alt="Dinesh Goyal Project" class="custom-gallery-img" loading="lazy">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <!-- 2. Pratap Project -->
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="custom-gallery-item">
                                <a href="assets/img/project photos/pratap cover photo.webp" class="gallery-popup-link" title="Pratap Project">
                                    <div class="custom-gallery-img-wrap">
                                        <img src="assets/img/project photos/pratap cover photo.webp" alt="Pratap Project" class="custom-gallery-img" loading="lazy">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <!-- 3. Rajul Project -->
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="custom-gallery-item">
                                <a href="assets/img/project photos/rajul cover photo.webp" class="gallery-popup-link" title="Rajul Project">
                                    <div class="custom-gallery-img-wrap">
                                        <img src="assets/img/project photos/rajul cover photo.webp" alt="Rajul Project" class="custom-gallery-img" loading="lazy">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <!-- 4. Anantara Project -->
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="custom-gallery-item">
                                <a href="assets/img/project photos/ANANATARA cover photo.webp" class="gallery-popup-link" title="Anantara Project">
                                    <div class="custom-gallery-img-wrap">
                                        <img src="assets/img/project photos/ANANATARA cover photo.webp" alt="Anantara Project" class="custom-gallery-img" loading="lazy">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <!-- 5. Ranthambore Resort -->
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="custom-gallery-item">
                                <a href="assets/img/project photos/ranthambore cover photo.webp" class="gallery-popup-link" title="Ranthambore Resort">
                                    <div class="custom-gallery-img-wrap">
                                        <img src="assets/img/project photos/ranthambore cover photo.webp" alt="Ranthambore Resort" class="custom-gallery-img" loading="lazy">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <!-- 6. Khwaab Jaipur -->
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="custom-gallery-item">
                                <a href="assets/img/project photos/khwaab cover photo.webp" class="gallery-popup-link" title="Khwaab Jaipur">
                                    <div class="custom-gallery-img-wrap">
                                        <img src="assets/img/project photos/khwaab cover photo.webp" alt="Khwaab Jaipur" class="custom-gallery-img" loading="lazy">
                                    </div>
                                </a>
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
    <script src="assets/js/ScrollTrigger.min.js"></script>
    <script src="assets/js/smoother-script.js?v=1.2.0"></script>
    <!-- Main JS -->
    <script src="assets/js/main.js?v=1.2.0"></script>
    <!-- Alternative Theme Custom JS Animations -->
    <script src="assets/js/alternative-interactions-wipe.js"></script>
    <!-- Floating Contact JS -->
    <script src="assets/js/floating-contact.js?v=1.2.0"></script>

    <!-- Initialize Magnific Popup Gallery -->
    <script>
        $(document).ready(function() {
            $('#galleryGrid').magnificPopup({
                delegate: '.gallery-popup-link',
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                    tPrev: 'Previous',
                    tNext: 'Next',
                    tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
                },
                image: {
                    titleSrc: function(item) {
                        return item.el.attr('title') || '';
                    },
                    markup: '<div class="mfp-figure"><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>'
                },
                closeBtnInside: false,
                removalDelay: 0
            });
        });
    </script>

</body>

</html>
