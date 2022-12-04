// ? Intl.ListFormat().prototype.format()

const genteDelChat = ["Barbara", "Madevanl", "Guzman", "Pheralb", "juguete"];

const arrFormatedY = new Intl.ListFormat("es").format(genteDelChat);

const arrFormatedO = new Intl.ListFormat("es", { type: "disjunction" }).format(
  genteDelChat
);

//? fixme: pendiente de revision
const formatedWidthSpace = new Intl.ListFormat("es", { type: "unit" }).format(
  genteDelChat
);

const formatedWidthSpacePersonal = genteDelChat.slice(" ").join(", ");

console.log(formatedWidthSpacePersonal);

// Notas:
// Intl.listFormat: debes crear una instacia de esto para usar el format()
// format(): metodo disponible cuando creas la instancia de Intl.listFormat
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
