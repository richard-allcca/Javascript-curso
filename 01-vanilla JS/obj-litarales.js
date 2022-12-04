let nombre = 'trunks'
let edad = 2

  `si las propiedades que les quieres asignar a un objeto son literal iguales al nombre de la varaible solo hazlo así: `
const perro = {
  nombre,
  edad,
  // forma normal y mas efectiva de agregar metodo a un objeto
  ladra: function () {
    console.log('guau guau');
  }
}
  `THIS si quieres ingresar metodos en un Objeto y el metodo es literal hazlo con asi: 
  no uses funciones flecha porque saltan una posicion en el contexto `

const perro = {
  nombre,
  edad,
  // ten cuidado de confundirlo con una ARROW  function
  ladrar() {
    console.log('guauu guauu guauu!!');
  }
}
