const ApiKey = require('../helpers/api_key.js');
const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const WeatherForecast = function () {
  this.data = null;
}

WeatherForecast.prototype.getData = function () {
  const apiKey = ApiKey;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`;
  const request = new RequestHelper(url);
  request.get()
    .then( (data) => {
      this.data = data;
      //console.log(this.data);
      PubSub.publish('WeatherForecast:Forecast-data-ready', this.data);
    })
    .catch( (error) => console.error(error) );
};

module.exports = WeatherForecast;
