const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const condition = document.getElementById("condition");
const weatherIcon = document.getElementById("weather-icon");
const errorMessage = document.getElementById("error-message");
const unitToggle = document.getElementById("unit-toggle");
const resetButton = document.getElementById("reset-button");

const API_KEY = "0a2e13d8e044e78eb193362d0aa506a3";

let weatherData = null;
let isCelsius = true;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();

  if (!city) {
    showError("Please enter a city name.");
    return;
  }

  getWeatherData(city);
});

unitToggle.addEventListener("click", () => {
  isCelsius = !isCelsius;
  if (weatherData) {
    const temp = isCelsius ? weatherData.main.temp : (weatherData.main.temp * 9) / 5 + 32;
    temperature.textContent = `Temperature: ${temp.toFixed(1)}°${isCelsius ? "C" : "F"}`;
  }
});

resetButton.addEventListener("click", () => {
  // Clear input value
  cityInput.value = "";
  // Hide weather result and error message
  weatherResult.classList.add("hidden");
  errorMessage.classList.add("hidden");
  // Clear weather data display
  cityName.textContent = "";
  temperature.textContent = "";
  humidity.textContent = "";
  condition.textContent = "";
  weatherIcon.src = "";
});

function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found. Please try again.");
      }
      return response.json();
    })
    .then((data) => {
      weatherData = data;
      displayWeatherData(data);
    })
    .catch((error) => showError(error.message));
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

// Geolocation feature
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    getWeatherByCoordinates(latitude, longitude);
  });
}

function getWeatherByCoordinates(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weatherData = data;
      displayWeatherData(data);
    })
    .catch(() => showError("Unable to fetch weather for your location."));
}
