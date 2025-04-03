function incrementarJuros(valor, percentualJuros) {
  const valorDeAcrecimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrecimo;
}
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 30));
console.log(incrementarJuros(100, 50));
console.log(incrementarJuros(100, 90));
