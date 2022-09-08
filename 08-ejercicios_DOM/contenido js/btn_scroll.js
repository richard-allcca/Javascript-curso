const d = document,
   w = window;

export default function scrollTopbutton(btn) {
   const $scrollBtn = d.querySelector(btn);

   w.addEventListener("scroll", (e) => {
      // estos 2 metodos indican la pocición del scroll en px
      let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

      if (scrollTop > 600) {
         // d.querySelector(btn).classList.remove("hidden");
         $scrollBtn.classList.remove("hidden");
      } else {
         $scrollBtn.classList.add("hidden");
      }


      // TODO muestra de 2 formas de obtener el scroll 
      // console.log(w.pageXOffset, document.documentElement.scrollTop);
      // TODO este es para detectar scroll horinzontal 
      // console.log(w.pageYOffset, document.documentElement.scrollLeft);
   })

   /* FIXME aqui esta el metodo con JS para volver al top de la pagina esta desactivado xk lo hice con CSS */
   // d.addEventListener("click", (e) => {
   //    if (e.target.matches(btn)) {
   // usamos el metodo de window "scrollTo" que es un objeto, para darle nuevos valores al top  
   // w.scrollTo({
   // behavior: "smooth",
   // top: 0,

   // TODO left: 0 esto es para scroll horizontal
   //       })
   //    }
   // })
}