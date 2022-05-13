// 1 //
const a = 11;
const b = 7;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao, subtracao, multiplicacao, divisao, modulo)

// 2 //

const c = 20;
const d = 40;

if (c > d) {
  console.log("c é maior que d")
} else {
  console.log("d é maior que c")
}

// 3 //

const e = 10;
const f = 13;
const g = 12;

if (e > f && e > g) {
  console.log("e é o maior número")
} else if (f > g && f > e) {
  console.log("f é o maior número")
} else if (g > e && g > f) {
  console.log("g é o maior número")
}

// 4 //

const h = 1;

if (h > 0) {
  console.log("positive")
} else if (h < 0) {
  console.log("negative")
} else {
  console.log("zero")
}

// 5 //

const i = 62;
const j = 47;
const k = 71;

if (i + j + k === 180) {
  console.log(true)
} else if (i + j + k !== 180) {
  console.log(false)
} else if (i < 0 || j < 0 || k < 0 ) {
  console.log("erro")
}

// 6 //

let xadrez = "bispo";

switch (xadrez.toLowerCase()) {
  case "bispo":
    console.log("Bispo -> diagonal.")
    break;
  case "rei":
    console.log("Rei -> pode se mover para qualquer casa adjacente")
    break;
  case "rainha":
    console.log("Rainha -> pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente")
    break;
  case "cavalo":
    console.log("Cavalo -> se move em L")
    break;
  case "torre":
    console.log("Torre -> na vertical ou horizontal.")
    break;
  case "peão":
    console.log("Peão -> para frente, uma casa por vez. Se for a primeira vez que um peão é movido, pode se mover duas casas.")
    break;
  default:
    console.log("peça inválida")
}

// 7 //

let nota = 11;

if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C")
} else if (nota >= 60) {
  console.log("D")
} else if (nota >= 50) {
  console.log("E")
} else if (nota < 50) {
  console.log("F")
} else if (nota > 100 || nota < 0) {
  console.log("Erro")
}

// 8 //

const l = 100;
const m = 120;
const n = 643;

if (l % 2 === 0 || m % 2 === 0 || n % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// 9 //

const o = 111;
const p = 130;
const q = 444;

if (o % 2 === 1 || p % 2 === 1 || q % 2 === 1) {
  console.log(true);
} else {
  console.log(false);
}

// 10 //

const custo = 3;
const precoDeRevenda = 7;

if (custo >= 0 && precoDeRevenda >= 0) {
  const custoTotal = custo * 1.2;
  const lucro = (precoDeRevenda - custoTotal) * 1000;
  console.log(lucro)
} else {
  console.log("erro")
}

// 11 //

//salarioLiquido = salarioBruto - impostoDeRenda - inss;//

let inss;
let impostoDeRenda;
let salarioBruto = 3000;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
  inss = 570.88;
}

let salarioDescontado = salarioBruto - inss;

if (salarioDescontado <= 1903.98) {
  impostoDeRenda = 0;
}else if (salarioDescontado >= 1903.99) {
  impostoDeRenda = (salarioDescontado * 0.075) - 142.80;
} else if (salarioDescontado >= 2826.66) {
  impostoDeRenda = (salarioDescontado * 0.15) - 354.80;
} else if (salarioDescontado >= 3751.06) {
  impostoDeRenda = (salarioDescontado * 0.225) - 636.13;
} else if (salarioDescontado > 4664.68) {
  impostoDeRenda = (salarioDescontado * 0.275) - 869,36;
}

console.log(salarioDescontado - impostoDeRenda)