const PubSub = require('../helpers/pub_sub.js');
const ForecastDetailView = require('./forecast_detail_view.js');

const ForecastView = function(container) {
  this.container = container;
};


ForecastView.prototype.bindEvents = function () {
  PubSub.subscribe('WeatherForecast:forecast-ready', (evt) => {
//TEST
  console.log('forecast:', evt.detail);
  this.clearList();
  this.forecastHeader(evt.detail);
  this.renderForecastDetailViews(evt.detail);


  });
};

ForecastView.prototype.clearList = function() {
  this.container.innerHTML = '';
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
  return locationName;
};

ForecastView.prototype.iconHeader = function (location) {
  const icon = location.list[0].weather[0].icon;
  const altText = location.list[0].weather[0].description;
  const weatherIcon = document.createElement('img');
  weatherIcon.src = `http://openweathermap.org/img/w/${icon}.png`
  weatherIcon.alt = altText;
  return weatherIcon;
};

// ForecastView.prototype.renderForecastDayGroup = function (forecasts) {
//   forecasts.list.forEach((forecast) => {
//     const forecastDayGroup = document.createElement('div');
//     forecastDayGroup.classList.add('forecast-day');
//     forecastDayGroup.textContent = forecast.dt;
//
//     const forecastItems = this.renderForecastDetailViews(forecasts);
//
//     forecastDayGroup.appendChild(forecastItems);
//
//     this.container.appendChild(forecastDayGroup);
//   });
// };


ForecastView.prototype.renderForecastDetailViews = function (forecasts) {
    forecasts.list.forEach((forecast) => {

    const forecastDayGroup = document.createElement('div');
    forecastDayGroup.classList.add('forecast-day');
    forecastDayGroup.textContent = this.dateGroup(forecast.dt);

    const forecastItem = this.createForecastListItem(forecast);

    forecastDayGroup.appendChild(forecastItem);

    this.container.appendChild(forecastDayGroup);
  });
}

ForecastView.prototype.dateGroup = function (timestamp) {
  let date = new Date(timestamp * 1000);
  formatedDate = date.toLocaleDateString("en-GB")
  return formatedDate;
};

// ForecastView.prototype.renderForecastDetailViews = function (forecasts) {
//     forecasts.list.forEach((forecast) => {
//     const forecastItem = this.createForecastListItem(forecast);
//
//     this.container.appendChild(forecastItem);
//   });
// }

ForecastView.prototype.createForecastListItem = function (forecast) {
  const forecastDetailView = new ForecastDetailView();
  const forecastDetail = forecastDetailView.createForecastDetail(forecast);
  return forecastDetail;
};



module.exports = ForecastView;
