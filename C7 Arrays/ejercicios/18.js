function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var suma = 0;
  var promedio = 0;

  for (let i = 0; i < resultadosTest.length; i++) {
     suma = suma + resultadosTest[i];    
  }
  promedio = suma / resultadosTest.length;
  return promedio;
}

module.exports = promedioResultadosTest;
