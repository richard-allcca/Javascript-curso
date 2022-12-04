// ==============================
// Buscar 3 numeros
// ==============================
const regex1 = /[0-9]{3}/g


// Regrese cadenas sin espacios al inicio y final
const sinSpaces = /^[\s]*(.*?)[\s]*$/
let frace = '   texto sin espacios  '

let resp = frace.match(sinSpaces)
console.log(resp[ 1 ])//devuelve un arreglo y en la posc 1 el resultado

// ==============================
// Contar el número de vocales y consonantes
// ==============================

const contarVocalesYConsonantes = (a) => {
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
contarVocalesYConsonantes("hola mundo");

// ==============================
// Valida Nombre
// ==============================

const validarNombre = (nombre = "") => {

   if (!nombre) return console.warn("No ingresaste una cadena de texto")

   if (typeof nombre !== "string") return console.warn(`El valor "${nombre}" ingresadom NO es una cadena de texto`)

   let expresionRegular = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre)

   return (expresionRegular)
      ? console.info(`${nombre} es un nombre válido`)
      : console.info(`${nombre} no es un nombre válido`)

}

validarNombre("Alonso Anchante")

// ==============================
// Valida un email válido
// ==============================
//FIXME /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

const correo = (email) => {
   if (email >= 0) return console.log('No puedes usar números')

   let regExp = /^[-._a-z0-9]*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
   let regExpSimplificated = /^[\w-.]*@[\w-]+(\.[\w-]+)*(\.[a-zA-Z]{2,4})/

   return regExp ? console.log('Ingreso Correcto') : console.log('No es un correo valido')
};
correo('richard@hotmail.com');

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

// ==============================
// Valida Número de telefono
// ==============================

const validatePhone = (phone) => {
   // parentecis opcionales
   let paso1 = /\(?   \)?/
   //  opciones de prefijos
   let paso2 = /\(? (\+34|0034) \)?/
   //  prefijos opcionales
   let paso3 = /( \(? (\+34|0034) \)? )?/
   // luego de prefijo inicia con 6,7 o 9
   let paso4 = /( \(? (\+34|0034) \)? )? (6|7|9)/
   // cantidad de números al final
   let paso5 = /( \(? (\+34|0034) \)? )? (6|7|9) (\d{8})/
   // hacer que valide toda la expresión ^$
   let paso6 = /^ ( \(? (\+34|0034) \)? )? (6|7|9) (\d{8}) $/g

   let test1 = '(0034)666777888'
   let test2 = '(+34)777888999'
   let test3 = '0034666777888'
   let test4 = '+34987654321'
   let test5 = '900123456'
   let test6 = '678678678'
}

// ==============================
//  Valida Contraseña
// ==============================

const validaPassword = (password) => {

   let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$@!¡%&*¿?])[a-zA-Z0-9$%&@¿?!¡]{8,16}$/gm.test(password)

   return regex ? console.log('correto') : console.log('incorrecto')
}

validaPassword('Terror@280683')