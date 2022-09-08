// =================================================================
//? DESTRUCTURACION ARRAY 
// =================================================================
const persona = ["richard", "allcca", "llano"];

let [nombre, apellido] = persona;

console.log(nombre, apellido, edad);

// ACCEDER  a un valor en una pocición especifica, coloca comas "," para saltear pociciones
let [, , segundApellido,] = persona

// =================================================================
//? ACCEDER A elementos anidados de un ARREGLO y usar OPERADOR SPREAD que lista los demas colores en un arrar diferente
// =================================================================

let colores = ["rojo", ["verde", "amarillo"], "morado", "celeste", "purpura"];

let [primerColor, [, saltoDeColor], ...demasColores] = colores;

console.log(primerColor, saltoDeColor, demasColores)

//* VALORES POR DEFECTO usa un valor por defecto con "=" como en los parametros de una función y en los objetos funciona igual

// =================================================================
//? DESTRUCTURACION OBJETO
// =================================================================
/*   te puede poner las propiedades de un OBJETO en una varaible por cada elemento
cuando destructuras un objeto tienes que usar como nombre de variables los nombres de las propiedades */

const empleado = {
  nombre: "richard",
  apellido: "allcca",
  apellido2: "llano",
};

let { nombre, apellido, apellido2 } = empleado;
// TODO si queires usar un nombre deferente al original puedes ponerle un "alias" ejemplo "nombre:alias" TAMBIEN puedes inicializar varaibles nuevas en una destructuración con alias incluido si necesitas

console.log(nombre, apellido, apellido2);

// =================================================================
//? ACCEDER A LA PROPIEDAD O METODO de un objeto anidado
// =================================================================
let autoGuardado = {
  archivo: {
    cursor: {
      linea: 7,
      columna: 16,
    },
  },
  primerNivel: {
    archivo: "index.html",
    segundoNivel: {
      linea: 8,
      columna: 20,
      tercerNivel: {
        nivel: 3,
      },
    },
  },
};
// primero accedes al nombre del objeto original, luego al objeto anidado dentro de otro con el nombre de su objeto contenedor, ejemplo "archivo:ultimoArchivo"
let {
  primerNivel: { segundoNivel: ultimoArchivo },
} = autoGuardado;
console.log(ultimoArchivo);

// ACCEDER a un tercer nivel de anidado
let {
  primerNivel: {
    segundoNivel: { tercerNivel: superNode },
  },
} = autoGuard;
console.log(
  superNode
)

// ===============================================================================
//? DESTRUCTURACION DE PARAMETROS
// ===============================================================================
const crearJugardor = (nickname, { hp, sp, clase } = { hp: 100, sp: 50, clase: "mago" }) => {
  //  destructura el parametro o los parametros a ingresar con "{}" y puedes ponerle valores por defecto

  console.log(nickname, hp, sp, clase);
  // codigo para crear un jugador
};

crearJugardor("Strider", {
  hp: 100,
  sp: 50,
  clase: "mago",
});
