`DIFERENCIAS 
  => REST  uno los elementos en un array
  => SPREAD esparce los elementos como si fueran enviados en forma separada`

function saludarRest(saludo, ...nombres) {
  for (i in nombres) {
    console.log(`${saludo} ${nombres[i]}`);
  }
}
function saludarSpread(saludo, ...nombres) {
  for (i in nombres) {
    console.log(`${saludo} ${nombres[i]}`);
  }
}
saludarRest('hola', 'frenando', 'maria', 'richard')
let personas = ['melissa', 'hernando', 'maria'];
saludarSpread("que tal!", personas);

// Otro ejemplo simple 
let partes = ['brazos', 'piernas'];
let cuerpo = ['cabeza', 'cuello', ...partes, 'pies']
console.log(cuerpo);

/* ******************************** */

`PARAMETROS REST 
  permite especificar argumentos independientes que serán combijados en un arreglo
  el return en esta función es importante

    Restricciones: => 
      1° solo puede haber un parametro rest
      2° este debe ir siempre como ultimo parametro
      `

function sumar(a, b, ...c) {
  //TODO - ejemplo para usar en una función normal
  let resultado = a + b

  c.forEach((element) => {
    resultado += element
  });
  return resultado
}
console.log(sumar(1, 5, 9,));

// TODO - cuando no sabes la cantidad de paremetros a recibir usa este ejemplo
const sumar = (...numeros) => {
  let resultado = 0
  for (let i = 0; i < numeros.length; i++) {
    resultado += numeros[i]
  }
  return resultado  // el RETURN te entrega datos de salida y tu decides como usarlos
}
console.log(sumar(1, 2, 3, 4))

/* FUNCION con parametro REST, para crear array sin limite de la cantidad de parametros*/
const cinco = (...meses) => {
  for (let uno of meses) {
    document.write(`${uno}<br>`)
  }
}
cinco("enero", "febrero", 'marzo')

  /* ******************************** */
  `
OPERADOR SPREAD
  permite especificar un arreglo que será separado y cada item enviado será un argumento independiente a la función  

  con este podemos crear nuevas instancias de un obj array o variable totalmente independientes "no solo unirlos" al poner el contenido en otra variable con este operador podemos modificarla sin afectar al origen`

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);

const arr3 = [arr1, arr2];
console.log(arr3); // esto solo te imprime los dos array dentro de uno general que los contiene no los hace uno solo

const arr3 = [...arr1, ...arr2]; // con SPREAD une el contenido de los 2 array en un solo array
console.log(arr3);

`ELIMINAR DUPLICADOS DE UN ARRAY CON SPREAD OPERATOR`

new Set()/* no permite datos duplicados */
arr8 = [56, 15, 84, 33, 42, 61, 51, 15, 56, 12, 83]
arr8.sort((a, b) => (a - b))//primero los ardenamos con sort            
document.write([...new Set(arr8)])/* elimina los duplicados pero el new Set tienes que estar en []*/

/* aqui una funcion con new set para remover duplicados */
const removeDuplicate = arr => [...new Set(arr)]

/* como usarlo con operaciones de math */
let num = [1, 5, 6, 3, 7]
console.log(Math.max(...num))

  `Añadir propiedades a objetos desde otros objetos se usa mas con patron redux`

let persona1 = {
  nombre: 'fernando',
  edad: 33
}
let persona2 = {
  nombre: 'juan',
  edad: 18,
  direccion: 'Residencial Bella Vista',
  conduce: true
}
persona1 = {
  // agrega todas las propiedades del persona 2
  ...persona2,
  // pero manten las que ya tiene
  ...persona1
}

