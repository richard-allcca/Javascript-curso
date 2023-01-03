// primero almacenamos el selector del documento con el que vamos a trabajar

const $linkDOM = document.querySelector('.link-dom')

//? SOLO accede a todo el mapa de estilos Declarados en el html
// (no es necesario window porque son metodos que cuelgan de el)
console.log($linkDOM.style);

// ACCEDE al Atributo 'style' y su valor en html
console.log($linkDOM.getAttribute('style'));

// accede a todos los estilos declarados donde sea
console.log(window.getComputedStyle($linkDOM));//con valores por defecto

// ACCEDER al valor y la propiedad (especifica)
console.log(getComputedStyle($linkDOM).getPropertyValue('color'));


//FIXME ACCEDE  al valor de la propieda
console.log($linkDOM.style.backgroundColor);


// ESTABLECER valores de estilos
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAling = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRigth = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

// JavaScript puede CAMBIAR ESTILOS HTML:
document.getElementById("demo").style.fontSize = "25px";

/* ************************************************************* */
// ESTABLECER VARIABLES CSS 
// primero debes crearlas en el :root de tu css 
// luego almacenarls en una variable js para usarlas
const $html = document.documentElement,
  $body = document.body;

// usar las anteriores variables para almacenar las de css 
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// APLICAR estilos abtenidos del :root 
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor

// REDEFINIR valores de custom property CSS
$html.style.setProperty("--dark-color", "#000");//le da un nuevo valor a la variable "--dark-color"
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")//le asigna nuevamente el valor a la variable para sobrescribir la anterior si la hubiera