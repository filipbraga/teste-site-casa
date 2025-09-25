document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const papel = document.querySelector(".papel-rasgado");
  // 1. SELECIONE O NOVO ELEMENTO
  const heroFade = document.querySelector(".hero-background-fade");

  let scrollY = window.scrollY;
  let currentY = scrollY;

  function update() {
    // Ler posição real do scroll
    scrollY = window.scrollY;

    // Interpolação suave: easing
    currentY += (scrollY - currentY) * 0.1;

    const rect = papel.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Progresso do scroll relativo ao papel
    let progress = (viewportHeight - rect.top + (currentY - scrollY)) / rect.height;
    progress = Math.min(Math.max(progress, 0), 1);

    // Move o papel e ajusta opacidade suavemente
    papel.style.opacity = progress;
    papel.style.transform = `translateY(${50 - progress * 50}px)`;

    // 2. A MÁGICA ACONTECE AQUI!
    // Em vez de trocar a imagem, mudamos a opacidade da camada de cima
    // com base no progresso do scroll.
    heroFade.style.opacity = progress;

    // A linha antiga que trocava o background foi removida.

    // Loop contínuo para suavizar o efeito
    requestAnimationFrame(update);
  }

  // Inicializa
  update();
});


const img = document.querySelector('.papel-rasgado img');
img.addEventListener('load', () => {
  // agora podemos iniciar o parallax
  startParallax();
});