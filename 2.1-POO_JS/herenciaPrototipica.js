// =================================================================
//? PROTOTIPO ORIGINAL 
// =================================================================
function Animal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;

}
// ASIGNAR METODOS solo puedes usar funciones declaradas (sobre todo si quieres usar this para variables en template string)
Animal.prototype.sonido = function () {
  console.log('hago un sonido porque soy un animal');
}
Animal.prototype.saludo = function () {
  console.log(`hola soy: ${this.nombre} guau guau !!!`);
}

// =============================================================================
//? HERENCIA FORMA 1 
// =============================================================================
// declara dentro las propiedades con su origen (Animal ) 

function Perro1(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}
Perro1.prototype = new Animal();//esta linea es la que produce la herencia
// Perro1.prototype.constructor = Perro1;

// ==============================================================================
//? HERENCIA FORMA 2 
// ==============================================================================
// declara propiedades de forma normal  usa prototipe por fuera para heredar propiedades y metodos de modelo original (Animal)

function Perro2(nombre, genero, tamanio) {
  /* estos son una forma de hacerlo que yo probe  */
  this.nombre = nombre;
  this.genero = genero;
  this.tamanio = tamanio;
}
Perro2.prototype = new Animal();
// aun te falta mas conocimiento sobre crear este constructor
Perro2.prototype.constructor = Perro2;

// ==============================================================================
//? SOBREESCRIBIR METODOS  
// ==============================================================================
// aqui sobre escribe un metodo heredado de su prototipo sin afectar al original 

Perro2.prototype.saludo = () => {
  console.log('hola  guauu guauu !!');
}

// ==============================================================================
//? AGREGAR METODOS
// ==============================================================================

Perro1.prototype.molestia = () => {
  console.log('no molestes grrr!!!');
}

/* RESULTADOS */
const trunks = new Perro1('trunks', 'macho', 'pequeño');
const lola = new Perro2('lola', 'hembra', 'mediano')

console.log(trunks);
console.log(lola);