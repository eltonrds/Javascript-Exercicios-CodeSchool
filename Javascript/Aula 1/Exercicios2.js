let prompt = require('prompt-sync')()

// Uma empresa decide dar aumento de 30% aos funcionários cujo
// salário é inferior a 500 reais. Escreva um programa que receba o
// salário de um funcionário e imprima o valor do salário reajustado ou
// uma mensagem caso o funcionário não tenha direito a aumento.

let nome = prompt('digite o nome: ')
let cargo = prompt('digite o cargo: ')
let salário = parseInt (prompt('digite o salario: '))

if (salário < 500){
    console.log(nome +" "+ cargo +" "+ (30 * salário / 100 + salário))

} else{
    console.log("voce nao tem direito")

}




// Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia.
// Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.


const numeroDia = parseInt(prompt("Digite um número de 1 a 7:"));

let nomeDia;

switch (numeroDia) {
  case 1:
    nomeDia = "Segunda-feira";
    break;
  case 2:
    nomeDia = "Terça-feira";
    break;
  case 3:
    nomeDia = "Quarta-feira";
    break;
  case 4:
    nomeDia = "Quinta-feira";
    break;
  case 5:
    nomeDia = "Sexta-feira";
    break;
  case 6:
    nomeDia = "Sábado";
    break;
  case 7:
    nomeDia = "Domingo";
    break;
  default:
    nomeDia = "Número inválido";
    break;
}

console.log(nomeDia);
