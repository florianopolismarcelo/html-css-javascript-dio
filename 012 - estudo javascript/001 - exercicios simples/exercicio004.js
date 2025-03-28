const prompt = require("prompt-sync")({ sigint: true });
/*
04) O número é par ou impar?
*/

const numero = prompt("Digite um número: ");

if ((numero % 2) === 0) {
  console.log(`O numero ${numero} é par.`)
}else{
  console.log(`O numero ${numero} é impar.`)
}
