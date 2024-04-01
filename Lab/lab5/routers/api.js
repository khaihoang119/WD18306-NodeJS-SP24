const express = require('express');
const productsAPIController = require('../controllers/api/products');
const router = express.Router();

router.get('/products/', productsAPIController.list)


router.post('/products/', productsAPIController.create);

router.get('/products/:productId', productsAPIController.detail);


router.put('/products/:productId', productsAPIController.update);



router.delete('/products/:productId', productsAPIController.delete);
module.exports = router;