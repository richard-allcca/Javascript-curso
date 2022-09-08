// =================================================================
//? BUCLES FOR
// =================================================================

let inscritos = ["juan ", "freddy ", "richard ", "july", "liz"];
let asistentes = ["juan ", "richard ", "liz"];
const user = document.getElementById(users);
let turno = 0;

for (let i = 0; i < inscritos.length; i++) {
  let inscrito = inscritos[i]; //para igualar el contenido segun su posicion con [i]
  if (asistentes.includes(inscrito)) {
    turno++;
    users.innerHTML += `<p>bienvenido ${inscrito} eres el numero ${turno}<br></p>`;
  }
}

// =================================================================
//? CONTINUE para saltar un proceso
// =================================================================

//ejemplo para sacar los multiplos de 7
for (let index = 0; index <= 50; index++) {
  if (index % 7 !== 0) {
    //si el resto no es igual a 0 te da TRUE entonces continua y salta
    continue;
  } else {
    document.write(index + " <br>");
  }
}

//ejemplo para sacer n cantidad de nombres de un array
let nombres = ["richard", "freddy", "julia", "ruth", "july"];

for (let i = 0; i <= nombres.length; i++) {
  //en esta condicion usa CONTINUE para detectar e ignorar los datos en i tambien se puede usar &&
  if (i == 1 || i == 3) {
    continue;
  } else {
    console.log(nombres[i]);
  }
}
// =================================================================
//? BREAK ejemplo para sacar un cierta cantidad de datos como los multiplos deteniendo el proceso
// =================================================================

let contador = 0;
for (let index = 0; index <= 50; index++) {
  if (index % 7 !== 0) {
    continue;
  } else {
    document.write(index + " <br>");
    contador++;
    if (contador >= 5) break;
  }
}

// =================================================================
//? WHILE
// =================================================================

while (condition) {
  document.write(declaracion);
  condicion++; //aqui una variable que indique el final de loop
}

// =================================================================
//? DO WHILE  se ejecuta por lo menos una vez antes de entrar en un loop
// =================================================================

let nada = 0;
do {
  let age = parseInt(promp("dame tu edad"));
  if (age >= 18) {
    alert("eres mayor de edad");
    nada++;
  } else if (age <= 17) {
    alert("no eres mayor de edad PULPIN");
    nada++;
  } else {
    alert("solo usa numeros wey!!");
  }
} while (nada !== 1);
