import {
  ItemSubject,
  ListObserver,
  TotalObserver,
  DynamicObserver,
} from "./observer-config.js";

const d = document;
const $spnTotal = d.getElementById("spnTotal");
const $spnCount = d.getElementById("spnCount");
const $divList = d.getElementById("divList");
const $description = d.getElementById("txtDescription");
const $amount = d.getElementById("txtAmount");

let itemSubject = new ItemSubject();

// instancias de observer individuales
let listObserver = new ListObserver($divList);
let totalObserver = new TotalObserver($spnTotal);
let dynamicObserver = new DynamicObserver(
  $spnCount,
  (subject, tag) => (tag.innerHTML = subject.items.length)
);

// ejecuta funcion subscribe con cada instancia
itemSubject.subscribe(listObserver);
itemSubject.subscribe(totalObserver);
itemSubject.subscribe(dynamicObserver);

//! ejecuta unsuscribe para dejar de observar en alguna instacia
itemSubject.unsubscribe(dynamicObserver); // comenta esto para ver total productos

// ejecuta el notify general para que las instancias tomen los cambios
d.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.matches("form")) {
    let description = $description.value;
    let amount = $amount.value;

    itemSubject.notify({
      description,
      amount,
    });
  }
});
