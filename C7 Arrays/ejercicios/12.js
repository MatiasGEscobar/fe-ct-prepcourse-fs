function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var mayúsculas = array.map((str) => {return str.toUpperCase();});
  return mayúsculas;
}

module.exports = convertirStringAMayusculas;
