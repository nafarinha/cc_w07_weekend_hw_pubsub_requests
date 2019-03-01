const WeatherForecast = require('./models/weather_forecast.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const forecastContainer = document.querySelector('forecast-container');


  const forecast = new WeatherForecast()
  forecast.getData();
});
