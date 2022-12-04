// =========================================================================
//? Iterar de modo Tradicional?
// =========================================================================
/* con esto tambien se puede usar el "newSet" que filtra los datos repetidos y si quieres usar un set o un map verifica la forma de instanciarlos 'recuerda que tienen sus propias caracteristicas */
const iterable = "hola mundo";

const iterador = iterable[Symbol.iterator](); // este puede iterar sobre cualquier elemento iterable

console.log(iterable);
console.log(iterador);

let next = iterador;

//para imprimir el contenido de algun elemento iterable usamos un ciclo while
while (!next.done) {
  //el metodo "done" esta en falso mientras el iterable tenga datos para recorrer
  console.log(next.value); //.value imrpime solo el valor
  next = iterador.next(); // asignandole a next le dara el valor de donde se quedo o imprimio el ultimo valor y podra continuar con el siguiente
}
