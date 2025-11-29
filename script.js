// Navbar Toggle
const navLinks = document.getElementById("navLinks");


// Toggle Tema
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

// Animação das barras de habilidades
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