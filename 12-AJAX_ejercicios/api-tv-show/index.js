const d = document,
  $shows = d.getElementById("shows"),
  $template = d.getElementById("show-template").content,
  $fragment = d.createDocumentFragment();
// console.log($shows);
d.addEventListener("keypress", async (e) => {
  if (e.target.matches("#search")) {
    // console.log(e.key);
    if (e.key === "Enter") {
      try {
        $shows.innerHTML = `<img src="assets/Spinner-1s-244px.svg" alt="cargando" class="loader">`;

        let query = e.target.value.toLowerCase(),
          api = `http://api.tvmaze.com/search/shows?q=${query}`,
          res = await fetch(api),
          json = await res.json();

        // console.log(json);
        if (json.length === 0) {
          $shows.innerHTML = `<h2>Busqueda sin Resultados para <mark>${query}</mark></h2>`;
        } else {
          json.forEach((el) => {
            $template.querySelector("h3").textContent = el.show.name;
            $template.querySelector("div").innerHTML = el.show.summary
              ? el.show.summary
              : "Sin Descipción";
            $template.querySelector("img").src = el.show.image
              ? el.show.image.medium
              : "http://static.tvmaze.com/images/no-img-portrait-text.png";
            $template.querySelector("img").alt = el.show.image
              ? el.show.image.name
              : " Sin imagen disponible ";
            $template.querySelector("img").style.maxWidth = "100%";
            $template.querySelector("img").href = el.show.url
              ? el.show.url
              : "#";
            $template.querySelector("img").target = el.show.url
              ? "_blank"
              : "_self";
            $template.querySelector("img").textContent = el.show.url
              ? " ver más? "
              : "";

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
          });
          $shows.innerHTML = "";
          $shows.appendChild($fragment);
        }

        if (!res.ok) throw { status: res.status, statusText: res.statusText };
      } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrió un Error";
        $shows.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      }
    }
  }
});
