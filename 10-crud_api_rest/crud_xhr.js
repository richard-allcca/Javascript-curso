const d = document,
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $table = d.querySelector(".crud-table"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

const ajax = (options) => {
  $form.reset();

  //TODO: agrega una validación para confirmar que el parametro sea OBJ

  // 2° destructuramos el objeto options 
  let { url, method, succes, error, data } = options;

  // 3° instancia de XMLHttpRequest
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    // evita estados de la peticion innecesarios solo el estado n°4 (READY_STATE_COMPLETE)
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {

      let json = JSON.parse(xhr.responseText);
      succes(json);
    } else {

      let message = xhr.statusText || "Ocurrio un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });

  // 5° abrir la conexion, indicando el metodo y la url
  xhr.open(method || "GET", url);

  // 6° Add cabecera especifica el tipo de contenido de envio
  xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
  // Otro Ejemplo de cabecera
  // xhr.setRequestHeader("content-type", "appplication/x-www-form-urlencoded");

  // envio de petición
  xhr.send(JSON.stringify(data));
};

/**
 ** METODO GET 
 * */
export const getAll = () => {
  ajax({
    method: "GET", //puedes omitir cuando el motodo es GET
    url: "http://localhost:5000/santos",
    succes: (resp) => {
      console.log(resp); //ver el contenido de la respuesta
      resp.forEach((el) => {
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
    },
    error: (err) => {
      console.warn(err);
      $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
    },
    data: null, // puedes omitir data cuando el metodo es GET
  });
};
/**
 * * EJECUTA "getAll" a la carga del document
 * d.addEventListener("DOMContentLoaded", getAll);
 * comentado porque exporte getAll al app.js como modulo
 */

/**
 ** METODO POST and PUT
 */
export const crearUpdate = () => {
  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();

      if (!e.target.id.value) {

        ajax({
          url: "http://localhost:5000/santos",
          method: "POST",
          succes: () => location.reload(), //recarga el DOM,
          error: () =>
            $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
          data: {
            // obtenemos valores del form el ID es automatico c/json server
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          },
        });
      } else {

        ajax({
          //? url obtiene el id del input "hidden" minuto16 clase 116
          url: `http://localhost:5000/santos/${e.target.id.value}`,
          method: "PUT",
          succes: (resp) => location.reload(), //recarga el DOM
          error: () =>
            $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
          data: {
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          },
        });
      }
    }
  });

  /**
   * * METODO DELETE
   */
  d.addEventListener("click", (e) => {
    if (e.target.matches(".edit")) {
      console.log(e.target);
      $title.textContent = `Editar Santo`;
      $form.nombre.value = e.target.dataset.nombre;
      $form.constelacion.value = e.target.dataset.constelacion;
      $form.id.value = e.target.dataset.id;
    }
    if (e.target.matches(".eliminar")) {
      let isDelete = confirm(
        `¿Estas seguro de eliminar el ${e.target.dataset.id}?`
      );

      if (isDelete) {
        ajax({
          //? url obtiene el id del input "hidden" minuto16 clase 116 para eliminarlo
          url: `http://localhost:5000/santos/${e.target.dataset.id}`,
          method: "DELETE",
          succes: (resp) => location.reload(), //recarga el DOM
          error: () => alert(err),
          //* data no es necesario para borrar por el id en "url"
        });
      }
    }
  });
};
