const express = require('express');
const router = express.Router();


let aboutControllers = require('../controllers/aboutController');

router.get('/about', aboutControllers.aboutController);

module.exports = router;