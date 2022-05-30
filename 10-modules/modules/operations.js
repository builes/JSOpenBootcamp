function suma(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function eleva(a, b) {
  return a ** b;
}

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

//Forma de exportar anterior a es6
module.exports = {
  suma,
  multiply,
  eleva,
  factorial,
};
