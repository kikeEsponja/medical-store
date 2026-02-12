// ================================
// GSAP SETUP
// ================================

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const baseEase = "power3.out";
const baseDuration = prefersReducedMotion ? 0.01 : 1;

// ================================
// HERO ANIMATION
// ================================

// Animación de entrada del hero (solo al cargar)
gsap.from(".hero h1, .hero p, .hero .hero-actions a", {
  y: prefersReducedMotion ? 0 : 60,
  opacity: 0,
  duration: baseDuration,
  stagger: 0.3,
  ease: "power4.out",
});

// ================================
// PRODUCTOS ANIMATION
// ================================

gsap.fromTo(
  ".product-card",
  {
    y: prefersReducedMotion ? 0 : 80,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: baseDuration,
    stagger: 0.2,
    ease: baseEase,

    // ScrollTrigger controla cuándo se ejecuta la animación
    scrollTrigger: {
      trigger: ".products-grid",
      start: "top 85%",
      toggleActions: "play none none none",

      once: true,
    },
  },
);

// ================================
// FEATURES ANIMATION
// ================================

gsap.fromTo(
  ".feature-card",
  {
    y: prefersReducedMotion ? 0 : 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: prefersReducedMotion ? 0.01 : 0.8,
    stagger: 0.2,
    ease: "power2.out",

    scrollTrigger: {
      trigger: ".features",
      start: "top 85%",
      toggleActions: "play none none none",

      // Evita recalcular animaciones al hacer scroll arriba/abajo
      once: true,
    },
  },
);
