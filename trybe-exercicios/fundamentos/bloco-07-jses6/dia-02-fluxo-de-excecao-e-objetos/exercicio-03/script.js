const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1

const addEntry = (object, key, value) => {
  object[key] = value;
}

addEntry(lesson2, 'turno', 'noite');

//2

const listKeys = (object) => {
  return Object.keys(object);
}

// console.log(listKeys(lesson1));

//3

const objectLength = (object) => {
  // console.log(Object.keys(object).length);
}

objectLength(lesson3);

//4

const listValues = (object) => {
  // console.log(Object.values(object));
}

listValues(lesson1);

//5

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

6//

const verifyTotalStudents = (object) => {
  const students1 = object.lesson1.numeroEstudantes;
  const students2 = object.lesson2.numeroEstudantes;
  const students3 = object.lesson3.numeroEstudantes;
  return students1 + students2 + students3;
}

// console.log(verifyTotalStudents(allLessons));

//7

const getValueByNumber = (object, position) => {
  return Object.values(object)[position];
}

// console.log(getValueByNumber(lesson1, 0));

//8

const isEntry = (object, key, value) => {
  const entries = Object.entries(object);
  let validation = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) {
      validation = true;
  }
}
  return validation;
}


// Bônus 1

const countMathStudents = (object) => {
  let counter = 0;
  const subject = Object.keys(object);
  for (let index in subject) {
    console.log(subject[index]);
    if (object[subject[index]].materia === 'Matemática') {
      counter += object[subject[index]].numeroEstudantes;
    }
  }
  return `${counter} estudantes assistiram às aulas de Matemática.`;
}

console.log(countMathStudents(allLessons));

// Bônus 2

const createReport = (object, professor) => {
  const lessonsGiven = 
}

console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */