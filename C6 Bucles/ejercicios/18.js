function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var acu = 1
  for (let i = a; i = b; i++) {
    acu= acu*i
  }
  return acu

}

module.exports = productoEntreNúmeros;