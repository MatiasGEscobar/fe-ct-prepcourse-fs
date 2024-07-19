function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  
  var contador = 0;
  
  do {
    num += 5; // Incrementa n en 5
    contador++; // Incrementa el contador en 1
  } while (contador < 8); // Repite mientras el contador sea igual que 8
  
  return (num); // Imprime el valor final de n
}

module.exports = doWhile;