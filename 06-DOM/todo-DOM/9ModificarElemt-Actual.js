/*
.insertAdjacent...
   .insertAdjacentElement(position,el) 
   .insertAdjacentHTML(position,html)  
   .insertAdjacentText(position,text)

Posiciones:
   beforebegin(antes del primero)
   afterbegin(Primer hijo)
   beforeend(ultimo  hijo)
   afterend(despues del ultimo hijo (fuera del contenedor))
*/

const $cards = document.querySelector(".cards"),
  $newCard = document.querySelector("figure");

let $contentCard = `
   <img src="https://placeimg.com/200/200/any" alt="Any">
   <figcaption></figcaption>
   `;

// NUEVO aqui usamos el nuevo metodo para insertar HTML
$newCard.insertAdjacentHTML("beforebegin", $contentCard)
// como ya ingresamos el html la $newCard ya tiene figcaption asi que usamos esa referencia para agregarle el texto buscando la etiqueta "figcaption"

// NUEVO nuevo metodo para ingresar "Text"
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")

/************************************************************/

// aqui solo el agreamos la clase para que tenga los estilos
$newCard.classList.add("card");

// NUEVO nuevo metodo para agregar elementos "nodos"
$cards.insertAdjacentElement("afterbegin", $newCard)


/************************************************************/
// ALTERNATIVOS para ingresar elementos 

$cards.prepend($newCard)// antes de todo
$cards.append($newCard)// primer hijo de contenedor
$cards.before($newCard)// ultimo hijo
$cards.after($newCard)// fuera del contenedor al final