# APIs

   programing aplication Interface
   Interfaz de programación de aplicacion

## DOM

  Document Objet Model, modelos de objetos del Documento, es una API para Documentos HTML y XML
  Éste proveé una representación estructural del documento, permite modificar su contenido y presentación visual.
  El DOM no es parte de la especificación de javaScript es una API  para los navegadores.

## CSSOM

  css objet model

## Nodo de texto

  es un texto que tiene dentro una etiqueta como un h1

## Nodo de tipo elemento

  una etiqueta en particular

## Cambiar el contenido HTM

    document.getElementById("demo").innerHTML = "Hello JavaScript!";

## Cambiar estilos HTML

    document.getElementById("demo").style.fontSize = "25px";

## Cambiar los atributos HTML

     document.getElementById("image").src = "picture.gif";

## Cómo implementar Debounce y Throttle con JavaScript

  [Debounce y Throttle](https://www.youtube.com/watch?v=myEsMzsJEFg&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=75)

## Eventos de teclas

  keydown => presionas la tecla
  keyup => cuando sueltas la tecla
  keypress => mientras tengas presionada la tecla

  Evento Keydown

    function shortcuts(e) {

      // tipo de evento
      console.log(e.type);

      // nombre de la tecla
      console.log(e.key);

      // codigo de tecla
      console.log(e.keyCode);
    }

  tienen las mismas propiedades que el keydown
