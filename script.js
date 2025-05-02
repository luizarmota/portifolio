const photo = document.querySelector('.about-photo-sticky');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scaleFactor = 0.9 + scrollY * 0.0006; // Ajuste o valor pra mais ou menos intensidade
    photo.style.transform = `scale(${scaleFactor})`;
  });

const scrollLine = document.querySelector('.scroll-line');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    scrollLine.style.width = scrollPercent + '%';
  });
const btnTopo = document.getElementById("btn-topo");

  window.addEventListener("scroll", () => {
    btnTopo.style.display = window.scrollY > 200 ? "block" : "none";
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
