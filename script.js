document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const papel = document.querySelector(".papel-rasgado");

  function handleScroll() {
    const papelRect = papel.getBoundingClientRect();
    const scrollY = window.scrollY;

    // Troca de fundo da hero
    if (papelRect.top <= 0) {
      hero.style.backgroundImage = "url('fitas.jpg')";
    } else {
      hero.style.backgroundImage = "url('hero.jpg')";
    }

    // Animação do papel
    let progress = (window.innerHeight - papelRect.top) / papel.offsetHeight;
    if (progress > 1) progress = 1;
    if (progress < 0) progress = 0;

    papel.style.opacity = progress;
    papel.style.transform = `translateY(${50 - progress * 50}px)`;
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);

  handleScroll(); // inicializa
});
