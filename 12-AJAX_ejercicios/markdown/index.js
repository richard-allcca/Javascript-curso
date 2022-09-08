const d = document;
$main = d.querySelector("main");

// let converter = new showdown.Converter();

fetch("assets/javascript.md")
  .then((res) => {
    let resp = res.ok ? res.text() : Promise.reject(res);
    return resp;
  })
  .then((text) => {
    //? instanciamos el showdown y ejecutamos su metodo makeHtml
    $main.innerHTML = new showdown.Converter().makeHtml(text);
  })
  .catch((err) => {
    console.log(err);
    let message = err.statusText || "Ocurrio un error";
    $main.innerHTML = `${err.status}: ${message}`;
  });
