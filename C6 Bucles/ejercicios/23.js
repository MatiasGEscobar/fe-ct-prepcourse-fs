function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
   // Si el número es menor o igual a 1, no es primo
   if (numero <= 1) {
    return false;
  }
  
  // Si el número es 2 o 3, es primo
  if (numero === 2 || numero === 3) {
    return true;
  }

  // Si el número es divisible por 2 o 3, no es primo
  if (numero % 2 === 0 || numero % 3 === 0) {
    return false;
  }

  // Revisar divisores desde 5 hasta la raíz cuadrada del número
  for (let i = 5; i * i <= numero; i += 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      return false;
    }
  }

  // Si no encontramos divisores, el número es primo
  return true;
}

module.exports = esNumeroPrimo;
