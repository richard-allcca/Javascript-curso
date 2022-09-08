
/* **** FRAGMENT se usan como modelos para crear elementos html estos funcionan como una clase y aqui creamos instancias de esta pero aun que su modelo esta creado en el Html no se renderiza (no aparece) en el documento porque solo se usa como modelo para crear otros elementos IMPORTANTE debes crear el "Template en el Html" */
const $cards = document.querySelector(".card"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: 'https://placeimg.com/200/200/tech'
    },
    {
      title: "Animales",
      img: 'https://placeimg.com/200/200/animals'
    },
    {
      title: "Arquitectura",
      img: 'https://placeimg.com/200/200/arch'
    },
    {
      title: "Gente",
      img: 'https://placeimg.com/200/200/people'
    },
    {
      title: "Naturaleza",
      img: 'https://placeimg.com/200/200/nature'
    },
  ];

//! le asignamos atributos a los template usando el card content (este metodo deprecado ) usa el siguiente https://codepen.io/R1chvrd/pen/oNjaNER
cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img)
  $template.querySelector("img").setAttribute("alt", el.title)
  $template.querySelector("figcaption").textContent = el.title;

  // aqui creamos un clon de $template para que todo su contenido en cada interacion se agrege al "clon" IMPORTANTE  el metodo "importNode" crea el "clon" a partir de un "template" y el parametro "true" agrega todo su contenido "false" etiqueta vacia
  let $clone = document.importNode($template, true);
  // luego este clon lo agregamos a un $fragment antes declarado
  $fragment.appendChild($clone);
})
// al final le agregamos el $fargment al contenedor cards para que se imprima  
$cards.appendChild($fragment)

//? otro ejemplo de uso para templates (api-song ejercicios ajax)

if (artistData.artists === null) {

  $artistTemplate = `<h2>No existe el intérprete <mark>${artist}</mark></h2>`

} else {
  $form.style.setProperty('display', 'none')

  let artist = artistData.artists[0];

  $artistTemplate = `
      <h2>${artist.strArtist}</h2>
      <img src="${artist.strArtistThumb}" alt="${artist.strArtist}">
      <p>
      ${artist.intBornYear} - ${(artist.intDiedYear || "Presente")}
      </p>
      <p>${artist.strCountry}</p>
      <p>${artist.strGender} - ${artist.strStyle}</p>
      <a href="http://${artist.strWebsite}" target="_blank">Sitio Web</a>
      <p>${artist.strBiographyEN}</p>
      `;


  if (songData.error === "No lyrics found") {
    console.log('no tiene cancion');
    $songTemplate = `<h2>El Interprete <mark>${e.target.artist.value}</mark> no tiene la canción <mark>${song}</mark></h2>`
  } else {

    // let song = songData.lyrics;
    $songTemplate = `
        <h2>${song.toUpperCase()}</h2>
        <blockquote>${songData.lyrics}</blockquote>`
  }

}

$artist.innerHTML = $artistTemplate;
$loader.style.display = 'none';
$song.innerHTML = $songTemplate;