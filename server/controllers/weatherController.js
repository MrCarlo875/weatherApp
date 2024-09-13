const axios = require('axios');
const User = require('../models/User');
const weatherAPI = require('../utils/weatherAPI');

// Get weather for a given location
const getWeather = async (req, res) => {
  const { location } = req.query;
  try {
    const weatherData = await weatherAPI.fetchWeather(location);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch weather data' });
  }
};

// Save user preferences (favorite locations)
const savePreference = async (req, res) => {
  const { location } = req.body;
  try {
    let user = await User.findOne();
    if (!user) {
      user = new User({ favoriteLocations: [] });
    }
    user.favoriteLocations.push(location);
    await user.save();
    res.json(user.favoriteLocations);
  } catch (error) {
    res.status(500).json({ message: 'Failed to save preference' });
  }
};

// Get user preferences
const getPreferences = async (req, res) => {
  try {
    const user = await User.findOne();
    res.json(user ? user.favoriteLocations : []);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get preferences' });
  }
};



module.exports = {
  getWeather,
  savePreference,
  getPreferences
};
