const express = require('express');
const productsController = require('../controllers/products');
const router = express.Router();
// /client/get-product => GET
router.get('/', productsController.getProducts);
// /admin/add-product => POST
// router.post('/add-product', productsController.postAddProduct);
module.exports = router;