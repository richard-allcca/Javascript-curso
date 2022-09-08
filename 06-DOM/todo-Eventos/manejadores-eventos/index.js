const d = document;

const holaMundo = () => {
  alert('hola mundo desde js');
  console.log(Event);
  // como puedes ver el event esta deprecado
  console.log(event);
}


const $eventoSemantico = d.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo;


const $eventoMultiple = d.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", (e) => {
  alert('Manejador de eventos multiples');
  console.log(e);
  console.log(e.type);
  console.log(e.target);
})

