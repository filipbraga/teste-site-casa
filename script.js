document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const papel = document.querySelector(".papel-rasgado");

  // Força o navegador a otimizar animação
  papel.style.willChange = "opacity, transform";

  function handleScroll() {
    const papelRect = papel.getBoundingClientRect();

    // Troca de fundo da hero
    if (papelRect.top <= 0) {
      hero.style.backgroundImage = "url('fitas.jpg')";
    } else {
      hero.style.backgroundImage = "url('hero.jpg')";
    }

    // Animação do papel
    let progress = (window.innerHeight - papelRect.top) / papel.offsetHeight;
    progress = Math.min(Math.max(progress, 0), 1); // garante 0 <= progress <= 1

    // Adiciona transição suave
    papel.style.transition = "opacity 0.3s ease-out, transform 0.3s ease-out";
    papel.style.opacity = progress;
    papel.style.transform = `translateY(${50 - progress * 50}px)`;
  }

  // Scroll e resize
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll);

  // Inicializa
  handleScroll();
});
