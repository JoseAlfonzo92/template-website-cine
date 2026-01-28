// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  const isActive = hamburger.classList.contains("active");
  mobileMenu.style.display = isActive ? "block" : "none";
});

// Carousel logic with smooth fade
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dotsContainer = document.getElementById("dots");
let currentIndex = 0;
let interval;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");

    const dot = dotsContainer.children[i];
    dot.classList.remove("active");
    dot.removeAttribute("aria-current");
  });

  slides[index].classList.add("active");

  const activeDot = dotsContainer.children[index];
  activeDot.classList.add("active");
  activeDot.setAttribute("aria-current", "true");
}


function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
  resetInterval();
}

// Auto play
function startInterval() {
  interval = setInterval(nextSlide, 5000);
}
function resetInterval() {
  clearInterval(interval);
  startInterval();
}

// Event listeners
nextBtn.addEventListener("click", () => { nextSlide(); resetInterval(); });
prevBtn.addEventListener("click", () => { prevSlide(); resetInterval(); });

// Initialize
showSlide(currentIndex);
startInterval();

//Gallery 
  const galleryContainers = document.querySelectorAll()
  