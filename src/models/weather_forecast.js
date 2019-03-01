const RequestHelper = require('../helpers/request_helper.js');
const ApiKey = require('../helpers/api_key.js');
const PubSub = require('../helpers/pub_sub.js');


const WeatherForecast = function () {
  this.data = null;
}

WeatherForecast.prototype.getData = function () {
  const apiKey = new ApiKey;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`;
  const request = new RequestHelper(url);
  request.get()
    .then( (data) => {
      this.data = data;
      PubSub.publish('WeatherForecast:Forecast-data-loaded', this.data);
    })
    .catch( (error) => console.error(error) );
};

module.exports WeatherForecast;
