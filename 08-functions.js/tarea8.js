function returnTrue() {
  return true;
}

function asincrona() {
  setTimeout(() => {
    console.log("Hola soy una promesa");
  }, 5000);
}

asincrona();
