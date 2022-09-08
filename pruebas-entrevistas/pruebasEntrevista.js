// ========================================================================
//?  create a object with 'hello' method than writes 'hola <name>' in the console
// ========================================================================
const saludo = {
  nombre: "richard",
  metodo: () => console.log(`hola ${saludo.nombre}`),
};

saludo.metodo();

// ========================================================================
//? how would you make the name inmutable?
// ========================================================================
//? se deberia usar con 'use stric pero me funciona bien sin eso

Object.freeze(saludo);

saludo.nombre = "alan";

saludo.metodo();
