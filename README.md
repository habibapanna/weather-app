# Weather WebApp 🌤️

## Overview
Weather WebApp is a frontend project that allows users to fetch and view current weather data for any user-specified city. The app integrates with the OpenWeatherMap API to provide key weather information, such as temperature, humidity, weather conditions, and icons.

This project was developed using **HTML**, **CSS**, and **JavaScript**, focusing on asynchronous operations, error handling, and a responsive user interface.

---

## Features
- User-friendly form to input the city name and fetch weather data.
- Displays key weather details:
  - Temperature (Celsius or Fahrenheit toggle)
  - Humidity
  - Weather condition with descriptive text and icon
- Error handling for invalid city names or API errors.
- Geolocation-based weather fetching upon app load.
- Responsive design optimized for both desktop and mobile devices.

---

## Technologies Used
- HTML5 for structured content.
- CSS3 for responsive and visually appealing design.
- JavaScript (ES6) for API integration and dynamic DOM manipulation.
- OpenWeatherMap API for weather data.

---

## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- A modern web browser (Chrome, Firefox, etc.)
- A stable internet connection for API requests

### Steps to Run the Project
1. Clone or download this repository.
2. Extract the zipped folder if necessary.
3. Navigate to the project directory.
4. Open `index.html` in your preferred web browser.

That's it! You're ready to use the Weather WebApp.

---

## Project Structure
```
WeatherWebApp/
├── index.html    # Main HTML file
├── styles/
│   └── styles.css # CSS file for styling
├── app.js         # JavaScript for app logic
└── README.md      # Project documentation
```

---

## API Integration
The project integrates with the **OpenWeatherMap API** to fetch weather data. Below are key integration details:
- Base API URL: `https://api.openweathermap.org/data/2.5/weather`
- API Key: You need to provide your API key inside `app.js`
- Example request: `https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=YourAPIKey&units=metric`

---

## Approach
1. **Weather Fetching:** Used `fetch()` to asynchronously retrieve weather data.
2. **DOM Manipulation:** Displayed fetched weather information dynamically.
3. **Error Handling:** Implemented user-friendly error messages for invalid cities or network errors.
4. **Responsive Design:** Ensured a clean and user-friendly layout across various screen sizes using CSS media queries.
5. **Optional Features:**
   - Geolocation for fetching weather by user's current location.
   - Temperature unit toggle between Celsius and Fahrenheit.

---

## Challenges Faced
1. **API Error Handling:** Managing API errors gracefully, especially for invalid city names, was a key challenge. This was solved by checking response status codes and displaying error messages to the user.
2. **Geolocation Integration:** Ensuring weather data was fetched accurately using browser geolocation required handling asynchronous operations.
3. **Responsive Design:** Creating a layout that works well on both desktop and mobile devices required careful use of media queries.

### Solutions
- Implemented `try-catch` with error messages to guide users during API errors.
- Ensured asynchronous requests handled geolocation data before fetching weather data.
- Used CSS flexbox and media queries for layout adjustments.

---

## Future Improvements
- Add a weather forecast feature.
- Improve the UI/UX with animations and additional styling.
- Include support for more weather details such as wind speed and pressure.

---

## License
This project is for educational purposes only.

---

## Author
Habiba Panna  
+880 1946-127204 (WhatsApp)  
GitHub link : (https://github.com/habibapanna/weather-app)  

