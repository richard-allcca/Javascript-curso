
// LINK - https://devxdev.net/javascript/filter/


// SECTION - Considera una lista / array de ovejas.Cada oveja tiene un nombre y un color.Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

const ovejas = [
   { name: 'Noa', color: 'azul' },
   { name: 'Euge', color: 'rojo' },
   { name: 'Navidad', color: 'rojo' },
   { name: 'Ki Na Ma', color: 'rojo' },
   { name: 'AAAAAaaaaa', color: 'rojo' },
   { name: 'Nnnnnnnn', color: 'rojo' }
]

function filtro(arr) {

   let porColor = arr.filter(el => el.color == 'rojo')

   let porAyN = porColor.filter(el =>
      el.name.toLowerCase().includes("n") &&
      el.name.toLowerCase().includes('a'))

   return porAyN
}


// LINK - https://adventjs.dev/challenges/02


// SECTION - Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece

const carta = 'bici coche balón _playstation bici coche peluche'

let res1 = {}

let resp = carta.split(' ')

let arrObj = resp.map((el) => {
   if (!el.includes('_')) return el
}).filter(el => el !== undefined)

arrObj.forEach((el) => {
   res1.hasOwnProperty(el) ? res1[ el ] += 1 : res1[ el ] = 1
})

console.log(res1)


// REVIEW - respuesta simplificada

const carta2 = 'bici coche balón _playstation bici coche peluche'

let res2 = {}

let resp2 =
   carta.split(' ')
      .map((el) => el)
      .filter(el => !el.includes('_'))
      .forEach((el) => res1.hasOwnProperty(el) ? res1[ el ] += 1 : res1[ el ] = 1)

console.log(resp2)