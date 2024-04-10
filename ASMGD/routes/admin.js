// routes/admin.js 
const express = require('express')

const categoriesController = require('../controllers/admin/categories');
const homeController = require('../controllers/admin/home');
const productsController = require('../controllers/admin/products');
const userController = require ('../controllers/admin/user');
const router = express.Router();

// *** Home

// GET /admin/ (hiển thị trang chủ admin)
router.get('/', homeController.home);

// *** End Home



// *** Categories

// GET /admin/categories (hiển thị danh sách loại sản phẩm) 
router.get('/categories', categoriesController.list);

// GET /admin/categories/create (hiển thị form thêm) 
router.get('/categories/create', categoriesController.create);

// POST /admin/categories/create (thực hiện thêm) 
router.post('/categories/create', categoriesController.store);

// GET /admin/categories/edit/:category_id (hiển thị form chỉnh sửa)
router.get('/categories/edit/:categoryId', categoriesController.edit);

// POST /admin/categories/update/:category_id (thực hiện cập nhật)
router.post('/categories/update/:categoryId', categoriesController.update);

// GET /admin/categories/delete/:category_id (thực hiện xoá) 
router.get('/categories/delete/:categoryId', categoriesController.delete);

// *** End Categories

//products
router.get('/products', productsController.list);
router.get('/products/create', productsController.create);
router.post('/products/create', productsController.store);
router.get('/products/edit/:productId', productsController.edit);
router.post('/products/update/:productId', productsController.update);
router.get('/products/delete/:productId', productsController.delete);

//User
router.get('/users', userController.list);
module.exports = router;