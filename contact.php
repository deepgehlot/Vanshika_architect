<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">

    <title>Contact Us - Architect Vanshika</title>
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
    <!-- Style CSS -->
    <link href="assets/css/style.css?v=1.2.3" rel="stylesheet">
    <!-- Alternative Custom Style Override -->
    <link href="assets/css/alternative-style.css?v=1.2.6" rel="stylesheet">
    <!-- Floating Contact Widget -->
    <link href="assets/css/floating-contact.css?v=1.2.3" rel="stylesheet">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
</head>

<body class="light contact-page">

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
        // Failsafe: Ensure loader always dismisses swiftly on Contact page
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

            <!-- CONTACT PAGE CONTENT STARTS HERE -->

            <!-- Contact Form Section -->
            <div class="contact-form-section section-padding pt-150 pb-0" style="margin-top: 60px;">
                <div class="container-fluid px-md-5 px-3">
                    <div class="row">
                        <div class="col-lg-6 d-flex justify-content-center justify-content-lg-center align-items-start">
                            <div class="contact-title-wrapper" style="max-width: 480px; width: 100%;">
                                <span class="small-title">INSPIRE</span>
                                <h1 class="display-3 text-uppercase mt-2 mb-4" style="line-height: 1.12; color: #c29a6c; font-family: 'Futura PT', sans-serif; font-size: 60px;">
                                    Let’s <br class="d-none d-lg-block"> Bring Your <br class="d-none d-lg-block"> Vision To <br class="d-none d-lg-block"> Life</h1>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div>
                                <p class="mb-5 contact-hero-lead">Our experts will be happy to help you create a harmonious space that
                                    suits your needs and style.</p>
                            </div>

                            <form id="contact-form" class="minimal-contact-form">
                                <div class="form-group mb-4">
                                    <label for="name" class="sr-only">Your Name</label>
                                    <input type="text" id="name" name="user_name" placeholder="YOUR NAME"
                                        class="form-control-minimal" required>
                                </div>
                                <div class="form-group mb-4">
                                    <label for="email" class="sr-only">Your Email</label>
                                    <input type="email" id="email" name="user_email" placeholder="YOUR EMAIL"
                                        class="form-control-minimal" required>
                                </div>
                                <div class="form-group mb-4">
                                    <label for="phone" class="sr-only">Your Phone</label>
                                    <input type="tel" id="phone" name="user_phone" placeholder="YOUR PHONE"
                                        class="form-control-minimal" pattern="[0-9]{10,15}"
                                        title="Please enter a valid phone number (10-15 digits)" required>
                                </div>
                                <div class="form-group mb-4">
                                    <label for="subject" class="sr-only">Project Type / Subject</label>
                                    <input type="text" id="subject" name="user_subject" placeholder="PROJECT TYPE / SUBJECT"
                                        class="form-control-minimal">
                                </div>
                                <div class="form-group mb-4">
                                    <label for="message" class="sr-only">Your Message</label>
                                    <input type="text" id="message" name="user_message" placeholder="YOUR MESSAGE"
                                        class="form-control-minimal">
                                </div>
                                <div class="text-end">
                                    <button type="submit" class="submit-arrow-btn"><i
                                            class="las la-arrow-right"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Map & Office Details Section (2 Sections: Map on Left, Details on Right) -->
            <div class="contact-map-section section-padding py-5">
                <div class="container-fluid px-lg-5 px-md-4 px-3">
                    <div class="map-split-wrapper">
                        <!-- Section 1: Map Side (Left) -->
                        <div class="map-embed-col">
                            <div class="map-embed-container">
                                <iframe 
                                    src="https://maps.google.com/maps?q=34A%20Keshav%20Nagar%20Lane%202%20Civil%20Lines%20Jaipur%20Rajasthan%20302006&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%" 
                                    height="100%" 
                                    style="border:0; position: absolute; top: 0; left: 0; width: 100%; height: 100%; filter: grayscale(1) contrast(1.08);" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>

                        <!-- Section 2: Details Side (Right: Single Unified Information Block) -->
                        <div class="map-details-col">
                            <div class="map-single-details-card">
                                <!-- 1. Our Offices & Address (No Corporate Office label) -->
                                <div class="detail-group mb-4">
                                    <h4 class="map-detail-heading">Our Offices</h4>
                                    <p class="location-address">
                                        34A, Keshav Nagar Lane - 2, Keshav Nagar, Civil Lines, Jaipur, Jaipur Nagar Nigam Area, Rajasthan 302006
                                    </p>
                                </div>

                                <!-- 2. Office Timings (Directly below address) -->
                                <div class="detail-group mb-4">
                                    <h4 class="map-detail-heading">Office Timings</h4>
                                    <div class="timings-info">
                                        <p class="timing-hours mb-1">10:30 AM – 6:30 PM</p>
                                        <p class="timing-days mb-0">(Monday – Saturday)</p>
                                    </div>
                                </div>

                                <!-- 3. Mobile Number & Email -->
                                <div class="detail-group">
                                    <div class="timing-mobile mb-2">
                                        <p class="mb-0"><span class="accent-text">Mobile No :</span> <a href="tel:+918504996971">+91 85049 96971</a></p>
                                    </div>
                                    <div class="office-emails">
                                        <p class="mb-0"><span class="accent-text">Email :</span> <a href="mailto:thespacetales@gmail.com">thespacetales@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Philosophy Visual Section -->
            <!-- <div class="philosophy-section section-padding pt-0">
                <div class="container-fluid px-md-5 px-3">
                    <div class="row mb-4">
                        <div class="col-lg-6">
                            <p class="philosophy-text text-uppercase small">
                                We believe in creating with you, not just for you. Every space is a reflection of shared
                                vision and open dialogue — bringing depth, harmony, and character to the final design.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="philosophy-image-wrapper">
                                <img src="https://res.cloudinary.com/dwzfpa4vq/image/upload/v1782466462/process-bg_bykxev.webp"
                                    alt="Interior Philosophy" class="img-fluid w-100">
                            </div>
                        </div>
                    </div>

                </div>
            </div> -->

            <!-- CONTACT PAGE CONTENT ENDS HERE -->

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
    <script src="assets/js/main.js?v=1.2.0"></script>
    <!-- Alternative Theme Custom JS Animations -->
    <script src="assets/js/alternative-interactions-wipe.js"></script>


    <!-- PHP Mailer Integration -->
    <script type="text/javascript">
        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();

            // Change button to indicate loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="las la-spinner la-spin"></i>';
            submitBtn.disabled = true;

            const formData = new FormData(this);

            fetch('send_mail.php', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Message sent successfully! We will get back to you soon.');
                        this.reset();
                    } else {
                        console.error('Failed to send email:', data.message);
                        alert('Failed to send message: ' + data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred while sending the message. Please ensure PHP is running and configured correctly.');
                })
                .finally(() => {
                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.disabled = false;
                });
        });
    </script>
    <!-- Floating Contact JS -->
    <script src="assets/js/floating-contact.js?v=1.2.0"></script>

</body>

</html>


