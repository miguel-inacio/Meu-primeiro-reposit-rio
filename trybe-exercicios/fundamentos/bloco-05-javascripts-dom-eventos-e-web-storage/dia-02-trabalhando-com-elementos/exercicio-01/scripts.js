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

