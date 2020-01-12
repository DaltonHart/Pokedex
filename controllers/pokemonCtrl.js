const db = require('../models');
const response = require('./response');

module.exports = {
  index: (req, res) => {
    db.Pokemon.find(req.query, (error, foundPokemons) => {
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, foundPokemons);
    });
  },
  show: (req, res) => {
    db.Pokemon.findOne({ name: req.params.name }, (error, foundPokemon) => {
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, foundPokemon);
    });
  },
  create: (req, res) => {
    db.Pokemon.create(req.body, (error, createdPokemon) => {
      if (error) return response.sendErrorResponse(res, error);
      response.sendResponse(res, createdPokemon);
    });
  },
  delete: (req, res) => {
    db.Pokemon.findOneAndDelete(
      { name: req.params.name },
      (error, deletedPokemon) => {
        if (error) return response.sendErrorResponse(res, error);
        response.sendResponse(res, deletedPokemon);
      }
    );
  }
};
