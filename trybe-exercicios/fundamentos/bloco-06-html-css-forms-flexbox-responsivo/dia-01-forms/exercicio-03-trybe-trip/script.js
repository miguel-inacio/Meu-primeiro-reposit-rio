const sendButton = document.getElementById("send-button");
const clearButton = document.getElementById("clear-button");

function limitName(){
  let name = document.getElementById("name-input");
  if(name.value.length < 10) {
    window.alert("Dados Inválidos");
  } else if(name.value.length > 40) {
    window.alert("Dados Inválidos");
  } else {
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
  name.value = "";
}

function limitEmail(){
  let email = document.getElementById("email-input");
  if(email.value.length < 10) {
    window.alert("Dados Inválidos");
  } else if(email.value.length > 50) {
    window.alert("Dados Inválidos");
  }
  email.value = "";
}

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
sendButton.addEventListener("click", limitName);
sendButton.addEventListener("click", limitEmail);
// button.addEventListener("click", stopButton);