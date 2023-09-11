//declaração de variaveis e numero aleatorio
var pontos = 0;
var tentativas = 0;
var jogada = 0;
//numero aleatorio,math.floor arrendoda para numero inteiro e * 100 faz com que o nuemro vai até 100,
// o math.floor arredonda para 99 então tem que somar mais 1
var numero_aleatorio = Math.floor(Math.random() * 100) + 1;


function comecar() {
    //jogada do jogador
    
    var jogada = parseInt(document.getElementById("input").value);
    tentativas++;//somando tentativas
    document.getElementById("tentativas").textContent = "Tentativas:" + tentativas;//colocando tentativas na tela,textContent modifica o texto que ja tava
    document.getElementById("pontos").textContent = "Pontos:" + pontos;//colocando pontos na tela
    if (jogada > numero_aleatorio) {
        document.getElementById("painel").textContent = "Numero muito alto";//numero mais alto
        jogada.value = " ";
    }
    else if (jogada < numero_aleatorio) {
        document.getElementById("painel").textContent = "Numero muito baixo";//numero mais baixo
        jogada.value = " ";
    }
    else if (jogada == numero_aleatorio){
        document.getElementById("painel").textContent = "voce ganhou";//voce ganhou
        jogada = parseInt(document.getElementById("input").value);//nova jogada
        pontos++;//somando ponto de vitoria
        numero_aleatorio = Math.floor(Math.random() * 100) + 1;//criando outro numero para jogada
        tentativas = 0;//zerar tentativas
        //colocando novo placar,zerando tentativas e somando pontos
        document.getElementById("tentativas").textContent = "Tentativas:" + tentativas;
        document.getElementById("pontos").textContent = "Pontos:" + pontos;
        document.getElementById("painel1").textContent = "jogue novamente";
    }
    else {
        document.getElementById("painel").textContent = "Digite algo!";//não deixa ganhar sem digitar nada
        tentativas = 0;//zerar tentativas
        document.getElementById("tentativas").textContent = "Tentativas:" + tentativas;
    }
    
};
//faz com que a tela não recarregue depois de enviar o forms,muito importante
var forms = document.getElementById("forms");

forms.addEventListener("submit", function (event) {
    event.preventDefault();
});
/////////Fim/////////////////
function apagarConteudo() {
    // Obtenha o campo de entrada pelo ID
    var apagar = document.getElementById("input");
  
    // Limpe o conteúdo do campo de entrada definindo o valor como uma string vazia
    apagar.value = "";
  }
  
