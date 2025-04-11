const prompt = require("prompt-sync")({ sigint: true });

//Função escreva seu nome


function escrevaMeuNome(nome) {
  return `${nome}`;
}

function verificaIdade(idade) {
  if (idade >= 18) {
    console.log(escrevaMeuNome('Marcelo ') + 'tem ' + idade + ' anos é maior de idade');
  }else {
    console.log(escrevaMeuNome('Marcelo ') + 'tem ' + idade + ' anos é menor de idade');
   

  }
}
verificaIdade(47)
