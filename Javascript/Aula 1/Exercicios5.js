let prompt = require('prompt-sync')()




// Faça um programa receba dois valores e imprima qual é o maior
// número digitado.



let valor1 = parseInt(prompt("O valor é: "))
let valor2 = parseInt(prompt("O valor é: "))

if (valor1 > valor2){
    console.log("o maior valor é " + valor1)
} else{
    console.log("o maior valor é " + valor2)
}



// Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. 

// Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.


let valorTotal = parseFloat(prompt("Digite o valor total da compra:"));

let valorFinal;

if (valorTotal <= 100) {
  valorFinal = valorTotal;
} else if (valorTotal <= 200) {
  valorFinal = valorTotal - (valorTotal * 0.1);
} else {
  valorFinal = valorTotal - (valorTotal * 0.2);
}

console.log("O valor final da compra com o desconto aplicado é: R$" + valorFinal.toFixed(2));



