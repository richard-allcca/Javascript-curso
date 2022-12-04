// =================================================================
//? EXPRESIONES REGULARES
// =================================================================
// son una secuanecia de caracteres que forma un patron de busqueda, usada para busqueda de patrones de cadena de caracteres

let cadena =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error amet illum quo perspiciatis soluta officiis delectus, at odio voluptas nesciunt quibusdam possimus voluptates. Quis in dolores, ea eaque laudantium ad beatae explicabo laboriosam pariatur corporis minus est blanditiis, labore ex hic animi quo impedit iusto reiciendis rem debitis placeat perferendis!";

// =================================================================
//? forma 1 para busqueda con expresiones regulares
let expReg = new RegExp("lorem", "ig"); // la bandera ( i ) evita que tome en cuenta mayusculas o minusculas ( g ) para que no se detenga en el 1° resultado y continue

// =================================================================
//? forma 2 para busqueda con expresiones regulares
let expReg2 = /lorem/gi;

// test retorna un valor boleano q indica si existe o no un patron en la cadena de busqueda
console.log(expReg.test(cadena));
// exec devuelve un array con  resultado de la busqueda
console.log(expReg2.exec(cadena));
`NOTA 
estas expresiones utilizalas con el metodo match() revisa el ejemplo y busca la info en documentacion en w3schools`;

// ===============================
1; //? EJEMPLOS
// ===============================

const contarTexto = (cadena = "", palabra = undefined) => {
  // ingresa la cadena donde buscar, "palabra" el el parametro de busqueda
  if (!cadena) {
    return console.log("no has ingresado una cadena valida");
  }
  if (!palabra)
    return console.warn(`No has ingresado 
  palabra a procesar`);

  regex = new RegExp(palabra, "g");
  if (regex.test(cadena)) {
    console.info(
      `La palabra "${palabra}" se repite "${
        cadena.match(regex).length
      }" veces dentro de la frase`
    );
  } else {
    return console.warn("La palabra no existe dentro de la frase");
  }
};
contarTexto("hola mundo adios mundo", "mun");
contarTexto("", "mundo");
contarTexto("hola mundo adios mundo", "io");
contarTexto("hola mundo adios mundo", "mundo");

// ==============================================================
//? Programa una función que elimine cierto patrón de caracteres de un texto dado,
// ==============================================================
//  miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminaPatron = (cadena = "", patron = undefined) => {
  !cadena
    ? console.warn("No ingreso la cadena, revise")
    : patron === undefined
    ? console.warn("No ingreso el patron revise")
    : patron === ""
    ? console.warn("No ingreso el patron revise")
    : !RegExp(patron, "g").test(cadena)
    ? console.error("El patron no existe")
    : console.info(cadena.replace(new RegExp(patron, "g"), ""));
};

eliminaPatron();
eliminaPatron("");
eliminaPatron("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminaPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "kjkjhk");
eliminaPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
