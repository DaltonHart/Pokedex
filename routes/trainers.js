const express = require('express');
const router = express.Router();
const ctrls = require('../controllers');

// NOTE Index
router.get('/', ctrls.trainerCtrl.index);

module.exports = router;
