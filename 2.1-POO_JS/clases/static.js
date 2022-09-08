//? atributos y metodos STATIC  solo se pueden invocar desde la clase no de instacimiento

class Persona {
  static nombre = "richard";
  static contador = 0;

  constructor() {
    Persona.contador++;
  }

  static get getNombres() {
    return this.nombre;
  }
}

console.log(Persona.nombre);
console.log(Persona.contador);

let obj = new Persona();
console.log(Persona.contador);

class Person extends Persona {}

let obj2 = new Person();
console.log(Person.contador);
