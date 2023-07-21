import promptSync from "prompt-sync"
import { numeroLoop } from "../Aula 3/Exercicios1.js";
import { numeroPar } from "../Aula 3/Exercicios2.js";
import { numeroImpar } from "../Aula 3/Exercicios3.js";
import { fibonacci } from "../Aula 3/Exercicios5.js";
import { idadeUsuario } from "../Aula 3/Exercicios8.js";

const prompt = promptSync();

let exercicios;
let continuar;

do {
    exercicios = parseInt(prompt("Digite um numero que representa um exercicios de 1 a 5: "))

    switch (exercicios) {
        case 1:
            numeroLoop()
            break;

        case 2:
            numeroPar()
            break;

        case 3:
            numeroImpar()
            break;

        case 4:
            fibonacci()
            break;

        case 5:
            idadeUsuario()
            break;

        default:
            console.log("Digite um numero que representa um exercicios de 1 a 4:");
            break;
    }
    continuar = prompt("desejo continuar ver outros exerciciso? digite s ou n: ").toLocaleLowerCase()
} while (continuar === "s");

function HelloWorld(frase) {
    console.log(frase);
}