// 1 //

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
  medals: {
    golden: 2,
    silver: 3,
  }
}
// "A jogadora Marta Silva tem 34 anos de idade"
console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");

//"A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes"
console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes");

// "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata"
console.log("A jogadora possui " + player.medals.golden + "medalhas de ouro e " + player.medals.silver + " medalhas de prata");