const prompt = require("prompt-sync")({ sigint: true });

const animal = {
  nome: "Safira",
  idade: 2,

  descrever: function () {
    console.log(`Meu nome é ${this.nome}, sou uma gatinha levada e tenho ${this.idade} anos de idade.`);
  },
};
animal.nome = 'Natasha'
animal.idade = 3
animal.descrever();
