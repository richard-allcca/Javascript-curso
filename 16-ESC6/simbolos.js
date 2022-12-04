/* Para crear elementos privados dentro de un objeto y sus referencias son unicas nunca seran iguales aunque tengan las mismas descripción */

// 1-funciona como un identificador, como parametro recibe una descripcion en numero o string
const NOMBRE = Symbol()
const SALUDAR = Symbol()
//2- tienes que declararlo antes de usarlo en un objeto
//3- una vez establecido el simbolo es inmutable

const persona = {
   [NOMBRE]: 'Richard'//se usa corchetes para poner un simbolo declarado por fuera, dentro un objeto
}
//4-declarando un metodo, tb se usa "[ ]" en el nombre
persona[SALUDAR] = function (params) {
   console.log('hola');
}

//5-para ejecutar el metodo simbol de un objeto usa "[ ]"
persona[SALUDAR]();

// 6- para VERIFICAR que un simbolo no haya sido creado o no exista previamente o si existe poder usarlo usa "for"

let userID = Symbol.for("userID")
objeto[userID] = '12345'; // agregando contenido al simbolo creado

let userID2 = Symbol.for('userID')// gracias a for del symbol podemos usar el valor de uno en otro 

let id = Symbol.for('id unico')
console.log(Symbol.keyFor(id));

//7- para RECORRER un simbolo primero debes obtener los simbolos que existen dentro de un objeto y luego podrar iterarlo

let id = Symbol.for('richard')//usando "for" podemos hacer posible el trabajar con un simbolo y su contenido

let id2 = id
console.log(Symbol.keyFor(id2)); // luego de psarle el valor de "id" a  "id2" podemos imprimir su contenido gracias a "keyFor"

objeto = {

}
objeto[id] = 'pedro' // con esto le ingresas el simbolo y un valor al objeto 

console.log(Symbol.keyFor(id));// imprime el contenido del simbolo usando "keyFor"

console.log(objeto[id])//gracias a for podemos imprimir id

// con este metod podemos poner todos los simbolos de un objeto en una varaible para poder iterar con ellos
let simbolos = Object.getOwnPropertySymbols(objeto)
console.log(simbolos)
