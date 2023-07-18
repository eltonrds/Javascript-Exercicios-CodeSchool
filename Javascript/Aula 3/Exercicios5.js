// Imprimir os primeiros 10 números da sequência de Fibonacci.

let prompt = require('prompt-sync')()

function fibonacci(n) {
    var fibonacciArray = [0, 1]; 

    for (var i = 2; i < n; i++) {
      var nextNumber = fibonacciArray[i - 1] + fibonacciArray[i - 2];
      fibonacciArray.push(nextNumber);
    }
  
    return fibonacciArray;
  }
  
  var fibonacciSequence = fibonacci(10);
  console.log(fibonacciSequence);
  