/* el dom y Data-attributes */


/*GUARDA : el contenido de una etiqueta con el selector (id,clase o nombre de etiqueta) */
const $linkDOM = document.querySelector(".link-dom")


// OBTENER  el valor de los atributos de, html metodo recomendado
document.querySelector(".link-dom").getAttribute("href");
// poco usado aun te faltan datos sobre este metodo 
document.querySelector(".link-dom").href;


/* cambiar valor de atributos */
document.documentElement.lang = "en";
//  CAMBIO de valor de un atributo  recibe 2 parametros el nombre del atributo y el nuevo (recuerda que para usarlo se usa "document.documentElement.setAttribute")
document.documentElement.setAttribute("lang", "es")


// AGREGA directamente al elemento una nueva propiedad y su valor
$linkDOM.setAttribute("target", "_blank");
//  AGREGA PROPIEDA evita que tenga una dependencia con la ventana origen (buena practica)
("rel", "noopener")

// EVALUA si un atributo existe en un elemento html
$linkDOM.hasAttribute("rel");
// REMOVER atributos
$linkDOM.removeAttribute("rel")

/**************** Data-Attributes ********************/

// te trae todos los estilos css validos que puedes usar en js
$linkDOM.style

// OBTENER una lista de todos los atributos "data-name" y su valor (el dataSet es un mapa)
$linkDOM.dataset;

// OBTENER un data-attribute especifico (luego del dataset el nombre del atributo)
$linkDOM.dataset.description;

//  OBTENER el valor de un atributo capturando el elemento del DOM
$linkDOM.getAttribute("style")

// CAMBIAR el valor de una propiedad data primer metodo(nameAtributo,valorAtributo)
$linkDOM.setAttribute("data-description", "Modelo de  Objeto del Documento")
//CAMBIAR el valor de una propiedad (poco usado) notacion del punto 2°
$linkDOM.dataset.description = "suscribete a mi canal y comparte"

// COMPROBAR si el atributo existe
$linkDOM.hasAttribute("data-id")

// ELIMINAR atributos
$linkDOM.removeAttribute("rel")
