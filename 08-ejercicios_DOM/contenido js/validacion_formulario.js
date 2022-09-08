const d = document;

export default function contactFormValidations() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

  $inputs.forEach(input => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none")
    input.insertAdjacentElement("afterend", $span);
  })

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
          : d.getElementById($input.name).classList.remove("is-active")
      }
      if (!pattern) {
        // console.log("no tiene patron");
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active")
      }
    }
  })
  d.addEventListener("submit", (e) => {
    // e.preventDefault();
    alert("Enviando Formulario");

    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none")
      $form.reset()

      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);
  })
}