const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostasDaPessoa = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checks = (respostasDadas, respostasCertas) => {
  if(respostasDadas === respostasCertas) {
    return 1;
  }
  if(respostasDadas === 'N.A') {
    return 0;
  }
  return -0.5;
}

const retornaNotaTotal = (respostasCertas, respostasDadas, ação) => {
  let notaTotal = 0;
  for(let index = 0; index < respostasCertas.length; index += 1) {
    console.log(respostasCertas[index]);
    console.log(respostasDadas[index]);
    notaTotal += ação(respostasCertas[index], respostasDadas[index]);
  }
  return notaTotal;
}

console.log(retornaNotaTotal(gabarito, respostasDaPessoa, checks));


