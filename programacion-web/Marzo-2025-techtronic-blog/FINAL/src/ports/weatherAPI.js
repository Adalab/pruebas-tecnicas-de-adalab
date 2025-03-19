require('dotenv').config();

function clearRecord(json) {
  return {
    weather: json.weather[0].main,
    weather_description: json.weather[0].description,
    temp: json.main.temp,
    temp_feels_like: json.main.feels_like,
    temp_min: json.main.temp_min,
    temp_max: json.main.temp_max,
    pressure: json.main.pressure,
    humidity: json.main.humidity,
    wind_speed: json.wind.speed,
    wind_direction: json.wind.deg,
    clouds: json.clouds.all,
  };
}

async function get(country, city) {
  const API_KEY = process.env.WEATHER_API_KEY;

  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${API_KEY}`
  );
  const weatherData = await weatherResponse.json();
  const weatherRecord = clearRecord(weatherData);

  return weatherRecord;
}

module.exports = {
  clearRecord,
  get,
};
