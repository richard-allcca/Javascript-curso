// crea un objeto iterable 'parecido a un Array' y no permite elementos repetidos

let set = new Set([1, 2, 3, 3, "hola", "mundo", "mundo"]);
// al momento de guardar los datos elimina los repetidos
const eliminaDuplicado = (item) => [...item];//elimina duplicados y los retorna como array
let array = eliminaDuplicado(set);


//Para conocer la cantidad 'length' de elementos de un set usa '.zise'
console.log(set.zise);

//para agregar elementos a un set usa
set.add("nuevo");
set.add("elemento");

// para recorrer un set usa 'for of' o 'for echach', recuerda que "for each" puede imprimir el valor-index-set original
for (const item of set) {
  console.log(item);
}
set.forEach((element) => {
  console.log(element);
});

// para poder acceder a los elementos individuales de un set, 'primero' debes covertirlo en un 'Array' guardando la conversión en una variable para usarlo luego
let toArray = Array.from(set);
console.log(toArray[3]);
//convertido en array se puede acceder a sus elementos

//para borrar elementos de un set
set.delete("hola");

//para comprobar si un valor existe en un set
set.has(19);

//para limpiar un set
set.clear();

// 