document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const papel = document.querySelector(".papel-rasgado");
  const heroFade = document.querySelector(".hero-background-fade");
  const heroText = document.querySelector(".hero-text"); // 👈 texto do h1 e p

  let scrollY = window.scrollY;
  let currentY = scrollY;

  function update() {
    scrollY = window.scrollY;
    currentY += (scrollY - currentY) * 0.1;

    const rect = papel.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    let progress = (viewportHeight - rect.top + (currentY - scrollY)) / rect.height;
    progress = Math.min(Math.max(progress, 0), 1);

    // --- Papel ---
    papel.style.opacity = progress;
    papel.style.transform = `translateY(${50 - progress * 50}px)`;

    // --- Fade da camada ---
    heroFade.style.opacity = progress;

    // --- Texto sobe e some ---
    const moveY = progress * -80; // até -80px pra cima
    const fade = 1 - progress;    // opacidade vai de 1 → 0
    heroText.style.transform = `translateY(${moveY}px)`;
    heroText.style.opacity = fade;

    requestAnimationFrame(update);
  }

  update();
});


const img = document.querySelector('.papel-rasgado img');
img.addEventListener('load', () => {
  // agora podemos iniciar o parallax
  startParallax();
});