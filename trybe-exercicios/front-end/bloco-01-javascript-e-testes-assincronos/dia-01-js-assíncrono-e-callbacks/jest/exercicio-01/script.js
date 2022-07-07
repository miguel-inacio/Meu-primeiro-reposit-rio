// 3

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars), 4000);
  
};

getPlanet(); // imprime Marte depois de 4 segundos

// 4/5/6

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// function sendMarsTemperature(param) {
//   const marsTemperature = getMarsTemperature();
//   setTimeout(() => {
//     console.log(`Mars temperature is: ${marsTemperature} degree Celsius`);
//   }, messageDelay)
// }

// function sendMarsTemperature(callback) {
//   const marsTemperature = getMarsTemperature();
//   setTimeout(() => {
//     callback(marsTemperature)
//   }, messageDelay)
// }

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

function sendMarsTemperature(onSuccess, onFailure) {
  const marsTemperature = getMarsTemperature();
  const messageSuccessfullySent = Math.random() <= 0.6;
  setTimeout(() => {
    messageSuccessfullySent ? onSuccess(marsTemperature) : onFailure('Robot is busy');
  }, messageDelay)
}

// sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);