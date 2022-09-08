
const $divsEventos = document.querySelectorAll('.eventos-flujo div');
const $linkEventos = document.querySelector('.eventos-flujo a');

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);

  // esto elimina la propagacion de burbuja o de la captura
  e.stopPropagation()
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos)
})

/* ELIMINANDO eventos default */

$linkEventos.addEventListener("click", (e) => {
  console.log('hola soy tu amigo pero este enlace no abrira pagina');
  e.preventDefault();
})