
export const Component = (function () {
  const d = document;

  //* creamos el constructor del componente
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  }

  //* Agregamos los métodos al prototype del constructor

  // ========================================
  //* Render UI
  // ========================================
  Constructor.prototype.render = function () {
    const $el = d.querySelector(this.el);
    if (!$el) return false;
    $el.innerHTML = this.template(this.data);

    console.log(this.data);// para ver el estado del component
  };

  // ========================================
  //* SET  Actualizar el State de forma reactiva
  // ========================================
  Constructor.prototype.setState = function (obj) {
    for (const key in obj) {
      if (this.data.hasOwnProperty(key)) {
        //? ingresa los valores del obj en el State[i]: obj[valor]
        this.data[key] = obj[key];
      }
    }
    this.render()
  };

  // ========================================
  //* GET  Obtener una copia inmutable de el State
  // ========================================
  Constructor.prototype.getState = function () {

    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();