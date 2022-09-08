const d = document;

//* El State
const State = {
  todoList: []
}

//* Template UI, interface generated based on state
const Template = () => {

  if (State.todoList.length < 1) {
    return `<p><em>Sin Tareas Pendientes</em></p>`;
  }
  let todo = State.todoList.map(item => `<li>${item}</li>`).join("");

  return todo;
}

//* Render UI, rendering of template
const Render = () => {
  console.log(State);

  // console.log(`${Template()} desde Render`);
  const $list = d.getElementById("content-list");
  if (!$list) return;
  $list.innerHTML = Template();
}

d.addEventListener("DOMContentLoaded", Render)

d.addEventListener("submit", (e) => {

  if (!e.target.matches("form")) return false;

  e.preventDefault();

  const $item = d.getElementById("form-input");
  if (!$item) return false;

  //* Actualizar el State y la UI
  State.todoList.push($item.value);

  Render();

  //* Limpieza del input
  $item.value = "";
  $item.focus();

})