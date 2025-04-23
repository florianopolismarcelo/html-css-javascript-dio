const prompt = require("prompt-sync")({ sigint: true });

/*Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura))
Instancie uma pessoa clamada José que tenha 70kg de peso e 1,75 de altura e peça para José dizer o valor do seu IMC
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  calcularImc() {
    return this.peso / (this.altura * this.altura)
  }
}

const marcelo = new Pessoa('Marcelo', 47, 1.75)
console.log(marcelo)
console.log(`IMC = ${marcelo.calcularImc()}`)

const safira = new Pessoa('Safira', 2, 0.75)
console.log(safira)
console.log(`IMC = ${safira.calcularImc()}`)

