
export function Loader() {

  const $loader = document.createElement("img");
  $loader.src = "app/assets/Spinner-1s-244px.svg"
  $loader.alt = "Cargando...";
  $loader.classList.add("loader");

  return $loader;
}