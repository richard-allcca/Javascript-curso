// =================================================================
// Eventos y Metodos 
// =================================================================
// Los eventos de window se puede usar sin window solo con el nombre del método

window.addEventListener("resize", () => {
  console.clear();

  console.log("Eventos resize");

  // Ancho de viewoprt (ando de espacio para render)
  console.log(window.innerWidth);

  // Alto de viewport
  console.log(window.innerHeight);

  // Ancho de la ventana del navegador
  console.log(window.outerWidth);

  // Alto de la ventana del navegador
  console.log(window.outerHeight);

});

window.addEventListener("scroll", (e) => {

  console.log("Eventos Scroll");

  // Cuanto se aleja del top
  console.log(window.scrollY);

  // Cuanto se aleja de left
  console.log(window.scrollX);

});

window.addEventListener("load", (e) => {

  // Este evento es similiar al de DOMContentLoad del document
  console.log("Evento al carga el document");


});

const $abrir = document.getElementById('abri-ventana'),
  $cerrar = document.getElementById('cerrar-ventana'),
  $imprimir = document.getElementById('imprimir-ventana');

// almacena la referencia para ejecutar el "close"
let ventana;

$abrir.addEventListener('click', (e) => {

  //guardamos la referencia de este método en una variable 
  ventana = window.open('url de pagina');

});

$cerrar.addEventListener('click', (e) => {
  //hacemos el cierre a ventana con la referencia guardada 
  ventana.close();
});

$imprimir.addEventListener('click', (e) => {
  // imprime todo el contenido de la ventana
  window.print();
})

