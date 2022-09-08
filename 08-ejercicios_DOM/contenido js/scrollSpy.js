// =================================================================
//? enlaces del menu activos cuando estan enfocados
// =================================================================

const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      // console.log(entry, id);

      if (entry.isIntersecting) {
        // entry.target.classList.add("active");
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        // entry.target.classList.remove("active");
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };
  const observer = new IntersectionObserver(cb, {
    threshold: [0.5, 0.7],
  });

  $sections.forEach((el) => observer.observe(el));
}

// Notas:
//* root: null
// 1° solo "root" o con valor "null", Tomara como base el wiewport para fijar el scroll
//* rootMargin: "-250px"
// 2° valor negativo reduce su campo de vision del document hacia adentro y centro
// Valor positivo aumenta el campo de vision hacia afuera
//* threshold: [0.5, 0.7],
// 3° con "0" se activa cuando el objeto en pantalla esta completo, pero con "0.5" se activara con 50% del objetivo
//* Ademas si usas "[ ]* para poner 2 valores los tomara como minimo y maximo (recomendable)
