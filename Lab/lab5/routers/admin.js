const express = require('express');
const productsController = require('../controllers/admin/products');
const homeController = require('../controllers/admin/home');
const router = express.Router();

router.get('/', homeController.home);

router.get('/list-products', productsController.list);



router.get('/add-product', productsController.create);


router.post('/add-product', productsController.store);

router.get('/edit-product/edit/:productId', productsController.edit);


router.post('/edit-product/update/:productId', productsController.update);


router.get('/list-products/delete/:productId', productsController.delete);

module.exports = router;