
export function PostCard(props) {

  let { date, id, _embedded, slug, title } = props;

  let dateFormat = new Date(date).toLocaleString(),
    //? urlPoster para imagen opcional en caso no tenga
    urlPoster = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"][0].source_url
      : "app/assets/fondoGirls.jpg";


  return `
      <article class="post-card">
      <img src="${urlPoster}" alt="${title.rendered}">
      <h2>${title.rendered}</h2>
      <p>
        <time datetime="${date}">${dateFormat}</time>
        <a href="#/${slug}" data-id="${id}">Ver Publicación</a>
      </p>
      </article>
      `;
}

