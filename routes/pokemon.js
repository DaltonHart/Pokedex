const express = require('express');
const router = express.Router();
const ctrls = require('../controllers');

// NOTE  Index
router.get('/', ctrls.pokemonCtrl.index);

// NOTE Show
router.get('/:name', ctrls.pokemonCtrl.show);

// NOTE Delete
router.delete('/:name', ctrls.pokemonCtrl.delete);

module.exports = router;
