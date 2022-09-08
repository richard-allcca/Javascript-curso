let empleados = [
   {
      id: 1,
      nombre: "frenando",
   },
   {
      id: 2,
      nombre: "melissa",
   },
   {
      id: 3,
      nombre: "juan",
   },
];

let salarios = [
   {
      id: 1,
      salario: 1000,
   },
   {
      id: 2,
      salario: 2000,
   },
];

const getSalario = (id, callback) => {
   let impEmpleado = empleados.find((empleados) => empleados.id === id);

   let impSalario = salarios.find((salarios) => salarios.id === id);

   if (!impEmpleado) {
      console.error(`el empleado ${id} no existe `);
   } else if (!impSalario) {
      console.error(`el empleado ${id} no tiene salario `);
   } else {
      let respuesta = `el empleado ${impEmpleado.nombre} tiene un salario de: ${impSalario.salario} `;

      callback(null, respuesta);
   }
};


/* callback */

const value = (err, respuesta) => {
   if (err) {
      return console.error(err);
   }

   console.log("el empleado", respuesta);
};

getSalario(1, value);
