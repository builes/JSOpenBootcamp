const myFunction = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  }

  // el throw es como el return finaliza la fubcion
  throw new Error("El valor debe de ser de tipo numerico");
};

try {
  const doble = myFunction("2");
} catch (error) {
  console.log(error);
} finally {
  console.log("yo siempre me ejecuto");
}

// Errores mas comunes
// SintaxError
// TypeError
// RangeError
// ReferenceError
