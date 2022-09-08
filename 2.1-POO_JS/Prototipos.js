// =================================================================
//? POO - PROGRAMACON OTRIENTADA A OBJETOS
// =================================================================
/*
  clases  => modelo a seguir
  objetos => es una instancia de una clase (instancia es un copida del modelo a seguir)
    -atributos => es una caracteristica del objeto (variables dentro de un objeto)
    - metodos => son las acciones que un objeto puede realizar ( son funciones dentro de un objeto)
*/
// =================================================================
//? FUNCION CONSTRUCTORA NORMAL 
// =================================================================

function Animal(nombre, raza) {//para pasarle propiedades debes usar parametros
  this.nombre = nombre;
  this.raza = raza;

  this.sonido = function () {
    console.log('hago un sonido porque soy un animal');
  }
}

const trunks = new Animal('trunks', 'chusco');

console.log(trunks);

// =================================================================
//? FUNCION CONSTRUCTORA OPTIMIZADA 
// =================================================================
//* agregar un metodo al prototipo del objeto por fuera para un mejor rendimiento`

function Animal(nombre, raza) {
  // todoas las propiedades tienen que ir colgadas de un this cuando creas un prototipo
  this.nombre = nombre;
  this.raza = raza
}
// le agregamos un metodo al prototipo de la funcion constructora pero desde afuera 
Animal.prototype.sonido = function () {
  console.log('hago un sonido porque soy un animal');
}

// Creando una instancia (un nuevo objeto usando como base al objeto Animal )
const trunks = new Animal('trunks', 'chusco');

// resulado trunks con las mismas propiedades y metodos que Animal
console.log(trunks);

// =================================================================
//? OBJETO PROTOTIPO 
// =================================================================
//* los objetos tambien puden tener metodos

let gato = {
  sonido() {
    return 'maullido..'
  },
  chillido() {
    console.log('miuauu')
  }
}
let perro = {
  sonido: 'guauuu'
}

// =================================================================
//? INSTANCIA DE UN OBJETO PROTOTIPO
// =================================================================
const angora = Object.create(gato);

console.log(angora.sonido())
console.log(Object.getPrototypeOf(angora))

// =================================================================
//? CAMBIAR EL PROTOTIPO DE UN OBJETO
// =================================================================
Object.setPrototypeOf(angora, perro)
// ahora preguntamos si el prototipo de angora sigue siendo un gato
console.log(Object.getPrototypeOf(angora) === gato);

// =================================================================
//* los objetos tambien pueden usar el metodo "SUPER" 
//* para acceder a las propiedades o metodos del objeto prototipo o padre 
// =================================================================

let persona = {
  saludar() {
    return 'hola';
  }
};
let amigo = {
  saludo() {
    return super.saludar() + ", saludos!!!"
  }
}
// con esto le asignamos el prototipo de persona para amigo
Object.setPrototypeOf(amigo, persona);
// aqui se imprime el obj amigo pero con el metodo saludar del prototipo
console.log(amigo.saludar());