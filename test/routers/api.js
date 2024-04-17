const express = require('express');

const hopdonAPIController = require('../controllers/api/hopdong')
const router = express.Router();


router.get('/hopdong', hopdonAPIController.list)
router.post('/hopdong', hopdonAPIController.create)
router.delete('/hopdong/:Id', hopdonAPIController.delete);
router.get('/hopdong/:Id', hopdonAPIController.detail);
router.put('/hopdong/:Id', hopdonAPIController.update);
module.exports = router