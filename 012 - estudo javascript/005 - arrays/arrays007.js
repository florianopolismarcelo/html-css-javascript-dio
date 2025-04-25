const prompt = require("prompt-sync")({ sigint: true });


// Crie um programa que dado um número imprima a sua tabuada

const numero = 3;
for (i = 0; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${i * numero}`);
}
