let prompt = require('prompt-sync')()


// Faça um programa que receba o nome, cargo e salário de um
// funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
// salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
// desse funcionário.



let nome = prompt('digite o nome: ')
let cargo = prompt('digite o cargo: ')
let salário = parseInt (prompt('digite o salario: '))

if (salário < 1000){
    // let novoSalario = salário * 1.1
    console.log(nome +" "+ cargo +" "+ (salário / 10 + salário))

} else{
    console.log(nome +" "+  cargo +" "+ salário)

}



// Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.



let Usuario = prompt("Digite o nome de usuário:");
let senha = prompt("Digite a senha:");

if (Usuario === "admin" && senha === "senha123") {
  console.log("Login bem-sucedido!");
} else {
  console.log("Login falhou.");
}
