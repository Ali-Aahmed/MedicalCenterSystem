// ==========================================================================
// مركز بادرة للعلاج الطبيعي — site.js
// ==========================================================================
// الوظائف:
// 1. Mobile Navigation
// 2. Scroll Reveal
// 3. Header Shadow
// 4. Generic Content Slider (أزرار + سحب باللمس Swipe)
//    - Services
//    - Specialists
//    - Reviews
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {

    initMobileNav();
    initScrollReveal();
    initHeaderShadow();

    // ------------------------------------------------------
    // Content Sliders (تُنشأ مرة واحدة فقط)
    // ------------------------------------------------------

    new ContentSlider("services");
    new ContentSlider("specialists");
    new ContentSlider("reviews");

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
// CONTENT SLIDER (مبني على CSS Scroll Snap الأصلي — أكثر ثباتًا عبر المتصفحات)
// ==========================================================================
// الفكرة: الشريحة نفسها overflow-x: auto + scroll-snap-type (انظر site.css).
// اللمس والسحب يتولاهما المتصفح مباشرة (لا حسابات JS يدوية للموضع/الترانسفورم).
// الأزرار والنقاط تستخدم scrollIntoView() فقط، وهي متوافقة تلقائيًا مع RTL.
// ==========================================================================

class ContentSlider {

    constructor(name) {

        this.name = name;
        this.container = document.querySelector(`[data-slider="${name}"]`);
        if (!this.container) return;

        this.track = this.container.querySelector(".content-slider-track");
        if (!this.track) return;

        this.items = Array.from(this.track.querySelectorAll(".slider-item"));
        if (!this.items.length) return;

        this.prevButton = document.querySelector(`[data-slider-prev="${name}"]`);
        this.nextButton = document.querySelector(`[data-slider-next="${name}"]`);
        this.dotsContainer = document.querySelector(`[data-slider-dots="${name}"]`);
        this.controls = document.querySelector(`[data-slider-controls="${name}"]`);

        this.currentIndex = 0;
        this.visibleItems = 3;
        this.pageCount = 1;
        this.scrollTimer = null;

        this.init();
    }

    init() {
        this.bindEvents();
        this.refresh();
    }

    // ======================================================================
    // EVENTS
    // ======================================================================

    bindEvents() {

        if (this.prevButton) {
            this.prevButton.addEventListener("click", () => this.previous());
        }

        if (this.nextButton) {
            this.nextButton.addEventListener("click", () => this.next());
        }

        let resizeTimer;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => this.refresh(), 150);
        });

        // مزامنة النقاط والأزرار مع أي تمرير يدوي (لمس/سحب) يقوم به المتصفح نفسه
        this.track.addEventListener("scroll", () => {
            clearTimeout(this.scrollTimer);
            this.scrollTimer = setTimeout(() => this.syncIndexFromScroll(), 100);
        }, { passive: true });
    }

    // ======================================================================
    // RESPONSIVE
    // ======================================================================

    getVisibleItems() {
        if (window.innerWidth <= 767) return 1;
        if (window.innerWidth <= 991) return 2;
        return 3;
    }

    // ======================================================================
    // REFRESH
    // ======================================================================

    refresh() {

        this.visibleItems = this.getVisibleItems();
        this.pageCount = Math.max(1, this.items.length - this.visibleItems + 1);

        if (this.currentIndex >= this.pageCount) {
            this.currentIndex = this.pageCount - 1;
        }
        if (this.currentIndex < 0) {
            this.currentIndex = 0;
        }

        this.createDots();
        this.updateControls();
        this.updateDots();
    }

    // ======================================================================
    // اكتشاف أقرب عنصر ظاهر فعليًا بعد تمرير يدوي من المستخدم
    // ======================================================================

    syncIndexFromScroll() {

        const trackRect = this.track.getBoundingClientRect();
        let closestIndex = 0;
        let closestDistance = Infinity;

        this.items.forEach((item, index) => {
            const distance = Math.abs(item.getBoundingClientRect().left - trackRect.left);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        this.currentIndex = closestIndex;
        this.updateControls();
        this.updateDots();
    }

    // ======================================================================
    // الانتقال لعنصر معيّن
    // ======================================================================

    goToIndex(index) {

        if (index < 0) index = 0;
        if (index > this.pageCount - 1) index = this.pageCount - 1;

        this.currentIndex = index;

        const targetItem = this.items[index];
        if (targetItem) {
            targetItem.scrollIntoView({
                behavior: "smooth",
                inline: "start",
                block: "nearest"
            });
        }

        this.updateControls();
        this.updateDots();
    }

    next() {
        this.goToIndex(this.currentIndex + 1);
    }

    previous() {
        this.goToIndex(this.currentIndex - 1);
    }

    // ======================================================================
    // DOTS
    // ======================================================================

    createDots() {

        if (!this.dotsContainer) return;

        this.dotsContainer.innerHTML = "";

        if (this.pageCount <= 1) {
            this.dotsContainer.style.display = "none";
            return;
        }

        this.dotsContainer.style.display = "flex";

        for (let i = 0; i < this.pageCount; i++) {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = "slider-dot";
            dot.setAttribute("aria-label", `الانتقال إلى المجموعة ${i + 1}`);
            dot.addEventListener("click", () => this.goToIndex(i));
            this.dotsContainer.appendChild(dot);
        }
    }

    updateDots() {

        if (!this.dotsContainer) return;

        const dots = this.dotsContainer.querySelectorAll(".slider-dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === this.currentIndex);
        });
    }

    // ======================================================================
    // CONTROLS
    // ======================================================================

    updateControls() {

        const hasMultiplePages = this.pageCount > 1;

        if (this.controls) {
            this.controls.classList.toggle("is-hidden", !hasMultiplePages);
        }

        if (this.prevButton) {
            this.prevButton.disabled = !hasMultiplePages || this.currentIndex === 0;
        }

        if (this.nextButton) {
            this.nextButton.disabled = !hasMultiplePages || this.currentIndex >= this.pageCount - 1;
        }
    }
}

