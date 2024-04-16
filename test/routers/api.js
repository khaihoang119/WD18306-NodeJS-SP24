const express = require('express');

const hopdonAPIController = require('../controllers/api/hopdong')
const router = express.Router();


router.get('/hopdong', hopdonAPIController.list)
router.post('/hopdong', hopdonAPIController.create)
module.exports = router