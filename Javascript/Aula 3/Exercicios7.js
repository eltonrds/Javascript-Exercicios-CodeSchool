// Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

let prompt = require('prompt-sync')()

var numero = 1;
var soma = 0;

while (numero <= 100) {
  soma += numero; numero++;
}

console.log("A soma dos números de 1 a 100 é: " + soma);
