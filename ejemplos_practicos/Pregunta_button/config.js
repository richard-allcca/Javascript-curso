const d = document;

const $si = d.querySelector(".si");
const $no = d.querySelector(".no");
const $content = d.querySelector(".content");
const $body = d.querySelector("body");

let $limitContentX = 0;
let $limitContentY = 0;

let x = 0;
let y = 0;

//? carga las medidas del documento para darle un limite al translate
d.addEventListener("DOMContentLoaded", () => {
  // $limitContentX = Math.floor($content.getBoundingClientRect().x)
  // $limitContentY = Math.floor($content.getBoundingClientRect().y)
  $limitContentX = $si.getBoundingClientRect().width;
  $limitContentY = $no.getBoundingClientRect().height;
  $limitBody = $body.getBoundingClientRect().width;
});

//? genera los numeros parax - y del trnaslate
const random = () => {
  x = Math.floor(Math.random() * ($limitContentX - 100) - 150);
  y = Math.floor(Math.random() * ($limitContentY - 100) - 150);
  // console.log(x, y);
};

//? funciones de movimiento
function click() {
  random();
  $no.style.transform = `translate(${x}px, ${y}px)`;
}
function movil() {
  random();
  $no.style.setProperty("translate", `${x}px ${y}px`);
}

//? eventos para ejecutar funciones de movimiento
d.addEventListener("touchstart", (e) => {
  if (e.target === $no) {
    movil();
  }
  if (e.target === $si) {
    alert("Sabia que dirias que si 😁");
  }
});

d.addEventListener("mouseover", (e) => {
  if (e.target === $no) {
    click();
  }
  if (e.target === $si) {
    alert("Sabia que dirias que si 😁");
  }
});
$no.addEventListener("click", (e) => {
  $no.textContent = "Si";
  $si.textContent = "No";
  setTimeout(() => {
    alert("Sabia que dirias que SI!😍");
  }, 1000);
});
