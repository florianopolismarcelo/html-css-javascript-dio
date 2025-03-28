const prompt = require("prompt-sync")({ sigint: true });
/*
03) O número é par?
*/

const numero = prompt("Digite um número: ");
const numeroPar = (numero % 2) === 0;
console.log(`Você digitou um numero par? Resposta: ${numeroPar}`)
