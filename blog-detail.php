<?php
// Dynamic blog data lookup
$blogs = [
    1 => [
        'title' => 'The Future of Sustainable Homes',
        'category' => 'Architecture',
        'date' => 'Jan 24, 2025',
        'author' => 'Vanshika',
        'image' => 'https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/WEB/SERVICES ARCHITECTURE.webp',
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
                    <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/WEB/SERVICES ARCHITECTURE.webp" alt="Inner Image" class="img-fluid w-100">
                </div>
                <div class="col-md-6">
                    <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/WEB/SERVICES STYLING.webp" alt="Inner Image" class="img-fluid w-100">
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
        'image' => 'https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/WEB/SERVICES STYLING.webp',
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
                    <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/WEB/SERVICES ARCHITECTURE.webp" alt="Inner Image" class="img-fluid w-100">
                </div>
                <div class="col-md-6">
                    <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/WEB/HERITAGE LUXURY.webp" alt="Inner Image" class="img-fluid w-100">
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
        'image' => 'https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/WEB/HERITAGE LUXURY.webp',
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
                    <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/WEB/SERVICES STYLING.webp" alt="Inner Image" class="img-fluid w-100">
                </div>
                <div class="col-md-6">
                    <img src="https://pub-3adc0bb6be604b0185c926c3b970a081.r2.dev/WEB/HERITAGE LUXURY.webp" alt="Inner Image" class="img-fluid w-100">
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

    <title>Blog Detail - Architect Vanshika</title>

    <?php include 'head-includes.php'; ?>

</head>

<body class="light blog-details-page">

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

    <?php include 'scripts-includes.php'; ?>

</body>

</html>



