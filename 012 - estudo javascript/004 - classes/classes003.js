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
function compararAnimal(ani1, ani2) {
  if (ani1.idade > ani2.idade) {
    console.log(`${ani1.nome} é mais velha(o) que ${ani2.nome}`);
  } else if (ani2.idade > ani1.idade) {
    console.log(`${ani2.nome} é mais velha(o) que ${ani1.nome}`);
  } else {
    console.log(`${ani1.nome} e ${ani2.nome} tem a mesma idade`);
  }
}

const safira = new animal("Safira", 2);
const natasha = new animal("Natasha", 4);

compararAnimal(safira, natasha);
