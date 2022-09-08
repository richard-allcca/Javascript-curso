const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

// =================================================================
// ? GET
// =================================================================
export const getAll = async () => {
  try {
    let res = await fetch("http://localhost:5000/santos");
    let json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    console.log(json);

    json.forEach((el) => {
      $template.querySelector(".name").textContent = el.nombre;
      $template.querySelector(".constelacion").textContent = el.constelacion;
      $template.querySelector(".edit").dataset.id = el.id;
      $template.querySelector(".edit").dataset.nombre = el.nombre;
      $template.querySelector(".edit").dataset.constelacion = el.constelacion;
      $template.querySelector(".eliminar").dataset.id = el.id;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    let message = err.statusText || "Ocurrio un Error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

// d.addEventListener("DOMContentLoaded", getAll);

// =================================================================
//? EVENTOS DEL SUBMIT - CREATE AND UPDATE
// =================================================================
d.addEventListener("submit", async (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      //* CREATE - POST
      try {
        let options = {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          }),
        };

        let res = await fetch("http://localhost:5000/santos", options),
          json = await res.json();

        //* para manejo del error
        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        $form.reset(); //recarga necesaria
      } catch (error) {
        let message = err.statusText || "Ocurrio un Error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    } else {
      //* UPDATE - PUT
      try {
        let options = {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          }),
        };

        let res = await fetch(
            `http://localhost:5000/santos/${e.target.id.value}`,
            options
          ),
          json = await res.json();

        //para manejo del error, si res.ok viene Falso
        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        $form.reset(); //recarga necesaria
      } catch (err) {
        let message = err.statusText || "Ocurrio un Error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }
});

// =================================================================
//? EVENTOS DEL CLICK - EDTI AND DELETE
// =================================================================
d.addEventListener("click", async (e) => {
  //* ENVIAR DATOS AL FORMUARIO PARA EDITAR
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Santo";
    $form.nombre.value = e.target.dataset.nombre;
    $form.constelacion.value = e.target.dataset.constelacion;
    $form.id.value = e.target.dataset.id;
  }

  //* DELETE-ELIMINAR
  if (e.target.matches(".eliminar")) {
    let isDelete = confirm(
      `¿Estas seguro de eliminar el ${e.target.dataset.id}?`
    );

    if (isDelete) {
      try {
        let options = {
          method: "DELETE",
          headers: {
            "content-type": "application/json; charset=utf-8",
          },
        };

        let res = await fetch(
            `http://localhost:5000/santos/${e.target.dataset.id}`,
            options
          ),
          json = await res.json();

        //para manejo del error, si res.ok viene Falso
        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        location.reload(); //recarga necesaria
      } catch (err) {
        let message = err.statusText || "Ocurrio un Error, no se pudo eliminar";
        alert(`Error ${err.status}: ${message}`);
      }
    }
  }
});
