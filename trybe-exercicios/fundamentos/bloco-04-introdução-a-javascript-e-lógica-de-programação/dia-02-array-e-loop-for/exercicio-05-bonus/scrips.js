// 1 //

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index2 = 1; index2 < numbers.length; index2 += 1) {
  for (let index = 0; index < index2; index += 1) {
    if (numbers[index2] < numbers[index]) {
      let aux = numbers[index2];
      numbers[index2] = numbers[index];
      numbers[index] = aux;
    }
  }
}
console.log(numbers);

// 2 //


for (let index2 = 1; index2 < numbers.length; index2 += 1) {
  for (let index = 0; index < index2; index += 1) {
    if (numbers[index2] > numbers[index]) {
      let aux = numbers[index2];
      numbers[index2] = numbers[index];
      numbers[index] = aux;
    }
  }
}
console.log(numbers);

// 3 //

