//  documentación para api word press developer
//* https://developer.wordpress.org/rest-api/reference/

const d = document,
  w = window,
  $site = d.getElementById("site"),
  $posts = d.getElementById("posts"),
  $loader = d.querySelector(".loader"),
  $template = d.getElementById("post-template").content,
  $fragment = d.createDocumentFragment(),
  // DOMAIN = "https://malvestida.com",
  DOMAIN = "https://css-tricks.com",
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  POSTS = `${API_WP}/POSTS?_embed&per-page=5`,
  PAGES = `${API_WP}/PAGES`,
  CATEGORIES = `${API_WP}/CATEGORIES`;

let page = 1,
  perPage = 5;

// console.log(POSTS);
function getSite() {
  fetch(SITE)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      // $loader.style.display = "none";
      // console.log(json);
      $site.innerHTML = `
        <h3>Sitio Web</h3>
        <h2>
          <a href="${json.url}">${json.name}</a>
        </h2> 
        <p>${json.description || "Sin Description"}</p>
        <p>${json.timezone_string}</p>
      `;
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrio un Error";
      $site.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      $loader.style.display = "none";
    });
}

function getPost() {
  $loader.style.display = "block";

  fetch(`${POSTS}&page=${page}&perPage=${perPage}`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      $loader.style.display = "none";
      // console.log(json);//?contenido total
      json.forEach((el) => {
        let categorias = "",
          tags = "";
        el._embedded["wp:term"][0].forEach(
          (el) => (tags += `<li> ${el.name}</li>`)
        );
        el._embedded["wp:term"][1].forEach(
          (el) => (categorias += `<li> ${el.name}</li>`)
        );

        $template.querySelector(".post-title").innerHTML = el.title.rendered;
        $template.querySelector(".post-image").src =
          el._embedded["wp:featuredmedia"][0].source_url;
        $template.querySelector(".post-image").alt = el.title.rendered;
        $template.querySelector(".post-author").innerHTML = `
        <img src="${el._embedded.author[0].avatar_urls[48]}" alt="${el._embedded.author[0].name}">
        <figcaption> ${el._embedded.author[0].name}</figcaption >`;
        $template.querySelector(".post-date").innerHTML = new Date(
          el._embedded["wp:featuredmedia"][0].date
        ).toLocaleString();
        $template.querySelector(".post-link").href = el.link;
        $template.querySelector(".post-excerpt").innerHTML =
          el.excerpt.rendered.replace("[&hellip;]", "...");
        $template.querySelector(
          ".post-categories"
        ).innerHTML = `<ul> Categorias: ${categorias}</ul> `;
        $template.querySelector(
          ".post-tags"
        ).innerHTML = `<ul> Tags: ${tags}</ul> `;
        $template.querySelector(".post-content").innerHTML =
          el.content.rendered;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });
      $posts.appendChild($fragment);
      $loader.style.display = "none";
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrio un Error";
      $site.innerHTML = `<p>Error ${err.status}: ${message}</p > `;
      $loader.style.display = "none";
    });
}

d.addEventListener("DOMContentLoaded", (e) => {
  getSite();
  getPost();
});

window.addEventListener("scroll", (e) => {
  //? 1°-> distancia del top, 2°-> px del wh 3: px total de scroll
  const { scrollTop, clientHeight, scrollHeight } = d.documentElement;

  if (scrollTop + clientHeight <= scrollHeight) {
    // console.log('cargar mas contenido');
    page++;
    getPost();
  }
});
