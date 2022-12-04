// =================================================================
//? Map prototype
// =================================================================

let arr = [1, 2, 3, 4, 5, 6];
Array.prototype.mapEvil = function (f) {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    let element = f(this[i]);
    newArray.push(element);
  }
  return newArray;
};
const edadMayor2 = arr.mapEvil((e) => e * 4);
console.log(edadMayor2);

// =================================================================
//? map() ejemplo
// =================================================================

let num = [3, 4, 5, 6, 7];
document.write(num.map((el) => el * el));
//solo se diferencia del "foreach" en que este si se puede asignar a una variable (aqui saco el cuadrado de cada numero)
