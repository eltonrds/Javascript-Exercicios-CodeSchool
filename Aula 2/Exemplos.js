let nomes = ["Alana","Alèxia","Samanta","Thiago","Odirlei",]
//           0       1           2           3       4

// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[2]);
// console.log(nomes[3]);
// console.log(nomes[4]);


// for (let contador = 0; contador < nomes.length; contador++) {
//     const cadaElemento = nomes[contador];
//     console.log(cadaElemento);
// }


// nomes.forEach(cadaElemento =>{
//     console.log(cadaElemento);
// })

// nomes.forEach((cadaElemento,posicao )=>{
//     console.log(posicao,cadaElemento);
// })

// nomes.forEach((cadaElemento,i )=>{
//     console.log(i,cadaElemento);
// })


// const frutas = ["Pera","Uva","Maca","Salada Mista"]

// // for (let contador = 0; contador < frutas.length; contador++) {
// //     const cadaElemento = frutas[contador];
// //     console.log(contador, cadaElemento);
// // }

// frutas.forEach(cadaElemento =>{
//     console.log(cadaElemento);
// })


let salario = 1000

while (salario < 5000) {
    salario = salario += 100; // salario = salario + 100; "isso e a mesma coisa"

    console.log("O salario ainda è R$" + salario);
}