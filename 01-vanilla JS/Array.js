// ========================================================================
//? AGREGAR Y QUITAR elementos
// ========================================================================
// unshift() -> AL INICIO agregar
let arr3 = [1, 2, 3, 4]
arr3.unshift(1)
//.shift() -> AL INICIO quitar
let arr4 = [1, 2, 3, 4]
arr4.shift(1)
//.push() -> AL FINAL agregar
let arr1 = [1, 2, 3, 4]
arr1.push(5)

//.pop() -> AL FINAL quitar
let arr2 = [1, 2, 3, 4]
arr2.pop(5)
//.splice() -> LUGAR desde donde?,cuantos elimina,que agregas...?
let arr5 = [1, 2, 3, 4]
arr5.splice(2, 1, 'hola')
//.slice() -> REBANAR de donde- hasta donde?, sin modificar el original 
let arr6 = [1, 2, 3, 4]
arr6.slice(2, 3)
//.join() -> UNIR es el contrario de split que divide este une convirtiendo todo en string
let arr1 = ['hola', ' mundo', ' ingrato']
document.write(arr1.join(''))
let arr2 = [1, 2, 3, 4, 5, 6]
console.log(arr2.join('')); //lo que pongas dentro de las comillas sera la separacion de los elementos

// ======================================================================== 
//? REEMPLAZAR CONTENIDO DE UN ARRAY CON FILL
// ========================================================================
//.fill() recibe 3 parametros 1.contenido 2.desdeDonde 3.hastaDonde

let arreglo = [1, 2, 3];
const resp = arreglo.fill('a', 0, 1);
console.log(resp);

// ========================================================================
//? ORDENAR: 
// ========================================================================
// reverse() sort() concat()

// .sort() 
arr1 = [20, 50, 10, 40,]
document.write(arr1.sort((a, b) => a - b))

arr3 = [1, -2, 3]
console.log(arr3.sort((a, b) => a - b))

// orden aleatorio
arr5 = [56, 15, 84, 33, 42, 61, 51, 12, 83]
console.log(arr5.sort((a,b)=> Math.random()-0.5))


// .reverse() ->ordena al reves los elementos de un array
let arr7 = [1, 2, 3, 4]
arr7.reverse()

// .concat() -> para unir array - OJO une 2 ARRAY en uno solo
arr1.concat(arr2)
// une dos arrays los convierte en STRINGS 

// ======================================================================== 
//? OBTENER NUMERO MAYOR O MENOR 
// ========================================================================
//  ejemplo con ingreso directo de valores
Math.min(30, 40, 50, 60);
Math.max(30, 40, 50, 60);

//  ejemplo con rest y array
let number = [30, 40, 50, 60];
console.log(Math.min(...number));
console.log(Math.max(...number));

// ========================================================================
//? BUSQUEDA DE ELEMENTOS 
// ========================================================================

// busqueda aleatoria
const numbers = [1, 2, 3, 4, 5, 6, 7]
const randomIndex = Math.floor(Math.random() * numbers.length )
console.log(randomIndex);
const letras = ['a','b','c','d','e','f']
const randomIndex = Math.floor(Math.random() * letras.length )
console.log(letras[randomIndex]);

// .indexOf() retorna el indice o un -1 si no lo encuentra
arr6 = [56, 15, 84, 33, 42, 61, 51, 12, 83]
console.log(arr6.indexOf(42))//aqui pide la ubicacion del numero 42

// .find(callback) busca valores espeficificos, undefined si no lo encuentra
arr7 = [56, 15, 84, 33, 42, 61, 51, 12, 83]
console.log(arr7.find(dato => dato > 84))/* aqui te pide el numero mayor de 50 */

// .findIndex() -> se recomienda ordenarlos primero, retorna el indice
arr8 = [56, 15, 84, 33, 42, 61, 51, 12, 83]
console.log(arr8.sort((a, b) => a - b))// primero los ordenamos(opcional) 
console.log(arr8.findIndex(pos => pos > 33))// pide el indice de 33

// includes(desde,hasta)
let array = ["richard", "fraddy", "abel"];
const busqueda = (dato) => dato.includes("richard");
console.log(busqueda(array))

//some
let num = [3, 4, 5, 6, 7]
const resp = num.some(el => el === 4)
console.log(resp);

// every
let num = [3, 4, 5, 6, 7]
console.log(num.every(el => (el === 'hola')))

let num = ['richard', 'ruth', 'javier', 'alvaro', 'angel']
console.log(num.every(el => el.length >= 5))
//comprueba si todos los elementos tienen al menos x cantidad de letra

let num = ['richard', 'ruth', 'javier', 'alvaro', 'rangel']
document.write(num.every(el => el.includes('r')))
//comprueba si TODOS! tienen el elemento "r" 


// ======================================================================== 
//? ELIMINAR DUPLICADOS DE UN ARRAY CON SPREAD OPERATOR
// ========================================================================
// new Set() -> no permite datos duplicados 
arr8 = [56, 15, 84, 33, 42, 61, 51, 15, 56, 12, 83]
arr8.sort((a, b) => (a - b))//primero los ardenamos con sort(opcional)
const removeDuplicate = arr => [...new Set(arr)]
// elimina los duplicados con "new Set" y spread OPERATOR

// ======================================================================== 
//? RECORRER UN ARRAY
// ========================================================================
// iteradores normales

Object.keys(nanmeArray)// devuelve los elementos del array en orden
Object.values(nameArray)// devuelve los valores del array en orden
Object.entries(nameArray)// devuelve todos el contenido del array en orden 

// for()

let arrPrueba1 = ['a', 'b', 'c', 'd', 'e', 'f']
for (let i = 0; i < arrPrueva.length; i++)
  document.write(arr[i] + ' ')

// for(of) 
// recorre el array y retorna lo que pidas 

let arrPrueba2 = ['a', 'b', 'c', 'd', 'e', 'f']
for (const iterator of arrPrueva) {
  console.log(iterator);
}
console.log(recorrer)

// forEach()
// usa 3 parametros pero puede solo usar 1 o 2, te da el elmento,indice,y array completo

let number = [30, 40, 50, 60]
number.forEach((element, i, number) => {
  document.write(element + ' ')
  document.write(i + ' ')
  document.write(` viene de ${number}<br>`)
});

//* Ejemplos de usar FOREACH  siempre recibe un callback

// estructura basica para aprender
let num = [3, 4, 5, 6, 7]
num.forEach((el) => {
  el *= el
  console.log(el)
})

//sacar el cuadrado de cada elemento
let num = [3, 4, 5, 6, 7]
num.forEach((el) => console.log(el * el))


// ======================================================================== 
//? MAP - REDUCE  -> crean un nuevo array no modifican el original
// ========================================================================
// https://www.youtube.com/watch?v=qx2jXtKGfNY&list=RDCMUC60KKQRVWFY7ec_-1jTLflg&index=2


//* .reduce()
// tiene su propio archivo en esta carpeta vanilla
// link de explicacion de reduce
https://www.youtube.com/watch?v=CsFwUX0hU2M


// ==============================================================
//? FLAT para mostrar el contenido de Arrays anidados en uno solo
// ==============================================================
const edades = [1, 2, 3, 4, [5, 6, 7, [8, 9, 10]]];

// metodo simple para anidados hasta segundo nivel
console.log(edades.flat());

// para anidados de mas de 2 niveles usa Infinity como parametro 
console.log(edades.flat(Infinity));

// ==============================================================
//? FLATMAP 
// ==============================================================
// para obtener datos de un objeto en un solo Array al mismo tiempo (yo prefiero usar template string con maps)

const productos = [
  { nombre: 'producto 1', precio: 20 },
  { nombre: 'producto 2', precio: 30 },
  { nombre: 'producto 3', precio: 40 },
  { nombre: 'producto 4', precio: 50 }
]

const resultadoFlatmap = productos.flatMap((productos) => `${productos.nombre} ${productos.precio}`)
console.log(resultadoFlatmap)

const resultadoMap = productos.map(productos => `${productos.nombre} ${productos.precio}`)
console.log(resultadoMap)

// ==============================================================
//? FROMENTRIES y ENTRIES convierte el contenido de un abjeto en array y bicecersa
// ==============================================================

//* Object.entries()
// convertir un objeto en Array
const obj = {
  cabeza: 'header',
  pie: 'footer'
}
console.log(Object.entries(obj));

//* Object.fromEntries()
// convierte un array en objeto
const producto = new Map([
  ['nombre', 'producto 1'],
  ['precio', 20]
]);

console.log(Object.fromEntries(producto));

// ==============================================================
//? PARA UNIR Arrays sin crear uno nuevo solo modificando 1 original
// ==============================================================

array.prototype.push.apply(array1, array2)

// ==============================================================
//? PARA CONVERTIR un pseudo array no iterable en iterable 
// ==============================================================

Array.from()
// crea array a partir de Maps Sets, String, Iterables etc