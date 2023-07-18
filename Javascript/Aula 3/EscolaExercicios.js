// crie um menu que de a opcao para o usuario escolher 1 exercicos para resolver e se a escolha for errada faca um loop ate ele escolher a opcao certa , sao 10 exercicios, em javasccript 
let prompt = require(`prompt-sync`)()

let escolha;

do {
  console.log("=== Menu de Exercícios ===");
  console.log("1. Exercício 1");
  console.log("2. Exercício 2");
  console.log("3. Exercício 3");
  console.log("4. Exercício 4");
  console.log("5. Exercício 5");
  console.log("6. Exercício 6");
  console.log("7. Exercício 7");
  console.log("8. Exercício 8");
  console.log("9. Exercício 9");
  console.log("10. Exercício 10");

  escolha = parseInt(prompt("Escolha o número do exercício que deseja resolver:"));
} while (escolha < 1 || escolha > 10);

console.log("Você escolheu o exercício " + escolha + ". Agora você pode resolver esse exercício.");
