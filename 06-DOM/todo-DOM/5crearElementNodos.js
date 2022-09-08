// OBTENER el elemento padre donde vas a crear el elemento
const $cards = document.querySelector(".cards");

// CREAR etiquetas html con createElement
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption");

// CREAR un nodo de texto "textContent"
const $figcaptionText = document.createTextNode("Animals")

/* ***** Agregar atributos con su valor al elemento IMG creado */
$img.setAttribute("src", "url de la imagen");
$img.setAttribute("alt", "Animal");

/* **** Agregar node de texto a figcaption */
$figcaption.appendChild($figcaptionText)

/* ** agregarlos al nuevo elemento */
$figure.appendChild($img)
$figure.appendChild($figcaption)

/* ***** Agregarle una clase al elemento para que comparta estilos */
$figure.classList.add("card")

/*  Agregar lo elementos creados al html */
$cards.appendChild($figure)


/* ******************************************************** */
/* segunda forma de crear elementos con "innerHTML */
/* ******************************************************** */

// al nuevo elemento le asignamos el valor ya creado de figure
const $figure2 = document.createElement($figure)

// Agregando html=> img y figcaption al nuevo elemento figure 
$figure2.innerHTML = `<img src="url de imagen" alt="Animal">
<figcaption> ${$figcaptionText} </figcaption> `

// Agregando clase para estilos al nuevo elemento
$figure2.classList.add("card");

// Agregar el elemento creado a un contenedor en el html
$cards.appendChild($figure2)

/* ******************************************************** */
/* 1°  forma de crear elementos que vienen de una API y asignarlos a una Ul con List item */
/* ******************************************************** */

const estaciones = ["Primavera", "Verano", 'Otoño', 'Invierno'];
const $ul = document.createElement("ul");

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li)
})

/* ******************************************************** */
/* 2° forma de crear elementos que vienen de una API y asignarlos a una Ul con List item */
/* ******************************************************** */

const continentes = ['America', 'Africa', 'Oceania', 'Europa', 'Asia']
const $ul2 = document.createElement("ul");

document.write(`<h3>Continentes del Mundo</h3>`);
document.body.appendChild("ul2")
$ul2.innerHTML = ""; //esta inicializacion es opcional verifica que sea necesaria en tu navegador
continentes.forEach((el) => {
  $ul2.innerHTML += `<li>${el}</li>` //es posible que te haga falta un return
})

/* ******************************************************** */
/* FRAGMETOS para mejorar el rendimiento de tu Pagina */
/* ******************************************************** */


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',];

const $ul3 = document.createElement("ul");
// "Fragment" sirve para darle todos los datos con Forecah sin consumir recursos luego agregarlo al ul
const fragment = document.createDocumentFragment();

// IMPORTANTE aqui como usamos el createDocumentFragment no podemos usar "innerHtml" tenemos que usar el 1° metodo de crear nodos dentro del "foreach"
meses.forEach((el) => {
  const $li = document.createElement("li")
  $li.textContent = el;
  $fragment.appendChild($li);
})

document.write(`<h3>Meses del Año</h3>`);
$ul3.appendChild($fragment);
document.body.appendChild($ul3)