
let prompt = require('prompt-sync')()

// let nome = prompt('Digite seu nome: ')
//     console.log('ola ' + nome)

// let numero = prompt('Digite o numero: ')
//     if (numero > 10){
//         console.log('Maior que 10')
//     }else if (numero == 10){
//         console.log('Igual a 10')
//     }
//     else{
//         console.log('Menor que 10')
//     }

// let letra = prompt('Digite a letra: ')
    // if (letra == "a"){
    //     console.log('letra a')
    // }else if (letra == 'b'){
    //     console.log('letra b')
    // }else if(letra == 'c'){
    //     console.log('letra c')
    // }else{
    //     console.log('letra nao existe')
    // }

// switch (letra) {
//     case "a":
//         console.log('letra a')
//         break;

//     case "b":
//         console.log('letra b')
//         break;

//     case "c":
//     console.log('letra c')
//         break;

//     default:
//         console.log('letra nao existe')
//         break;
// }

// parseInt = conversor numerico (converte string)


// let pNum = parseInt (prompt('Digite o primeiro numero: '))
// let sNum = prompt('Digite o segundo numero: ')

// let soma = pNum + parseInt(sNum);

// if(soma > 10){
//     console.log('A soma è: ' + soma + 'e è igual a 10')

// }else if(soma == 10){
//     console.log('A soma e: ' + soma + 'e è igual a 10')

// }else{
//     console.log('A soma è: ' + soma + 'e è menor a 10')
// }

// console.log('A soma é: ' + soma)


// let letra =  prompt('Digite uma letra')
// let numero =  prompt('Digite uma numero')

// if (letra == 'a' || numero == '1'){
//     console.log('Acertou mizeraviii !!!')

// }else{
//     console.log('Errooooo Jumento!!!')

// }


// v && v == v
// v && f == f 
// f && v == f
// f && f == f 

// v || v == v
// v || f == v
// f || v == v
// f || f == f 


// let numero = parseInt (prompt('digite um numero: '))
// let restante = numero % 2


// if(restante != 0 ){
//     console.log('o numero è impar')

// }else{
//     console.log('o numero è par')

// }

// let nome = prompt('digite o nome: ')
// let cargo = prompt('digite o cargo: ')
// let salário = parseInt (prompt('digite o salario: '))

// if (salário < 1000){
//     let novoSalario = salário * 1.1
//     console.log(nome +" "+ cargo +" "+ (salário / 10 + salário))

// } else{
//     console.log(nome +" "+  cargo +" "+ salário +" voce nao tem aumento ")

// }

// Uma empresa decide dar aumento de 30% aos funcionários cujo
// salário é inferior a 500 reais. Escreva um programa que receba o
// salário de um funcionário e imprima o valor do salário reajustado ou
// uma mensagem caso o funcionário não tenha direito a aumento.

// let nome = prompt('digite o nome: ')
// let cargo = prompt('digite o cargo: ')
// let salário = parseInt (prompt('digite o salario: '))

// if (salário < 500){
//     console.log(nome +" "+ cargo +" "+ (30 * salário / 100 + salário))

// } else{
//     console.log("voce nao tem direito")

// }


// Faça um programa que receba um número inteiro do usuário e informe
// se este número é positivo ou negativo.

// let numero = parseInt (prompt('digite o numero: '))

// if (numero > 0){
//     console.log("positivo")

// } else{
//     console.log("negativo")

// }

// Faça um programa receba dois valores e imprima qual é o maior
// número digitado.



// let valor1 = parseInt(prompt("O valor é: "))
// let valor2 = parseInt(prompt("O valor é: "))

// if (valor1 > valor2){
//     console.log("o maior valor é " + valor1)
// } else{
//     console.log("o maior valor é " + valor2)
// }


// Faça um programa receba dois valores e imprima qual é o maior
// número digitado.


// let valor1 = parseInt(prompt("O valor é: "))
// let valor2 = parseInt(prompt("O valor é: "))

// if (valor1 > valor2){
//     console.log("o maior valor é " + valor1)
// } else{
//     console.log("o maior valor é " + valor2)
// }



// Faça um programa que receba 4 notas de um aluno, calcule e
// imprima a média aritmética das notas e a mensagem de APROVADO
// para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
// 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.



// nota1 = parseInt(prompt("Qual a primeira nota: "))
// nota2 = parseInt(prompt("Qual a segunda nota: "))
// nota3 = parseInt(prompt("Qual a terceira nota: "))
// nota4 = parseInt(prompt("Qual a quarta nota: "))

// let media = (nota1 + nota2 + nota3 + nota4)/4

// console.log("A média foi " + media)
// if(media >= 7){
//     console.log("aprovado")
// } else if (media < 5){
//     console.log("reprovado")
// } else {
//     console.log("está de recuperação")
// }





// Exercício 1: 

// Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é admin; e a senha é senha123. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

// let Usuario = prompt("Digite o nome de usuário:");
// let senha = prompt("Digite a senha:");

// if (Usuario === "admin" && senha === "senha123") {
//   console.log("Login bem-sucedido!");
// } else {
//   console.log(" Login falhou.");
// }.





// Exercício 2: 


// Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia.
// Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.


// let numeroDia = parseInt(prompt("Digite um número de 1 a 7:"));

// let nomeDia;

// switch (numeroDia) {
//   case 1:
//     nomeDia = "Segunda-feira";
//     break;
//   case 2:
//     nomeDia = "Terça-feira";
//     break;
//   case 3:
//     nomeDia = "Quarta-feira";
//     break;
//   case 4:
//     nomeDia = "Quinta-feira";
//     break;
//   case 5:
//     nomeDia = "Sexta-feira";
//     break;
//   case 6:
//     nomeDia = "Sábado";
//     break;
//   case 7:
//     nomeDia = "Domingo";
//     break;
//   default:
//     nomeDia = "Número inválido";
//     break;
// }

// console.log(nomeDia);

// Exercício 3:

// Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.



// let numero1 = parseFloat(prompt("Digite o primeiro número:"));
// let numero2 = parseFloat(prompt("Digite o segundo número:"));
// let numero3 = parseFloat(prompt("Digite o terceiro número:"));

// if (numero1 < numero2 && numero2 < numero3) {
//   console.log("Os números estão em ordem crescente.");
// } else {
//   console.log("Os números não estão em ordem crescente.");
// }


// Exercício 4: 


// Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.


// let anoNascimento = prompt("Digite o ano de nascimento:");

// let anoAtual = new Date().getFullYear();
// let idade = anoAtual - anoNascimento;

// if (idade >= 18) {
//   console.log("Você é maior de idade.");
// } else {
//   console.log("Você não é maior de idade.");
// }






// Exercício 5: 


// Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. 

// Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.


// let valorTotal = parseFloat(prompt("Digite o valor total da compra:"));

// let valorFinal;

// if (valorTotal <= 100) {
//   valorFinal = valorTotal;
// } else if (valorTotal <= 200) {
//   valorFinal = valorTotal - (valorTotal * 0.1);
// } else {
//   valorFinal = valorTotal - (valorTotal * 0.2);
// }

// console.log("O valor final da compra com o desconto aplicado é: R$" + valorFinal.toFixed(2));




// Exercício 6: 

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
