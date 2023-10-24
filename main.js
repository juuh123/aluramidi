function tocasompom(){
document.querySelector('# som_tecla_pom').play();
}

const listaDeBotoes = document.querySelectorAll('.tecla')=tocasompom

let contador = 0

while (contador < 9) {
listaDeBotoes[contador].onclick = tocasompom;
contador = contador + 1;
}