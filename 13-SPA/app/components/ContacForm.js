export function ContacForm() {
  const d = document,
    $form = d.createElement("form"),
    $styles = d.getElementById("dynamic-styles");

  $form.classList.add("contact-form");

  const $loader = d.querySelector(".loader"); //? loader del submit

  $loader.classList.add("none");

  $styles.innerHTML = `
    .contact-form {
      --form-ok-color: hsl(122, 39%, 49%);
      --form-error-color: hsl(4, 90%, 58%);
      margin-left: auto;
      margin-right: auto;
      width: 80%;
      /* border: 1px solid; */
    }
    .contact-form > * {
      display: block;
      padding: 0.5rem;
      margin: 1rem;
      width: 100%;
      margin-left: 0px;
    }
    .contact-form textarea {
      resize: none;
    }
    .contact-form legend,
    .contact-form-response {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
    }
    .contact-form input,
    .contact-form textarea {
      font-size: 1rem;
      font-family: sans-serif;
    }
    .contact-form input[type="submit"] {
      width: 50%;
      font-weight: bold;
      cursor: pointer;
      margin-left: 25%;
    }
    /* todos los contenidos que tengas el atributo placeholder */
    .contact-form *::placeholder {
      color: hsl(0, 0%, 0%);
    }
    .contact-form [required]:valid {
      border: thin solid var(--form-ok-color);
    }
    .contact-form [required]:invalid {
      border: thin solid var(--form-error-color);
    }
    
    .contact-form-error {
      margin-top: -1rem;
      font-size: 80%;
      background-color: var(--form-error-color);
      color: hsl(0, 0%, 100%);
      transition: all 800ms ease;
    }
    .contact-form-error.is-active {
      display: block;
      /* animacion show-message dura, cuantas veces se ejecuta, forma de ejecucion(normal),no tiene retardo(0), efecto de animacon ease-out(afuera), va conservar los estilos con los que termine */
      animation: show-message 1s 1 normal 0s ease-out both;
    }
    .none {
      display: none;
    }
    /* animación */
    @keyframes show-message {
      0% {
        visibility: hidden;
        opacity: 0;
      }
      100% {
        visibility: visible;
        opacity: 1;
      }
    }
  `;

  $form.innerHTML = `
    <legend>Envianos tus Comentarios</legend>
      <input type="text" name="name" placeholder="Ingresa tus Datos" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
        title="Nombre solo acepta letras y espacios en blanco" required autofocus>

      <input type="email" name="email" placeholder="Ingresa tu Correo" title="Email Incorrecto"
        pattern="^ |[_A-Za-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9]+)*(\.[a-z]{2,15})| $" required>
        
        <input type="text" name="subject" placeholder="Asunto a Tratar" title="El Asunto es Requerido" required>
        
        <textarea name="comments" cols="50" rows="5" placeholder="Ingresa tus Comentarios" data-pattern="/[a-zÑñÁáÉéÍíÓóÚúÜüA-Z,0-9\n]/g"
        title="Tu Comentario no puede exceder los 250 caracteres" required></textarea>
        
        <input type="submit" value="Enviar">
        <div class="contact-form-loader none">
        <img src="./assets/circles.svg" alt="Cargando">
        </div>
        <div class="contact-form-response none">
        <p>Los datos han sido enviados</p>
        </div>
        `;

  // ==================
  // validación From
  // ==================

  function contactFormValidations() {
    const $form = d.querySelector(".contact-form"),
      $inputs = d.querySelectorAll(".contact-form [required]");

    $form.action = `https://richard_allcca_llano@hotmail.com`;
    $form.method = "POST";

    $inputs.forEach((input) => {
      const $span = d.createElement("span");
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error", "none");
      input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required]")) {
        let $input = e.target,
          pattern = $input.pattern || $input.dataset.pattern;
        /* los (data-atribute) estan en un "dataset" */

        // console.log($input.title, pattern);

        if (pattern && $input.value !== "") {
          // console.log("tiene patron");
          let regex = new RegExp(pattern);

          return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }
        if (!pattern) {
          // console.log("no tiene patron");
          return $input.value === ""
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }
      }
    });

    // ==================
    // Envio Form
    // ==================

    d.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Enviando Formulario");

      const $response = d.querySelector(".contact-form-response");

      $loader.classList.remove("none");

      fetch("https://formsubmit.co/ajax/richard_allcca_llano@hotmail.com", {
        method: "POST",
        body: new FormData(e.target), // este formData parsea lo que viene en los name del formulario
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);

          // ejecutamos como lo haciamos con el setTimeOut
          $loader.classList.add("none");
          $response.classList.remove("none");
          $response.innerHTML = `<p>${json.message}</p>`;
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let message = err.statusText || "Hubo un error en el envio";
          $response.innerHTML = `<p>Error: ${err.statusText} ${message}</p>`;
        })
        .finally(() => {
          setTimeout(() => {
            $response.classList.add("none"); //oculta la etiqueta del msj
            $response.innerHTML = ""; // resetear el msj de respuesta

            //   $form.reset()
          }, 3000);
        });
    });
  }

  // retardo de ejecucion para permitir carga del DOM en una SPA
  setTimeout(() => {
    contactFormValidations();
  }, 500);

  return $form;
}

//? Notas:
// 1. para obtener los valores de inputs método de "midu"
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  console.log(JSON.stringify(data));
});
