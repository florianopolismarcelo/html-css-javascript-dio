const prompt = require("prompt-sync")({ sigint: true });

//Função escreva seu nome


const nome = prompt("Digite seu nome: ");
const idade = prompt("Digite sua idade: ");
console.log(`[[[(Olá: ${nome})]]]`);

function verificaIdade() {
  if (idade >= 18) {
    console.log(`Você tem ${idade} anos, é maior de idade.`);
  }else {
    console.log(`Você tem ${idade} anos, é menor de idade.`);
  }
}
verificaIdade();
