import { getAll, crearUpdate } from "./crud_xhr.js";
// import * as crud_xhr from "./crud_xhr";
// import { getAll } from "./crud_fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  getAll();
  crearUpdate();
});
