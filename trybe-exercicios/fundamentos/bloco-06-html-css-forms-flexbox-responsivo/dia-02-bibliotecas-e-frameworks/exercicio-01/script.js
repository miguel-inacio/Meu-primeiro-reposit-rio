const sendButton = document.getElementById("send-button");
const clearButton = document.getElementById("clear-button");

// function limitName(){
//   let name = document.getElementById("name-input");
//   if(name.value.length < 10) {
//     window.alert("Dados Inválidos");
//   } else if(name.value.length > 40) {
//     window.alert("Dados Inválidos");
//   } else {
//     window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
//   }
//   name.value = "";
// }

// function limitEmail(){
//   let email = document.getElementById("email-input");
//   if(email.value.length < 10) {
//     window.alert("Dados Inválidos");
//   } else if(email.value.length > 50) {
//     window.alert("Dados Inválidos");
//   }
//   email.value = "";
// }

// function stopButton(event) {
//   event.prenvetDefault();
// }

function clearAll() {
  let name = document.getElementById("name-input");
  let email = document.getElementById("email-input");
  let destinations = document.getElementsByClassName("destination");
  let date = document.getElementById("date")
  let checkboxes = document.getElementsByClassName("checkbox");
  name.value = "";
  email.value = "";
  date.value = "";
  for (const destination of destinations) {
    destination.checked = false;
  }
  for (const boxes of checkboxes) {
    boxes.checked = false;
  }

}

clearButton.addEventListener("click", clearAll);
sendButton.addEventListener("click", JustValidate);
sendButton.addEventListener("click", limitEmail);
// button.addEventListener("click", stopButton);

// i18n: {
//   previousMonth : 'Previous Month',
//   nextMonth     : 'Next Month',
//   months        : ['Janeiro','February','March','April','May','June','July','August','September','October','November','December'],
//   weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
//   weekdaysShort : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
// }

var picker = new Pikaday({ field: document.getElementById('datepicker') });

const validate = new window.JustValidate('#form');

new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);


