const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(array) {
  // escreva seu código aqui
  return array.reduce((element, curr) => element.concat(curr ), []);
}

console.log(flatten(arrays));