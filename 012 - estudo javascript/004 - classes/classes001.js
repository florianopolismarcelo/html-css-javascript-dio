const prompt = require("prompt-sync")({ sigint: true });

class animal {
  nome;
  idade;

  descrever() {
    console.log(
      `Meu nome é ${this.nome}, sou uma gatinha levada e tenho ${this.idade} anos de idade.`
    );
  }
}

const safira = new animal();
safira.nome = "Safira";
safira.idade = 2;

const natasha = new animal();
natasha.nome = "Natasha";
natasha.idade = 3;

//console.log(safira)
//console.log(natasha)
safira.descrever()
natasha.descrever()
