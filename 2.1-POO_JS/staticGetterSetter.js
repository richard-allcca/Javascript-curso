class Origen {
  constructor(nombre) {
    this.nombre = nombre;
    this.raza = null;
  }

  saludo() {
    console.log(`hola soy un ${this.nombre}`);
  }
  // =================================================================
  //? ATRIBUTO ESTATICO
  // =================================================================
  // este atributo se crea fuera del constructor porque estando dentro del constructor no se podria imprimir el contenido de este atributo con un metodo estatico que se puede ejecutar sin crear una nueva instancia, esa es la razon para crear un atributo estatico de tipo obtenedor con  "get"

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animacion",
      "Biography",
      "comedi",
      "crimen",
      "Documentari",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mistery",
      "News",
      "Reality-Tv",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  // =================================================================
  //? METODO STATIC
  // =================================================================
  // se puede ejecutar sin necesidad de crear una instancia usando el nombre d la clase

  static generosAceptados() {
    return console.info(
      `lista de generos aceptados ${Origen.listaGeneros.join(", ")} `
    );
  }

  // =============================================================================
  //? METODOS  GET
  // =============================================================================
  // esto permite obtener el valor y modificar el valor de una propiedad

  get getRaza() {
    return this.raza; // lo unico que hace este metodo (funcion) es obtener el valor de la propiedad
  }

  // =============================================================================
  //? METODO SET
  // =============================================================================
  //  genera un metodo establecedor que modifica la propiedad de una clase

  set setRaza(raza) {
    // aqui si recibe parametro porque modifica o le da valor a una propiedad
    this.raza = raza; // this.vida recibe el valor de "raza " como parametro
  }
}

// ================================================================================
//?  IMPORTANTE - los metodos get y set solo se ejecutan en las instancias de una clase
// ================================================================================

const perro = new Origen();
/* fuera de la clase se puede hacer lo siguiente aunque sean metodos (funciones) en js se les trata como propiedades */
console.log(perro.getRaza); // con el metodo obtenedor llamar el valor de la propiedad
perro.setRaza = "chusco"; // para modificar el valor de una propiedad obtenida con el metodo "get" hazlo como si fuera una propiedad no un metodo (funcion)
console.log(perro.getRaza); //obtener el valor de la propiedad luego de modificarla aunque sea funcion o metodo se le trata como prpiedad
