const prompt = require("prompt-sync")({ sigint: true });
/*
010) Indice de massa corporal é um critério da organização mundial de saúde para dar uma indicação sobre a condição do peso a uma pessoa adulta.

Forma IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
- Abaixo de 18.5 abaixo do peso
- Entre 18.5 e 25 peso normal.
- Entre 25 e 30 acima do peso.
- Entre 30 e 40 obeso.
- Acima de 40 obesidade grave.
*/

function calculaImc(peso, altura) {
  return Number(peso) / Math.pow(altura, 2);
  //return Number(peso) / (Number(altura) * Number(altura));
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return `Seu IMC: ${imc.toFixed(1)} você está abaixo do peso`;
  } else if (imc >= 18.5 && imc < 25) {
    return `Seu IMC: ${imc.toFixed(1)} você está com peso normal`;
  } else if (imc >= 25 && imc < 30) {
    return `Seu IMC: ${imc.toFixed(1)} você está acima do peso`;
  } else if (imc >= 30 && imc <= 40) {
    return `Seu IMC: ${imc.toFixed(1)} você está obeso`;
  } else {
    return `Seu IMC: ${imc.toFixed(1)} você está com obsidade grave`;
  }
}

//Abaixo função anonima "main" (principal), ela é colocada entre parênteses.
(function () {
  const peso = prompt("Digite seu peso: ");
  const altura = prompt("Digite sua altura: ");

  const imc = calculaImc(Number(peso), Number(altura));
  console.log(classificarImc(imc));
})()

