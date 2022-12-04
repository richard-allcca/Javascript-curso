// =================================================================
//? FUNCIONES
// =================================================================
/*  
ES un fragmento de codigo reutilizable en el que hay un cojunto de instrucciones, PARAMETROS y ARGUMENTOS
algunas funciones no te retornan dato
algunas funciones no te piden datos
algunas son parte de un OBJETO  y se les llama PROCEDIMIENTO 
*/

// =================================================================
//? Funcion DECLARADA
// =================================================================

function saludo(sexo, persona) {
  let saludar = sexo === 'hombre'
    ? 'bienvenido'
    : 'bienvenida'
  return `${saludar} aqui ${persona} `
}
document.write(saludo(prompt('¿eres hombre o mujer?'), prompt('cual es tu nombre')))

// =================================================================
//? Funcion EXPRESADA o Asignada
// =================================================================

const saludo = (sexo, persona) => {
  let saludar = sexo === 'masculino'
    ? 'bienvenido'
    : 'bienvenida'
  return `${saludar} aqui ${persona} `//aqui usamos ${}porque llamamos variables dentro de un string ``
}
document.write(saludo(prompt('dime que sexo eres'.toLocaleLowerCase()), prompt('dame tu nombre')))


// =================================================================
//? FUNCIONES DE FLECHA 
// =================================================================

const cuatro = (nombre, apellido) => {
  if (nombre != null && apellido != null) {
    respuesta = document.write(nombre, apellido)
  } else {
    respuesta = document.write("no ingreso sus datos")
  }
}
console.log(cuatro(prompt('dame tu nombre '), prompt('dame tu apellido')))


//? Ejemplos de funciones en declaraciones CON FLECHAS

let num = [3, 4, 5, 6, 7]

//TODO esta es de una sola linea cuando tiene un return implicito 
num.forEach(el => console.log(el * el))

//TODO aqui lleva 2  parametros por lo tanto necesita parentesis  
num.forEach((a, b) => {
  let total = a + b
  console.log(total)
})

// ===============================
//? FUNCIONES ANONIMAS
// ===============================
/* normalmente se encuentran en callback, en el sgte ejemplo
usamos una funcion general  como console.log etc, y usamos dos parmetros en el primer parametro
una funcion y el 2° es la cantidad de milisegundos` */

setTimeout(() => {
  alert('hola')
}, 3000)


// ===============================
//? FUNCIONES RETORNADAS
// ===============================
/* muy parecio a un anidado pero revisa bien el codigo
esto se hace cuando puede estar todo en 1 linea solo en ese caso no usas { } ` */

const dosomething = x => y => x * y

let a = dosomething(2)(2)
let b = dosomething(3)

console.log((a)(b(3)))

// ===============================
//? FUNCIONES PURAS, no causa efectos secundarios y siempre devuelve el mismo
// ===============================
// valor para los mismos parametros

let a = 'hola'
const saludar = (saludo, persona) => {
  let dato = `${a} ${saludar} `
}
console.log(a, prompt('¿cual es tu nombre'))

/*   SCOPE
es el contexto donde una variable existe */


// ===============================
//? CLOSURES
// ===============================
/* son funciones que se usan como retorno de otras funciones
OJO  te falta practica en este tema repasalo bien */

const padre = () => {
  let saludo = 'hola'

  function hija() {
    // si la funcion 'closure' no tiene una variable asignada y mandas a imprimir una del padre 'no la tomara' y se ira hasta el contexto global
    document.write(saludo + ' ' + prompt(' quien eres?'))
  }
}
padre()//al ejecutar la funcion te da como retorno (resultado) otra funcion 'closures'

/* EJEMPLO   de closures en una función constructora */
function padre(nombre) {
  this.nombre = nombre

  return () => {
    console.log(this.nombre)
  }
}
const hijo = new padre('richard')
hijo()
