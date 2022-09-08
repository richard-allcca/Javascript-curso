const d = document,
  w = window;

export default function smartVideo() {
  const $videos = d.querySelectorAll("video[data-smart-video]");

  // callback
  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
      // Reproduce o pausa si cambia de pagina o pestaña
      w.addEventListener("visibilitychange", (e) => {
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause();
      });
    });
  };

  // Instancia de la API
  const observer = new IntersectionObserver(cb, {
    threshold: 0.7,
  });

  // Ejecutar el observer - observar los elementos
  $videos.forEach((el) => observer.observe(el));
}
