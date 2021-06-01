//todays date
let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let todaysDate = document.querySelector("#todays-date");
todaysDate.innerHTML = `${day} ${month} ${date} ${year}   ${hours}:${minutes}`;
// city search within h1
function citySearch(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#city-search");
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = citySearch.value;
  searchCity(citySearch.value);
}
function searchCity(city) {
  let apiKey = "4700cdbd3d922f4c8b88160f3a277183";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", citySearch);
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let h1 = document.querySelector("h1");
  let todaysTemp = document.querySelector("#current-temp");
  h1.innerHTML = `${city}`;
  todaysTemp.innerHTML = `${temperature}ºc`;
}
function searchLocation(position) {
  let apiKey = "4700cdbd3d922f4c8b88160f3a277183";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
//current location button
function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
document
  .querySelector("#current-location")
  .addEventListener("click", getPosition);
searchCity("Corfu");
