// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let prompt = require('prompt-sync')()

var numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero)) {
  console.log("Número inválido.");
} else {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}


// ou 
// const prompt =require(`prompt-sync`)()
let numero = parseInt(prompt("digiteo numero que deseja ver a tabuada: "))

for (let contador = 1; contador <= 10; contador++) {
  console.log(`${numero} x ${contador} = ${numero * contador}`); 
}