const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  // escreva seu código aqui
  return array.reduce((acc, curr) => {
    acc + curr.split('').reduce((acc, curr) => {
      if(curr === 'a' || curr === 'A') {
        return acc + 1
      }
    }, 0);
  }, 0);
}

// function containsA() {
//   return names.reduce((acc, curr) =>
//      acc + curr.split('').reduce((acumulator, current) => {
//         if (current === 'a' || current === 'A') return acumulator + 1;
//         return acumulator;
//      }, 0), 0);
// }

console.log(containsA(names));