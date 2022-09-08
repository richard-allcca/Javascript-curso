// ejemplo de como exportar una constante
export const PI = Math.PI;

//ejemplo exportar variables
export let nombre = 'Richard'
let pasword = 'qwerty'

/******   DEFAULT  ********  */

//? EXPORT DEFAULT solo se pueden usar una vez y puedes aplicar default al momento de declarar o crear una funcion o clase luego de la palabra export,y EXPORT DEFAULT con las variables  o constanes, primero las declaras luego exportas
export default function saludar() {
  console.log('hola soy una función exportada');
}

/* let variable = 'primero me creas luego me exportas'
export default variable */

export class clase {
  constructor() {
    console.log('soy una clase, luego de exportarme crea una instancia para poder ver mi contenido o usar mis metodos');
  }
}