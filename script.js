
//scroll suave (tive que usar ia, simplesmente não funcionava os codigos normais)
function scrollSuaveCustom(alvo, duracao = 800) {
  const elemento = document.querySelector(alvo);
  if (!elemento) return;

  const posicaoInicial = window.pageYOffset;
  const posicaoAlvo = elemento.offsetTop - 100; // 100px de margem
  const distancia = posicaoAlvo - posicaoInicial;
  let startTime = null;

  function animacaoScroll(tempoAtual) {
    if (startTime === null) startTime = tempoAtual;
    const tempoDecorrido = tempoAtual - startTime;
    const progresso = Math.min(tempoDecorrido / duracao, 1);

    const easing = function (t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    window.scrollTo(0, posicaoInicial + (distancia * easing(progresso)));

    if (progresso < 1) {
      requestAnimationFrame(animacaoScroll);
    }
  }

  requestAnimationFrame(animacaoScroll);
}

console.log('Configurando scroll suave...');

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    console.log('Navbar click:', href);
    scrollSuaveCustom(href);
  });
});

document.querySelectorAll('.hero-buttons a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    console.log('Hero button click:', href);
    scrollSuaveCustom(href);
  });
});

document.querySelector('.scroll-indicator').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Scroll indicator click');
  scrollSuaveCustom('#sobre');
});

// toggle tema
const temaToggle = document.getElementById("temaToggle");
const body = document.body;

const temaSalvo = localStorage.getItem("tema") || "roxo";
body.setAttribute("data-tema", temaSalvo);

temaToggle.addEventListener("click", () => {
  const temaAtual = body.getAttribute("data-tema");
  const novoTema = temaAtual === "roxo" ? "vermelho" : "roxo";
  body.setAttribute("data-tema", novoTema);
  localStorage.setItem("tema", novoTema);
});

// skills bar animação
const barrasSkills = document.querySelectorAll(".skill-bar");
const animarBarrasSkills = () => {
  barrasSkills.forEach((barra) => {
    const rect = barra.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      barra.style.width = barra.dataset.width;
    }
  });
};
window.addEventListener("scroll", animarBarrasSkills);
window.addEventListener("load", animarBarrasSkills);

console.log('=== SCROLL SUAVE CUSTOM CONFIGURADO ===');

const voltarTopoBtn = document.getElementById('voltarTopo');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 300) {
    voltarTopoBtn.classList.add('visible');
  } else {
    voltarTopoBtn.classList.remove('visible');
  }
});

// scroll suave ao topo
function voltarAoTopo() {
  const posicaoInicial = window.pageYOffset;
  const duracao = 800;
  let startTime = null;

  function animacaoScroll(tempoAtual) {
    if (startTime === null) startTime = tempoAtual;
    const tempoDecorrido = tempoAtual - startTime;
    const progresso = Math.min(tempoDecorrido / duracao, 1);

    const easing = function (t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    window.scrollTo(0, posicaoInicial - (posicaoInicial * easing(progresso)));

    if (progresso < 1) {
      requestAnimationFrame(animacaoScroll);
    }
  }

  requestAnimationFrame(animacaoScroll);
}

voltarTopoBtn.addEventListener('click', voltarAoTopo);