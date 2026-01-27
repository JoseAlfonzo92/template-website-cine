document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  //  Section title reveal
  gsap.from(".now-showing h2", {
    opacity: 0,
    duration: 1.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".now-showing",
      start: "top 80%"
    }
  });

  //  Movie cards reveal
  gsap.from(".now-showing .now-showing-card", {
    opacity: 0,
    duration: isMobile ? 0.8 : 1.1,
    ease: "power2.out",
    stagger: isMobile ? 0.12 : 0.15,
    scrollTrigger: {
      trigger: ".now-showing .now-showing-row",
      start: isMobile ? "top 90%" : "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});
