try {
  let numero = "y";

  if (isNaN(numero)) {
    throw new Error("el caractér introducido no es un Número"); // throw new Error solo puede recibir un string
  }

  console.log(numero * numero); // esto solo es para que si la condicion es correcta te retorne esto
} catch (error) {
  console.log(`se produjo el siguiente error: ${error}`);
} finally {
  console.log("este bloque se ejecuta siempre exista o no un Error");
}
