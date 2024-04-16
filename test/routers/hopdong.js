const express = require('express')

const hopdongController = require ('../controllers/main/hopdong');
const router = express.Router();

router.get('/hopdong', hopdongController.list)
router.get('/create', hopdongController.create)
router.post('/create', hopdongController.store);
module.exports = router