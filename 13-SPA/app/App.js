import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Loader } from "./components/Loader.js";
import { Router } from "./components/Router.js";
import { InifiniteScroll } from "./helpers/infinite_scroll.js";

export function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = null; // limpia el document para imprimir el contenido

  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());

  Router();
  InifiniteScroll();
}
