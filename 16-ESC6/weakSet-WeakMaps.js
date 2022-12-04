/* WeakSet */

//solo pueden almacenar referencias debiles (las llaves-keys deben ser de tipo objeto)
// otro detalle es que no son iterables y los recolectores de basura los pueden aliminar si estan en desuso si tienen  valor  (null) seran eliminados por el navegador de forma automatica
// no tienen keys() values()
// si envias algun valor que no este entre [] este valor se descompone y se eliminan sus duplicados

const ws = new WeakSet();

//creas objetos en una variable para luego asignarlas a un WeakSet con ".add()" 
let valor1 = { valor1: 1 };
let valor2 = { valor1: 2 };
let valor3 = { valor1: 3 };

//se asigna valores luego de inicializarla con el ".add()" SOLO ACEPTAN OBJETOS
ws.add(valor1);
ws.add(valor2);
ws.add(valor3);

//para verificar el contenido de algun valor usa ".has()"
ws.has(valor1);

//para eliminar alguna referencia
ws.delete(valor3);

// TODO una propiedad unica de WeakSet es que si algun valor se nulifica, automaticamente elimina la referencia de esas variables
setTimeout(() => {
  valor1 = null;
  valor2 = null;
  valor3 = null;
}, 5000);
//al ser null eliminara esas referencias del conjunto WeakSet, de forma automatica

/* ***************************************************** */

/* WeakMaps */
//para iniciarlizarla es igual que WeakSet
const wm = new WeakMap();

//declara variables con llaves para ingresarle contenido
let llave1 = {};
let llave2 = {};
let llave3 = {};

//para ingresar valores a un WeakMap usa ".set()"
wm.set(llave1);
wm.set(llave2);

//verificar si existe algun contenido ".has()"
wm.has(llave3);

//para obtener el valor de una llave especifica usa ".get()"
wm.get(llave1);

// para eliminar referencias o valores de un WeakMap
wm.delete(llave2);
