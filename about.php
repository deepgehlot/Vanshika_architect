<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">

    <title>Architect Vanshika</title>

    <?php include 'head-includes.php'; ?>

</head>


<body class="light about-page">

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

            <main>
                <!-- About Hero Section (Matching Awards Page Hero) -->
                <div class="project-hero-section pb-2 pt-150">
                    <div class="container-fluid px-md-5 px-3">
                        <div class="row justify-content-center text-center">
                            <div class="col-xl-8">
                               
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Main Editorial About Section (Cream Background #faf7f2) -->
                <section class="about-editorial-main-section py-5 mt-4 ">
                    <div class="container-fluid px-lg-5 px-md-4 px-3" style="max-width: 1320px; margin: 0 auto;">
                        
                        <!-- 1. Top Section: Image (Left) + Content (Right) with Name & Descr under Image -->
                        <div class="about-profile-story-row row align-items-start gy-5 mb-5">
                            <!-- Left: Profile Image + Name & Descr directly below -->
                            <div class="col-lg-5 col-md-5 col-12">
                                <div class="about-profile-box">
                                    <div class="about-single-profile-card">
                                        <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/WEB/ABOUT ME.webp" alt="Vanshika Agarwal" class="about-single-profile-img">
                                    </div>
                                    <!-- Name and Description under Image as requested -->
                                    <div class="about-profile-meta text-center text-md-start">
                                        <h3 class="about-profile-name">Vanshika Agarwal</h3>
                                        <span class="about-profile-role">Principal Designer & Founder</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Right: Editorial Content / Philosophy Story -->
                            <div class="col-lg-7 col-md-7 col-12">
                                <div class="about-story-content">
                                    <h2 class="about-editorial-title">Meet the founder.</h2>
                                    <p class="about-lead-text">
                                        Vanshika Agarwal brings over eight years of refined expertise to luxury interior design and architecture. As the founder and Principal Architect of Vanshika Agarwal Designs, she specializes in transforming high-end bungalows, luxury apartments, and commercial spaces into stunning masterpieces.
                                    </p>
                                    <p class="about-body-text">
                                        Her unique vision blends modern elegance with timeless charm, ensuring every space tells a compelling story. Her meticulous attention to detail and dedication to quality have established her as a sought-after name in the luxury design industry. She approaches every project as an opportunity to create functional art tailored to the client's lifestyle.
                                    </p>
                                    <blockquote class="about-editorial-quote">
                                        "Design is not just about aesthetics; it's about creating spaces that resonate with the soul."
                                    </blockquote>
                                    <p class="about-body-text">
                                        Whether it's a sprawling villa or an intimate boutique, her work reflects a deep understanding of spatial dynamics, premium materials, and bespoke craftsmanship. Beyond architecture, her passion extends to art, culture, and travel, continuously bringing fresh global perspectives into her innovative practice.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- 2. Middle Section: Vision & Mission Cards (Side-by-Side as drawn in diagram) -->
                        <div class="about-vision-mission-row pt-5 mt-2">
                            <div class="row g-4">
                                <!-- Vision Card -->
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="about-vm-card vision-card">
                                        <div class="vm-icon-wrap">
                                            <i class="las la-eye"></i>
                                        </div>
                                        <h3 class="vm-title">Our Vision</h3>
                                        <p class="vm-desc">
                                            To set new benchmarks in luxury design by creating exceptional spaces that go beyond mere aesthetics to inspire, elevate, and reflect true individuality.
                                        </p>
                                    </div>
                                </div>

                                <!-- Mission Card -->
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="about-vm-card mission-card">
                                        <div class="vm-icon-wrap">
                                            <i class="las la-bullseye"></i>
                                        </div>
                                        <h3 class="vm-title">Our Mission</h3>
                                        <p class="vm-desc">
                                            To redefine opulence by blending timeless elegance with modern sophistication, curating masterful environments that evoke awe, comfort, and enduring pride.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <!-- 3. Full Length Grand CTA Section (Bring Your New Dream Project To Life) -->
                <section class="about-full-length-cta-section text-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.58)), url('https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/WEB/CONTACT US.webp');">
                    <div class="container-fluid px-lg-5 px-md-4 px-3 about-cta-divider-container" style="max-width: 1320px; margin: 0 auto;">
                        <div class="about-full-cta-inner mx-auto">
                            <span class="cta-overhead-label">START YOUR JOURNEY</span>
                            <h2 class="cta-headline">Bring Your New Dream Project To Life</h2>
                            <p class="cta-subtext">
                                Have an architectural or interior vision in mind? Let's collaborate to build a bespoke space tailored to your lifestyle.
                            </p>
                            <div class="cta-btn-wrap mt-4">
                                <a href="contact.php" class="cta-gold-btn">
                                    Contact Us <i class="las la-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <?php include 'footer.php'; ?>
        </div>
    </div>

    <!-- Floating Contact Widget -->
    <?php include 'floating-contact.php'; ?>

    <?php include 'scripts-includes.php'; ?>

</body>

</html>
