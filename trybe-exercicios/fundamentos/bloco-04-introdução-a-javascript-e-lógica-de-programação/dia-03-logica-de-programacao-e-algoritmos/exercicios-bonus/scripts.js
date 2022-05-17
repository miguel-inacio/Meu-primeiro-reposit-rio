// 1 //

// let n = 5;
// let asterisco = "*";
// let linha = "";

// for (let index = 1; index <= n; index += 1) {
//   linha = linha + asterisco;
// } // adiciona asteriscos até 5 na minha linha
// for (let index2 = 1; index2 <= n; index2+= 1) {
//   console.log(linha);
// } // imprime linhas até o número de n (5)

// 2 //

// let n = 5;
// let asterisco = "";

// for (let index = 1; index <= 5; index += 1) {
//   asterisco = asterisco + "*";
//   console.log(asterisco);
// }

// 3 //

let n = 5;
let asterisco = "*";
let linha = "";

for (let index = 1; index <= n; index += 1) {
  for (let index2 = 0; index2 <= n; index2 += 1) {
    if (index2 < index) {
      linha = linha + "";
    } else {
      linha = linha + asterisco
    }
  }
  console.log(linha);
}