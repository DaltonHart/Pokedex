const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost/Pokedex';

mongoose.connect(MONGO_URL, { useNewUrlParser: true });

module.exports = {
	Pokemon: require('./Pokemon'),
	Trainer: require('./Trainer'),
	Badge: require('./Badge')
	// Gym: require('./Gym')
};
