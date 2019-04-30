// const L = require('leaflet');
const WeatherForecast = require('./models/weather_forecast.js');
const LocationInputView = require('./views/location_input_view.js');
const ForecastView = require('./views/forecast_view.js');
const MapInputView = require('./views/map_input_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

// const map = L.map('map');
// map.setView([55, 0], 4);
// let attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//
// let tiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
//
// L.tileLayer(tiles, {
//   maxZoom: 18,
//   attribution: attribution
// }).addTo(map);
//
// let popup = L.popup();
// map.on('click', onClick);
// function onClick(e){
//     popup
//     .setLatLng(e.latlng)
//     .setContent("coordinates " + e.latlng.toString())
//     .openOn(map);
//     //TEST
//     console.log('app.js test:',e.latlng);
// };

  const mapInputView = new MapInputView();
  mapInputView.bindEvents();

  const locationInputView = new LocationInputView();
  locationInputView.bindEvents();

  const forecastContainer = document.querySelector('#forecast-container');

  const forecastView = new ForecastView(forecastContainer);
  forecastView.bindEvents();

  const forecast = new WeatherForecast()
  forecast.bindEvents();




});
