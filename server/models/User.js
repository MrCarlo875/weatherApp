const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  favoriteLocations: {
    type: [String],
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
