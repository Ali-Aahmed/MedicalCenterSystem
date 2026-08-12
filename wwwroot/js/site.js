// ==========================================================================
// مركز بادرة للعلاج الطبيعي — site.js
// تفاعلات واجهة أساسية: قائمة الجوال، تمييز الرابط النشط، ظهور تدريجي للأقسام
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    initScrollReveal();
    initHeaderShadow();
});

// فتح/إغلاق قائمة الجوال
function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var mobileNav = document.querySelector(".mobile-nav");
    var closeBtn = document.querySelector(".mobile-nav-close");

    if (!toggle || !mobileNav) return;

    toggle.addEventListener("click", function () {
        mobileNav.classList.add("open");
        document.body.style.overflow = "hidden";
    });

    function closeNav() {
        mobileNav.classList.remove("open");
        document.body.style.overflow = "";
    }

    if (closeBtn) closeBtn.addEventListener("click", closeNav);

    mobileNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeNav);
    });
}

// ظهور تدريجي بسيط للعناصر عند التمرير
function initScrollReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
        items.forEach(function (el) { el.classList.add("is-visible"); });
        return;
    }

    var observer = new IntersectionObserver(
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

// ظل خفيف على الهيدر بعد التمرير
function initHeaderShadow() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 8) {
            header.style.boxShadow = "0 8px 24px -18px rgba(14, 43, 42, 0.4)";
        } else {
            header.style.boxShadow = "none";
        }
    });
}
// ==========================================================================
// مركز بادرة للعلاج الطبيعي — site.js
// ==========================================================================
// الوظائف:
// 1. Mobile Navigation
// 2. Scroll Reveal
// 3. Header Shadow
// 4. Generic Content Slider
//    - Services
//    - Specialists
//    - Reviews
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {

    initMobileNav();
    initScrollReveal();
    initHeaderShadow();

    // ------------------------------------------------------
    // Content Sliders
    // ------------------------------------------------------

    new ContentSlider("services");
    new ContentSlider("specialists");
    new ContentSlider("reviews");

});


// ==========================================================================
// MOBILE NAVIGATION
// ==========================================================================

function initMobileNav() {

    // دعم الـ IDs الحالية
    const menuButton = document.getElementById("mobileMenuBtn");
    const mobileNav = document.getElementById("mobileNav");

    // دعم الـ Classes في حال استخدامها في الـ Layout
    const classToggle = document.querySelector(".nav-toggle");
    const classMobileNav = document.querySelector(".mobile-nav");
    const closeButton = document.querySelector(".mobile-nav-close");

    const toggle =
        menuButton || classToggle;

    const nav =
        mobileNav || classMobileNav;

    if (!toggle || !nav) {
        return;
    }


    // ------------------------------------------------------
    // فتح وإغلاق القائمة
    // ------------------------------------------------------

    function openNav() {

        nav.classList.add("is-open");
        nav.classList.add("open");

        toggle.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.style.overflow = "hidden";
    }


    function closeNav() {

        nav.classList.remove("is-open");
        nav.classList.remove("open");

        toggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.style.overflow = "";
    }


    // ------------------------------------------------------
    // Toggle
    // ------------------------------------------------------

    toggle.addEventListener(
        "click",
        function () {

            const isOpen =
                nav.classList.contains("is-open") ||
                nav.classList.contains("open");

            if (isOpen) {
                closeNav();
            }
            else {
                openNav();
            }

        }
    );


    // ------------------------------------------------------
    // زر الإغلاق
    // ------------------------------------------------------

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeNav
        );

    }


    // ------------------------------------------------------
    // روابط القائمة
    // ------------------------------------------------------

    nav.querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                closeNav
            );

        });


    // ------------------------------------------------------
    // إغلاق القائمة عند الضغط على Escape
    // ------------------------------------------------------

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {
                closeNav();
            }

        }
    );

}


// ==========================================================================
// SCROLL REVEAL
// ==========================================================================

function initScrollReveal() {

    const items =
        document.querySelectorAll(
            "[data-reveal]"
        );

    if (!items.length) {
        return;
    }


    // المتصفحات التي لا تدعم IntersectionObserver
    if (!("IntersectionObserver" in window)) {

        items.forEach(function (element) {

            element.classList.add(
                "is-visible"
            );

        });

        return;
    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    items.forEach(function (element) {

        observer.observe(element);

    });

}


// ==========================================================================
// HEADER SHADOW
// ==========================================================================

function initHeaderShadow() {

    const header =
        document.querySelector(
            ".site-header"
        );

    if (!header) {
        return;
    }


    function updateHeaderShadow() {

        if (window.scrollY > 8) {

            header.style.boxShadow =
                "0 8px 24px -18px rgba(14, 43, 42, 0.4)";

        }
        else {

            header.style.boxShadow =
                "none";

        }

    }


    window.addEventListener(
        "scroll",
        updateHeaderShadow,
        {
            passive: true
        }
    );


    // تنفيذ أولي
    updateHeaderShadow();

}


// ==========================================================================
// GENERIC CONTENT SLIDER
// ==========================================================================
// ==========================================================================
// CONTENT SLIDER
// ==========================================================================

class ContentSlider {

    constructor(name) {

        this.name = name;

        this.container = document.querySelector(
            `[data-slider="${name}"]`
        );

        if (!this.container) return;

        this.viewport = this.container.querySelector(
            ".content-slider-viewport"
        );

        this.track = this.container.querySelector(
            ".content-slider-track"
        );

        if (!this.track) return;

        this.items = Array.from(
            this.track.querySelectorAll(".slider-item")
        );

        if (!this.items.length) return;

        this.prevButton = document.querySelector(
            `[data-slider-prev="${name}"]`
        );

        this.nextButton = document.querySelector(
            `[data-slider-next="${name}"]`
        );

        this.dotsContainer = document.querySelector(
            `[data-slider-dots="${name}"]`
        );

        this.controls = document.querySelector(
            `[data-slider-controls="${name}"]`
        );

        this.currentPage = 0;
        this.visibleItems = 3;
        this.pageCount = 1;

        this.init();

    }


    // ======================================================================
    // INIT
    // ======================================================================

    init() {

        this.bindEvents();

        this.refresh();

    }


    // ======================================================================
    // EVENTS
    // ======================================================================

    bindEvents() {

        if (this.prevButton) {

            this.prevButton.addEventListener(
                "click",
                () => this.previous()
            );

        }


        if (this.nextButton) {

            this.nextButton.addEventListener(
                "click",
                () => this.next()
            );

        }


        let resizeTimer;

        window.addEventListener(
            "resize",
            () => {

                clearTimeout(resizeTimer);

                resizeTimer = setTimeout(
                    () => this.refresh(),
                    150
                );

            }
        );

    }


    // ======================================================================
    // RESPONSIVE
    // ======================================================================

    getVisibleItems() {

        if (window.innerWidth <= 767) {
            return 1;
        }

        if (window.innerWidth <= 991) {
            return 2;
        }

        return 3;

    }


    // ======================================================================
    // REFRESH
    // ======================================================================

    refresh() {

        this.visibleItems =
            this.getVisibleItems();


        this.pageCount =
            Math.max(
                1,
                Math.ceil(
                    this.items.length /
                    this.visibleItems
                )
            );


        if (
            this.currentPage >=
            this.pageCount
        ) {

            this.currentPage =
                this.pageCount - 1;

        }


        if (this.currentPage < 0) {
            this.currentPage = 0;
        }


        this.createDots();

        this.update();

    }


    // ======================================================================
    // CREATE DOTS
    // ======================================================================

    createDots() {

        if (!this.dotsContainer) {
            return;
        }

        this.dotsContainer.innerHTML = "";


        if (this.pageCount <= 1) {

            this.dotsContainer.style.display =
                "none";

            return;

        }


        this.dotsContainer.style.display =
            "flex";


        for (
            let i = 0;
            i < this.pageCount;
            i++
        ) {

            const dot =
                document.createElement("button");

            dot.type = "button";

            dot.className = "slider-dot";


            dot.setAttribute(
                "aria-label",
                `الانتقال إلى المجموعة ${i + 1}`
            );


            dot.addEventListener(
                "click",
                () => {

                    this.currentPage = i;

                    this.update();

                }
            );


            this.dotsContainer.appendChild(dot);

        }

    }


    // ======================================================================
    // CALCULATE OFFSET
    // ======================================================================

    getOffsetForCurrentPage() {

        const targetIndex =
            this.currentPage *
            this.visibleItems;


        if (
            targetIndex >=
            this.items.length
        ) {
            return 0;
        }


        const targetItem =
            this.items[targetIndex];


        const viewport =
            this.viewport ||
            this.container;


        const targetRect =
            targetItem.getBoundingClientRect();


        const viewportRect =
            viewport.getBoundingClientRect();


        /*
         * نحسب مكان العنصر المطلوب بالنسبة للـ viewport
         *
         * لا نفترض:
         * - LTR
         * - RTL
         * - row
         * - row-reverse
         *
         * بل نعتمد على الموقع الفعلي للعنصر.
         */

        return (
            targetRect.left -
            viewportRect.left
        );

    }


    // ======================================================================
    // UPDATE
    // ======================================================================

    update() {

        if (!this.items.length) {
            return;
        }


        /*
         * الصفحة الأولى يجب أن تبدأ من الصفر.
         */

        if (this.currentPage === 0) {

            this.track.style.transform =
                "translate3d(0, 0, 0)";

        }

        else {

            /*
             * نقرأ موقع أول عنصر في الصفحة المطلوبة
             * ثم نحرك الـ Track بحيث يصبح هذا العنصر
             * في بداية الـ viewport.
             */

            const offset =
                this.getOffsetForCurrentPage();


            this.track.style.transform =
                `translate3d(${-offset}px, 0, 0)`;

        }


        this.updateControls();

        this.updateDots();

    }


    // ======================================================================
    // CONTROLS
    // ======================================================================

    updateControls() {

        const hasMultiplePages =
            this.pageCount > 1;


        if (this.controls) {

            this.controls.classList.toggle(
                "is-hidden",
                !hasMultiplePages
            );

        }


        if (this.prevButton) {

            this.prevButton.disabled =
                !hasMultiplePages ||
                this.currentPage === 0;

        }


        if (this.nextButton) {

            this.nextButton.disabled =
                !hasMultiplePages ||
                this.currentPage >=
                this.pageCount - 1;

        }

    }


    // ======================================================================
    // DOTS
    // ======================================================================

    updateDots() {

        if (!this.dotsContainer) {
            return;
        }


        const dots =
            this.dotsContainer.querySelectorAll(
                ".slider-dot"
            );


        dots.forEach(
            (dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === this.currentPage
                );

            }
        );

    }


    // ======================================================================
    // NEXT
    // ======================================================================

    next() {

        if (
            this.currentPage <
            this.pageCount - 1
        ) {

            this.currentPage++;

            this.update();

        }

    }


    // ======================================================================
    // PREVIOUS
    // ======================================================================

    previous() {

        if (this.currentPage > 0) {

            this.currentPage--;

            this.update();

        }

    }

}


// ==========================================================================
// INITIALIZE SLIDERS
// ==========================================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        new ContentSlider("services");

        new ContentSlider("specialists");

        new ContentSlider("reviews");

    }
);