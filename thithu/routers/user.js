const express = require('express');

const userController = require('../controllers/api/user');

const router = express.Router();

//Get
router.get('/user', userController.getUser);

module.exports = router;