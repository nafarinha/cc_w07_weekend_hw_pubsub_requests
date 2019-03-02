const PubSub = require('../helpers/pub_sub.js');

const ForecastView = function(container) {
  this.container = container;
};


ForecastView.prototype.bindEvents = function () {
  PubSub.subscribe('Weatherforecast:Forecast-ready', (evt) => {
//TEST
  console.log(evt.detail);
  });
};

module.exports = ForecastView;
