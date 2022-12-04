// recibe 4 parametros
// 1. acumulador (IMPORTANTE para indicar desde donde inicia a iterar)
// 2. item o elemento actual
// 3. index, indice del element actual
// 4. arreglo iterado
//? usa solo el acumulador y el elemento actual (item) o valor inicial

// ========================================================================
//? metodo para hacer la suma de todos los elementos de un Array
// ========================================================================
let num = [3, 4, 5, 6, 7];
document.write(num.reduce((a, b) => a + b));
//aqui se compara de 2 en 2 y los suma al siguiente numero sucesivamente

// ========================================================================
//? primer metodo normal para buscar
// ========================================================================
const personajes = [
  { id: 1, nombre: "richard", familia: "targeryen", edad: 34 },
  { id: 2, nombre: "freddy", familia: "lannister", edad: 33 },
  { id: 3, nombre: "pedro", familia: "stark", edad: 32 },
];

const compararEdad = (acumulador, personaje) => {
  // los parametros acc, per vienes x default de reduce
  console.log(acumulador);
  if (acumulador > personaje.edad) {
    return acumulador;
  } else {
    return personaje.edad;
  }
};
//? 1° parametro de reduce es una function, 2° el valor inicial
const edadMayor = personajes.reduce(compararEdad, 0);

console.log(edadMayor);

// ========================================================================
//? segundo metodo para buscar con destructuring
// ========================================================================
const compararEdad2 = (acumulador, { edad }) => {
  console.log(acumulador);
  if (acumulador > edad) {
    return acumulador;
  } else {
    return edad;
  }
};
const edadMayorConDestructuring = personajes.reduce(compararEdad2, 0);

console.log(edadMayorConDestructuring);

// ========================================================================
//? Metodo para indexar elementos de un array de objetos
// ========================================================================
let personas = [
  {
    nombre: "thouma",
    edad: 35,
  },
  {
    nombre: "jessica",
    edad: 29,
  },
  {
    nombre: "karla",
    edad: 35,
  },
];
function conteo(myList, property) {
  return myList.reduce(function (acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {}); //? el valor inicial aqui es un obj {}
}
console.log(conteo(personas, "edad")); //ejecutamos la indexación
console.log(conteo(personas, "edad")["jessica"]); //buscamos con el indice

// ========================================================================
//? SUPER Metodo para indexar elementos de un array de objetos
// ========================================================================

const indexed = personas.reduce(
  (acc, el) => ({
    ...acc, // devuelve una copia del acumulador
    [el.nombre]: el, // 1° indexamos con el nombre del el y luego le pasamos el elemento completo
  }),
  {}
);
//? luego de indexed hacemos la busqueda con el nombre
console.log(indexed["karla"]);

// ========================================================================
//? Usar Reduce para convertir un arreglo anidado en uno PLANO
// ========================================================================
const anidado = [1, [2, 3], 4, [5]];

const plano = anidado.reduce((acc, el) => acc.concat(el), []);

console.log(plano);

// ========================================================================
//? reduce()  prototype
// ========================================================================
// prototype
let arr = [1, 2, 3, 4, 5, 6];
Array.prototype.reduceEvil = function (f, init) {
  let result = init ? init : 0;

  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    result = f(result, this[i]);
  }
  return result;
};
const edadMayor2 = arr.reduceEvil((a, b) => a + b);
console.log(edadMayor2);
