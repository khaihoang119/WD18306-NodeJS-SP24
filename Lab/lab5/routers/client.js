const express = require('express');
const productsController = require('../controllers/client/products');
const router = express.Router();
// /client/get-product => GET

router.get('/', productsController.productsClient);
router.get('/products', productsController.getProductsClient)
// router.get('/product', productsController.getProducts)
// router.get('/products', productsController.getProducts);
// /admin/add-product => POST
// router.post('/add-product', productsController.postAddProduct);
module.exports = router;