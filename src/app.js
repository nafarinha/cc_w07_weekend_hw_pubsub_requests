const WeatherForecast = require('./models/weather_forecast.js');
const LocationInputView = require('./views/location_input_view.js');
const ForecastView = require('./views/forecast_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const locationInputView = new LocationInputView();
  locationInputView.bindEvents();

  const forecastContainer = document.querySelector('#forecast-container');

  const forecastView = new ForecastView(forecastContainer);
  forecastView.bindEvents();

  const forecast = new WeatherForecast()
  forecast.bindEvents();









});
