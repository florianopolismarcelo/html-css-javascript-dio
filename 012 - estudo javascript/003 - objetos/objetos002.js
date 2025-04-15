const prompt = require("prompt-sync")({ sigint: true });

const safira = {
  nome: 'Safira a gatinha',
  idade: 2 
};

safira.altura = 0.70;
delete safira.idade;
console.log(safira);


 
