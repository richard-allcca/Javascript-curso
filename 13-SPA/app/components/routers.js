// ! este archivo es na copia del Router original
import api from "./wp_api.js";
import { ajax } from "./ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { NoPost } from "./NoPost.js";

export async function Router() {
  const d = document,
    // w = window,
    $main = d.getElementById("main");

  let { hash } = location;
  // console.log(hash);

  $main.innerHTML = null;

  //* ==================================
  //? Funcion para mostrar contenido del home page
  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      success: (posts) => {
        // console.log(posts);
        // * metodo del profe
        // let html = "";
        // posts.forEach(el => html += PostCard(el));
        // $main.innerHTML = html;
        // * mi metodo refactorizado
        posts.forEach((el) =>
          $main.insertAdjacentHTML("afterbegin", PostCard(el))
        );
      },
    });

    //* ==================================
    //? función de busqueda
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");

    if (!query) {
      d.querySelector(".loader").style.display = "none";
      return false;
    }

    let html = "";
    // console.log(`${api.SEARCH}${query}`);
    await ajax({
      url: `${api.SEARCH}${query}`,
      success: (search) => {
        // console.log(search);

        if (search.length === 0) {
          $main.insertAdjacentHTML("afterbegin", NoPost(query));
        } else {
          search.forEach((el) => (html += SearchCard(el)));
        }
        d.querySelector(".loader").style.display = "none";
        $main.insertAdjacentHTML("afterbegin", html);
      },
    });

    //* ======================================
    //? Funcion para el Contacto
  } else if (hash === "#/contacto") {
    $main.innerHTML = "<h2>Seccion del Contacto</h2>";

    //* ======================================
    //? Funcion para el contenido seleccionado
  } else {
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      success: (posts) => {
        // console.log(posts);
        $main.insertAdjacentHTML("afterbegin", Post(posts));
      },
    });

    //? para usar esto convierte en async router y dale await a ajax igual que en el modulo ajax async a la pricipal y await al fetch
    d.querySelector(".loader").style.display = "none";
    //* mi metodo fue poner esta instruction dentro del 2° then() en ajax
  }
}
