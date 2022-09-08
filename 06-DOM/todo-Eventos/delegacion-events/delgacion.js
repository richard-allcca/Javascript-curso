
const d = document;


function flujoEventos(e) {
  console.log(`Hola te saluda ${e}, el click lo origino ${e.target.className} `);
}


d.addEventListener("click", (e) => {
  console.log("Click en:", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy tu amigo y docente digital...Jonathan");
    e.preventDefault();
  }

})




