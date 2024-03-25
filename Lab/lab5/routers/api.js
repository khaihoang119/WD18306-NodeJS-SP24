const express = require('express');
const categoriesApiController = require('../controllers/api/category');
const router = express.Router();


router.get('/categories/', categoriesApiController.list);
module.exports = router;