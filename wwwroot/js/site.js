// ==========================================================================
// مركز بادرة للعلاج الطبيعي — site.js
// ==========================================================================
// الوظائف:
// 1. Mobile Navigation
// 2. Scroll Reveal
// 3. Header Shadow
// 4. Swiper Sliders (يتطلب تحميل مكتبة Swiper في _Layout.cshtml قبل هذا الملف)
//    - Services
//    - Specialists
//    - Reviews
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {

    initMobileNav();
    initScrollReveal();
    initHeaderShadow();
    initSwiperSliders();

});


// ==========================================================================
// MOBILE NAVIGATION
// ==========================================================================

function initMobileNav() {

    const toggle = document.getElementById("mobileMenuBtn") || document.querySelector(".nav-toggle");
    const nav = document.getElementById("mobileNav") || document.querySelector(".mobile-nav");
    const closeButton = document.querySelector(".mobile-nav-close");

    if (!toggle || !nav) {
        return;
    }

    function openNav() {
        nav.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
    }

    function closeNav() {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    }

    toggle.addEventListener("click", function () {
        const isOpen = nav.classList.contains("is-open");
        if (isOpen) {
            closeNav();
        } else {
            openNav();
        }
    });

    if (closeButton) {
        closeButton.addEventListener("click", closeNav);
    }

    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeNav();
        }
    });
}


// ==========================================================================
// SCROLL REVEAL
// ==========================================================================

function initScrollReveal() {

    const items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
        items.forEach(function (el) { el.classList.add("is-visible"); });
        return;
    }

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    items.forEach(function (el) { observer.observe(el); });
}


// ==========================================================================
// HEADER SHADOW
// ==========================================================================

function initHeaderShadow() {

    const header = document.querySelector(".site-header");
    if (!header) return;

    function updateHeaderShadow() {
        if (window.scrollY > 8) {
            header.style.boxShadow = "0 8px 24px -18px rgba(14, 43, 42, 0.4)";
        } else {
            header.style.boxShadow = "none";
        }
    }

    window.addEventListener("scroll", updateHeaderShadow, { passive: true });
    updateHeaderShadow();
}



// ==========================================================================
// SWIPER SLIDERS
// ==========================================================================
// Services / Specialists: عرض عدة كروت مع أزرار وتنقل سريع.
// Reviews: كارت واحد على الموبايل، كارتين في المنتصف على الشاشات الأكبر،
// مع حركة دخول ناعمة (fade) وتوسيط للكارت الحالي.
// ==========================================================================

function initSwiperSliders() {

    if (typeof Swiper === "undefined") {
        console.warn("Swiper library is not loaded. Add the CDN script in _Layout.cshtml before site.js.");
        return;
    }

    // ------------------------------------------------------
    // الخدمات (Services)
    // ------------------------------------------------------

    const servicesEl = document.querySelector(".services-swiper");
    if (servicesEl) {
        new Swiper(servicesEl, {
            rtl: true,
            slidesPerView: 1,
            spaceBetween: 24,
            speed: 500,
            grabCursor: true,
            navigation: {
                nextEl: ".services-button-next",
                prevEl: ".services-button-prev"
            },
            pagination: {
                el: ".services-pagination",
                clickable: true
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 24 },
                992: { slidesPerView: 3, spaceBetween: 28 },
                1200: { slidesPerView: 3, spaceBetween: 28 }
            }
        });
    }

    // ------------------------------------------------------
    // الأخصائيون (Specialists)
    // ------------------------------------------------------

    const specialistsEl = document.querySelector(".specialists-swiper");
    let specialistsSwiper = null;
    if (specialistsEl) {
        specialistsSwiper = new Swiper(specialistsEl, {
            rtl: true,
            slidesPerView: 1,
            spaceBetween: 24,
            speed: 500,
            grabCursor: true,
            autoHeight: true, // لضبط ارتفاع السلايدر تلقائيًا عند فتح "عرض المزيد"
            navigation: {
                nextEl: ".specialists-button-next",
                prevEl: ".specialists-button-prev"
            },
            pagination: {
                el: ".specialists-pagination",
                clickable: true
            },
            breakpoints: {
                768: { slidesPerView: 3, spaceBetween: 24 },
                992: { slidesPerView: 3, spaceBetween: 28 }
            }
        });
    }

    initBioToggle(specialistsSwiper);

    // ------------------------------------------------------
    // آراء المراجعين (Reviews)
    // كارت واحد بالموبايل، كارتين في المنتصف بالشاشات الأكبر
    // مع تأثير دخول ناعم (fade مبني فوق slide الافتراضي عبر التوسيط)
    // ------------------------------------------------------

    const reviewsEl = document.querySelector(".reviews-swiper");
    if (reviewsEl) {
        new Swiper(reviewsEl, {
            rtl: true,
            slidesPerView: 1.05,
            centeredSlides: true,
            spaceBetween: 20,
            speed: 550,
            grabCursor: true,
            navigation: {
                nextEl: ".reviews-button-next",
                prevEl: ".reviews-button-prev"
            },
            pagination: {
                el: ".reviews-pagination",
                clickable: true
            },
            breakpoints: {
                768: { slidesPerView: 1.5, spaceBetween: 24, centeredSlides: true },
                992: { slidesPerView: 2, spaceBetween: 28, centeredSlides: true }
            }
        });
    }
}


// ==========================================================================
// SPECIALIST BIO — زر "عرض المزيد / عرض أقل"
// ==========================================================================

function initBioToggle(specialistsSwiper) {

    document.addEventListener("click", function (e) {

        const button = e.target.closest("[data-bio-toggle]");
        if (!button) return;

        const body = button.closest(".specialist-body");
        if (!body) return;

        const isOpen = body.classList.toggle("is-bio-open");
        const textEl = button.querySelector(".toggle-text");

        if (textEl) {
            textEl.textContent = isOpen ? "عرض أقل" : "عرض المزيد";
        }

        button.setAttribute("aria-expanded", isOpen ? "true" : "false");

        // إعادة حساب ارتفاع السلايدر بعد تغيّر ارتفاع الكارت
        if (specialistsSwiper) {
            // تأخير بسيط للسماح للمتصفح بإعادة رسم التخطيط الجديد أولًا
            setTimeout(() => specialistsSwiper.update(), 50);
        }
    });
}