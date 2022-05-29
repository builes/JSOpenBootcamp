const obj = {
  id: 4,
  name: "Mauricio",
  lastName: "Builes",
  isDeveloper: true,
  favoriteBooks: ["crime and punishment", "the pillars of the earth"],
  "4-juegos": [1, 2, 3],
};

//Asi accedemos a los atributos entre comillas
console.log(obj["4-juegos"]);

// spread operator, asi hacemos una copia de un objeto
const obj1 = { ...obj };
console.log(obj1);

// destructuring
const { name } = obj;
console.log(name);

// destructuring
const { name: nombre } = obj; //asi le poneos otro nombre a la variable
console.log(nombre);

// destructuring
const { age = 10 } = obj; // En caso de que no encuentre el atributo le podemos dar un valor por defecto
console.log(age);
