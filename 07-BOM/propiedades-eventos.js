// =================================================================
//? Propiedades 
// =================================================================

window.addEventListener('resize', (e) => {
  console.clear(); // limpia la impresión en cada resize

  console.log(`*********** Evento Rezise ***********`);
  window.innerWidth // acho del viewport
  window.innerHeight // alto del viewport

  window.outerWidth // el ancho del navegador
  window.outerHeight // alto del navegador

  console.log(e);
})
window.addEventListener('scroll', (e) => {
  console.clear(); // limpia la impresión en desplazamiento 

  console.log(`*********** Evento Scroll ***********`);
  window.scrollX
  window.scrollY

  console.log(e);
});
window.addEventListener('load', (e) => {
  console.clear();

  // este evento se ejecuta cuando la ventana del navegador halla terminado de cargar (aun faltan datos sobre esto)
  console.log(`*********** Evento Load ***********`);
  window.screenX
  window.screenY

  console.log(e);
});
document.addEventListener('DOMContentLoaded', (e) => {
  console.clear();
  // este evento es mas eficiente que el "Load"
  console.log(`*********** Evento Load ***********`);
  window.screenX
  window.screenY

  console.log(e);
});


