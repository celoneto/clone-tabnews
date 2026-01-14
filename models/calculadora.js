function somar(numero1, numero2) {
  if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
    return 'Erro';
  } else if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
    console.log('Vazio')
    return 'Erro';
  }
  return numero1 + numero2;
}
exports.somar = somar

function subtrair(numero1, numero2) {
  return numero1 - numero2;
}
exports.subtrair = subtrair

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}
exports.multiplicar = multiplicar

function dividir(numero1, numero2) {
  if (numero2 === 0) {
    return 'Erro'
  }
  return numero1 / numero2;
}
exports.dividir = dividir 