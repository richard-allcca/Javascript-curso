// Un objeto proxy, (son objetos con comportamiento de clase ) y sus metodos y validaciones son atravez de un handler
const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

// necesario un manejador para ocuparse de metodos y validaciones dentro un set()
const manejador = {
  // recibe 3 parametros el objeto,propiedades valores
  set(obj, prop, valor) {
    // validamos que las propiedades sean las mismas del obj inicial(persona)
    if (Object.keys(obj).indexOf(prop) === -1) {
      // en el obj(persona) busca el indice de la prop = retorna el indice si existe y un -1 si no
      return console.error(
        `la propiedad ${prop} no existe en el objeto persona `
      );
    }
    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor)
    ) {
      return console.error(
        `La propiedad "${prop}" sólo acepta letras y espacios en blanco `
      );
    }
    // en caso de que este metodo "set" este vacio, este fragmento indica que los valores ingresados a una nueva instancia se guarden para esta sin modificar el obj original(persona)
    obj[prop] = valor; //el obj en cuestion en su propiedad dale el valor de...
  },
};

//la instancia del obj proxy recibe dos parametros el obj, y el menejador
const jon = new Proxy(persona, manejador);
// ejemplo de como ingresar datos ala nueva instancia
jon.nombre = "Richard";
jon.apellido = "Allcca";
jon.edad = 38;
jon.twitter = "@richard";
//? la instacia y el obj original mantienen vinculación en sus cambios
console.log(jon);
console.log(persona);
// toUpperCase(persona);

// ===============================================================================
//? metodo get de proxi

let arr = ["richard", "alan", "pedro"];

let handler = {
  //   ? metodo de cabezon
  // get: function(target,prop){
  //   return target[prop]
  // }
  //  ? metodo de jon
  get(target, prop) {
    return prop === "length" ? prop.length : target[prop].toUpperCase();
  },
};

let proxi = new Proxy(arr, handler);

for (let i = 0; i < proxi.length; i++) {
  console.log(proxi[i]);
}

console.log(proxi[0]);
