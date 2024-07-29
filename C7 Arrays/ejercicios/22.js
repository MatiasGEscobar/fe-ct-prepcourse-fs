function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var mult = [0,1,2,3,4,5,6,7,8,9,10];
  var tabla = []

  for (let i = 0; i < mult.length; i++) {
    tabla.push (mult[i]*6);
    
  }
  return tabla;
}

module.exports = tablaDelSeis;
