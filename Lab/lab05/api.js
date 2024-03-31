const express = require('express');
const cateController = require('../controllers/api/categories')
const userContorller = require('../controllers/api/user')
const router = express.Router();

router.get('/user/', userContorller.getUser)
router.get('/categories/', cateController.getCategories)
router.post('/category', cateController.createCategories)

module.exports = router;
