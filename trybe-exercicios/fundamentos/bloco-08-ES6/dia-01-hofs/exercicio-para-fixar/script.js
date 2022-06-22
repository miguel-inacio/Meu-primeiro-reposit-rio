const wakingUp = () => 'Acordando!!';

const breakfastCalling = () => 'Bora tomar café!!';

const sleeping = () => 'Partiu dormir!!';

const doingThings = (thing) => thing();

console.log(doingThings(wakingUp));
console.log(doingThings(breakfastCalling));
console.log(doingThings(sleeping));
