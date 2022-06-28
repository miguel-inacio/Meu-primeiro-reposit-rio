// 1

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao, funcao] = saudacoes;
console.log(saudacao);
funcao(saudacao);

// 2

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// const array = [comida, animal, bebida];
// console.log(array);
// const [food, pet, drink] = array;
// console.log(food, pet, drink);

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// 3

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// [6, 8, 10, 22] = numerosPares;

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares);

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
