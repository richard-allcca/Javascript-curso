let empleados = [
   {
      id: 1,
      nombre: "fernando",
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

let getEmpleado = (id) => {
   return new Promise((resolve, reject) => {
      let empleadoDB = empleados.find((empleado) => empleado.id === id);
      if (!empleadoDB) {
         reject(`el empleado ${id} no existe `);
      } else {
         resolve(empleadoDB);
      }
   });
};
let getSalario = (empleado) => {
   // el parametro "empleado " viene del ".then" donde se ejecutar esta función "revisalo"
   return new Promise((resolve, reject) => {
      let salarioDB = salarios.find((salario) => salario.id === empleado.id);
      if (!salarioDB) {
         reject(`no hay salario para el empelado ${empleado.nombre} `);
      } else {
         resolve({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id,
         });
      }
   });
};
// =================================================================
//? ejecucion
// =================================================================
getEmpleado(1)
   .then((empleado) => {
      // puedes usar varios "then" segun necesites pero un solo "catch"
      return getSalario(empleado);
   })
   .then((resp) => {
      console.log(`el salario de ${resp.nombre} es de: ${resp.salario} `);
   })
   .catch((err) => {
      console.log(err);
   });

// =================================================================
//? ejemplo simple ejecucion de promesa
// =================================================================
const prueba = (value) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve({
            value,
            result: value * value,
         });
      }, 1000);
   });
};

prueba(4)
   .then((resp) => {
      console.log(`Promise: ${resp.value} ${resp.result} `);
      //puedes volver a ejecutar la función para ver su resultado un nuevo ".then"
      return prueba(6);
   })
   .then((resp) => {
      console.log(resp.value, resp.result);
   })
   .catch((e) => {
      console.error(e);
   });
// ==============================================================
//? Promise.all()
// ==============================================================
function getRandom() {
   return Math.floor(Math.random() * 1000);
}
function asyncOp(id) {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(id);
      }, getRandom());
   });
}
let id = 0;
Promise.all([ asyncOp(++id), asyncOp(++id), asyncOp(++id) ]).then((res) => {
   console.log(res);
   return console.log("Completado");
});

// =================================================================
//? Promise.allSettled()
// =================================================================
Promise.allSettled([
   Promise.resolve(13),
   Promise.reject(new Error("Esto es un error")),
   new Promise((resolve) => setTimeout(() => resolve(26), 100)),
]).then((values) => {
   console.log(values); //? muestra un array con la resp individual de las promesas

   const [
      //destruction para las resp individuales
      { value: firstPromiseValue },
      { value: secondtPromiseValue },
      { value: thirdtPromiseValue },
   ] = values;

   console.log({
      firstPromiseValue,
      secondtPromiseValue,
      thirdtPromiseValue,
   });
});
