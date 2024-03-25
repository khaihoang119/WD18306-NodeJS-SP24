const express = require('express');
const productsController = require('../controllers/products')
const router = express.Router();

//admin add product
router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);
//admin get product
router.get('/list-products', productsController.getProductsAdmin);
module.exports = router;