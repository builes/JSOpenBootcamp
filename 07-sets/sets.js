//los sets no permiten valores repetidos
// Es un conjunto no ordenado de datos no se puede acceder a travez del indice
//Cuando creamos un set debemos de pasarle como argumento un iterable

//Asi creamos un conjunto
const set1 = new Set([1, 2, 3, 2, "hola"]);
console.log(set1);

const set2 = new Set("hola como estas");
console.log(set2);

//metdos
set1.add(5); //asi agregamos un elemento al set

set1.delete("hola"); //Asi eliminamos un elemento del set

console.log(set1.has(1)); //asi vemos si un elemento esta o no en el array

console.log(set1.size); //Asi vemos cuantos elementos tiene el conjunto

//podemos recorrer un set con un foreach

//podemos convertir un set en array asi
const arr = [...set1];
console.log(arr);
