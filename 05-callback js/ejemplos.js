//TODO recuerda   poner en el enlace script de html poner el type='module' o no funcionara nada 


// const llamado = (name, callback) => {
//    callback(name);
// }

// const saludo = (name) => {
//    console.log(`hola ${name} `);
// }

// llamado('richard', saludo)b

const sumar = (num1, num2, callback) => {
   callback(num1 + num2);
}
const cuadrado = (num, callback) => {
   callback(num * num);
}
const dividir = (num, callback) => {
   callback(num / 2);
}
const sustraer = (num, callback) => {
   callback(num - 100);
}
const value = (num) => {
   return (num > 0) ? console.log(`Tu número ${num} es positivo `)
      : console.log(`Tu número ${num} es negativo `)
}
/* ***************** */
const resultadoSumar = (suma) => {
   console.log(`el resultado de tu suma es: ${suma} `);
   cuadrado(suma, resultadoC);
}
const resultadoC = (cuadrar) => {
   console.log(`el cuadrado es: ${cuadrar} `);
   dividir(cuadrar, resultadoD);
}
const resultadoD = (divide) => {
   console.log(`el resultado de tu divición es: ${divide} `);
   sustraer(divide, resultadoS);
}
const resultadoS = (sustrae) => {
   console.log(`el resultado de la sustracción es: ${sustrae} `);
   value(sustrae)
}

sumar(8, 5, resultadoSumar)