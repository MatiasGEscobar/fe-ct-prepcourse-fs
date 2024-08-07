function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var stringinvertido = texto.split('').reverse().join ('');
  return stringinvertido;
}

module.exports = invertirTexto;
