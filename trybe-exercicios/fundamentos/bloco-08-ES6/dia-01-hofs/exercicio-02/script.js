const checks = (number, prize) => number === prize;

const bets = (callback, bet) => {
  let prize = Math.floor(Math.random() * 5) + 1;
  return callback(bet, prize) ? 'Parabéns, você ganhou!' : 'Tente outra vez!';
}

console.log(bets(checks, 5));
