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
const peso = prompt("Digite seu peso: ");
const altura = prompt("Digite sua altura: ");
const imc = Number(peso) / Math.pow(altura,2);
//const imc = Number(peso) / (Number(altura) * Number(altura));

if (imc < 18.5) {
  console.log(`Seu IMC: ${imc.toFixed(1)} você está abaixo do peso`);
} else if (imc >= 18.5 && imc < 25) {
  console.log(`Seu IMC: ${imc.toFixed(1)} você está com peso normal`);
} else if (imc >= 25 && imc < 30){
  console.log(`Seu IMC: ${imc.toFixed(1)} você está acima do peso`);
}else if (imc >= 30 && imc <= 40){
  console.log(`Seu IMC: ${imc.toFixed(1)} você está obeso`);
}else{
  console.log(`Seu IMC: ${imc.toFixed(1)} você está com obsidade grave`);
}


