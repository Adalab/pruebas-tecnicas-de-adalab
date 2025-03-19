const weatherCache = require('../ports/weatherCache');
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

function searchCachedWeather(data, country, city, time) {
  return data.find(
    (it) => it.country === country &&
            it.city === city &&
            it.time === time
  );
}

async function get(country, city) {
  const data = await weatherCache.readFile();
  const time = getDate();

  const cachedObject = searchCachedWeather(data, country, city, time);

  if (cachedObject) {
    return cachedObject;
  }

  const weatherRecord = await weatherAPI.get(country, city);
  if (weatherRecord) {
    weatherRecord.city = city;
    weatherRecord.country = country;
    weatherRecord.time = time;

    data.push(weatherRecord);

    await weatherCache.writeFile(data);

    return weatherRecord;
  }
}

module.exports = {
  getDate,
  get,
};
