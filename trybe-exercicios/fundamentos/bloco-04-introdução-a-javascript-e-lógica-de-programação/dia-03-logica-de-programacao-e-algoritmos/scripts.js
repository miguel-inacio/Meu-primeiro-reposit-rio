// crie um algoritmo que retorne o fatorial de 10

// let fatorial = 10;
// let resultadoFatorial = 1;

// for (let index = 10; index >= 1; index -= 1) {
//   resultadoFatorial = resultadoFatorial * index;
// }

// console.log(resultadoFatorial);

// desenvolva um algoritmo que é capaz de inverter uma palavra

// let word = "tryber";
// let wordBackwards = "";

// for (let index = word.length - 1; index >= 0; index -= 1) {
//   wordBackwards = wordBackwards + word[index];
// }

// console.log(wordBackwards);

// maior/menor palavra do array

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = "";

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > maiorPalavra.length) {
//     maiorPalavra = array[index];
//   }
// }
// console.log(maiorPalavra);

// let menorPalavra = "";

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < maiorPalavra.length) {
//     menorPalavra = array[index];
//   }
// }
// console.log(menorPalavra);

// escreva um algoritmo que retorne o maior número primo entre 0 e 50

let numeros = 50;

let maiorPrimo = 1;

let contador = 0;

for (let index = numeros; index > 1; index -= 1) {
  for (let index2 = 2; index2 <= index; index2 += 1) {
    if (index % index2 === 0) {
      contador += 1;
      
      }
  }
  if (contador === 1 && index > maiorPrimo) {
    maiorPrimo = index;
  }
  contador = 0;
}


console.log(maiorPrimo);


