const express = require('express');
const productsController = require('../controllers/client/products');
const homeController = require('../controllers/client/home');
const router = express.Router();
// /client/get-product => GET

router.get('/', homeController.home);


router.get('/products', productsController.list);

module.exports = router;