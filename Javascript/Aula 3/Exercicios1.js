import PromptSync from 'prompt-sync';

const prompt = PromptSync();

// Imprimir números de 1 a 10 utilizando o loop for

export function numeroLoop() {

  for (let contador = 1; contador <= 10; contador++) {
    console.log(contador);
  }
}


// ou 

for (var i = 1; i <= 10; i++) {
  console.log(i);
}