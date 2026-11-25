<?php
// Shared scripts included at end of body for all pages.
// jQuery 3.7.1 CDN, Bootstrap 5.3 bundle CDN, MetisMenu CDN
// GSAP (local - SplitText is GSAP Club plugin, must stay local)
// Page-specific JS (magnific, isotope, slick, projects-handler) added per-page as needed
?>
    <!-- jQuery 3.7.1 CDN -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <!-- Bootstrap 5.3 Bundle JS CDN (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc4s9bIOgUxi8T/jzmAY8YoFPULKABqpBqRBe8K+LoU6" crossorigin="anonymous"></script>
    <!-- MetisMenu JS CDN -->
    <script src="https://cdn.jsdelivr.net/npm/metismenu@3.0.7/dist/metisMenu.min.js"></script>
<?php if (!empty($use_slick)): ?>
    <!-- Slick Slider JS CDN -->
    <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<?php endif; ?>
<?php if (!empty($use_magnific)): ?>
    <!-- Magnific Popup JS CDN -->
    <script src="https://cdn.jsdelivr.net/npm/magnific-popup@1.1.0/dist/jquery.magnific-popup.min.js"></script>
<?php endif; ?>
<?php if (!empty($use_isotope)): ?>
    <!-- Isotope JS CDN -->
    <script src="https://cdn.jsdelivr.net/npm/isotope-layout@3.0.6/dist/isotope.pkgd.min.js"></script>
<?php endif; ?>
    <!-- Back To Top JS (local) -->
    <script src="assets/js/backToTop.js"></script>
    <!-- GSAP Core (local - Club version for SplitText) -->
    <script src="assets/js/gsap.min.js"></script>
    <script src="assets/js/ScrollTrigger.min.js"></script>
    <script src="assets/js/gsap-scroll-to-plugin.js"></script>
    <script src="assets/js/SplitText.min.js"></script>
    <!-- Smooth Scroll / Scroll Smoother (local) -->
    <script src="assets/js/smoother-script.js"></script>
    <!-- Heading & Paragraph Animations (local) -->
    <script src="assets/js/heading-animation.js"></script>
    <script src="assets/js/paragraph-animation.js"></script>
<?php if (!empty($use_projects_handler)): ?>
    <!-- Projects Handler JS (local) -->
    <script src="assets/js/projects-handler.js?v=1.6.3"></script>
<?php endif; ?>
    <!-- Main JS (local) -->
    <script src="assets/js/main.js?v=1.6.4"></script>
    <!-- Alternative Interactions JS (local) -->
    <script src="assets/js/alternative-interactions.js?v=1.6.3"></script>
    <!-- Floating Contact JS (local) -->
    <script src="assets/js/floating-contact.js?v=1.6.3"></script>

