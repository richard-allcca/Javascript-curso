// =================================================================
//? NUMEROS
// =================================================================

Number(dato);
// => comvierte un string a número

// ===============================
//? toFixed(n);
//espesifica la cantidad de decimales que quieres que tenga un numero, y tambien hace un redondeo

let number = 5;
number.toFixed(2);

// ===============================
//? parceInt();
//convierte texto "string" en numero

let texto = "20";
let textToNumber = parseInt(texto, 10); //el ,10 es opcional de preferencia usalo
document.write(textToNumber);
console.log(typeof textToNumber);

// ===============================
//? parceFloat();
//convierte un texto con decimal, en un numero con decimales

let texto = "20.5";
let textNumber = parseFloat(texto);
document.write(textNumber);

// ===============================
//? valor de PI
console.log(Math.PI);

// ===============================
//? valor absoluto
console.log(Math.abs());

// ===============================
//? parte entera de un numero y elimina decimales
console.log(Math.trunc());

// ===============================
//? redondeo
console.log(Math.ceil());
console.log(Math.round());
console.log(Math.floor());

// ===============================
//? cuadrado
console.log(Math.sqrt());

// ===============================
//? potencia
console.log(Math.pow());

// ===============================
//? valora el dato y devuelve un -1 o 1, positivo o negativo
console.log(Math.sign());

// ===============================
//? ramdom
console.log(Math.random());
console.log(Math.round(Math.random() * 100));

// ===============================
//?función que obtenga un numero aleatorio entre 501 y 600
const sorteo = (a) => {
  console.log(Math.round(Math.random() * (600 - 501) + 501));
  // restorna un valor entre (max - min ) + min
};

// ==============================================================
//?  NUMERO MAYOR O MENOR de una lista o un array
// ==============================================================

Math.min(30, 40, 50, 60); // numero menor de una lista
Math.max(30, 40, 50, 60); // numero mayor de una lista

let number = [30, 40, 50, 60];
console.log(Math.min(...number)); // numero menor de un ARRAY
console.log(Math.max(...number)); // numero mayor de un ARRAY
