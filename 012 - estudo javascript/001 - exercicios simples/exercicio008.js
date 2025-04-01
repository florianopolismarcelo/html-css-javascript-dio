const prompt = require("prompt-sync")({ sigint: true });
/*
08) Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:

1 - Preço do etanol.
2 - Preço da gasolina.
3 - O tipo de combustivel que est´ano seu carro.
4 - Gasto médio de combustivel do carro por km.
5 - Distância em km da viagem.

imprima no console o valor que será gasto para realizar esta viagem.
*/

const distanciaEmKm = prompt("Digite a distância percorrida: ");
const tipoCombustivel = prompt("Digite o tipo de combustivel: [ Etanol ou Gasolina ] = ");

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 12;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === "Etanol") {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2));
}

