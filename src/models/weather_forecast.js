const ApiKey = require('../helpers/api_key.js');
const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const WeatherForecast = function () {
  this.data = null;
  this.coordinates = {};
}

WeatherForecast.prototype.bindEvents = function () {

  PubSub.subscribe('LocationInputView:coordinates-submited', (evt) => {
      this.coordinates = evt.detail;
      this.getData();
    });
};



WeatherForecast.prototype.getData = function () {
  const apiKey = ApiKey;

  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${this.coordinates.latitude}&lon=${this.coordinates.longitude}&APPID=${apiKey}`;
  const request = new RequestHelper(url);
  request.get()
    .then( (data) => {
      this.data = data;
//TEST
      //console.log('forecast data:',this.data);
      PubSub.publish('WeatherForecast:forecast-ready', this.data);
    })
    .catch( (error) => console.error(error) );
};


module.exports = WeatherForecast;
