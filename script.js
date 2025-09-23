document.addEventListener('DOMContentLoaded', function () {
  // 🔹 MENU TOGGLE
  const toggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  document.addEventListener('click', function (event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnToggle = toggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
      navMenu.classList.remove('active');
    }
  });

  // 🔹 PARALLAX NAS IMAGENS
  document.querySelectorAll('.scene').forEach((elem) => {
    const modifier = elem.getAttribute('data-modifier');

    basicScroll.create({
      elem: elem,
      from: 0,
      to: 519,
      direct: true,
      props: {
        '--translateY': {
          from: '0',
          to: `${10 * modifier}px`
        }
      }
    }).start();
  });

  // 🔹 EFEITO DE SUBIDA DA DIV .papel-rasgado
 basicScroll.create({
  elem: document.querySelector('.papel-rasgado'),
  from: 0,
  to: 300,
  direct: true,
  props: {
    '--offsetY': {
      from: '0px',
      to: '-100vh'
    },
    '--opacity': {
      from: 0,
      to: 1
    }
  }
}).start();





});
