// routes/api.js


const express = require('express')

const categoriesAPIController = require('../controllers/api/categories');
const userAPIController = require('../controllers/api/user');
const productsAPIController = require('../controllers/api/products');
const router = express.Router();



// GET /api/categories (lấy danh sách loại sản phẩm)
router.get('/categories/', categoriesAPIController.list);

// POST /api/categories (tạo mới một loại sản phẩm)
router.post('/categories/', categoriesAPIController.create);

// GET /api/categories/:category_id (lấy chi tiết loại sản phẩm với category_id cụ thể)
router.get('/categories/:categoryId', categoriesAPIController.detail);

// PUT /api/categories/:category_id (update loại sản phẩm với category_id cụ thể)
router.put('/categories/:categoryId', categoriesAPIController.update);
// router.patch('/categories/:category_id', categoriesAPIController.update);

// DELETE /api/categories/:category_id (delete loại sản phẩm với category_id cụ thể)
router.delete('/categories/:categoryId', categoriesAPIController.delete);


//Router User

router.get('/users/', userAPIController.list);

router.post('/users/', userAPIController.create);

router.post('/users/login/:username', userAPIController.login);


//router products
router.get('/products/', productsAPIController.list)


router.post('/products/', productsAPIController.create);

router.get('/products/:productId', productsAPIController.detail);

router.put('/products/:productId', productsAPIController.update);


router.delete('/products/:productId', productsAPIController.delete);

module.exports = router;