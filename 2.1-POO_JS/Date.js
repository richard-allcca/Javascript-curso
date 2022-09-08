console.log(Date());
// te da la datos completos de fecha y hora zona horaria

let fecha = new Date();
// este la forma ideal de abtener la fecha y todos sus datos completos guardarlos en una variable
console.log(fecha);

// =================================================
//? METODOS PARA OBTENER de un Date
// =================================================

// dia del mes en número
console.log(fecha.getDate());

// dia de la semana segun su posición en un array se cuenta desde el domingo [0]
console.log(fecha.getDay());

// para obtener el numero del mes 
console.log(fecha.getMonth());

// para obtener el año - hay otro metodo ( getyear ) Nunca lo uses ten cuidado de confundirlo con el getFullYear
console.log(fecha.getFullYear);

// hora minutos segundos y miligundos 
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.getMilliseconds())

// =================================================
//? MOSTRAR DATOS EN FORMATO HUMANO 
// =================================================

// metodo para sacar los datos completos zona horaria fecha hora Todo
console.log(fecha.toString());

// muestra nombre del dia -mes/dia/año 
console.log(fecha.toDateString());

// formato en |dia/mes/año|  hora formato 24 19:23:02
console.log(fecha.toLocaleString())

// fecha  para mostrar solo la fecha 12/3/2020
console.log(fecha.toLocaleDateString())

//solo la hora 19:24:11
console.log(fecha.toLocaleTimeString());

// muestra el uso horario donde nos encontramos
console.log(fecha.getTimezoneOffset());

// =================================================
//? PARA MOSTRAR datos de la zona horaria 0 londres
// =================================================

// numero del dia del mes 
console.log(fecha.getUTCDate);

// muestra la hora 
console.log(fecha.getUTCHours);


// =================================================
//? FORMA DE SACAR MILISEGUNDOS de año/ mes/ dia ... con el metodo set
// =================================================
//! timestamp muestra los milisegundos que ha pasado desde 1 enero 1970

console.log(fecha.setDate);