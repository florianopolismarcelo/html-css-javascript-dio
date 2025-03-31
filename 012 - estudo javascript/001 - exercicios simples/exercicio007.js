const prompt = require("prompt-sync")({ sigint: true });
/*
07) Estrutura condicional com else if.
*/

const numero = prompt("Digite um número: ");
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero == 0) {
  console.log(`O número ${numero} é inválido.`);
} else if (numeroDivisivelPor5) {
  console.log(`O número ${numero} é divisivel por 5.`);
} else {
  console.log(`O número ${numero} não é divisivel por 5.`);
}
