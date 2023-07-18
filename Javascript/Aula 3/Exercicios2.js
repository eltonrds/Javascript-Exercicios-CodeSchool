// Imprimir números pares de 1 a 10.

let prompt = require('prompt-sync')()

for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }


  // ou

  

  for (let contador = 0; contador <= 10; contador += 2) {
    console.log(contador);
    
  }