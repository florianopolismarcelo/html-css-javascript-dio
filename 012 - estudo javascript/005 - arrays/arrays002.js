const prompt = require("prompt-sync")({ sigint: true });

const alunos = ['Marcelo', 'Safira', 'Alexandre']

alunos.push('Souza') // adiciona no final do array
alunos[4] = "Maria" // adiciona na posição obs: se tiver na posição 4 vai substituir

console.log(alunos)
console.log(alunos.pop()) // remove o último da lista
console.log(alunos)
console.log(alunos.shift()) // remove o primeiro da lista
console.log(alunos)
