function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var NumSinRepetir = [];
  for (let i = 0; i < numeros.length; i++) {
    if (NumSinRepetir.includes(numeros[i])){
      var numeroRepetido = numeros[i];
    }else {
      NumSinRepetir.push(numeros[i]);
    }
    
  }
  return numeroRepetido;
}



module.exports = encontrarElementoRepetido;