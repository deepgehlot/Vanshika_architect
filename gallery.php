<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">

    <title>Gallery - Architect Vanshika</title>

    <?php include 'head-includes.php'; ?>

</head>

<body class="light gallery-page">

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
            <div class="gallery-hero-section">
                <div class="container-fluid px-xxl-5 px-lg-4 px-md-3 px-2">
                    <div class="row justify-content-center text-center">
                        <div class="col-xxl-8 col-xl-8 col-lg-10 col-12">
                            <h1 class="gallery-hero-title">GALLERY</h1>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Gallery 3x2 Grid Section (6 Project Images) -->
            <div class="gallery-grid-section">
                <div class="container-fluid px-xxl-5 px-lg-4 px-md-3 px-2">
                    <div class="row g-4" id="galleryGrid">
                        
                        <!-- 1. Dinesh Goyal Project -->
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                            <div class="custom-gallery-item">
                                <a href="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal cover photo.webp" class="gallery-popup-link" title="An Eclectic Villa Jaipur">
                                    <div class="custom-gallery-img-wrap">
                                        <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/dinesh goyal cover photo.webp" alt="An Eclectic Villa Jaipur" class="custom-gallery-img" loading="lazy">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <!-- 2. Pratap Project -->
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                            <div class="custom-gallery-item">
                                <a href="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/pratap cover photo.webp" class="gallery-popup-link" title="A Classical Bungalow Jaipur">
                                    <div class="custom-gallery-img-wrap">
                                        <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/pratap cover photo.webp" alt="A Classical Bungalow Jaipur" class="custom-gallery-img" loading="lazy">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <!-- 3. Rajul Project -->
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                            <div class="custom-gallery-item">
                                <a href="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul cover photo.webp" class="gallery-popup-link" title="Penthouse In Jaipur">
                                    <div class="custom-gallery-img-wrap">
                                        <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/rajul cover photo.webp" alt="Penthouse In Jaipur" class="custom-gallery-img" loading="lazy">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <!-- 4. Anantara Project -->
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                            <div class="custom-gallery-item">
                                <a href="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ANANATARA cover photo.webp" class="gallery-popup-link" title="Anantara Jewel Bagh Hotel Jaipur">
                                    <div class="custom-gallery-img-wrap">
                                        <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ANANATARA cover photo.webp" alt="Anantara Jewel Bagh Hotel Jaipur" class="custom-gallery-img" loading="lazy">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <!-- 5. Ranthambore Resort -->
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                            <div class="custom-gallery-item">
                                <a href="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ranthambore cover photo.webp" class="gallery-popup-link" title="Ranthambore Resort">
                                    <div class="custom-gallery-img-wrap">
                                        <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/ranthambore cover photo.webp" alt="Ranthambore Resort" class="custom-gallery-img" loading="lazy">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <!-- 6. Khwaab Jaipur -->
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                            <div class="custom-gallery-item">
                                <a href="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/khwaab cover photo.webp" class="gallery-popup-link" title="Khwaab Roof Top Resto Bar">
                                    <div class="custom-gallery-img-wrap">
                                        <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/project photos/khwaab cover photo.webp" alt="Khwaab Roof Top Resto Bar" class="custom-gallery-img" loading="lazy">
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

    <?php
        $use_magnific = true;
        include 'scripts-includes.php';
    ?>
    <!-- Initialize Magnific Popup Gallery -->
    <script>
        $(document).ready(function() {
            $('#galleryGrid').magnificPopup({
                delegate: '.gallery-popup-link',
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><i class="las la-angle-%dir%"></i></button>',
                    tPrev: 'Previous',
                    tNext: 'Next',
                    preload: [0, 1],
                    tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
                },
                image: {
                    titleSrc: function(item) {
                        return item.el.attr('title') || '';
                    },
                    markup: '<div class="mfp-figure"><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>'
                },
                mainClass: 'mfp-fade',
                closeBtnInside: false,
                removalDelay: 160
            });
        });
    </script>
</body>

</html>
