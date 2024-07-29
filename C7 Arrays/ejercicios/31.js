function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var arrstring = texto.split('');
  var arrinvertido = arrstring.reverse();
  var stringinvertido = arrinvertido.join ('');
  return stringinvertido;
}

module.exports = invertirTexto;
