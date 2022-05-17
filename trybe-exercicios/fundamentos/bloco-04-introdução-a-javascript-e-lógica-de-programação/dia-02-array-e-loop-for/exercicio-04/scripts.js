let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 //

for (let contador = 0; contador < numbers.length; contador += 1) {
  console.log(numbers[contador])
}

2 //

let sumNumbers = 0;

for (let contador = 0; contador < numbers.length; contador += 1) {
  sumNumbers = sumNumbers + numbers[contador];
}

console.log(sumNumbers);

// 3 //

let numbersArith = sumNumbers / numbers.length;

console.log(numbersArith)

// 4 //

if (numbersArith > 20) {
  console.log("Valor maior que 20.")
} else {
  console.log("Valor menor ou igual a 20.")
}

// 5 //

let maiorNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if(numbers[index] > maiorNumber) {
    maiorNumber = numbers[index];
  }
}

console.log(maiorNumber);

// 6 //

let unevenNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] % 2 === 1){
    unevenNumbers.push(numbers[i])
  }
}

if(unevenNumbers.length > 0) {
  console.log(unevenNumbers.length)
} else {
  console.log("nenhum valor ímpar encontrado")
}

// 7 //

let menorNumber = 9999999999999999999999999999999;

for (let c = 0; c < numbers.length; c += 1){
  if (numbers[c] < menorNumber ) {
    menorNumber = numbers[c];
  }
}

console.log(menorNumber);

// 8 //

let meuArray = [];

for (let add = 1; add < 26; add += 1) {
  meuArray.push(add)
}

console.log(meuArray);

// 9 //

let meuArrayDividido = [];

for(let div = 0; div < meuArray.length; div += 1){
  meuArrayDividido.push(meuArray[div] / 2);
}

console.log(meuArrayDividido);