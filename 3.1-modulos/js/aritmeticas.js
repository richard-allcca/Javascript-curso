

// ejemplo de importar funciones debes anteponer "export" en cada función
const sumar = (a, b) => {
  return a + b;
}
const restar = (a, b) => {
  return a - b;
}

let datos = {
  public: "Your Public Stripe Key",
  secret: "Your Secret Stripe Key"
}

//? ejemplo de como englobar funciones en un solo objeto para exportar en bloque
export const Aritmetica = {
  sumar,
  restar,
  datos
}



// export class Clase {
//   constructor() {
//     console.log('soy una clase exportada ');
//   }
// }


// /* ******************************************************* */

// //TODO no se puede hacer una exportacion por default de una variable ya sea const o let  - primero la declaras luego la exportas
// let hello = 'hello, con let primero se declara luego se exporta'
// // export default hello
// const hola = 'hola, constante primero se declara luego de exporta'
// // export default hola