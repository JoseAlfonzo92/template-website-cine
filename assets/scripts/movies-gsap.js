gsap.registerPlugin(ScrollTrigger);

// Check if animation has already been played before
const hasPlayed = localStorage.getItem("introPlayed");

// Cards selector
const cards = ".movie-card, .movie-pages-card";

/* INITIAL STATE – Always hide cards first */
gsap.set(cards, {
  opacity: 0,
  y: 40,
  pointerEvents: "none"
});

/* FIRST TIME VISIT – Animate Curtain + Cards */
if (!hasPlayed) {

  gsap.fromTo(".curtain",
    {
      y: "0%",
      transformOrigin: "top",
      scaleY: 1
    },
    {
      delay: 0.3,
      duration: 1.6,
      ease: "power3.inOut",
      scaleY: 0,
      onComplete: () => {
        const curtain = document.querySelector(".curtain");
        if (curtain) curtain.remove();

        // Mark animation as seen
        localStorage.setItem("introPlayed", "true");

        // Trigger cards animation after curtain is gone
        setTimeout(startMovieAnimations, 300);
      }
    }
  );

} else {
  // Already seen remove curtain instantly
  const curtain = document.querySelector(".curtain");
  if (curtain) curtain.remove();

  // Show cards instantly (no animation)
  gsap.set(cards, {
    opacity: 1,
    y: 0,
    pointerEvents: "auto"
  });
}


/* CARD REVEAL */
function startMovieAnimations() {
  gsap.to(cards, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.25,
    onComplete: () => {
      gsap.set(cards, { pointerEvents: "auto" });
    }
  });
}
