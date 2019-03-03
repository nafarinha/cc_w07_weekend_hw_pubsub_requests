const PubSub = require('../helpers/pub_sub.js');
const WeatherForecast = require('../models/weather_forecast.js')

const ForecastView = function(container) {
  this.container = container;
};


ForecastView.prototype.bindEvents = function () {
  PubSub.subscribe('WeatherForecast:forecast-ready', (evt) => {
//TEST
  console.log(evt.detail);
  });

};

module.exports = ForecastView;
