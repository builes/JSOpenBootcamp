let str = " hola soy un texto";

// backticks
let nombre = "Mauricio";
let saludo = `hola ${nombre}`;
console.log(saludo);

//metodos comunes de strings
// .length asi obtenemos la longitud del string
console.log(saludo.length);

// .slice(inicio, fin)
console.log(saludo.slice(-1)); // ultimo caracter del string
console.log(saludo.slice(0, saludo.length)); // desde el inicio hasta el final
console.log(saludo.slice(0, 5)); // Desde el inicio hasta el indice 4
console.log(saludo.slice(6)); //Desde el indice 6 hasta el final
console.log(saludo.slice(6, -1)); //Desde el indice 6 hasta el penultimo elemento

//reemplazar elementos
// .replace()  o  .replaceAll()
// con .replace()  podemos usar regex

// .toLowerCase()
// .toUpperCase()

// + operador de concatenacion entre strings o .concat()

// .trim()   borra espacios al inicio y al final

// indexof(elemento buscado)  nos retorna el indice de lo que buscamos
