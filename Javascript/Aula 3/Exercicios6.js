// Imprimir números pares de 0 a 20 utilizando o loop while

let prompt = require('prompt-sync')()

var numero = 0;

while (numero <= 20) {
  if (numero % 2 === 0) {
    console.log(numero);
  }
  numero++;
}
