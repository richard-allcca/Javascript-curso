// =================================================================
//? Prototype de Filter
// =================================================================

let arr = [1, 2, 3, 4, 5, 6];

Array.prototype.filterEvil = function (f) {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (f(this[i]))
      // aqui recibe la funcion enviada como parametro
      newArray.push(this[i]);
  }
  return newArray;
};

const edadMayor2 = arr.filterEvil((e) => e != 4);
console.log(edadMayor2);

// =================================================================
//? filter() ejemplo
//FILTER recorre el array buscando y filtrando lo que le pides en el callback
// =================================================================

let num = [3, 4, 5, 6, 7];

console.log(num.filter((el) => el > 5));

let num2 = ["richard", "juan", "eddy", "jose"];

console.log(num.filter((el) => el.includes("j")));
//flitra todos lo elementos y te rotorna el que tengan J  ( tu parametro)
