/* 
keydown => presionas la tecla
keyup => cuando sueltas la tecla
keypress => mientras tengas presionada la tecla
*/
/* **** Evento Keydown *******/
function shortcuts(e) {
   // el evento
   console.log(e);
   // tipo de evento
   console.log(e.type);
   // nombre de la tecla
   console.log(e.key);
   // codigo de tecla
   console.log(e.keyCode);
}


// tienen las mismas propiedades que el keydown