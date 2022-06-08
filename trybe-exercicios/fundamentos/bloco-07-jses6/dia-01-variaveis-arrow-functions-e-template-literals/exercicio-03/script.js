// 1 função recebe número e retorna fatorial

const retornaFatorial = (numero) => {
  let fatorial = 1;
  for(let index = 1; index <= numero; index += 1) {
    fatorial = fatorial * index;
  }
  return fatorial;
}

console.log(retornaFatorial(5));

// 2

const largestWord = (frase) => {
  let arrayDeFrases = frase.split(' ');
  let maiorPalavra = ' ';
  for(let index = 0; index < arrayDeFrases.length; index +=1) {
    if (arrayDeFrases[index].length > maiorPalavra.length) {
      maiorPalavra = arrayDeFrases[index]
    }
  }
  return maiorPalavra;
}

console.log(largestWord('muita palavra paralelepípedo ver se funciona'));

// 3

const button = document.getElementById('button');
let clickCount = 0; 
const div = document.getElementById('contador');
button.addEventListener('click', () => {
  clickCount = clickCount + 1;
  div.innerText = `Vezes que fui clicado: ${clickCount}`;
})

// 4

const principaisSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'C++'];

const changeX = (frase) => {
  let frasePicotada = frase.split(' ');
  let fraseMudada = [];
  for (let palavra of frasePicotada) {
    if(palavra === 'x') {
       fraseMudada.push('Bebeto');
    } else {
      fraseMudada.push(palavra);
    }
  }
  return fraseMudada.join(' ');
}

console.log(changeX('Tryber x aqui!'))

const message = (changeX()) => {
  `${frase}
  
  Minhas cinco principais habilidade são:
  
  ${principaisSkills.sort()}`;
}