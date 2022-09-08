const d = document,
  $form = d.getElementById("song-search"),
  $loader = d.querySelector(".loader"),
  $error = d.querySelector(".error"),
  $main = d.querySelector("main"),
  $artist = d.querySelector(".artist"),
  $song = d.querySelector(".song");

$form.addEventListener("submit", async (e) => {
  e.preventDefault()

  try {
    $loader.style.display = "block";

    let artist = e.target.artist.value.toLowerCase(),//valor del inpurt 
      song = e.target.song.value.toLowerCase(), //valor del inpurt
      $artistTemplate = "", //para usar en la iteracion del result
      $songTemplate = "", //para usar en la iteracion del result
      artistApi = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`,
      songApi = `https://api.lyrics.ovh/v1/${artist}/${song}`,
      artistFetch = fetch(artistApi),
      songFetch = fetch(songApi),
      // usamos destructure para almacenar las respuestas de fetch.all
      [artistRes, songRes] = await Promise.all([artistFetch, songFetch]),
      artistData = await artistRes.json(),
      songData = await songRes.json();

    console.log(artistData, songData);//?con esto verificamos el contenido de la resp para usar los datos recibidos

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

  } catch (err) {
    $loader.style.display = "none";
    console.log(err);
    let message = err.statusText || "Ocurrio un error";
    $error.innerHTML = `<p>Error ${err.status}: ${message}</p>`
  }

})
