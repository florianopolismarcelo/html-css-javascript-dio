/*
02) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias 
e mostre-a expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.
*/

let idade = 47;
let meses = 3;
let dia = 28;


let quantidadeDias = (365 * idade);
meses = (meses * 30);
quantidadeDias = quantidadeDias + meses + dia;
/*
let quantidadeDias = dia + idade * 365 + meses * 30;
*/
console.log("Quantidade de dias de vida " + quantidadeDias);
