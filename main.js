function tocasompom(){
document.querySelector('# som_tecla_pom').play();
}

const listaDeBotoes = document.querySelectorAll('.tecla')=tocasompom

let contador = 0



while (contador < listaDebotoes.lenth) {
listaDeBotoes[contador].onclick = tocasompom;
console.log("contador:" + contador);
 contador += 1;
}