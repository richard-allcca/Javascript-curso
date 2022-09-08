function Node(data) {
  this.left = null;
  this.right = null;
  this.data = data;
}

let c = new Node('C:/')
let users = new Node('Users');
let system = new Node('System');

let file1 = new Node('file.txt');
let file2 = new Node('imagen.jpg');
let file3 = new Node('file.doc');

c.left = users;
c.right = system;

users.left = file1;
users.right = file2;

system.left = file3;

function recorrido(node) {
  if (node == null) return;

  console.log(node.data);

  recorrido(node.left);
  recorrido(node.right);
}
recorrido(c)
