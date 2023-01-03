const $cards = document.querySelector(".cards")

//SELECCIONA los hijos del selector
$cards.children

//SELECCIONA un hijo especifico del selector 
$cards.children[2]

//SELECCIONA al primer hijo del elemento 
$cards.firstChild

//SELECCIONA al ultimo hijo del elemento 
$cards.lastChild

//SELECCIONA al contenedor padre en este caso "body" 
$cards.parentElement

//SELECCIONA al elemento hermano previo del elemento 
$cards.previousElementSibling

//SELECCIONA al elemento hermano siguiente del elemento 
$cards.nextElementSibling

// BUSCA el ancestro directo (contenedor)
$cards.closest("body")

// BUSCA la etiqueta ancestro mas cercana en este caso el ancestro(contenedor) mas cercano es la etiqueta con la clase "cards"
$cards.children[3].closest("section")



