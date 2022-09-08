const d = document,
  $main = d.querySelector("main");

const getHTML = (options) => {
  let { url, succes, error } = options;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState != 4) return; // validamos que el estado de peticion solo sea 4

    if (xhr.status >= 200 && xhr.status < 300) {
      // aqui el html no necesita ser parceado para pintarlos
      let html = xhr.responseText;
      succes(html);
    } else {
      let message = xhr.statusText || "Ocurrio un error";
      error(`Error:${xhr.status}:${message}`);
    }
  });
  xhr.open("GET", url); // abrimos la petición
  xhr.setRequestHeader("Content-type", "text/html;charset=utf-8"); // la cabezera con el tipo de dato
  xhr.send(); // ejecutamos el envio que el realidad es una peticion de la url
};

d.addEventListener("DOMContentLoaded", () => {
  getHTML({
    url: "assets/home.html",
    succes: (html) => ($main.innerHTML = html),
    error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
  });
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".menu a")) {
    e.preventDefault();
    getHTML({
      url: e.target.href, // la url carga el contenido en el atributo href
      succes: (html) => ($main.innerHTML = html),
      error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
    });
  }
});
