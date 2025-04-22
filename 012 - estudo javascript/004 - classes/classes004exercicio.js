const prompt = require("prompt-sync")({ sigint: true });

/*Crie uma classe para representar carros.
Os carros possuiem uma marca, uma cor e um gasto médio de combustível por kilomentros rodados.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }
}

const uno = new Carro("Fiat", "Prata", 1 / 12);
console.log(uno);
