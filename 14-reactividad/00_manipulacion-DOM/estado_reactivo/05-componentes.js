const d = document;

// ============================================
//? State GLOBAL 
// ============================================
const State = {
  todoList: []
}

// ============================================
//?  Template UI 
// ============================================
const Template = () => {

  if (Template.stateLocal.todoList.length < 1) {
    return `<p><em>Sin Tareas Pendientes</em></p>`;
  }
  let todo = Template.stateLocal.todoList.map(item => `<li>${item}</li>`).join("");
  return todo;
}

// ============================================
//? State local del component Template  
// ============================================
Template.stateLocal = {// agrega state al Template que genera el component de UI
  todoList: []
}

const Render = () => {// Render UI
  console.log(`Estado global, ${State.todoList}`);
  console.log(`Estado local, ${Template.stateLocal.todoList}`);

  const $list = d.getElementById("content-list");
  if (!$list) return;

  $list.innerHTML = Template();
};

// ============================================
//? SET and GET 
// ============================================
const setState = (obj) => {// Actualizar el State de forma reactiva

  for (const key in obj) {
    if (Template.stateLocal.hasOwnProperty(key)) {
      //? ingresa los valores del obj en el State[i]: obj[valor]
      Template.stateLocal[key] = obj[key];
    }
  }
  Render()
};

const getState = () => JSON.parse(JSON.stringify(Template.stateLocal));// Obtenemos uan copia inmutable del State

// ============================================
//? RENDER y valores x defecto 
// ============================================
d.addEventListener("DOMContentLoaded", Render)

setState({
  todoList: ['tarea1', 'tarea2', 'tarea3']
});

d.addEventListener("submit", (e) => {

  if (!e.target.matches("form")) return false;

  e.preventDefault();

  const $item = d.getElementById("form-input");
  if (!$item) return false;

  //* Actualizar el State de Forma reactiva
  const lastState = getState();
  lastState.todoList.push($item.value);
  setState({ todoList: lastState.todoList });

  //* Limpieza del input
  $item.value = "";
  $item.focus();

})