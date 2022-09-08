(() => {

  //? 1° creamos una variable que sea intancia del objeto XMLHttpRequest 

  const xhr = new XMLHttpRequest();
  // una variable q sea referencia al la lista del DOM donde se almacene el contenido de la api
  const $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();
  // FRAGMENT para evitar consumo de recursos del sistema e insertar datos al HTML, cuando tenga todos los datos 1 sola inserción

  //? 2° este evento detecta todos los cambios de estado de las peticiones AJAX, para manipularlos 
  xhr.addEventListener("readystatechange", (e) => {

    // validacion de ESTADOS DE LA PETICION evita los estados innecesarios solo respuesta con el "4" (READY_STATE_COMPLETE)
    if (xhr.readyState !== 4) return;
    // validacion de ESTADOS DE LA RESPUESTA "NECESARIA" cuando el codigó de respuesta > 200 y podamos imprimir los datos en html
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("éxito");
      console.log(xhr.responseText);

      let json = JSON.parse(xhr.responseText);
      json.forEach(el => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      console.log("error");
      let message = xhr.statusText || "ocurrio un error";
      xhr.innerHTML = `Error ${xhr.status}: ${message}`
    }

    // fuera del if else puedes ejecutar alguna función como un loader que no depende del exito o error de la petición
    console.log("esto se ejecutara de cualquier forma");

  });

  //? 3° instruccion para abrir la petición URL externa e interna
  // 1° parametro, metodo por el cual vamos a comunicarnos (get,post.patch,delete) 
  // 2° parametro, url del recurso(api) o endPoint a donde haremos la petición
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
  // xhr.open("GET", "./assets/ajax.json") //* recurso local 

  //? 4° final, enviamos la petición con el metodo  
  xhr.send();
})();

//* otro ejemplo practico https://www.youtube.com/watch?v=w8q0C2Fb-Gg&ab_channel=VidaMRR 
