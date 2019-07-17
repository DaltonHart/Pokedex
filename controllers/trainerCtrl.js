const db = require('../models');
const response = require('./response');

module.exports = {
	index: (req, res) => {
		db.Trainer.find({})
			.populate('pokemon')
			.exec((error, foundTrainers) => {
				if (error) return response.sendErrorResponse(res, error);
				response.sendResponse(res, foundTrainers);
			});
	}
};
