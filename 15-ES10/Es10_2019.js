// =================================================================
//? FLAT para mostrar el contenido de Arrays anidados en uno solo
// =================================================================

const edades = [1, 2, 3, 4, [5, 6, 7, [8, 9, 10]]];

// por defecto tiene parametro 1
console.log(edades.flat());

// para muchos anidados usa Infinity
console.log(edades.flat(Infinity));

// =================================================================
//? FLATMAP para obtener datos de un objeto en un solo Array al mismo tiempo yo prefiero usar template strin con maps
// =================================================================

const productos = [
  { nombre: "producto 1", precio: 20 },
  { nombre: "producto 2", precio: 30 },
  { nombre: "producto 3", precio: 40 },
  { nombre: "producto 4", precio: 50 },
];

const resultadoFlatMap = productos.flatMap(
  (productos) => productos.nombre,
  productos.precio
);

const resultadoMap = productos.map(
  (productos) => `${productos.nombre} ${productos.precio}`
);

// =================================================================
//? "Object.entries" de Obj a un Array "Object.fromEntries" de Array a un Obj
// =================================================================

Object.entries();

const obj = {
  cabeza: "header",
  pie: "footer",
};
console.log(Object.entries(obj));

// ==================

Object.fromEntries();

const producto = new Map([
  ["nombre", "producto 1"],
  ["precio", 20],
]);

console.log(Object.fromEntries(producto));

// - Método sin Object.fromEntries()

productos.reduce((total, actual) => {
  const [propiedad, valor] = actual;
  return { ...total, [propiedad]: valor };
});

// =================================================================
//? NOVEDADES para String
// =================================================================
// trimStart y trimEnd para aliminar espacios al inicio y al final "mejor usa trim() normal"

let correo = "  richard_allcca_llano@hotmail.com  ";

correo.trimStart(); // elimina los espacios en blanco del inicio
correo.trimEnd(); // elimina los espacios en blanco del final

//* toString para convetir una funcion en string e imprimirlo funciona igual que un <pre> de html

function toString() {
  console.log("convertido a texto");
}
toString.toString();

