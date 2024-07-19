function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var acu = 1

  for (let i = a; i<= b; i++) {
    acu= acu*i;
  }

  if (acu === -0) { // Chequeo para convertir -0 a 0
    acu = 0;
  }

  return acu; // se deja fuera del bucle para que se termine la iteracion

}

module.exports = productoEntreNúmeros;