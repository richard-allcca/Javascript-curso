
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  //* TODO declaramos la function Async
  async function getData() {

    try {
      let resp = await axios.get('https://jsonplaceholder.typicode.com/users');
      let resp = await axios.get("assets/ajax.json");
      let json = await resp.data;

      json.forEach(el => {
        const $li = document.createElement("li");
        $li.innerHTML = (`${el.name}--${el.email}--${el.phone}`);
        $fragment.appendChild($li)
      });
      $axiosAsync.appendChild($fragment)

    } catch (err) {

      // console.log(err.response);ver contenido del error
      let message = err.response.status || 'Ocurrió un error'
      $axiosAsync.innerHTML = `Error: ${err.response.status}: ${message}`

    } finally {
      console.log('esto se ejecuta independientemente del resultado');
    }
  }
})()

