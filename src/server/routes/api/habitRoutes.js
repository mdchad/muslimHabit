const express = require('express');
const router = express.Router();
const { getHabits } = require('../../controllers/habitController');

router.get('/', getHabits);

module.exports = router;