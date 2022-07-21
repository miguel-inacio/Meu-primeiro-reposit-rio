const url = `https://api.coincap.io/v2/assets`;

async function getCoinsArray() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log('Deu ruim :(', error);
  }
}

async function setCoins() {
  const coins = await getCoinsArray();
  const list = document.getElementById('coins-list');
  const firstTenCoins = coins.filter((coin) => coin.rank <= 10);
  firstTenCoins.forEach(coin => {
    const name = coin.name;
    const abb = coin.symbol;
    const price = coin.priceUsd;
    const li = document.createElement('li');
    li.innerText = `${name} (${abb}): ${price}`;
    li.classList.add('list');
    list.appendChild(li);
  });
}

// async function convertToReal() {
//   const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json`;
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }

setCoins();
convertToReal()
