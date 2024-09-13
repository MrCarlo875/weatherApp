const axios = require('axios');

const fetchWeather = async (location) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  
  const response = await axios.get(url);
  return {
    location: response.data.name,
    temperature: response.data.main.temp,
    condition: response.data.weather[0].description
  };
};

module.exports = {
  fetchWeather
};
