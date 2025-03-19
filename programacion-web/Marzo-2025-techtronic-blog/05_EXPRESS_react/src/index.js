const express = require('express');
const cors = require('cors');
const path = require('node:path');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server listening at <http://localhost:${PORT}/>`);
  });
}

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

// ENDPOINTS

app.get('/api/weather/:country/:city', async (req, res) => {
  const city = req.params.city.toLowerCase();
  const country = req.params.country.toLowerCase();

  const API_KEY = process.env.WEATHER_API_KEY;

  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${API_KEY}`
  );
  const weatherData = await weatherResponse.json();
  const weatherRecord = clearRecord(weatherData);

  return res.json(weatherRecord);
});


// STATIC

app.use(express.static(path.join(__dirname, 'public_frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public_frontend', 'index.html'));
});

module.exports = app;