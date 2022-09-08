import hamburgerMenu from "./menu_hamburguer.js";
import { digitalClock, alarma } from "./reloj.js";
import { shorcuts, moveBall } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopbutton from "./btn_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import { responsiveTester } from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dipositivos.js";
import networkStatus from "./deteccion_red.js";
import webcam from "./deteccion-webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilter from "./filtro_busqueda.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scrollSpy.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validacion_formulario.js";
import speechReader from "./speach.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  // aqui le agregue la clase "btn" para que detecte el click en todo el boton hamburguesa
  hamburgerMenu(".panel-btn, .btn", ".panel", ".menu a");

  digitalClock("#reloj", "#activar-reloj", "#detener-reloj");

  alarma("../assets/Tove.mp3", "#activar-alarma", "#detener-alarma");

  countdown(
    "countdown",
    "aug 30, 2021 20:42:19",
    "Feliz Cumpleaños amigo y docente digital 🤓"
  );

  scrollTopbutton(".scroll-top-btn");

  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank" style="color: hsl(0, 0%, 60%);">You Tube</a>`,
    `<iframe width="460" height="215" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/4mqAcj27vSReL2D47" target="_blank" style="color: hsl(0, 0%, 60%);">Google Maps</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30962.29637721983!2d-75.73117000210058!3d-14.060219572694129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e2bdb02af083%3A0xf459f8f69b351df!2sPlaza%20de%20Armas%20de%20Ica!5e0!3m2!1ses!2spe!4v1597113506983!5m2!1ses!2spe" width="460" height="215" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  );

  responsiveTester("responsive-tester");

  userDeviceInfo("user-divice");

  webcam("webcam");

  getGeolocation("geolocation");

  //1° parametro referencia al input, 2° al figCaption(textContent) del selector
  searchFilter(".card-filter", ".card");

  draw("#winner-btn", ".player");

  slider();

  scrollSpy();

  smartVideo();

  contactFormValidations();
});
/********************** Funciones por Fuera **********************/
// esta función esta por fuera xk es un evento "keydow" se activa cuando tienes presionada tecla y ejecuta algo
d.addEventListener("keydown", (e) => {
  shorcuts(e);
  moveBall(e, ".ball", ".stage");
});

// aqui ten cuidado con el 2° parametro es una clase sin punto xk la agregaremos y quitaremos segun sea el caso
darkTheme(".dark-theme-btn", "dark-mode", ".stage", ".ball");
// esta funcion esta por fuera para utilizar el "DOMContentLoad" en el dakTheme

networkStatus();
speechReader();
