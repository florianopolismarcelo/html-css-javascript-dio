const prompt = require("prompt-sync")({ sigint: true });
/*
03) O número é par?
*/

const numero = prompt("Digite um número: ");
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numeroDivisivelPor5) {
  console.log(`${numeroDivisivelPor5}: o número ${numero} é divisivel por 5.`)
}else{
  console.log(`${numeroDivisivelPor5}: o número ${numero} não é divisivel por 5.`)
}
