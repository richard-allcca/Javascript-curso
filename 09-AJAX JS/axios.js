(() => {
  const $axios = document.getElementById('axios'),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    // .get("./assets/ajax.json")/* bds json local */
    .then((res) => {
      let resp = res.data;

      resp.forEach(el => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li)
      });
      $axios.appendChild($fragment)
    })
    .catch((err) => {
      // console.log(err.response); con esto puedes ver el contenido del error
      let message = err.response.status || 'Ocurrio un error';
      $axios.innerHTML = `Error ${err.response.status}:${message}`
      console.log(err);
    })
    .finally(() => {
      console.log('esto se ejecuta independiente del resultado');
    })

})();
