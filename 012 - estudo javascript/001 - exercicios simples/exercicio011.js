const prompt = require("prompt-sync")({ sigint: true });
/*
010) Elabore um algoritmo que calcule o que se deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código condição de pagamento:
1 - Á vista débito, recebe 10% de desconto.
2 - Á vista no dinheiro ou pix, recebe 15% de desconto.
3 - Em duas vezes, preço normal de etiqueta sem juros.
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/
const valorDoProduto = prompt("Digite o valor do produto: ");

const formaDePagamento = prompt(
  " [ Digite (1) para pagamento a vista no débito, (2) para a vista dinheiro ou pix, (3) para 2 vezes, (4) acima de 2x ]: "
);

if (Number(formaDePagamento == 1)) {
  console.log(Number(valorDoProduto) - Number(valorDoProduto * 0.1));
} else if (Number(formaDePagamento == 2)) {
  console.log(Number(valorDoProduto) - Number(valorDoProduto * 0.15));
}
if (Number(formaDePagamento == 3)) {
  console.log(Number(valorDoProduto));
} else {
  console.log(Number(valorDoProduto) + Number(valorDoProduto * 0.1));
}
