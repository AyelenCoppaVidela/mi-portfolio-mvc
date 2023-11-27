const express = require('express');
const router = express.Router();


let homeControllers = require('../controllers/homeController');

router.get('/', homeControllers.homeController);

module.exports = router;