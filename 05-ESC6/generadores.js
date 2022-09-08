/* la función generadora tiene 2 detalles el "*" luego de la "function" y el "yield" para cada elemento de la función  */
function* iterable() {
  yield "hola";
  console.log("hola consola");
  yield "hola2";
  console.log("Seguimos con más instrucciones de nuestro código");
  yield "hola3";
  yield "hola4";
}

let iterador = iterable();
// para itererar en cada elemento de la función generadora
for (const y of iterador) {
  console.log(y);
}

// para poder guardar todos lo elementos iterados de una funcion generadora en un array
const arr = [...iterable()];
console.log(arr);

// ====================================================0
// 1° metodo sin optimizar y con sus partes entendibles
let iterador = iterable();

console.log(iterador.next());
console.log(iterador.next());
// cada log imprime un yield de la función generadotar
