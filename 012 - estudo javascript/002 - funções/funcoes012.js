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
function aplicarDesconto(valor, desconto) {
  return Number(valor  - Number( valor * Number(desconto / 100)))
}

function aplicarJuros( valor, juros) {
  return Number(valor  + Number( valor * Number(juros / 100)))

}

const valorDoProduto = prompt("Digite o valor do produto: ");
const formaDePagamento = prompt(
  " [ Digite (1) para pagamento a vista no débito, (2) para a vista dinheiro ou pix, (3) para 2 vezes, (4) acima de 2x ]: "
);

if (Number(formaDePagamento == 1)) {
  console.log("Valor do produto = R$" + valorDoProduto + " reais e com 10% de desconto fica: R$" + aplicarDesconto(Number(valorDoProduto),Number(10)) + " reais")
} else if (Number(formaDePagamento == 2)) {
  console.log("Valor do produto = R$" + valorDoProduto + " reais e com 15% de desconto fica: R$" + aplicarDesconto(Number(valorDoProduto),Number(15)) + " reais")
}
 else if (Number(formaDePagamento == 3)){
  console.log("Valor do produto parcelado em 2x = R$" + valorDoProduto + " se preferir selecione outra forma de pagamento e tenha desconto!!! ")
  // console.log(Number(valorDoProduto));
} else {
  console.log("Valor do produto = R$" + valorDoProduto + " reais e com 10% de juros fica: R$" + aplicarJuros(Number(valorDoProduto),Number(10)) + " reais")
}