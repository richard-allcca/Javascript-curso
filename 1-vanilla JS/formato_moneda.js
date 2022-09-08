// =================================================================
//? EN SOLES
// =================================================================
const formateo = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
  minimumFractionDigits: 0,
});

var value = 10000;

console.log(formatter.format(value)); // "$10,000

//* Ahora puede usar la instancia de NumberFormat para formatear cualquier número en un valor de moneda.por ejemplo mostrar 10000 en formato dolar:

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

var value = 10000;

console.log(formatter.format(value)); // "$10,000

// =================================================================
//? Más conversión de monedas
// =================================================================
//* El valor que regresa la función toLocaleString puede ser modificado utilizando el argumento options:

let value = 12500;

const formatterPeso = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0,
});
console.log(formatterPeso.format(value));

// → $ 12.500

const formatterDolar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(formatterDolar.format(value));
// → $12,500.00

const formatterEuro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
console.log(formatterEuro.format(value));
// → 12.500,00 €

// el yen japonés no tiene ninguna subdivisión
const formatterYenes = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
});
console.log(formatterYenes.format(value));
// → ￥12,500

// ===============================
//? Entendiendo el Parámetro
// ===============================
// Hablemos de los parámetros.Está formado por los locales y el objeto de options.

// 1 - Parameto Locales
//2 - obj -> language code + country code

/*
Aquí hay una lista del código de idioma:
https://www.w3schools.com/tags/ref_language_codes.asp
Aquí hay una lista del código del país:
https://www.w3schools.com/tags/ref_country_codes.asp

2 - Parameto Options:
Hay varios de opciones, pero hablemos de las dos que estamos usando: styles, currency.

– Opción: Style
El estilo es la parte fácil.Este es el estilo para su formato de número.Dado que este es un blog de divisas, nuestra elección sería currency.Los 3 valores posibles son:

decimal //formato de número simple, el predeterminado
currency //formato de moneda, lo que estamos usando
percent //formato de porcentaje

– Opción: Currency
Obviamente hay varios de opciones de monedas.Puedes ver la lista completa aquí:
https://www.currency-iso.org/en/home/tables/table-a1.html

*/
