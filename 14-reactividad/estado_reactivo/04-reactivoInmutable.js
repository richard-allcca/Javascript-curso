const d = document;

const State = {// El State
  todoList: []
}

const Template = () => {// Template UI

  if (State.todoList.length < 1) {
    return `<p><em>Sin Tareas Pendientes</em></p>`;
  }
  let todo = State.todoList.map(item => `<li>${item}</li>`).join("");

  return todo;
}

const Render = () => {// Render UI
  console.log(State);

  // console.log(`${Template()} desde Render`);
  const $list = d.getElementById("content-list");
  if (!$list) return;

  $list.innerHTML = Template();
};

// ============================================
//? SET and GET 
// ============================================

//* Actualizar el State de forma reactiva
const setState = (obj) => {

  for (const key in obj) {
    if (State.hasOwnProperty(key)) {
      //? ingresa los valores del obj en el State[i]: obj[valor]
      State[key] = obj[key];
    }
  }
  Render()
};

const getState = () => JSON.parse(JSON.stringify(State));// Obtenemos una copia inmutable del State


// ============================================
//? render luego de la carga del DOM
// ============================================
d.addEventListener("DOMContentLoaded", Render)


// ============================================
//?  VALORES x DEFECTO 
// ============================================
setState({
  todoList: ['tarea1', 'tarea2', 'tarea3']
});

//! ============================================
//? Estado Inmutable, porque no permite crear una copia del obj y agregar elementos, * la unica forma es usar el metodo setState()
const items = getState();
items.todoList.push('tarea4');//? no hace efecto 
//! ============================================

d.addEventListener("submit", (e) => {

  if (!e.target.matches("form")) return false;

  e.preventDefault();

  const $item = d.getElementById("form-input");
  if (!$item) return false;

  // ============================================
  //? Actualizar el State de Forma reactiva
  // ============================================
  const lastState = getState();
  lastState.todoList.push($item.value);
  setState({ todoList: lastState.todoList });

  //? Limpieza del input
  $item.value = "";
  $item.focus();

})