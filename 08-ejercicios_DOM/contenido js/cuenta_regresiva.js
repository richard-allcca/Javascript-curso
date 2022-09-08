const d = document;

export default function countdown(id, limiteDate, finalMessage) {
  const $countdown = d.getElementById(id);
  const countdownDate = new Date(limiteDate).getTime(); //getTime() convierte la fecha en milisegundos

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime();
    let limitTime = countdownDate - now;

    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = `0 ${Math.floor(
        (limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )}`.slice(-2),
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    $countdown.innerHTML = `<h3>Faltan: ${days} Dias ${hours} Horas ${minutes} Minutos ${seconds} Segundos </h3> `;

    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = `<h3>${finalMessage}</h3> `;
    }
  }, 1000);
}
