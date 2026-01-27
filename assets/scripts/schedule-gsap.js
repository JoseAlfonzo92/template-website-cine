gsap.registerPlugin(ScrollTrigger);

// Check if intro has already been played
const hasPlayed = localStorage.getItem("scheduleIntroPlayed");

// Create cinematic bars only if first time
if (!hasPlayed) {
  const topBar = document.createElement("div");
  topBar.className = "cinema-bar top-bar";
  document.body.appendChild(topBar);

  const bottomBar = document.createElement("div");
  bottomBar.className = "cinema-bar bottom-bar";
  document.body.appendChild(bottomBar);

  // Animate bars
  gsap.to(".cinema-bar", {
    height: 0,
    duration: 1.6,
    delay: 0.2,
    ease: "power4.inOut",
    onComplete: () => {
      document.querySelectorAll(".cinema-bar").forEach(bar => bar.remove());
      localStorage.setItem("scheduleIntroPlayed", "true");
    }
  });

  // Page Fade
  gsap.from(".schedule-page", {
    opacity: 0,
    duration: 0.1,
    ease: "power2.out"
  });

} else {
  // Already seen: remove bars instantly if they exist
  document.querySelectorAll(".cinema-bar").forEach(bar => bar.remove());

  // Show page instantly
  gsap.set(".schedule-page", { opacity: 1 });
}

// Movie Schedule Title
gsap.from(".sched-section-title", {
  scrollTrigger: {
    trigger: ".sched-movie-section",
    start: "top 90%"
  },
  opacity: 0,
  y: 25,
  duration: 1.2,
  ease: "power2.out",
  filter: "blur(8px)"
});

// Movie Cards Cinematic Entrance
if (!hasPlayed) {
  gsap.from(".sched-card", {
    scrollTrigger: {
      trigger: ".sched-movie-section",
      start: "top 5%"
    },
    opacity: 0,
    y: 0,
    scale: 1,
    duration: 1.25,
    stagger: 0.25,
    ease: "power3.out"
  });
} else {
  gsap.set(".sched-card", { opacity: 1, y: 0, scale: 1 });
}

// Ken Burns Zoom on Posters
if (!hasPlayed) {
  gsap.from(".sched-poster img", {
    scrollTrigger: {
      trigger: ".sched-movie-section",
      start: "top 85%"
    },
    scale: 1.12,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
    stagger: 0.2
  });
} else {
  gsap.set(".sched-poster img", { scale: 1, opacity: 1 });
}

// Hover Spotlight Effect
document.querySelectorAll(".sched-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--spot-x", `${x}px`);
    card.style.setProperty("--spot-y", `${y}px`);
  });
});

// Neon Shine Sweep (Titles)
gsap.utils.toArray(".sched-title").forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 90%"
    },
    "--shine-pos": "-150%",
    duration: 1.5,
    ease: "power3.out"
  });
});
