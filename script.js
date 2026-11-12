
const telas = {
  inicio: document.getElementById("inicio"),
  convite: document.getElementById("convite"),
  final: document.getElementById("final"),
  resposta: document.getElementById("resposta")
};

function mostrarTela(nome) {
  Object.values(telas).forEach(tela => {
    tela.classList.add("escondido");
    tela.classList.remove("ativa");
  });

  telas[nome].classList.remove("escondido");
  telas[nome].classList.add("ativa");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.getElementById("abrir").addEventListener("click", () => {
  mostrarTela("convite");
});

document.getElementById("aceitar").addEventListener("click", () => {
  mostrarTela("final");
});

document.getElementById("depois").addEventListener("click", () => {
  mostrarTela("resposta");
});

document.getElementById("voltarInicio").addEventListener("click", () => {
  mostrarTela("inicio");
});

document.getElementById("voltarConvite").addEventListener("click", () => {
  mostrarTela("convite");
});
