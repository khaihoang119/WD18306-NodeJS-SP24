// routes/client.js 
const express = require('express')

const categoriesController = require('../controllers/client/categories');
const homeController = require('../controllers/client/home');
const usersController = require('../controllers/client/user');
const router = express.Router();

// *** Home

// GET / (hiển thị trang chủ client)
router.get('/', homeController.home);

// *** End Home


// *** Categories

// GET /categories (hiển thị danh sách loại sản phẩm) 
router.get('/categories', categoriesController.list);

//User
router.get('/users',usersController.list)
router.get('/users/register', usersController.create)
router.post('/users/register', usersController.store)
module.exports = router