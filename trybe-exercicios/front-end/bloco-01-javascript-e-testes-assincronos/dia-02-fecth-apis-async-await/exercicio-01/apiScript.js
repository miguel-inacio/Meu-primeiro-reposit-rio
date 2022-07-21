// apiScript.js
// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   // Adicionar lógica aqui!
// };

// window.onload = () => fetchJoke();

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const joke = fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => document.getElementById('jokeContainer').innerText = data.joke);
};

window.onload = () => fetchJoke();