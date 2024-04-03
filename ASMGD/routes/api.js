// routes/api.js


const express = require('express')

const categoriesAPIController = require('../controllers/api/categories');
const router = express.Router();



// GET /api/categories (lấy danh sách loại sản phẩm)
router.get('/categories/', categoriesAPIController.list);

// POST /api/categories (tạo mới một loại sản phẩm)
router.post('/categories/', categoriesAPIController.create);

// GET /api/categories/:category_id (lấy chi tiết loại sản phẩm với category_id cụ thể)
router.get('/categories/:category_id', categoriesAPIController.detail);

// PUT /api/categories/:category_id (update loại sản phẩm với category_id cụ thể)
router.put('/categories/:category_id', categoriesAPIController.update);
// router.patch('/categories/:category_id', categoriesAPIController.update);

// DELETE /api/categories/:category_id (delete loại sản phẩm với category_id cụ thể)
router.delete('/categories/:category_id', categoriesAPIController.delete);



module.exports = router;