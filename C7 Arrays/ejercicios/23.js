function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  var nuevoNum = [];

  for (let i = 0; i < 10; i++) {
    num += 2;  // Incrementa num en 2
    if (num === i) {  // Verifica si el valor de num es igual a i
      return "Se interrumpió la ejecución";
    }
    nuevoNum.push(num);  // Añade el nuevo valor de num al arreglo
  }

  return nuevoNum;  // Retorna el arreglo con los valores incrementados
}

module.exports = breakStatement;
