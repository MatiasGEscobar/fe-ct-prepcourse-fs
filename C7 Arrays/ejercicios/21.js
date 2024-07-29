function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  var meses = [];
  var mesesPedidos = ["Enero", "Marzo", "Noviembre"]; // Declaramos un arreglo con los meses que queremos buscar
  
  
  for (let i = 0; i < array.length; i++) { // Recorremos el arreglo de entrada
    
    if (mesesPedidos.includes(array[i])) { // Si el mes actual está en el arreglo de meses pedidos, lo añadimos al arreglo de meses
      meses.push(array[i]);
    }
  }
  
  if (meses.includes("Enero") && meses.includes("Marzo") && meses.includes("Noviembre")) { // Verificamos si hemos encontrado todos los meses pedidos
    return meses;
  } else {
    
    return "No se encontraron los meses pedidos"; // Si no, retornamos el mensaje de error
  }
}

module.exports = mesesDelAño;
