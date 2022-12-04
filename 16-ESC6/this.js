// =================================================================
//? THIS
// =================================================================
// this - si no esta en algun scope es windows

this.nombre = "Contexto Global";
console.log(this.nombre);

// en un function simple this apunta al contexto superior 'windows'
function imprimir() {
  console.log(this.nombre);
}
imprimir();

// =================================================================
// this en una function a su vez dentro de un obj - apunta al contexto padre 'obj'
const obj = {
  nombre: "Contexto Objeto",
  imprimir: function () {
    console.log(this.nombre);
  },
};
obj.imprimir(); // this apunta al scope padre que es obj

// =================================================================
// imprimir de la 'ln 12' es asignado a un objeto y se convierte en su scope
// imprimirArrow - tiene una funcion flecha y este salta su scope hasta windows
const obj2 = {
  nombre: "Contexto Objeto 2",
  imprimir, //? asignado aqui su scope ahora es objeto 2
  imprimirArrow: () => {
    //? Arrow function salta hasta windows como scope
    console.log(this.nombre);
  },
};
obj2.imprimir();
obj2.imprimirArrow();

// =================================================================
// return - this dentro de una funcion con valor asignado respeta el scope de este
// return - function con THIS dentro sin valor asignado a this salta hasta windows
// return - Arrow function con this dentro toma el scope superior 'Persona'
function Persona(nombre) {
  this.nombre = nombre; //? valor asignado

  //return console.log(this.nombre); //? retorna el this normal

  return function () {
    console.log(this.nombre, 22); //? sin valor asignado dentro salta hasta windows
  };

  //return ()=> console.log(this.nombre)//? ARROW toma el scope padre 'Persona'
}
let richard = new Persona("Richard");
richard();

// =======================================================
// ? Preguntas de entrevistas sobre THIS
// =======================================================

//? Pregunta 1: Variable vs propiedad
// Qué registros en la consola del siguiente fragmento de código:

const object = {
  message: "Hello, World!",

  getMessage() {
    const message = "Hello, Earth!";
    return this.message;
  },
};

console.log(object.getMessage()); // What is logged?
// =======================================================

//? Pregunta 2: Nombre del gato
// Qué registros en la consola del siguiente fragmento de código:

function Pet(name) {
  this.name = name;

  this.getName = () => this.name;
}

const cat = new Pet("Fluffy");

console.log(cat.getName()); // What is logged?

const { getName } = cat;
console.log(getName()); // What is logged?

// =======================================================

//? Pregunta 3: Saludo retrasado
// Qué registros en la consola del siguiente fragmento de código:

const object = {
  message: "Hello, World!",

  logMessage() {
    console.log(this.message); // What is logged?
  },
};

setTimeout(object.logMessage, 1000);

// =======================================================

//? Pregunta 4: Método artificial
// ¿Cómo se puede llamar a la función para que se registre?logMessage"Hello, World!"

const object = {
  message: "Hello, World!",
};

function logMessage() {
  console.log(this.message); // "Hello, World!"
}

// Write your code here...

// =======================================================

//? Pregunta 4: Método artificial
// ¿Cómo se puede llamar a la función para que se registre?logMessage"Hello, World!"

const object = {
  message: "Hello, World!",
};

function logMessage() {
  console.log(this.message); // "Hello, World!"
}

// Write your code here...

// =======================================================

//? Pregunta 5: Saludo y despedida
// Qué registros en la consola del siguiente fragmento de código:

const object = {
  who: "World",

  greet() {
    return `Hello, ${this.who}!`;
  },

  farewell: () => {
    return `Goodbye, ${this.who}!`;
  },
};

console.log(object.greet()); // What is logged?
console.log(object.farewell()); // What is logged?

// =======================================================

//? Pregunta 6: Longitud complicada
// Qué registros en la consola del siguiente fragmento de código:

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method(callback) {
    callback();
  },
};

object.method(callback, 1, 2);

// =======================================================

//? Pregunta 7: Llamar a argumentos
// Qué registros en la consola del siguiente fragmento de código:

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method() {
    arguments[0]();
  },
};

object.method(callback, 1, 2);

// =======================================================
//? Respuestas: https://dmitripavlutin.com/javascript-this-interview-questions/
