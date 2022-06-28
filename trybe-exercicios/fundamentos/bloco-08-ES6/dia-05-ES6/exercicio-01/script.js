// 1

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle) // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});

// 2

const sum = (...param) => param.reduce((acc, curr) => acc + curr);

// escreva sum abaixo
// const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);

console.log(sum(2, 4, 10, 50));
console.log(sum([2, 4, 10, 50])); // se passar como array não funciona?

// 3

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// 4

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filterPeople = (array) => {
  return array.filter(({bornIn, nationality}) => {
    return bornIn >= 1901 && bornIn < 2001 && nationality === 'Australian';
})
};

console.log(filterPeople(people));

// 5

const myList = [1, 2, 3];

// escreva swap abaixo

const swap = ([a, b, c]) => [c, b, a];

console.log(swap(myList));

// 6

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = ([modelo, montadora, ano]) => {
  return {modelo, montadora, ano}
};

const allArrays = (...param) => {
  const newObjects = [];
   param.forEach((array) => {
    newObjects.push(toObject(array));
  });
  return newObjects;
};

// console.log(toObject(palio));
// console.log(toObject(shelbyCobra));
// console.log(toObject(chiron));
console.log(allArrays(palio, shelbyCobra, chiron));

// 7

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo

const shipLength = (obj) => {
  const {name, length, measurementUnit} = obj
  return `${name} is ${length} ${measurementUnit} long`;
}

console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

// 8

// escreva greet abaixo

const greet = (name, salutation = 'Hi') => {
  return `${salutation} ${name}`;
}

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

// 9

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const yearMonths = () => {
  const {spring, summer, autumn, winter} = yearSeasons;
  const allMonths = [...spring, ...summer, ...autumn, ...winter];
  return allMonths; 
};

console.log(yearMonths());
