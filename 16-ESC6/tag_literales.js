
function etiqueta(literales, ...substituciones) {
  let resultado = "",
    resultado2 = "";
  for (let i = 0; i < substituciones.length; i++) {
    resultado += literales[i]
    resultado2 += substituciones[i]
  }
  return [resultado, resultado2];
}
let literales = [1, 2, 3, 4, 5];
console.log(etiqueta(literales, 5, 6, 7, 8, 9))

// ==================================

let unidades = 5,
  costoUnitario = 10;
let mensaje = etiqueta(`${unidades} Lapices cuestan: ${unidades * costoUnitario} pesos`,5)
console.log(mensaje);


/* *********** trabajar con "raw" o texto crudo *********** */
let con_tag = String.raw`hola richard`;
let sin_tag = `hola \n\ richard`
console.log(con_tag);
console.log(sin_tag);