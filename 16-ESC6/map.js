//son metodos que nos permite tener una colección de objetos tipo "llave:valor " con el detalle de que el nombre de las propiedades en el objeto son string 

//para inicializarla 1° metodo, deben ser array dentro de array, llave:valor entre "" separado de " , "
const mapa2 = new Map([["perro", "trunks"]["edad", "4"]]);

// 2do metodo de inicializarla
let mapa = new Map();

//para agregar elementos
mapa.set("nombre", "richard");
mapa.set("apellido", "Allcca");

//para saber la cantidad de elementos contenidos
mapa.size;

//para evaluar si existe un elemento 'llave'
mapa.has("nombre");

//para obtener los valores
mapa.get("apellido");

//para establecer valores
mapa.set("edad", "28");

// para eliminar propiedades
mapa.delete("datoParaBorrar");

//para recorrer un map usa 'for of' 'for each'
for (const [key, value] of mapa) {
  console.log(`llave: ${key}, Valor: ${value} `);
}

//para destructurar un mapa usa ".keys()" para las llaves y ".values()" para los valores, luego de destructurarlas guardarlas en una variable
const llavesMapa = [...mapa.keys()];
const valoresMapa = [...mapa.values()];

console.log(llavesMapa);
console.log(valoresMapa);

//TODO El método PROMISE.ALL(ITERABLE) 

/* el dato sobre el uso de este metodo esta en el archivo html de la clase de david Promersas_paralelo */