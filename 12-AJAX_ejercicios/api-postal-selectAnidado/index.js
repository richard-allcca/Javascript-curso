const d = document,
  $selectPrimary = d.getElementById("select-primary"),
  $selectSecondary = d.getElementById("select-secondary");

function loadState() {
  fetch(
    "https://api-sepomex.hckdrk.mx/query/get_estados?token=70d118e2-2766-4953-8021-38accf3d128a"
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      let $options = `<option value="">Elige un Estado</option>`;
      json.response.estado.forEach((el) => {
        $options += `<option value="${el}">${el}</option>`;
      });
      $selectPrimary.innerHTML = $options;
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $selectPrimary.nextElementSibling.innerHTML = `Error ${err.status}: ${message} `;
    });
}
function loadTowns(state) {
  fetch(
    `https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}?token=70d118e2-2766-4953-8021-38accf3d128a`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      let $options = `<option value="">Elige un Municipio</option>`;
      // console.log(json.response.municipios);
      json.response.municipios.forEach((el) => {
        $options += `<option value="${el}">${el}</option>`;
      });
      $selectSecondary.innerHTML = $options;
    });
}

d.addEventListener("DOMContentLoaded", () => loadState());

$selectPrimary.addEventListener("change", (e) => loadTowns(e.target.value));
