// Faça uma lista com as suas frutas favoritas
const specialFruit = ['limão', 'laranja', 'maracujá'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['banana', 'maçã verde', 'morango'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
