function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length===0){
    return null;
  }

    
    const min = Math.min(...numeros); // Encontrar el número mínimo y máximo en el array
    const max = Math.max(...numeros);
    
    
    const sumaEsperada = (max * (max + 1)) / 2 - ((min - 1) * min) / 2; // Calcular la suma esperada de la secuencia completa
    
    
    const sumaActual = numeros.reduce((acum, num) => acum + num, 0); // Calcular la suma de los elementos presentes en el array
    
    
    const numeroFaltante = sumaEsperada - sumaActual; // Calcular la diferencia, que será el número faltante
    
    
    if (numeroFaltante === 0 || numeroFaltante < min || numeroFaltante > max) { // Verificar si efectivamente hay un número faltante
      return null;
    }
    
    return numeroFaltante;

}

module.exports = encontrarNumeroFaltante;