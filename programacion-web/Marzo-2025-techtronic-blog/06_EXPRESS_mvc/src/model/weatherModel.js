const weatherAPI = require('../ports/weatherAPI');

function getDate() {
  const now = new Date();
  const dateString = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
  }).format(now);

  return dateString;
}

const DATA = [];

function searchCachedWeather(country, city, time) {
  return DATA.find(
    (it) => it.country === country &&
            it.city === city &&
            it.time === time
  );
}

function saveCachedWeather(weatherRecord, city, country, time) {
  weatherRecord.city = city;
  weatherRecord.country = country;
  weatherRecord.time = time;

  DATA.push(weatherRecord);
}

async function get(country, city) {
  const time = getDate();

  const cachedObject = searchCachedWeather(country, city, time);

  if (cachedObject) {
    return cachedObject;
  }

  const weatherRecord = await weatherAPI.get(country, city);
  if (weatherRecord) {
    saveCachedWeather(weatherRecord, city, country, time);

    return weatherRecord;
  }
}

module.exports = {
  getDate,
  get,
};
