<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">

    <title>Project Detail - Architect Vanshika</title>

    <?php include 'head-includes.php'; ?>

</head>

<body class="light project-detail-page">

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

            <!-- Project Detail Hero (Auto-populated by handler) -->
            <div class="project-hero-section">
                <div class="container" style="max-width: 1380px;">
                    <div class="row justify-content-center text-center">
                        <div class="col-xl-10">
                            <h1 class="project-title mb-1">Loading...</h1>
                            <p class="project-category mb-0 text-muted text-uppercase letter-spacing-2"></p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Project Images Slider (Auto-populated by handler) -->
            <div class="project-detail-gallery">
                <div class="container" style="max-width: 1380px;">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <!-- Main Viewing Slide (Scaled to fit viewport comfortably) -->
                            <div class="project-main-slider mb-3">
                                <!-- Dynamic Slides -->
                            </div>

                            <!-- Thumbnail Slider (4-box row layout) -->
                            <div class="project-thumb-slider">
                                <!-- Dynamic Thumbnails -->
                            </div>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col-12 text-center">
                            <a href="projects.php" class="view-project-btn" style="margin-top: 33px;">Back to Projects</a>
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
        $use_slick = true;
        $use_magnific = true;
        $use_projects_handler = true;
        include 'scripts-includes.php';
    ?>

</body>

</html>



