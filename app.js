const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const condition = document.getElementById("condition");
const weatherIcon = document.getElementById("weather-icon");
const errorMessage = document.getElementById("error-message");

const API_KEY = "0a2e13d8e044e78eb193362d0aa506a3";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();

  if (!city) {
    showError("Please enter a city name.");
    return;
  }

  getWeatherData(city);
});

function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found. Please try again.");
      }
      return response.json();
    })
    .then(data => displayWeatherData(data))
    .catch(error => showError(error.message));
}

function displayWeatherData(data) {
  errorMessage.classList.add("hidden");
  weatherResult.classList.remove("hidden");

  cityName.textContent = data.name;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  condition.textContent = `Condition: ${data.weather[0].description}`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
  weatherResult.classList.add("hidden");
}
