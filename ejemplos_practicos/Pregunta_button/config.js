const d = document;

const $si = d.querySelector(".si");
const $no = d.querySelector(".no");
const $pop = d.getElementById("pop");
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

	$pop.style.display = "none";

	$limitContentX = $si.getBoundingClientRect().width;
	$limitContentY = $no.getBoundingClientRect().height;
	$limitBody = $body.getBoundingClientRect().width;
});

//? genera los numeros para X y Y del trnaslate
const random = () => {
	x = Math.floor(Math.random() * ($limitContentX - 100) * 5);
	y = Math.floor(Math.random() * ($limitContentY - 100) * 5);
	// console.log(x, y);
};

//? funciones de movimiento
function click() {
	random();
	$no.style.transform = `translate(${x}px, ${y}px)`;
}
function movil() {
	random();
	$no.style.setProperty("translate", `${x * 10}px ${y * 35}px`);
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

	// if (e.target === $si) {
	// 	alert("Sabia que dirias que si 😁");
	// }
});
d.addEventListener("click", (e) => {
	let respAlert = false;

	if (e.target === $si) {
		$no.style.display = "none";
		setTimeout(() => {
			$pop.style.display = "block";
			$si.style.display = "none";
			setTimeout(() => {
				respAlert = alert("Ahora recarga la pagina");
			}, 100);
		}, 100);
	}
});
