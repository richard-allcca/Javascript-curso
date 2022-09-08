/* PARAMETROS para una funcion de eventos */

const $eventoMultiple = document.getElementById('evento-multiple');

// aqui usamos parametros por defecto
function saludo(nombre = 'desconocid@') {
  console.log(`hola ${nombre}`);
}

$eventoMultiple.addEventListener('click', () => {
  saludo();
  saludo('richard')
});


/*=======================================================
  ELIMINAR eventos */

// Para elinar eventos necesitas usar una función declarada o asignada, PORQUE el remove necesita dos parametros (el vento y la funcion manejadora del evento)
const $eventoRemover = document.getElementById('evento-Remover');

const eliminarEvent = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`)
  console.log(e);

  // aqui usamos el doble click "dblclick" para remover
  $eventoRemover.removeEventListener('dblclick', eliminarEvent);

  // para ocultar el botton luego de eliminar el evento
  $eventoRemover.disabled = true;
}
