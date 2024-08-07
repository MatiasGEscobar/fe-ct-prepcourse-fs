function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var sumaarray = 0;

  for (let i = 0; i < arrayOfNums.length; i++) {
    sumaarray += arrayOfNums[i];    
  }
  return sumaarray;
}

module.exports = agregarNumeros;
