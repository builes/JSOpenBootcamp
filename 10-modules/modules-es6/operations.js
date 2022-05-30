//Forma de exportar en es6

export default function suma(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function eleva(a, b) {
  return a ** b;
}

export function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

//cada archivo puede tener solo un unico export default
// El elemento que exportamos con export defaul lo podemos importar en otro modulo con el nombre que queramos
// Los Otros elementos que solo tieen export los importamos con {nombreFuncion}
// Podemos exportar lo que queramos(funciones, objetos, clases, variables etc...)
