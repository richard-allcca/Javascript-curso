
export function SearchForm() {

  const d = document,
    $form = d.createElement("form"),
    $input = d.createElement("input");


  $form.classList.add("search-form");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Buscar...";
  $input.autocomplete = "off"; //borra el historial de busqueda

  $form.appendChild($input);

  //? para mantener el texto de busqueda en el input
  if (location.hash.includes("#/search")) {
    $input.value = localStorage.getItem("wpSearch");
  }

  //? para eliminar la busqueda si el usuario elimina el contenido del input
  d.addEventListener("search", (e) => {// evento search exclusivo d input tipo search
    if (!e.target.matches("input[type=search")) return false;
    if (!$input.value) localStorage.removeItem("wpSearch");
  })

  d.addEventListener("submit", (e) => {

    if (!e.target.matches(".search-form")) return false;

    e.preventDefault();

    localStorage.setItem("wpSearch", e.target.search.value);
    location.hash = `#/search?search=${e.target.search.value}`;
  })

  return $form;
}