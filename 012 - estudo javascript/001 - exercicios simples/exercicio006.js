const prompt = require("prompt-sync")({ sigint: true });
/*
06) Verificando se o número é válido ou inválido.
*/

const numero = prompt("Digite um número: ");
const numeroValido = (numero > 0 && numero <= 100);

if (numeroValido) {
  console.log(`${numeroValido}: O número ${numero} é válido.`)
}else{
  console.log(`${numeroValido}: O número ${numero} não é válido, digite um número maior que 0 ou menor igual a 100.`)
}
