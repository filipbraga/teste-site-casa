const papel = document.querySelector('.papel-rasgado');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const papelTop = papel.offsetTop;

  // Quando a rolagem passa do topo do papel
  if (scrollY + window.innerHeight > papelTop) {
    let progress = (scrollY + window.innerHeight - papelTop) / papel.offsetHeight;
    if(progress > 1) progress = 1;

    papel.style.opacity = progress;
    papel.style.transform = `translateY(${50 - progress * 50}px)`;
  } else {
    papel.style.opacity = 0;
    papel.style.transform = 'translateY(50px)';
  }
});

window.addEventListener("scroll", function () {
  const papel = document.querySelector(".papel-rasgado");
  const hero = document.querySelector(".hero");

  const papelTop = papel.getBoundingClientRect().top;

  if (papelTop <= 0) {
    hero.style.backgroundImage = "url('fitas.jpg')"; // nova imagem
  } else {
    hero.style.backgroundImage = "url('hero.jpg')"; // volta à original
  }
});
