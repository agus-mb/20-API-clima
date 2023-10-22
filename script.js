const API_KEY='0c98d788fb08a59ec1fed5d5c8304171';

const fetchData =position=>{

    const {latitude, longitude}=position.coords;//tomamos del objeto su atributo position: la latirud y la longitud
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)//pedimos la data a la API
    .then(response=>response.json())//mandamos la data traducida a json para mayor legibilidad
    .then(data=>console.log(data))

console.log(position);//mis coordenadas
}
const onLoad=()=>{
    navigator.geolocation.getCurrentPosition(fetchData) //cuando cargue el navegador tomara la geo localiacion guardada en la variable log
}