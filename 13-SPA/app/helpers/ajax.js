export async function ajax(props) {
  // no usamos {error} para generar un error generico
  let { url, success } = props;

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      // d.querySelector(".loader").style.display = "none";
      success(json);
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrio un Error";

      d.getElementById("main").innerHTML = `<div class="error">
        <p>Error ${err.statusCode}: ${message}</p>
        </div>`;

      d.querySelector(".loader").style.display = "none";

      // console.log(err);
    });
}
