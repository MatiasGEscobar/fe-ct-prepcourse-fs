function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  if (numero <= 0) { // Si el número es menor o igual a 0, no puede ser una potencia de 2
    return false;
  }
  
 
  while (numero > 1) {  // Mientras el número sea mayor que 1
  
    if (numero % 2 !== 0) {   // Si el número no es divisible por 2, no es una potencia de 2
      return false;
    }
   
    numero = numero / 2;  // Dividir el número por 2
  }
  
  return true;  // Si llegamos a 1, el número es una potencia de 2
  
}

module.exports = esPotenciaDeDos;
