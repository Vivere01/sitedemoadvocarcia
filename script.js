/* ═══════════════════════════════════════════════
   AUREUM & PARTNERS — Premium Animations
   GSAP + ScrollTrigger (Apple-level motion)
   ═══════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // ── PRELOADER REVEAL ──
    // Stagger hero elements with cinematic timing
    const heroTimeline = gsap.timeline({ delay: 0.3 });
    heroTimeline
        .to(".hero-tag", { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
        .to(".hero-title", { opacity: 1, y: 0, duration: 1.4, ease: "power3.out" }, "-=0.8")
        .to(".hero-sub", { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.8")
        .to(".hero-btns", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6");

    // ── NAVBAR SCROLL EFFECT ──
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 60);
    });

    // ── MOBILE MENU ──
    const toggle = document.getElementById("mobileToggle");
    const navLinks = document.getElementById("navLinks");
    if (toggle) {
        toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
        navLinks.querySelectorAll("a").forEach(a =>
            a.addEventListener("click", () => navLinks.classList.remove("open"))
        );
    }

    // ── SCROLL ANIMATIONS ──
    // Universal scroll-triggered reveal for all .anim-up elements
    gsap.utils.toArray(".anim-up").forEach((el) => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none"
            }
        });
    });

    // ── STATS COUNTER ANIMATION ──
    document.querySelectorAll(".stat-number").forEach((el) => {
        const text = el.textContent;
        // Only animate if it contains a number
        const match = text.match(/(\d[\d.,]*)/);
        if (!match) return;

        ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => {
                el.style.opacity = "1";
                // Quick scale-in effect
                gsap.from(el, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.8,
                    ease: "back.out(1.5)"
                });
            }
        });
    });

    // ── EXPERTISE CARDS STAGGER ──
    ScrollTrigger.create({
        trigger: ".expertise-grid",
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.to(".expertise-grid .card", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });
        }
    });

    // ── ABOUT IMAGE PARALLAX ──
    const aboutImg = document.querySelector(".about-image img");
    if (aboutImg) {
        gsap.to(aboutImg, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
                trigger: ".about-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    }

    // ── DIFFERENTIALS STAGGER ──
    ScrollTrigger.create({
        trigger: ".diff-grid",
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.to(".diff-item", {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: "power3.out"
            });
        }
    });

    // ── TESTIMONIALS STAGGER ──
    ScrollTrigger.create({
        trigger: ".testimonials-grid",
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.to(".testimonial", {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.15,
                ease: "power3.out"
            });
        }
    });

    // ── CTA SECTION GLOW PULSE ──
    gsap.to(".cta-bg", {
        scale: 1.1,
        opacity: 0.8,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
    });

    // ── MAGNETIC HOVER ON BUTTONS ──
    document.querySelectorAll(".btn-gold, .nav-cta").forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, {
                x: x * 0.15,
                y: y * 0.15,
                duration: 0.4,
                ease: "power2.out"
            });
        });
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
        });
    });

    // ── SMOOTH CARD TILT ON HOVER ──
    document.querySelectorAll(".card, .testimonial").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            gsap.to(card, {
                rotateY: x * 6,
                rotateX: y * -6,
                duration: 0.4,
                ease: "power2.out",
                transformPerspective: 800
            });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                rotateY: 0, rotateX: 0,
                duration: 0.6, ease: "power3.out"
            });
        });
    });

    // ── GOLD LINE DRAWING ON SCROLL ──
    document.querySelectorAll(".card-line").forEach((line) => {
        gsap.from(line, {
            width: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: line,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        });
    });
});
