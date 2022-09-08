//? las llaves es porque lo recibe todo como un objeto, muy importante poner en el from de tu importacion el "./" y la extencion del archivo ".js"

//? las exportaciones pueden recibir un alias o nuevo nombre a la hora de su importación colocando luego del nombre "as" y el nuevo nombre que deseas

//* ejemplos de importaciones
// import saludar, { PI, nombre, clase } from "./constantes.js";
// console.log(PI);
// console.log(`Modulos en Javascript de ${nombre}`);

// saludar(); //TODO como puedes ver luego del "import" se agrega "saludar "

//* ejemplo de clase, importada la clase crea una nueva instancia para usarla
// const saludoClase = new clase();
// saludoClase; // si ya la clase tiene un "log" aqui solo nombra la clase y se dispara el msj

// ejemplo de una función exportada
import { Aritmetica } from "./aritmeticas.js";
// import { Module } from "module";
//ejemplo de ejecucion de una funcion sola
// console.log(sumar(4,4));
//ejemplo de ejecucion de una funcion englobada
console.log(Aritmetica.sumar(4, 4));
console.log(Aritmetica.datos);
