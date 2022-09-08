// =======================================================
//? CALL Y APPLY - SIN PARAMETERS
// =======================================================

this.lugar = "contexto Global";
console.log(this);

function saludar() {
  console.log(`${this.lugar}`);
}
saludar(); //? ejecuta saludar, this toma el valor del contexto padre 'window'

const obj = {
  lugar: "Contexto Objeto",
};

saludar.call(obj); //? ejecuta saludar ln(11) desde el scope de obj ln(14)
saludar.apply(obj);

// =======================================================
//? CALL y APPLY - CON PARAMETERS
// =======================================================
// se diferencian por la forma en q reciben los parametros

function saludarConParametros(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludarConParametros("hola", "Kenai");

// CALL recibe los parametros separados por comas en forma de string
saludarConParametros.call(obj, "hola", "richard con call y params");

// APLY recibe los parametros dentro de un ARRAY
saludarConParametros.apply(obj, ["hola", "richard con apply y params"]);

// =======================================================
//? CALL Y APPLY - CON THIS o NULL
// =======================================================

//  NULL obtiene sus valores del contexto global(window) IGNORANDO los demas parametros
saludarConParametros.call(this, "hola", "richard con call y this");
saludarConParametros.apply(this, ["hola", "richard con apply y this"]);

// THIS obtiene sus valores del contexto superior inmediato IGNORANDO los parametros
saludarConParametros.call(this, "hola", "richard con call y null");
saludarConParametros.apply(this, ["hola", "richard con apply y null"]);

// =======================================================
//? BIND
// =======================================================
// te ayuda a enlazar contextos diferentes (funciones,clases,objtos)

const objetivo1 = {
  nombre: "Richard",
  saludar: function () {
    console.log(`Hola ${this.nombre} `);
  },
};

objetivo1.saludar();

const objetivo2 = {
  nombre: "oscar",
};

const otraPersona = {
  saludar: objetivo1.saludar.bind(objetivo2), //? saludar recibe la propiedad de otro obj y esta la enlaza con el scope de un tercer obj
};

//!  mas info
//  https://www.youtube.com/watch?v=OZ02GSH9QkY&ab_channel=VidaMRR
