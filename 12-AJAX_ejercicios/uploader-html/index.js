//? para ejecutar este codigo necesitas abrir xammp

const d = document,
  $main = d.querySelector("main"),
  $files = d.getElementById("files");

const uploader = (file) => {
  // console.log(file);
  const xhr = new XMLHttpRequest();
  const formData = new FormData();

  // a este formData le agregamos un name "file" (nameDeFormulario) y su contenido viene del parametro de la Ejecucion de uploader (linea-43)
  formData.append("file", file);

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.responseText);
    } else {
      let message = xhr.statusText || "Ocurrio un error";
      console.log(`Error ${xhr.status}: ${message} `);
    }
  });

  // estamos enviando un formulario abrimos la peticion con POST
  // la url viene del php donde esta el codigo del lado del servidor
  xhr.open("POST", "assets/uploader.php");

  // tiene que llevar esta cabezera para que aparte de variables textuales detecte archivos binarios
  xhr.setRequestHeader("enc-type", "multipart/form-data");

  // los datos que vamos a enviar por la petición POST estan el formData
  xhr.send(formData);
};
//* salvar cada archivo
d.addEventListener("change", (e) => {
  if (e.target === $files) {
    // console.log(e.target.files);

    // para iterar objetos primero convertirlos en Array
    const files = Array.from(e.target.files);
    files.forEach((el) => uploader(el));
  }
});
