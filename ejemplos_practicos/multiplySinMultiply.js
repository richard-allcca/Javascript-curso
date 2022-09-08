// multiplicar sin multiplicar
// =============================================================================
const multiply = (a, b) => {
  if (a === 0) return 0;
  let res = 0;
  for (let i = 0; i < a; i++) {
    res += b;
    console.log(b);
  }
  return res;
};
multiply(0, 5);

// =============================================================================
const repeat = (a, b) => {
  return " ".repeat(a).repeat(b).length;
};
repeat(2, 5);

// =============================================================================
const recursividad = (a, b) => {
  console.log(a, b);
  if (b === 0) return 0;
  if (b === 1) return a;
  return a + recursividad(a, b - 1);
};
recursividad(5, 4);
