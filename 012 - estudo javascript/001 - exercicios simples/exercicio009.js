const prompt = require("prompt-sync")({ sigint: true });
/*
09) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

Media = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recupeção;
- Média acima de 7, passou de semestre;

*/
const nota1 = prompt("Digite a primeira nota do aluno: ");
const nota2 = prompt("Digite a segunda nota do aluno: ");
const nota3 = prompt("Digite a terceira nota do aluno: ");
const media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

if (media < 5) {
  console.log(`Aluno com média: ${media.toFixed(1)} está reprovado`);
} else if (media >= 5 && media <= 7) {
  console.log(`Aluno com média: ${media.toFixed(1)} está em recuperação`);
} else {
  console.log(`Aluno com média: ${media.toFixed(1)} está aprovado`);
}
