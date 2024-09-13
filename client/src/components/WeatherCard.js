import React from 'react';

const WeatherCard = ({ location, weather }) => {
  return (
    <div className="weather-card">
      <h2>{location}</h2>
      <p>Temperature: {weather.temperature} °C</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
};

export default WeatherCard;
