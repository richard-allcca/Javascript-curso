
import Component from "./App.js";

const d = document;

// ========================================
//* Instance of Component
// ========================================
const app = new Component({
  el: "#content-list",//?  captura del id del ul en el DOM
  data: {
    todoList: []
  },
  template: function (props) {//*props es el data de el mismo
    if (props.todoList.length < 1) {
      return `<p><em>Sin Tareas Pendientes</em></p>`;
    }
    let todo = props.todoList.map(item => `<li>${item}</li>`).join("");

    return todo;
  }
});

d.addEventListener("DOMContentLoaded", app.render)

// ========================================
//* VALORES POR DEFEFCTO
// ========================================
app.setState({
  todoList: ['tarea1', 'tarea2', 'tarea3']
});

// ========================================
//* EVENTO SUBMIT 
// ========================================
d.addEventListener("submit", (e) => {

  if (!e.target.matches("form")) return false;

  e.preventDefault();

  const $item = d.getElementById("form-input");
  if (!$item) return false;

  //* Actualizar el State de Forma reactiva
  const lastState = app.getState();
  lastState.todoList.push($item.value);
  app.setState({ todoList: lastState.todoList });

  //* Limpieza del input
  $item.value = "";
  $item.focus();

})