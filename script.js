/* Tema claro/escuro */
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");

  const icon = themeToggle.querySelector("i");
  icon.setAttribute("data-lucide", html.classList.contains("dark") ? "moon" : "sun");

  lucide.createIcons();
});

/* Carrossel */
// Cada carrossel ganha um índice independente
let slideIndex = {};

// Se não existir índice do carrossel, inicializa
function ensureIndex(id) {
  if (!(id in slideIndex)) {
    slideIndex[id] = 0;
  }
}

function showSlide(id) {
  ensureIndex(id);
  const track = document.getElementById(id);
  const total = track.children.length;

  track.style.transform = `translateX(${-slideIndex[id] * 100}%)`;
}

function nextSlide(id) {
  ensureIndex(id);
  const track = document.getElementById(id);
  const total = track.children.length;

  slideIndex[id] = (slideIndex[id] + 1) % total;
  showSlide(id);
}

function prevSlide(id) {
  ensureIndex(id);
  const track = document.getElementById(id);
  const total = track.children.length;

  slideIndex[id] = (slideIndex[id] - 1 + total) % total;
  showSlide(id);
}


/* Parallax apenas no vídeo */
document.addEventListener("scroll", () => {
  const video = document.querySelector("#hero video");
  const scrolled = window.scrollY * 0.3;
  video.style.transform = `translateY(${scrolled}px)`;
});
