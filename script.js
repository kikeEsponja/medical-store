document.addEventListener('DOMContentLoaded', () => {
  // ================================
  // MENU MOBILE TOGGLE
  // ================================

  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav');
  const navOverlay = document.querySelector('.nav-overlay');

  if (menuToggle && navMenu) {
    const toggleMenu = () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      if (navOverlay) navOverlay.classList.toggle('active');
      
      // Bloquear scroll al abrir el menú
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', toggleMenu);

    if (navOverlay) {
      navOverlay.addEventListener('click', toggleMenu);
    }

    // Cerrar menú al hacer click en un enlace
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

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
  gsap.from(".hero h1, .hero p, .hero .hero-actions .btn", {
    y: prefersReducedMotion ? 0 : 40,
    opacity: 0,
    duration: baseDuration,
    stagger: 0.2,
    ease: "power4.out",
    clearProps: "all" // Asegura que después de la animación no queden estilos residuales de GSAP
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
        once: true,
      },
    },
  );
});
