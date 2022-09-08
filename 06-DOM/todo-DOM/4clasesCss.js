const $card = document.querySelector(".card");

console.log($card);//muestra la clase y su valor (nombre)
console.log($card.className);//muestra solo el contenido de la clase
console.log($card.classList);//muestra una lista similar a arreglo con el contenido de la clase

// COMPRUEBA si existe la clase 
console.log($card.classList.contains("nombre-clase"));

//AGREGA una clase
$card.classList.add("nombre-clase");

// REMUEBE una clase o mas de una
$card.classList.remove("nombre-clase");

// PALANCA agrega o quita una o mas clases segun sea el caso
$card.classList.toggle("nombre-clase");

// REEMPLAZA el nombre de una clase por otra
$card.classList.replace("nombre-clase", "otro-nombre");



