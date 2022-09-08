// ======================================================================== 
//? conteo regresivo 
// ========================================================================
function conteo(n) {
  if (n === 0) return

  console.log(n);

  conteo(n - 1);
}

// ======================================================================== 
//?  factorial
// ========================================================================
function factorial(n) {
  let res = 1;
  if (n == 0 || n == 1) {
    res = 1;
  } else {
    res = n * factorial(n - 1)
  }
  return res;
}
console.log(factorial(4))

// ======================================================================== 
//? recursividad en arboles
// ========================================================================

function Node(data) {
  this.left = null;
  this.right = null;
  this.data = data;
}

let c = new Node('C:/')
let users = new Node('Users');
let system = new Node('System');

let file = new Node('file.txt');
let file2 = new Node('imagen.jpg');
let file3 = new Node('file.doc');

c.left = users;
c.right = system;

users.left = file1;
users.right = file2;

system.left = file3;

function recorrido(node) {
  if (node === null) return;

  console.log(node.left);
  console.log(node.right);
  recorrido(c)
}
recorrido(c)