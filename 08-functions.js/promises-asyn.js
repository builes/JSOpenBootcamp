const miPromesa = new Promise((resolve, reject) => {
  //Si esta todo correcto
  if (true) {
    resolve();
  } else {
    reject();
  }
});

miPromesa
  .then(() => console.log("Se ha ejecutado de forma correcta"))
  .catch(() => console.log("Error"))
  .finally(() => console.log("yo siempre me ejecuto"));

// Funciones asincronas
function myAsync() {}

//Funciones generadoras
function* generaId() {
  let id = 0;
  while (true) {
    id++;
    yield i;
    if (id === 10) {
      return id;
    }
    yield id;
  }
}

const gen = generaId();
