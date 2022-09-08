(() => {
  // declaracion de variables
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  // dirección del recurso y segundo parametro options (para app CRUD)
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      // console.log(res);
      // revisa las notas sobre metodos para manejar las resp
      // convertimos los datos en objetos con "json()" con el metodo .json de fetch
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      // luego de convertirlo a objeto manejamos los datos aqui
      // console.log(json);
      json.forEach(el => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch(() => {
      // console.log(`${err}`);
      let message = err.estatusText || "ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}:${message}`;
    })
    .finally(() => {
      console.log("Esto se ejecutara independientemente del resultado");
    })

})()

