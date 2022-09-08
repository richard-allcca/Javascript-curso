/* PROTOTIPO ORIGINAL con CLASES */
class Animal {

  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;

  }
  // METODOS  en clases se pueden agregar por dentro 
  sonido() {
    console.log('hago un sonido porque soy un animal');
  }
  saludo() {
    console.log(`hola soy: ${this.nombre} guau guau !!!`);
  }
};
// =================================================================
//? HERENCIA - instancia heredando de una clase original prototipo
// =================================================================

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    //con el metodo super() mandas a llamar al constructor de la clase padre
    super(nombre, genero);
    this.tamanio = tamanio;
  }
  /* MODIFICAR METODOS  */
  sonido() {
    console.log('yo ladro porque soy un perro');
  }
  saludo() {
    console.log(`hola soy ${this.nombre} guauu guauu 2 !!`);
  }
}

const Trunks = new Animal('trunks', 'macho');
const Lola = new Perro('lola', 'Hembra', 'Mediana');
