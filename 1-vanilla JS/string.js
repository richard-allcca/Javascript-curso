`STRINGS`.length //es una propiedad que te dice cuantos caracteres tiene un strings

  .trim() //podar le quita los espacios en blaco a todo lo que esta dentro de " "
  .toUpperCase() // convierte en mayuscula el texto
  .tolowerCase() //de uso frecuente en PROMPT para corregir respuestas en general

  .indexOf(); //para encontrar la "POCISION" , de una letra detro de una string

let profesor = "richard";
profesor.indexOf("r");

let profesor2 = "richard"; //para buscar letra repetida [adaptalo segun tu necesidad el +1]
console
  .log(profesor2.indexOf("r", profesor.indexOf("r") + 1))

  .lastIndexOf(); //para encontrar la pocision de una letra dentro de un strings te da la ubicacion en numero desde el final

let profesor3 = "richard";
console
  .log(profesor3.lastIndexOf("r"))

  .includes(); //para verificar si un elemento esta dentro de un array retorna un "BOLEANO" y puede recibir un 2° parametro con la ubicación desde donde empezar la busqueda

let inscritos = ["juan ", "freddy ", "richard ", "july", "liz"];
let asistentes = ["juan ", "richard ", "liz"];
const user = document.getElementById(users);
let turno = 0;

for (let i = 0; i < inscritos.length; i++) {
  let inscrito = inscritos[i]; //para igualar el contenido segun su posicion con [i]
  if (asistentes.includes(inscrito)) {
    turno++;
    users.innerHTML += `<p>bienvenido ${inscrito} eres el numero ${turno}<br></p>`;
  }
}

startsWith(); //pregunta si el strings empieza con algun texto o caracter, ademas puede recibir como segundo parametro la ubicación desde donde empezar hacer la busqueda

document
  .write(saludo.startsWith())

  .endsWith(); // pregunta si el strings termina con algun texto en especifico

document
  .write(saludo.endsWith()) //pregunta si el strings termina con algun texto en especifico

  .replace(origin, replace); //para reemplazar un strings

let saludo = "hola mundo";
document
  .write(saludo.replace("mundo", "richard"))

  .split(); /*dividir puede convertir un string en substring  en el parametro indicado hara la separacion aun sea un espacio vacio */
let saludo2 = "hola mundo";
document.write(saludo2.split("o"));
document.write(saludo2.split("")); //si no pones nada ni espacio entre las ´´ separara letra x letra
document
  .write(saludo2.split("")[3]) //te permite ubicar una posicion dentro del string que creaste con el split anterior

  .substring(); //me permite extraer el texto de un strings desde la ubicacion que le de () hasta donde le indiques
"hola mundo".substring(4); // si luego del indicador le pones un numero negativo extrae hacia atras
("mundo"); //resultado
"hola " //resultado si es negativo el segundo numero

  .slice() /* Slice, como su nombre indica, toma un “trozo” de un array, indicado por un índice de inicio y un índice
                    final (NO INCLUIDO) Slice no modifica el array original y hace una copia “superficial”  */
  [
    // Ejemplos con números
    // Tomar los n primeros elementos
    (0, 1, 2, 3, 4, 5, 6, 7, 8)
  ].slice(_, 5)
  [
    // [0,1,2,3,4]

    // comienzo y final del slice
    (0, 1, 2, 3, 4, 5, 6, 7, 8)
  ].slice(3, 5)
  [
    // [3,4]

    // Tomar elementos del final
    (0, 1, 2, 3, 4, 5, 6, 7, 8)
  ].slice(-2);
// [7,8]

`CAPITALIZAR TEXTO`;
const capitalizar = (texto) => {
  let palabras = texto.split(" ");
  palabras.forEach((palabra, idx) => {
    palabras[idx] =
      palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });
  return palabras.join(" ");
};
