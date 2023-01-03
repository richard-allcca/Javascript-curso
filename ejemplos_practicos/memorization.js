const memo = () => {
  const cache = {};

  return (value) => {

    if (value in cache) {

      return cache[value];
    } else {

      let result = value + 20;
      cache[value] = result;
      return result;
    }

  };
};

const returnnedFn = memo();

console.log(returnnedFn(100));
console.log(returnnedFn(100));