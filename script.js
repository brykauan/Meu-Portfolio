// navbar toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// fechar menu 
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// mudar tema
const temaToggle = document.getElementById('temaToggle');
const body = document.body;

const temaSalvo = localStorage.getItem('tema') || 'roxo';
body.setAttribute('data-tema', temaSalvo);

temaToggle.addEventListener('click', () => {
  const temaAtual = body.getAttribute('data-tema');
  const novoTema = temaAtual === 'roxo' ? 'vermelho' : 'roxo';

  body.setAttribute('data-tema', novoTema);
  localStorage.setItem('tema', novoTema);
});

// animação barras skills
const barrasSkills = document.querySelectorAll('.skill-bar');

const animarBarrasSkills = () => {
  barrasSkills.forEach(barra => {
    const rect = barra.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      barra.style.width = barra.dataset.width;
    }
  });
};

window.addEventListener('scroll', animarBarrasSkills);
window.addEventListener('load', animarBarrasSkills);

// roalgem
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute('href'));
    if (alvo) {
      alvo.scrollIntoView({ behavior: 'smooth' });
    }
  });
});