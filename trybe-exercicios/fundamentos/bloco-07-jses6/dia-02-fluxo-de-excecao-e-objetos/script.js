// 1

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

const addsNewKey = (object, key, value) => {
  object[key] = value;
  return object;
}

console.log(addsNewKey(customer, 'nacionalidade:', 'brasileiro'))

// 2 e 3

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const displaySkills = (student) => {
  const skills = Object.keys(student);
  const ratings = Object.values(student);
  for (let index = 0; index < skills.length; index += 1) {
    console.log(`${skills[index]}. Nível: ${ratings[index]}`);
  }
}

displaySkills(student1);
displaySkills(student2);
