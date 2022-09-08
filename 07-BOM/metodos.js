
// =================================================================
//? Metodos mas usados
// =================================================================
// alert('Alerta')
// confirm('Guarda una confirmacion valor true o false')
// prompt('Aviso')

const $abrir = document.getElementById('abri-ventana'),
  $cerrar = document.getElementById('cerrar-ventana'),
  $imprimir = document.getElementById('imprimir-ventana');

let ventana;

$abrir.addEventListener('click', (e) => {
  //funciona sin window
  ventana = window.open('url de pagina');

  //guardamos este metodo en una variable 
})
$cerrar.addEventListener('click', (e) => {
  //hacemos el cierre a ventana(trae el valor del "open") con el metodo "close()"
  ventana.close();
})
$imprimir.addEventListener('click', (e) => {
  window.print(); // imprime todo el contenido de la ventana
})

