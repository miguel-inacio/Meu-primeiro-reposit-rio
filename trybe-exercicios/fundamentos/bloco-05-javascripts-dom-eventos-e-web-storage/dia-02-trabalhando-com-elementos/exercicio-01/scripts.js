// 1

let ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");

// 2

let pai = ondeVoceEsta.parentElement;
pai.style.color = "blue";

// 3

let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerText = "Você se lembra dos vídeos da aula anterior, como fazer isso?";

// 4

let primeiroFilho = pai.firstElementChild;

// 5

let primeiroFilho2 = ondeVoceEsta.previousElementSibling;

// 6

let atencao = ondeVoceEsta.nextSibling;

// 7

let terceiroFilho = ondeVoceEsta.nextElementSibling;

// 8

let terceiroFilho2 = pai.lastElementChild.previousElementSibling;

// 1.1

let novoIrmão = document.createElement("section");
pai.appendChild(novoIrmão);

// 1.2

let novoFilhoOndeVoceEsta = document.createElement("section");
ondeVoceEsta.appendChild(novoFilhoOndeVoceEsta);

// 1.3

let filhoDoPrimeiroFilhoDoFilho = document.createElement("section");
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

// 1.4

let terceiroFilho3 = filhoDoPrimeiroFilhoDoFilho.parentElement.nextElementSibling;

// 2.1
//Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

let paiDoPai = document.getElementById("paiDoPai");

for (let index = paiDoPai.childNodes[0]; index = paiDoPai.lastChild; index += 1) {
  let paiDoPaiTrashBin = [];
  if (paiDoPai[index].id !== "pai" && paiDoPai[index] !== "elementoOndeVoceEsta" && paiDoPai[index] !== "primeiroFilhoDoFilho") {
    paiDoPaiTrashBin.push(paiDoPai[index]);
    paiDoPai.removeChild(paiDoPaiTrashBin);
  }
}
