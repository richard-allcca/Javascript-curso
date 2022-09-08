(() => {

  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  //* TODO definimos la function Async
  async function getData() {

    try {
      let resp = await fetch("assets/ajax.json");
      // let resp = await fetch("https://jsonplaceholder.typicode.com/users");

      // convertimos la respuesta en json
      let json = await resp.json();

      console.log(resp, json);

      // if (!res.ok) throw new Error("ocurrio un error al solicitar los datos") //? throw new Error solo recibe string "MENSAJES" no objetos

      if (!resp.ok) {
        //* lanzamos solo el throw para enviar un objeto al catch
        throw { status: resp.status, statusText: resp.statusText }
      }

      json.forEach(el => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);

    } catch (err) {

      let message = err.estatusText || "ocurrio un error";
      $fetchAsync.innerHTML = `Error ${err.status}:${message}`;

    } finally {
      console.log("Esto se ejecutara independientemente del resultado");
    }

  }

  getData()

})()