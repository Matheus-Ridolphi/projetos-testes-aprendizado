var tagSpan = document.getElementById("numeroAtual");
var numeroAtual = 0

const botaoAdicionar = document.getElementById("adicionar");

botaoAdicionar.addEventListener("click", () => {
    numeroAtual = numeroAtual + 1; 
    atualizarTela();
})

function subtrair() {
    numeroAtual = numeroAtual - 1;
    atualizarTela();
}

function atualizarTela() {
    tagSpan.innerHTML = numeroAtual;
}

