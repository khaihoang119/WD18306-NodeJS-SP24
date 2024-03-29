const express = require('express');
const productsController = require('../controllers/products')
const router = express.Router();

//admin add product
router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);
//admin get product
router.get('/list-products', productsController.getProductsAdmin);




//router categories
const categoriesController = require('../controllers/categories');
router.get('/list-category', categoriesController.getCategories);

router.get('/add-category', categoriesController.getAddCategory);
router.post('/add-category', categoriesController.postAddCategory);

// Route để xóa sản phẩm bằng ID
// router.delete('/list-products', productsController.deleteProductById);

module.exports = router;