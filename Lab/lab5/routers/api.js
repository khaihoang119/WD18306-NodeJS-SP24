const express = require('express');
const productsAPIController = require('../controllers/api/products');
const router = express.Router();

router.get('/products/', productsAPIController.list)

module.exports = router;