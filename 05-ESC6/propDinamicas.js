/* ejemplo de como crear propiedades dinamicas directamente en el objeto (para mejor ordemiento usa variable por fuera)*/

let aleatorio = Math.round(Math.random() * 10 + 5)

const objUsuarios = {
  propiedad: 'valor',// propedad normal
  [`id_${aleatorio}`]: 'Valor Aleatorio' // propiedad dinamica
}


const usuarios = ['Richard', 'Irma', 'Miguel', 'Kala', 'Kenai']

// crea un "id" dinamico por cada valor del array con la notacion de cochetes
usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario)

console.log(objUsuarios);

