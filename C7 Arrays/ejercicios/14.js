function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  var cantidad =[]

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' && array[i]>10)
      cantidad.push(array [i])
  }

  return cantidad.length
}

module.exports = contarElementosMayoresA10;
