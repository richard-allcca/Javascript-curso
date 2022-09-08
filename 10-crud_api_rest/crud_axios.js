const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

// =================================================================
//? GET
// =================================================================
const getAll = async () => {
  try {
    let res = await axios.get("http://localhost:3000/santos"),
      json = await res.data;

    //FIXME aqui falta una validacion de res == ok

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
    let message = err.statusText || "Ocurrió un Error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>${err.status}:${message}</b></p>`
    );
  }
};

d.addEventListener("DOMContentLoaded", getAll);

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
            data: JSON.stringify({
              nombre: e.target.nombre.value,
              constelacion: e.target.constelacion.value,
            }),
          },
          res = await axios("http://localhost:3000/santos", options),
          json = await res.data; //la respuesta viene en data del res

        $form.reset();
      } catch (err) {
        let message = err.statusText || "Ocurrió un Error";
        $table.insertAdjacentHTML(
          "afterend",
          `<p><b>${err.status}:${message}</b></p>`
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
          data: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          }),
        };

        let res = await axios(
          `http://localhost:3000/santos/${e.target.id.value}`,
          options
        );
        // json = await res.data;

        $form.reset();
      } catch (err) {
        let message = err.statusText || "Ocurrió un Error";
        $table.insertAdjacentHTML(
          "afterend",
          `<p><b>${err.status}:${message}</b></p>`
        );
      }
    }
  }
});

// =================================================================
//? EVENTOS DEL CLICK - EDIT AND DELETE
// =================================================================
d.addEventListener("click", async (e) => {
  //* EDITAR
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Santo";
    $form.nombre.value = e.target.dataset.nombre;
    $form.constelacion.value = e.target.dataset.constelacion;
    $form.id.value = e.target.dataset.id;
  }

  //* ELIMINAR
  if (e.target.matches(".eliminar")) {
    let isDelete = confirm(
      `¿Estas seguro de eliminar el id ${e.target.dataset.id}`
    );

    if (isDelete) {
      try {
        let options = {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
          },
          res = await axios(
            `http://localhost:3000/santos/${e.target.dataset.id}`,
            options
          );
        // json = await res.data;

        $form.reset();
      } catch (err) {
        let message = err.statusText || "Ocurrió un Error";
        alert(`Error ${err.status}:${message}`);
      }
    }
  }
});
