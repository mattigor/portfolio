function atualizarLinkAtivo() {
  const links = document.querySelectorAll('nav ul li a');

  links.forEach((link) => {
      const sectionId = link.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);
      if (
          section.offsetTop <= window.scrollY &&
          section.offsetTop + section.offsetHeight > window.scrollY
      ) {
          link.classList.add('ativo');
      } else {
          link.classList.remove('ativo');
      }
  });
}
window.addEventListener('scroll', atualizarLinkAtivo);
window.addEventListener('load', atualizarLinkAtivo);

function rotateBars(bar) {
    bar.classList.toggle("change");
}
