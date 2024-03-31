const express = require('express')

const userAPIController = require('../controllers/api/user');
const router = express.Router();

router.get('/user/', userAPIController.getUser);

module.exports = router;