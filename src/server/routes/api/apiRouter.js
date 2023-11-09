const express = require('express');
const habitRoutes = require('./habitRoutes');

const router = express.Router();

// Mount the route files
router.use('/habits', habitRoutes);

module.exports = router;