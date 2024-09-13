import React, { useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import LocationInput from '../components/LocationInput';
import UserPreferences from '../components/UserPreferences';
import weatherService from '../services/weatherService';

const HomePage = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (location) => {
    const data = await weatherService.getWeather(location);
    setWeather(data);
  };

  return (
    <div className="home-page">
      <h1>Weather App</h1>
      <LocationInput fetchWeather={fetchWeather} />
      {weather && <WeatherCard location={weather.location} weather={weather} />}
      <UserPreferences />
    </div>
  );
};

export default HomePage;
