var pontos = 0;
var tentativas = 0;
var jogada = 0;
var numero_aleatorio = Math.floor(Math.random() * 100) + 1;


function comecar() {

    var jogada = parseInt(document.getElementById("input").value);
    tentativas++;
    document.getElementById("tentativas").textContent = "Tentativas:" + tentativas;
    document.getElementById("pontos").textContent = "Pontos:" + pontos;
    document.getElementById("numero").textContent = numero_aleatorio;
    if (jogada > numero_aleatorio) {
        document.getElementById("painel").textContent = "Numero muito alto";
    }
    else if (jogada < numero_aleatorio) {
        document.getElementById("painel").textContent = "Numero muito baixo";
    }
    else {
        document.getElementById("painel").textContent = "voce ganhou";
        jogada = parseInt(document.getElementById("input").value);
        pontos++;
        numero_aleatorio = Math.floor(Math.random() * 100) + 1;
        tentativas = 0;
        document.getElementById("tentativas").textContent = "Tentativas:" + tentativas;
        document.getElementById("pontos").textContent = "Pontos:" + pontos;
        document.getElementById("painel1").textContent = "jogue novamente";
    }
    
};
var forms = document.getElementById("forms");

forms.addEventListener("submit", function (event) {
    event.preventDefault();
});
