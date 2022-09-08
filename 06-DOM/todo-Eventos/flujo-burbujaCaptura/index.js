

const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className} `);
}

console.log($divsEventos);


$divsEventos.forEach((div) => {

  // face de burbuja sin el 3° parametro es x defecto "false"
  div.addEventListener("click", flujoEventos);

  //face captura, indicamos el tercer parametro como objeto
  div.addEventListener("click", flujoEventos, {
    // dice que tipo sera el evento burbuja(false),capture(true)
    capture: false,
    // esta opción le indica si tu evento se ejecuta una sola vez
    once: true
  })

});

