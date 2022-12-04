// =================================================================
//? comprueba igualad de forma super estricta
// =================================================================
console.log(Object.is(5, "5"));

// =================================================================
//? hace una copia de todas las propiedades y valores de un objeto a otro
// =================================================================
console.log(Object.assign(objReceptor, objDonador));

// =================================================================
//?
// =================================================================
let objeto = {
  nombre: "richard",
  edad: 38,
  sexo: "masculino",
};

console.log(Object.getOwnPropertyNames(objeto));
console.log(Object.getOwnPropertyDescriptors(objeto));
