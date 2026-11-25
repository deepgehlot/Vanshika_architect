<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">

    <title>Projects - Architect Vanshika</title>

    <?php include 'head-includes.php'; ?>

</head>

<body class="light projects-page">

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

            <!-- Projects Hero Section -->
            <div class="project-hero-section section-padding pb-0 pt-150">
                <div class="container-fluid px-md-5 px-3">
                    <div class="row justify-content-center text-center">
                        <div class="col-xl-8">
                            <h1 class="display-3 text-uppercase  mt-4">Our Masterpieces of Modern Heritage</h1>
                            <p class="mb-0 text-muted">Where sophisticated elegance seamlessly blends with authentic
                                restoration.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Projects Gallery Section -->
            <div class="project-gallery-section section-padding">
                <div class="container-fluid px-md-5 px-3">

                    <!-- Filters (Auto-populated by handler) -->
                    <div class="row ">
                        <div class="col-12 text-center">
                            <div class="project-filters">
                                <button class="filter-btn active" data-filter="*">All</button>
                            </div>
                        </div>
                    </div>

                    <!-- Grid (Auto-populated by handler) -->
                    <div class="row project-grid">
                        <div class="col-12 text-center py-5 loading-spinner">
                            <div class="spinner-border text-light" role="status">
                                <span class="visually-hidden">Loading Projects...</span>
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
        $use_isotope = true;
        $use_projects_handler = true;
        include 'scripts-includes.php';
    ?>

</body>

</html>



