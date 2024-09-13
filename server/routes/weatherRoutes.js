const express = require('express');
const weatherController = require('../controllers/weatherController');
const { getWeather, savePreference, getPreferences } = require('../controllers/weatherController');

const router = express.Router();

// Route to get weather data
router.get('/weather', getWeather);

// Route to save user preferences
router.post('/preferences', savePreference);

// Route to get user preferences
router.get('/preferences', getPreferences);

router.get('/weather', weatherController.getWeather);

module.exports = router;
