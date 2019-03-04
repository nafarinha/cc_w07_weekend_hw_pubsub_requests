const ForecastDetailView = function() {

};

ForecastDetailView.prototype.createForecastDetail = function(forecast) {
  const forecastDetail = document.createElement('div');
  forecastDetail.classList.add('forecast-detail');

  const detailsList = document.createElement('ul');
  const date = this.createDetailListItem('Date', this.epochUnixTimestampToDate(forecast.dt));
  const time = this.createDetailListItem('Time', this.epochUnixTimestampToTime(forecast.dt));
  const temp = this.createDetailListItem('Temperature', (forecast.main.temp - 273.15).toFixed(0));
  const humidity = this.createDetailListItem('Humidity', forecast.main.humidity);
  const weatherDescription = this.createDetailListItem('Description', forecast.weather[0].description)
  const weatherIcon = document.createElement('li');
  weatherIcon.classList.add('icon');
  icon = document.createElement('img')
  icon.src = `http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
  icon.alt = forecast.weather[0].description;
  weatherIcon.appendChild(icon);


  detailsList.appendChild(date);
  detailsList.appendChild(time);
  detailsList.appendChild(temp);
  detailsList.appendChild(humidity);
  detailsList.appendChild(weatherDescription);
  detailsList.appendChild(weatherIcon);


  forecastDetail.appendChild(detailsList);
  return forecastDetail;
};

ForecastDetailView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.classList.add(label.toLowerCase());
  element.textContent = `${label}: ${property}`;
  return element;
};

ForecastDetailView.prototype.epochUnixTimestampToDate = function(timestamp) {
  let dt = new Date( (timestamp * 1000) );
  formatedDate = dt.toLocaleDateString("en-GB");
  return formatedDate;
};

ForecastDetailView.prototype.epochUnixTimestampToTime = function(timestamp) {
  let tm = new Date(timestamp * 1000);
  let options = {hour: '2-digit', minute: '2-digit', timeZoneName: 'short'};
  formatedTime = tm.toLocaleTimeString("en-GB", options);
  return formatedTime;
};

module.exports = ForecastDetailView;
