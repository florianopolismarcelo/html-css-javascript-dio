const prompt = require("prompt-sync")({ sigint: true });

const notas = [];
notas.push(5);
notas.push(10);
notas.push(10);

let soma = 0;

for (i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}

const media = soma / notas.length;
console.log(`Sua média é ${media.toFixed(1)}`);
