console.log('un registro de lo que ha pasado en nuestra app')
console.error('esto es un error')
console.warn('esto es un aviso')
console.info('esto es un msj informativo')

let nombre = 'jhon', apellido = 'perez', edad = '35';

console.log(`hola mi nombre es %s %s y mi edad es %d`, nombre, apellido, edad);
// usando comodines para imprimir en consola

console.log(window);
//muestra todos los metodos de windows 
console.log(document);
// muentra todo lo que contiene el documento 
console.dir(window)
// muestra todos los metodos propiedades y atributos 
console.dir(document)
//muentra todo lo que tiene el documento (todo)

console.log(console);
console.table(Object.entries(console)); // puedes darle un sort para ordenarlos en tabla (table sirve para imprimir casi todo en tabla)
console.time('cuanto tarde mi código')
const Arreglo = Array(1000000)
for (let i = 0; i < array.length; i++) {
  Arreglo[i] = i;
}
console.timeEnd('cuanto tarda  mi código')
// para contar ejecuciones 
for (let i = 0; i < array.length; i++) {
  console.count('codigo for');
  console.log(i);
}


