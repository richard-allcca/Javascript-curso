//para poder cancelar su ejecucion debe estar dentro de una variable
const tiempoRepetido = setInterval(() => {
  document.write(new Date().toLocaleTimeString());
}, 1000);

clearInterval(tiempoRepetido);

// para poder cancelar un setTimeOut debe estar guardado en una constante o varible
// los setTimeout solo se ejecuta una vez
const temporizador = setTimeout(() => {
  console.log(new Date().toLocaleTimeString());
}, 3000);

clearTimeout(temporizador);
