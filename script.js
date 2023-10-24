const API_KEY = "0c98d788fb08a59ec1fed5d5c8304171";

const fetchData = (position) => {
  const { latitude, longitude } = position.coords; //tomamos del objeto su atributo position: la latirud y la longitud
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  ) //pedimos la data a la API
    .then((response) => response.json()) //mandamos la data traducida a json para mayor legibilidad
    .then((data) => setWeatherData(data));

  console.log(position); //mis coordenadas
};

const setWeatherData = (data) => {
  console.log(data); //keys de la api
  const weatherData = {
    location: data.name,
    description: data.weather[0].main,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    temperature: data.main.temp,
    date: getDate(),
  }; //ingresamos a la api y evocamos de acuerdo a la ubicacion de las keys

  Object.keys(weatherData).forEach((key) => {
    document.getElementById(key).textContent = weatherData[key];
  });

  cleanUp();
};

const cleanUp = () => {
  let container = document.getElementById("container");
  let loader = document.getElementById("loader");

  loader.style.display = "none";
  container.style.display = "flex";
};

const getDate = () => {
  let date = new Date();
  return `${date.getDate()}-${("0" + (date.getMonth() + 1)).slice(
    -2
  )}-${date.getFullYear()}`; //fecha, slice para
};

const onLoad = () => {
  navigator.geolocation.getCurrentPosition(fetchData); //cuando cargue el navegador tomara la geo localiacion guardada en la variable log
};
