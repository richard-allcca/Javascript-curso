// ============================================
//? Aqui solo se Programa el cambio de estado mediante setState
// ============================================
const d = document;

//* El State
const State = {
  todoList: []
}

//* Template UI
const Template = () => {

  if (State.todoList.length < 1) {
    return `<p><em>Sin Tareas Pendientes</em></p>`;
  }
  let todo = State.todoList.map(item => `<li>${item}</li>`).join("");

  return todo;
}

//* Render UI
const Render = () => {
  console.log(State);

  // console.log(`${Template()} desde Render`);
  const $list = d.getElementById("content-list");
  if (!$list) return;

  $list.innerHTML = Template();
};

// ============================================
//? Actualizar el State de forma reactiva
// ============================================
const setState = (obj) => {

  for (const key in obj) {
    if (State.hasOwnProperty(key)) {//valida si key "clave" esta en state
      State[key] = obj[key];// modifica el state[key] con el obj[key]
    }
  }
};

d.addEventListener("DOMContentLoaded", Render)

// ============================================
//? Estableciendo valores por dfecto
// ============================================
setState({
  todoList: ['tarea1', 'tarea2', 'tarea3']
});


//! ============================================
//? Estado Mutable, porque permite crear una copia del obj y agregar elementos
const items = State.todoList;
items.push('tarea4');
//! ============================================


d.addEventListener("submit", (e) => {

  if (!e.target.matches("form")) return false;

  e.preventDefault();

  const $item = d.getElementById("form-input");
  if (!$item) return false;

  State.todoList.push($item.value);// Actualizar el State y la UI
  Render();

  $item.value = "";// Limpieza del input
  $item.focus();

})