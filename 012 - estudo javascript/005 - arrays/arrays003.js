const prompt = require("prompt-sync")({ sigint: true });


//Abaixo é para entender a necessidade de estrutura de repetição

const notas = []

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);


const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]
console.log(soma / notas.length)
console.log(soma / 5)

