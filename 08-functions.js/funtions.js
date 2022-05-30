// funciones con numero de parametros indeterminados

//al ponerle el parametro ...nums lo que hace es que todos los parametros que le enviemos los almacrna en una lista
function sumar(...nums) {
  return nums.reduce((accum, current) => accum + current);
}

console.log(sumar(1, 2, 3));

//arrow fuctions, para ser llamadas debe ser despues de declarada

// sobrecarga de metodos
// Funciones con el mismo nombre pero con diferente signature
