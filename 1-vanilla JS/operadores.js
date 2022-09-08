// =================================================================
//? OPERADORES DE COMPARACION
// =================================================================
// comparan para devolver un valor bolean

5 == "5"; //commpara de forma superficial solo el valor de la variable no se recomienda
5 === "5"; //compara variable y el tipo de dato que contiene y es muy recomendable
5 != "5"; // para comparar diferencia
5 !==
  "5" //compara de forma estricta la diferencia de valor y tipo de dato RECOMENDABLE
  `<= >= == ===< > estos son los mas comunes`;

// =================================================================
//? OPERADORES DE ASIGNACION  [=, +=, -=, *=; /=] es una forma de abreviar
// =================================================================
let number = 100;
number = number + 2; //metodo normal
number += 2; // metodo abreviado
number -= 2;
number *= 2;
number /= 2;

// ==============================================================
//? estos operadores son de tipo unario
// ==============================================================
typeof (
  // te dice que tipo de dato es
  !(
    //este operador niega un valor osea si es falso lo hace verdadero

    // ==============================================================
    //? OPERADORES aritmeticos
    // ==============================================================
    // "+" , "-" , "*" , "/" , "%" este ultimo sirve para dar el resto de una divicion

    10
  )
) %
  2 ===
  0; // MODULO  de uso para sacar el resto de una divicion
respuesta = true;
number++; // post ibncremento y afecta el valor de la variable en la siguiente llamada
++number; // preincremento hace un incremento de forma inmediata

// ==============================================================
//? OPERADOR TERNARIO es muy parecido al if de exel es de forma lineal y simplificado [exprecion ? si verdadero :si falso]
// ==============================================================
let age = prompt("dime tu edad"); //aqui usamos la funcion PROMPT para ingresar un valor de forma externa por el usuario
let isAdult = age >= 18 ? "ya eres adulto" : "aun eres un niño";
alert(isAdult);

// ==============================================================
//? OPERADOR DE CORTO CIRCUITO
// ==============================================================
// el operador ( && ) y el operador ( || ) emplean cortocircuitos para

x;

x && y; // y no se evaluará si x evalúa como false , porque se garantiza que toda la expresión es false .

x || y; // y no se evaluará si x evalúa como true , porque se garantiza que toda la expresión es true
