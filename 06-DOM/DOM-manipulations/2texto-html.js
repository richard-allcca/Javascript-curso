const $whattsDOM = document.getElementById("que-es");

let texto = `document objet model
   modelos de objetos del Documento, es una API para Documentos HTML y XML`;

/*
 TODO existen dos metodos para agregar texto:
1-innerText => creado por internet explorer
2-textContet => standar para los navegadores
 */

// MODIFICAR contenido, quita el contenido inicial y agrega el nuevo, "innerText respeta template string", textcontent no pero es el ESTANDAR recomendado
$whattsDOM.innerText = texto;
$whattsDOM.textContent = texto;

// ingresa un contenido de template con etiquetas HTML 
$whattsDOM.innerHTML = texto;

// REEMPLAZA ETIQUETAS 
$whattsDOM.outerHTML = html;

// JavaScript puede cambiar el contenido HTML:
document.getElementById("demo").innerHTML = "Hello JavaScript!";




