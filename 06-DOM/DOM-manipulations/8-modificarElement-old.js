/* INSERTAR elementos nuevos en una ubicacion especifica */
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

// IMPORTANTE recuerda que innerHTML no es la forma mas optima usa fragmentos este solo es un ejemplo
$newCard.innerHTML = `
   <img src="https://placeimg.com/200/200/any" alt="Any">
   <figcaption>Any</figcaption>
   `;

$newCard.classList.add("card");

// reemplazamos una de las card del html usando "replace.child("nuevoElemento","elementoEliminar")" q recibe 2 parametros y traversing (recorriendo) Dom  para llegar hasta el elemento 
$cards.replaceChild($newCard, $cards.children[2]);

/* ******************************************************** */
/* INSERTAR elementos*/
// este metodo no reemplaza solo agrega un nuevo elemento delante de donde le indiques en el(2° parametro)
$cards.insertBefore($newCard, $cards.firstElementChild)


/* ******************************************************** */
/* ELIMINAR  elementos donde le indiques con el DOM traversing (lastElementtChild)*/
$cards.removeChild($cards.lastElementChild)


/* ******************************************************** */
// CLONAR para hacer clones solo usa el metodo cloneNode(true) con "true" como parametro para que clone todo una etiqueta del html con todo su contenido sin "true" solo clona el elemento sin su contenido
const $cloneCards = $cards.cloneNode(true)

// ahora elegimos donde ubicar el clon
document.body.appendChild($cloneCards);