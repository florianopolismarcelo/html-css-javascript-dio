const prompt = require("prompt-sync")({ sigint: true });

//Função escreva seu nome


function escrevaMeuNome(nome) {
  console.log(`${nome}`);
}
escrevaMeuNome("Marcelo");

function verificaIdade(idade) {
  if (idade >= 18) {
    console.log(`Você tem ${idade} anos e você é maior de idade`);
  }else {
    console.log(`Você tem ${idade} anos e você é menor de idade`);

  }
}
verificaIdade(47)
