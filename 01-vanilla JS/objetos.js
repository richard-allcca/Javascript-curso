// =================================================================
//? THIS
// =================================================================
/*  dentro de un objeto 
con una funcion declarada puedes llamar una propiedad usando ${this.edad}
pero con una funcion Arrow expresada o asignada a una variable usa ${this[edad]}  */

const objeto = {
  nombre: "richard",
  apellido: "allcca",
  edad: 38,

  // ===============================
  //? function declarada usa THIS normal
  // ===============================
  saludar: function saludar() {
    console.log(`hola mi nombre es ${this.nombre}`);
  },
  // ===============================
  //? Arrow function toman el scope superior por eso THIS no les funciona
  // ===============================
  pregunt: () => {
    console.log(`que edad crees que tengo? ${this[edad]}`);
  },
};

objeto.saludar(); //usando this.propiedad de forma normal
objeto.pregunt(); //usando this[propiedad] con corchetes

// =================================================================
//? AGREGAR propiedades y valores a un objeto
// =================================================================
objeto.nombre = "richard";

// =================================================================
//? ELIMINAR propiedad de un objeto
// =================================================================
delete objeto.propiedad;
delete objeto["propiedad"];

// =================================================================
//? BUSCAR en un objeto
// =================================================================
Object.keys(nameObjeto);
// devuelve un array con todos las propiedades(key) enumerables y propias(no de la  cadena de prototipos) de un objeto o.

Object.values(nameObjeto);
// devuelve una matris con todos los valores de los key en el obj

Object.getOwnPropertyNames(nameObjeto);
// devuelve una matriz que contiene  el o los  nombres  de las propiedades de un objeto que buscas en el parametro.

nameObject.hasOwnProperty("nombre");
// pregunta si el objeto contiene  el o los  nombres  de las propiedades de un objeto que buscas en el parametro.

Object.hasOwn(objeto, "id");
// ! falta probar disponible en 2022

Object.getOwnPropertyDescriptor(objeto, "nombre");
// devuelve una descripción exacta de la propiedad del obj y su valor

// =================================================================
//? COMPARAR Type
// =================================================================
Object.is(nameObjeto);
//  permite comparar dos datos a nivel muy estricto

// =================================================================
//? HERENCIA Asignar propeidades de un obj a otro
// =================================================================
Object.assign(objetoReceptor, objetoDonador);
// Asigna las propiedades de un objeto a otro

// =================================================================
//? ITERAR un objeto
// =================================================================
const obj = {
  name: "richard",
  gustos: ["pc"],
  edad: 36,
};

let resp1 = Object.keys(obj);
console.log(resp1);

let resp2 = Object.keys(obj).map((key) => {
  return `${key} -> ${obj[key]}`;
});
console.log(resp2);

let resp3 = Object.values(obj);
console.log(resp3);

let resp4 = Object.entries(obj).map((entry) => {
  let [key, value] = entry;
  return { key, value };
});
console.log(resp4);
