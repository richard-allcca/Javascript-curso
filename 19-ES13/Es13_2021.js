// ================================
//  STUB - Métodos en clases
// ================================

class Example {
   // Hace privada una propiedad para evitar su uso desde una instancia
   #propiedadPrivada = Boolean;

   // Hace Static un método o propiedad en clases que no necesitan o deben ser instanciadas
   static encode(text) {
      return text.replace(/&/g, "&amp;");
   }
}

console.log(Example.encode("&gt;"))


// ================================
//  Método para elementos indexables
//  NOTE - con párametro negativo empieza a contar desde el final
// ================================


let resp = [ 1, 2, 3 ].at(0)
resp // 1

let dat = '123'.at(1)
dat // 2

// ================================
//  Método  para Objetos
// NOTE - valida si una propiedad existe en un objeto
// ================================

const obj = {
   name: 'Richard',
   apellido: 'Allcca',
   email: 'richard_allcca_llano@hotmail'
}

Object.hasOwn(obj, 'name') // true
Object.hasOwn(obj, 'password') // false

// ================================
// Propiedad de "try catch" - cause 
// NOTE - para obtener información sobre el error.
// támbien agregar info al constructor del error cuando se defina
// ================================

try {
   await fetch("miApi").catch((err) => {
      throw new Error("Causado por", { cause: err })
   })
} catch (e) {
   console.log(`${e}\n\t${e.cause}`)
}


