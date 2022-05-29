const person = {
  name: "Mauricio",
  lastName: "Builes",
  age: 29,
  height: 160,
  isDeveloper: true,
};

const person1 = {
  name: "Alejandro",
  lastName: "Marin",
  age: 32,
  height: 175,
  isDeveloper: false,
};
const person2 = {
  name: "Fernando",
  lastName: "Naranjo",
  age: 25,
  height: 173,
  isDeveloper: false,
};

const { age } = person;

const persons = [person, person1, person2];

const sortPersons = persons.sort((a, b) => a.age - b.age);
console.log(sortPersons);
