function cuadradoPromise(value) {
  // console.log("hola");
  if (typeof value !== "number") {
    return Promise.reject(
      `Error,el valor "${value}" ingresado no es un número `
    );
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}
cuadradoPromise(6).then((res) => console.log(res));
// =================================================================
//? Async Await
// =================================================================
const prueba = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 1000);
  });
};
// Async con try catch y promesas de inicio, con el profesor fernando las usamos en el mismo campo
const asincronia = async () => {
  try {
    console.log("Inicio Async Función");

    let obj = prueba(2);
    console.log(`Async Función: ${obj.value} - ${obj.result}`);

    obj = prueba(5);
    console.log(`Async Función: ${obj.value} ${obj.result}`);
  } catch (error) {}
};

async function funcionAsincronaDeclarada() {
  try {
    console.log("Inicio Async Funcion");

    let obj = await cuadradoPromise(3);
    console.log(`Async Función: ${obj.value} - ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async Función: ${obj.value} - ${obj.result}`);
  } catch (err) {
    console.log(err);
  }
}
funcionAsincronaDeclarada();
