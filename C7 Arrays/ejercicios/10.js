function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string' && array[i].length >= 5) {
      return array[i];
    }
  }
  // Si no se encuentra ningún string con más de 5 caracteres, devolver null o un valor que indique que no se encontró.
  return undefined;
}

module.exports = obtenerPrimerStringLargo;
