const prompt = require("prompt-sync")({ sigint: true });

//Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

const numeros = [56, 5, 90, 177, 186, 88, 92, 64];
for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];

  if (numero % 2 === 0) {
    console.log(`${numero}`);

  }
}
