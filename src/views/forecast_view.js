const PubSub = require('../helpers/pub_sub.js');
const WeatherForecast = require('../models/weather_forecast.js')

const ForecastView = function(container) {
  this.container = container;
};


ForecastView.prototype.bindEvents = function () {
  PubSub.subscribe('WeatherForecast:forecast-ready', (evt) => {
//TEST
  console.log('forecast:',evt.detail);
  this.forecastHeader(evt.detail);
  // this.locationHeader(evt.detail);
  // this.iconHeader(evt.detail);


  });
};

ForecastView.prototype.forecastHeader = function (location) {
  const icon = this.iconHeader(location);
  const title = this.locationHeader(location);
  const header = document.createElement('div');
  header.classList.add('location-header');
  header.appendChild(icon);
  header.appendChild(title);
  this.container.appendChild(header);
};


ForecastView.prototype.locationHeader = function (location) {

  const locationName = document.createElement('h2');
  locationName.classList.add('location-name');
  locationName.textContent = location.city.name;
  // this.container.appendChild(locationName);
  return locationName;
};

ForecastView.prototype.iconHeader = function (location) {
  const icon = location.list[0].weather[0].icon;
  const altText = location.list[0].weather[0].description;
  const weatherIcon = document.createElement('img');
  weatherIcon.src = `http://openweathermap.org/img/w/${icon}.png`
  weatherIcon.alt = altText;
  // this.container.appendChild(weatherIcon);
  return weatherIcon;
};


module.exports = ForecastView;
