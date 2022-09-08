

// EJERCICIO 9 función que obtenga un numero aleatorio entre 501 y 600
const sorteo = (a) => {
  console.log(Math.round(Math.random() * (600 - 501) + 501));
};
sorteo();

/* ********************** */
// EJERCICIO 10  Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capi = (n = 0) => {
  if (!n) {
    return console.error("no ingresaste numero");
  }
  if (typeof n !== "number") {
    return console.error("solo puedes usar numeros");
  }
  n = n.toString();
  let respuesta = n.split("").reverse().join("");

  return respuesta !== n
    ? console.warn(`tu numero invertido es: ${respuesta} y no es capicua`)
    : console.info(
      `Tu número invertido es :${respuesta} y como puedes ver invertido si es capicua `
    );
};


/* ******************** */
//EJERCICIO 11 Programa una función que calcule el factorial de un número(El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.miFuncion(5) devolverá 120.

let numero = parseInt(prompt("De que número quieres ver el factorial?"));
const facto = () => {
  if (numero === undefined) return console.warn("no ingresaste un numero");
  if (typeof numero !== "number")
    return console.error(`el ${numero} NO es un número`);
  if (numero === 0)
    return console.warn(`no puedes usar cero para buscar un número factorial `);
  if (numero === 1) return console.warn(`no puede ser 1. Usa otro número`);
  if (Math.sign(numero) === -1)
    return console.warn("no puede ser un numero negativo");
  /* condicionales */
  let contador = 2;
  let multi = 0;
  for (let i = 1; i < numero; i++) {
    if (multi <= 2) {
      multi = i * contador;
      contador++;
    } else {
      multi *= contador;
      contador++;
    }
    console.log(multi);
  }
  let resultado = multi;
  document.write(resultado);
};
facto();

/* ejemplo del profesor para sacer un factorial */
const factorial = (numero = undefined) => {
  /* aqui pon las validaciones */
  let factorial = 1;
  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }
  return console.info(`el factorial de ${numero} es ${factorial} `);
};

/* **************************** */

// EJERCICIO 12 Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) {
    return console.warn("No ingresaste un Numero");
  }
  if (typeof numero !== "number") {
    return console.error("El valor ${numero} ingresado. NO es un número ");
  }
  if (numero === 0) {
    return console.error("el Número no puede ser 0");
  }
  if (numero === 1) {
    return console.error("el Número no puede ser 1");
  }
  if (Math.sign(numero) === -1) {
    return console.error("El número no puede ser negativo");
  }
  let divisible = false;
  for (let index = 2; index < numero; index++) {
    if (numero % index === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.info(`el numero ${numero} no es un Número Primo `)
    : console.info(`el numero ${numero} Si es un Número Primo `);
};
/* ******************************** */

//  EJERCICIO 13 Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

let numero = parseInt(prompt("ingresa tu numero"), 10);
let dato = (numero = typeof Number) => {
  if (numero == undefined) return console.error("No ingresaste un número");
  if (numero == 1) return console.warn(`No puedes usar el numero 1 `);
  if (Math.sign(numero) == -1)
    return console.warn(`No puedes usar el numero -1 `);

  if (numero % 2 == 0) {
    document.write("si es par <br>");
  } else {
    document.write("no es par");
  }
};

dato(numero);

/* ****************************** */
// EJERCICIO 14 Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const conversor = (a, b) => {
  let num = parseInt(a, 10);
  let grados = parseInt(b, 10);
  if (!num) return document.write("no ingresaste un numero para trabajar");
  if (num === 0 || num >= 3)
    return document.write(
      "solo puedes elegir 1 o 2 con otra opción no puedo hacer la conversión de grados "
    );
  if (!grados)
    return document.write("no ingresaste un numero de grados para convertir");

  if (num === 1) {
    let resp1 = parseFloat((grados * 9) / 5 + 32);
    document.write(res1);
  } else if (num === 2) {
    let resp2 = Math.round(((grados - 32) * 5) / 9);
    document.write(res2);
  } else {
    console.error("la opcion no es valida");
  }
};
conversor(prompt("eligegrados"), prompt("eligegrados"));

/* ********************************************* */

//EJERCICIO 15Programa una función para convertir números de base binaria a decimal y viceversa, pe.miFuncion(100, 2) devolverá 4 base 10.
// FIXME aun falta que el profe responda sobre la base 10 en el tostring para convertir a binario

const convertir = (numero = undefined, base = undefined) => {
  if (numero === undefined) return console.warn("no igresaste un número");
  if (typeof numero !== "number")
    return `return console.error(el valor ${numero}  ingresado no es un  número`;
  if (base === undefined)
    return console.warn(`No ingresaste a base a convertir`);
  if (typeof base !== "number")
    return console.error(`El valor ${base} ingresado no es un Número `);

  if (base === 2) {
    return console.info(
      `${numero} basee ${base} = ${parseInt(numero, base)} base 10 `
    );
  } else if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${numero.toString(base)} base 2 `
    );
  } else {
    return console.error(`el tipo de base a convertir no es válido`);
  }
};
convertir(114, 10);

/* **************************************** */
// EJERCICIO 16 funcion que devuelva un monto final despues del descuento

const descuento = (a, b) => {
  let cantidad = parseInt(a, 10);
  let porcentaje = parseInt(b, 10);
  /* validacion de a  */
  if (a === "0")
    return console.log(
      "Cero no es valido para usar como base de esta operación"
    );
  if (b === "0")
    return console.log("Cero no es valido para sacar porcentaje de un número");
  if (a === "")
    return console.error("No ingresaste un número como cantidad para procesar");
  if (b === "")
    return console.error("No ingresaste un número de porcentaje para extraer");
  if (Math.sign(a) === -1)
    return console.log("No puedes usar números negativos");
  if (Math.sign(b) === -1)
    return console.log("No puedes usar números negativos");
  if (typeof a === "string")
    return console.warn(
      `No ingresaste un número valido como cantidad principal`
    );
  if (typeof b === "string")
    return console.error(
      `No ingresaste un número valido para calcular porcentaje`
    );
  String;
  let resultado = (cantidad * porcentaje) / 100;
  return console.log(`el ${b}% de:${a} es: ${resultado}  `);
};
descuento(5, 20);
/* ******************************************* */
// EJERCICIO 17 Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe.miFuncion(new Date(1984, 4, 23)) devolverá 35 años(en 2020).

const contadorAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("no ingresate una fecha");
  if (!(fecha instanceof Date)) return console.log("no es fecha valida");

  let fecha2 = new Date().getTime() - fecha.getTime(),//con getTime()comvertimos la fecha en milisegundos 
    anios = 1000 * 60 * 60 * 24 * 365;
  aniosPersona = Math.floor(fecha2 / anios);
  return Math.sign(aniosPersona) === -1
    ? console.log(
      `faltan ${Math.abs(aniosPersona)} años para el  ${fecha.getFullYear()} `
    )
    : Math.sign(aniosPersona) === 1
      ? console.info(
        `han pasasdo ${aniosPersona} años desde  ${fecha.getFullYear()} `
      )
      : console.log(`estamos en el año ${fecha.getFullYear()} `);
};
contadorAnios(new Date());
contadorAnios(new Date(1983, 5, 28));
contadorAnios(new Date(2043, 5, 28));

/* ************************************************* */
// EJERCICIO 18 Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe.miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const prueba = (a) => {
  if (a === "") return console.error("no ingresaste una cadena");
  if (a >= 0) return console.error("no puedes usar números");
  let cadena = a;

  let buscaVocales = new RegExp(/[auo]/gi);
  let buscaConsonantes = /[^auo ]/gi;
  let Rvocales = cadena.match(buscaVocales);
  let Rconsonantes = cadena.match(buscaConsonantes);

  console.log(
    `tu cadena tiene: ${Rvocales.length} vocales y ${Rconsonantes.length} consonantes `
  );
};
prueba("hola mundo");


/* *********************************************************** */
// 19) Programa una función que valide que un texto sea un nombre válido, pe.miFuncion("Jonathan MirCha") devolverá verdadero.


const validarNombre = (nombre = "") => {

  if (!nombre) return console.warn("No ingresaste una cadena de texto")

  if (typeof nombre !== "string") return console.warn(`El valor "${nombre}" ingresadom NO es una cadena de texto`)

  let expresionRegular = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre)

  return (expresionRegular)
    ? console.info(`${nombre} es un nombre válido`)
    : console.info(`${nombre} no es un nombre válido`)

}

validarNombre()
validarNombre(3)
validarNombre("Alonso")
validarNombre("Alonso Anchante")
validarNombre("Alonso Anchante")

// 20) Programa una función que valide que un texto sea un email válido, pe.miFuncion("jonmircha@gmail.com") devolverá verdadero.
//FIXME La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

const correo = (a) => {
  let correo = a;
  let regExp = new RegExp(/[@]/gi);
  let value = correo.match(regExp);
  if (value) {
    console.log(` correcto `);
  } else if (correo >= 0) {
    console.error("No puedes usar numeros ");
  } else {
    console.error("no ingresaste un correo valido");
  }
};
correo("richard@allcca.com");

/* METODO DEL PROFESOR */
const validarEmail = (email = "") => {
  if (!email) return console.warn("no ingresaste un email");

  if (typeof email !== "string")
    return console.error(`El valor " ${email}", No es una cadena de texto `);

  //TODO aqui un detalle, minuto 36 expReg video en recursos
  let expReg = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
  let prueba = /^ ?[a-z|A-Z]+/
  return expReg
    ? console.info(` "${email}", es un email válido `)
    : console.warn(` "${email}", No es un email válido `);
};

/* ******************************************************* */
//EJERCICIO 21 Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe.mi_funcion([1, 4, 5]) devolverá[1, 16, 25].

const power = (...dato) => {
  let original = dato;
  if (dato === " ") {
    console.error("No ingresaste un valor valido");
  } else {
    let arr = [];
    for (let uno of dato) {
      if (typeof uno !== "number")
        return console.error(`El valor ${uno} no es un numero `);
      if (uno === 0) return console.error(`no puedes usar ${uno} como valor  `);
      uno *= uno;
      arr.push(uno);
    }
    document.write(
      `El Array de tus numeros ingresados es: ${original} y el cuadrado de cada uno de ellos es: ${arr} `
    );
  }
};

power(1, 2, 3, 4, 5, 0);

//Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe.miFuncion([1, 4, 5, 99, -60]) devolverá[99, -60].
//FIXME falta la validacion para array vacio investiga el tema

const value = (...dato) => {
  let arr = [];
  //let arr2 = [];
  let original = dato;
  for (const numero of dato) {
    if (numero === 0)
      return console.error(
        "No ingresaste datos validos No puedes usar ${numero} como valor "
      );
    if (typeof numero !== "number")
      return console.error(`El valor ${numero} no es un numero `);
    arr.push(...dato);
    //arr2.push(...dato);
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  console.info(`Tu Array original es ${original}
  De los datos ingresados, el numero mas bajo es: ${min} y el mas alto es: ${max}`);
};
value(1, 2, 3, 4, 5, 6);

//Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe.miFuncion([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) devolverá { pares: [2, 4, 6, 8, 0], impares: [1, 3, 5, 7, 9] }

const ParInpar = (...a) => {
  let pares = [];
  let impares = [];
  if (a.length === 0) {
    return console.error(`no ingresaste nigun valor `);
  }
  for (const i of a) {
    if (typeof i !== "number") return console.error("no uses letras");
    if (i === 0) return console.error("no ingresaste un numeros");
    if (i % 2 === 0) {
      pares.push(i);
    } else if (i % 2 >= 1) {
      impares.push(i);
    }
  }
  const respFinal = { pares, impares }
  console.info(respFinal);
  console.log(`los Números pares de tus datos ingresados son: ${pares}y los Números impares son: ${impares} `);
};
ParInpar(1, 5, 2);

/* ******************************* */
// EJERCICIO 24 Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe.miFuncion([7, 5, 7, 8, 6]) devolverá { asc: [5, 6, 7, 7, 8], desc: [8, 7, 7, 6, 5] }.

const ordenarArreglo = (...arr) => {
  //FIXME aqui no se puede usar el sgte validador xk parametro rest nunca deja de ser un array
  //if (!(arr instanceof Array)) return console.error(' el valor que ingresaste no es un arreglo');
  if (arr.length === 0) return console.error("el arreglo esta vacio");

  for (const iterator of arr) {
    if (typeof iterator !== "number") return console.error("no uses letras");
  }
  return (
    console.info({
      arr,
      asc: arr.map((e) => e).sort((a, b) => a - b),
      desc: arr
        .map((e) => e)
        .sort((a, b) => a - b)
        .reverse(),
    }),
    document.write(`${arr.map((e) => e).sort()} `)
  ); //esta parte es opcional solo para ver el orden
};

ordenarArreglo(7, 5, 7, 8, 6);

//EJERCICIO 25 Programa una función que dado un arreglo de elementos, elimine los duplicados, pe.miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá["x", 10, 2, "10", true].

const removeDuplicate = (n) => {
  console.log([...new Set(n)]);
};

removeDuplicate(["x", 10, "x", 2, "10", 10, true, true]);

// EJERCICIO 26 Programa una función que dado un arreglo de números obtenga el promedio, pe.promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) devolverá 4.5.
/* respuesta 1 */
const reduce = (...arr) => {
  let suma = arr.reduce((a, b) => a + b);
  suma /= arr.length;
  return console.log(suma);
};
reduce(9, 8, 7, 6, 5, 4, 3, 2, 1, 0);
/* respuesta 2 */
const promedio = (...dato) => {
  let arreglo = dato;
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  suma /= dato.length;
  console.log(suma);
};
promedio(9, 8, 7, 6, 5, 4, 3, 2, 1, 0);

/* La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros
aceptados *.
  - Crea un método estático que devuelva los géneros aceptados *.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3
instancias de la clase de forma automatizada e imprime la ficha técnica
de cada película. */

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }
  /*  atributo estatico y metodo estatico */

  static get listaGeneros() {
    return ["Action", "Adult", "Adventure", "Animacion", "Biography", "comedi", "crimen", "Documentari", "Drama", "Family", "Fantasy", "Film Noir", 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mistery', 'News', 'Reality-Tv', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
  }
  static generosAceptados() {
    return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(', ')} `)
  }
  /*  funciones genericas */
  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} ${valor} esta vacio `);
    if (typeof valor !== "string")
      return console.error(
        `${propiedad} ${valor} ingresado NO, es una cadena de texto `
      );
    return true;
  }
  validarLogintudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        ` ${propiedad} ${valor} no debe exeder los ${longitud} caracteres `
      );
    return true;
  }
  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} ${valor} esta vacio `);
    if (typeof valor !== "number")
      return console.error(`${propiedad} ${valor} ingresado NO, es un número `);

    return true;
  }
  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} ${valor} esta vacio `);
    if (!(valor instanceof Array))
      return console.error(` ${propiedad} ${valor} ingresado no es un Arreglo`);
    if (valor.length === 0)
      console.error(`${propiedad} ${valor} no tiene datos `);
    for (const cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(`el valor ${cadena} no es una cadena de texto  `);
    }

    return true;
  }
  /* *************** validaciones principales ************* */
  validarIMDB(id) {
    if (this.validarCadena("IMDB id:", id))
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(`IMDB id ${id} no es válido, debe tener 9 caracteres, los primeros 2 letras minúsculas, 
        los 7 restantes números`);
  }
  validarTitulo(titulo) {
    if (this.validarCadena("Titulo :", titulo))
      this.validarLogintudCadena("Titulo :", titulo, 100);
  }
  validarDirector(director) {
    if (this.validarCadena("Director :", director))
      this.validarLogintudCadena("Director :", director, 50);
  }
  validarEstreno(estreno) {
    if (this.validarNumero("Año de Estreno", estreno))
      if (!/^([0-9]){4}$/.test(estreno))
        return console.error(
          `Año de estreno "${estreno}" Debe tener 4 digitos`
        );
  }
  validarPais(pais) {
    this.validarArreglo("País", pais);
  }
  validarGeneros(generos) {
    if (this.validarArreglo('Generos', generos)) {
      for (const genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Generos(s) incorrectos "${generos.join(', ')}" `);
          Pelicula.generosAceptados(); //metodo estatico que llama a la lista de propiedad estatica
        }
      }
    }
  }
  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación", calificacion));
    return (calificacion < 0 || calificacion > 10)
      ? console.error(`La calificación no debe ser menos a 0 ni mayor a 10 `)
      : this.calificacion = calificacion.toFixed(1);
  }
  fichaTecnica() {
    console.info(`Ficha Tecnica: \n Titulo: "${this.titulo}"\n Director: "${this.director}" \n Estreno: "${this.estreno}"\n Pais: "${this.pais.join('-')}"\n Generos: "${this.generos}"\n Calificación: "${this.calificacion}"\n IMDB: "${this.id}" `)
  }
}

/*  probando validaciones */

// const peli = new Pelicula({
//   id: "tt1234567",
//   titulo: "Titulo de la peli",
//   director: "Richard Allcca Llano",
//   estreno: 2020,
//   pais: ["peru", "mexico"],
//   generos: ['comedi', 'Sport'],
//   calificacion: 1,
// });

const misPelis = [
  {
    id: 'tt0758758',
    titulo: 'Into the Wild',
    director: 'Sean Pen',
    estreno: 2007,
    pais: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1
  },
  {
    id: 'tt0479143',
    titulo: 'Rocky Balboa',
    director: 'Silvester Stalone',
    estreno: 2006,
    pais: ["USA"],
    generos: ["Action", "Drama", "Sport"],
    calificacion: 7.1
  },
  {
    id: 'tt0468569',
    titulo: 'The Dark Knight',
    director: 'Christopher Nolan',
    estreno: 2008,
    pais: ["USA", "UK"],
    generos: ["Action", "Crime", "Drama"],
    calificacion: 9.0
  }
]

misPelis.forEach(el => new Pelicula(el).fichaTecnica())

/* Suseción Fibonacci */

function ejecutar() {
  let n = parseInt(prompt("cantidad de números"))
  if (Number.isInteger(n) && n > 0) {
    let fibonacci = generarFibonacci(n)
  } else {
    console.log("el número ingresado no es un entero >0");
  }
}

const generarFibonacci = (n) => {
  let fn = [0, 1];
  if (n <= 1) {
    return fn;
  }
  for (let i = 2; i <= n; i++) {
    fn[i] = fn[i - 1] + fn[i - 2];

  }
  return fn;
}
ejecutar(5);