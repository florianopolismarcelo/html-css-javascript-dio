const prompt = require("prompt-sync")({ sigint: true });

class animal {
  nome;
  idade;
  anoDeNascimento;
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2025 - idade;
  }
  descrever() {
    console.log(
      `Meu nome é ${this.nome}, sou uma gatinha levada e tenho ${this.idade} anos de idade.`
    );
  }
}

const safira = new animal("Safira", 2);
const natasha = new animal("Natasha", 4);

console.log(safira);
console.log(natasha);
