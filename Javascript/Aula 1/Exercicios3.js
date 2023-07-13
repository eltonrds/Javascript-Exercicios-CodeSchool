let prompt = require('prompt-sync')()

// Faça um programa que receba um número inteiro do usuário e informe
// se este número é positivo ou negativo.


let numero = parseInt (prompt('digite o numero: '))

if (numero > 0){
    console.log("positivo")

} else{
    console.log("negativo")

}


// Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.


let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let numero3 = parseFloat(prompt("Digite o terceiro número:"));

if (numero1 < numero2 && numero2 < numero3) {
  console.log("Os números estão em ordem crescente.");
} else {
  console.log("Os números não estão em ordem crescente.");
}
