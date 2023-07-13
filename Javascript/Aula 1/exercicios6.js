let prompt = require('prompt-sync')()



// Faça um programa que receba 4 notas de um aluno, calcule e
// imprima a média aritmética das notas e a mensagem de APROVADO
// para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
// 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.


nota1 = parseInt(prompt("Qual a primeira nota: "))
nota2 = parseInt(prompt("Qual a segunda nota: "))
nota3 = parseInt(prompt("Qual a terceira nota: "))
nota4 = parseInt(prompt("Qual a quarta nota: "))

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log("A média foi " + media)
if(media >= 7){
    console.log("aprovado")
} else if (media < 5){
    console.log("reprovado")
} else {
    console.log("está de recuperação")
}



// Cálculo de IMC
// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
// * altura). 
// Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
// usuário se encontra, de acordo com a tabela a seguir:

// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal

// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3


let peso = prompt("Digite seu peso em quilogramas:"); 
let altura = prompt("Digite sua altura em metros:"); 

let imc = peso / (altura * altura); 

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Peso normal");
} else if (imc >= 25.0 && imc <= 29.9) {
  console.log("Sobrepeso");
} else if (imc >= 30.0 && imc <= 34.9) {
  console.log("Obesidade grau 1");
} else if (imc >= 35.0 && imc <= 39.9) {
  console.log("Obesidade grau 2");
} else {
  console.log("Obesidade grau 3");
}
