const arr = [1, 2, 3, 4, 5, 6];

//foreach
arr.forEach((el) => console.log(el));

//---------------------------------------------------//-----------------------------------

console.log(
  "metodos find y findIndex, estos metodos se usan para buscar elementos en listas"
);
//El metodo find itera hasta que encuentra la condicion
//El metodo find index nos devuelve el indice de lo que buscamos

let clientes = [
  { id: 1, nombre: "Ada" },
  { id: 2, nombre: "Katrina" },
  { id: 3, nombre: "Dayana" },
  { id: 4, nombre: "Pamela" },
  { id: 5, nombre: "Michelle" },
];

//El metodo find itera hasta que encuentra una condicion que cumple lo buscado
//retorna solo un elemento y es el primero que encuentre
//en caso de que no encuentre ningun elemento que cunpla la condicion retorna undefined
let cliente = clientes.find((cliente) => {
  return cliente.id === 3;
});

console.log(cliente);

// Metodo reduce
const friends = [
  { name: "Fernando", age: 25 },
  { name: "Maya", age: 28 },
  { name: "Yerli", age: 27 },
];

//vamos a sumar las edades de el array friends

const suma = friends.reduce((accum, current) => {
  return accum + current.age;
}, 0);

console.log(suma);

const numbers = [1, 2, 3, 4, 5];

const sumaNumbers = numbers.reduce((accum, current) => {
  return accum + current;
});

console.log(sumaNumbers);

//------------------------------------------------//-------------------------------------

//ordenar listas con el metodo sort, este array muta el original
const nums = [2, 8, 6, 4, 9, 15, -3];

//Asi invertimos un array
nums.sort((a, b) => {
  return -1;
});
console.log(nums);

// si a - b es menor que 0, se sitúa a en un indice menor que b. Es decir, a viene primero.
// Si a - b retorna 0, se deja a y b sin cambios entre ellos
// Si a - b es mayor que 0, se sitúa b en un indice menor que a

//Asi ordenamos un array de menor a mayr
nums.sort((a, b) => {
  return a - b;
});

console.log(nums);

//Aca ordenaremos el array friends de edad menor a mayor
friends.sort((a, b) => a.age - b.age);
console.log(friends);

//comparar listas
// .every(callback)  todos los elementos del array deben cumplir la condicion para que retorne true
// .some(callback) con algun elemento que cumpla la condicion retorna true

//aca verificaremos si todos los elementos de nums son > 0
let result = nums.every((num) => num > 0);
console.log(result);

//para comparar si todos los elementos de una lista son iguales lo podemos hacer con every

//--------------------------------------------------//-------------------------------------------

//encadenamiento de metodos
//Aca vamos a multiplicar cada elemento del array por 3 y luego vamos a retornar solo los numeros pares
//Primero se ejecuta el metodo que pongamos primero, en este caso el map y luego el fiter
const newNums = nums.map((n) => n * 3).filter((n) => n % 2 === 0);
console.log(newNums);
