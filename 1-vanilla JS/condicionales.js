// =================================================================
//? CONDICIONALES para crear control de flujo
// =================================================================
if (true)
  if ({})
    if ([])
      if (42)
        if ("foo")
          if (new Date())
            if (-42)
              if (3.14)
                if (-3.14)
                  if (Infinity)
                    if (-Infinity)

                      /* En JavaScript, un valor verdadero es un valor que se considera  true / verdadero cuando es evaluado en un contexto Booleano.Todos los valores son verdaderos a menos que se definan como falso(es decir, excepto false, 0, "", null, undefined, y NaN) */

                      var input = "richard"
var pasword = "richard"

if (resultado = input == pasword) {
  console.log("login correcto")
} else if ("otra condicion anidada") {
  console.log("no es una tarjeta")
} else {
  document.write("otra sentencia")
}

// =============================================================================
//? IF dentro de DO-WHILE con PARCEINT convirtiendo texto a numeros
// =============================================================================
let dato = 0
do {
  let age = parseInt(prompt('dame tu edad'))
  if (age >= 18) {
    alert('eres mayor de edad')
    dato++
  } else if (age <= 17) {
    alert('no eres mayor de edad PULPIN')
    dato++
  } else {
    alert('solo usa numeros wey!!')
  }
} while (dato !== 1)//(nada es diferente a uno?) TRUE indica que continue el ciclo

// =============================================================================
//? SWITCH cambio, se lee: cambio si el caso es 1, cada caso termina con BREAK
// =============================================================================

let usuario = 'richard'
let pasword = prompt('ingrese su contraseña')
switch (pasword) {
  case 'richard':
    document.write('identidad confirmada')
    break;
  case 'raul':
    document.write('quien eres?')
    break;
  default:
    console.log('no hay datos')
    break;
}
