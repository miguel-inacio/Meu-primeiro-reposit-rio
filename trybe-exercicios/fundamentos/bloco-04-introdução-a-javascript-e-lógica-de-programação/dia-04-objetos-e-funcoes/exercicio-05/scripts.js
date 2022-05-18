// // 1 //

// function invertePalavra(palavra) {
//   palavraReversa = "";
//   for (let index = palavra.length - 1; index >= 0; index -= 1) {
//     palavraReversa +=  palavra[index];
//   }
//   if (palavra === palavraReversa) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(invertePalavra("arara"));
// console.log(invertePalavra("desenvolvimento"));

// 2 //

function retornaMaiorNumero(numbers) {
  let maiorIndex = 0;
  for (let index = 0; index <= numbers.length - 1; index += 1) {
    if (numbers[index] > numbers[maiorIndex]) {
      // guarda o valor da posição (0, 1, 2, 3, 4) e joga de volta, e ele já recompara
      maiorIndex = index;
    } 
  }
  return maiorIndex;
}

console.log(retornaMaiorNumero([2, 3, 6, 7, 10, 1]));

// 3 //

function retornaMenorNumero(numbers) {
  let menorIndex = 0;
  for (let index = 0; index <= numbers.length - 1; index += 1) {
    if (numbers[index] < numbers[menorIndex]) {
      // guarda o valor da posição (0, 1, 2, 3, 4) e joga de volta, e ele já recompara
      menorIndex = index;
    } 
  }
  return menorIndex;
}

console.log(retornaMenorNumero([2, 4, 6, 7, 10, 0, -3]));

// 4 //

function retornaMaiorNome(nomes) {
  let maiorNome ="";
  for (index = 0; index < nomes.length; index += 1) {
    if (nomes[index].length > maiorNome.length) {
      maiorNome = nomes[index];
    }
  }

  return maiorNome; 
}

console.log(retornaMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5 //

function retornaMaisRepetido(numeros) {
  let contador = 0;
  let numeroAtual; 
  let maisRepetido;


  for (index = 0; index < numeros.length; index += 1) {
    for (index2 = 0; index2 < numeros.length; index += 1) {
      if (numeros[index] === numeros[index2]) {
        contador += 1;
      }
    }
  }
  if () {
    
  }
return maisRepetido;
}

console.log(retornaMaisRepetido([2, 3, 2, 5, 8, 2, 3]));