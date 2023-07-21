import promptSync from "prompt-sync"

import { verificarMaiorIdade } from "./Exercicios"

const prompt = promptSync();

let exercicios;
let continuar;

do {
    exercicios = parseInt(prompt("Digite um numero que representa um exercicios de 1 a 4 "))
    switch (exercicios) {
        case 1:
            HelloWorld("ola mundo!")
            break;
        case 2:
            let aluno = {
                nome: "Jhon",
                idade: 19,
                hardskill:["figma","HTML","CSS","Web responsivo"]
            }
           
            console.log(aluno.nome, aluno.idade, aluno.hardskill)
            console.log("objeto aluno", aluno)

            verificarMaiorIdade
            break;
        case 3:
            verificarMaiorIdade();
        break;
        case 4:
        break;
        default:
            console.log("Digite um numero que representa um exercicios de 1 a 4 ");
            break;
    }
    continuar = prompt("desejo continuar ver outros exerciciso? digite s ou n").toLocaleLowerCase()

} while (continuar === "s");
    function HelloWorld(frase) {
      console.log(frase);  
    }
    