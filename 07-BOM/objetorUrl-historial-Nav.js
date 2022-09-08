

console.log(`************ Objeto URL (location) ***********`);

console.log(location);//? de location cuelgan todos los sgtes metodos

console.log(location.origin) // te da la ruta de la cual se origina
console.log(location.protocol) // puede ser http
console.log(location.host) //  host o ip  local
console.log(location.hostname) // nombre del dominio o puerto 
console.log(location.port) // puerto 
console.log(location.href) // toda la url completa 
console.log(location.search) //detecta los valores despues de "?"  
console.log(location.hash) //detecta el valor de una url despues de un #
console.log(location.pathname) //es el archivo al cual estas consultando

console.log(`************ Objeto Historial ***********`);

console.log(history) // historial de la pagina pasos adelante o atras 
console.log(history.length) // cuantas paginas hemos visitado
console.log(history.forward(numero))// ir delante (numero) de paginas
console.log(history.back(numero)) // ir atras (numero) de paginas
console.log(history.go()) // is adelante o atras (numero) de paginas con valores positivos o negativos

console.log(`************ Objeto Navegador ***********`);
navigator
navigator.connection // da informacion de la conexion de usuario
navigator.geolocation // 
navigator.mediaDevices //dispositivos como camaras microfonos
navigator.mimeTypes //son los typos de formatos que soportan el navegador
navigator.onLine//detecta eventos de cuando pierde conexion 
navigator.serviceWorker// ayuda a convertir paginas en app 
navigator.storage//api de almacenamiento
navigator.usb//detecta dispositivos usb
navigator.userAgent// informacion sobre la plataforma donde estas navegando

