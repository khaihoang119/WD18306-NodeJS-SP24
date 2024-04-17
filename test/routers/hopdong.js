const express = require('express')

const hopdongController = require ('../controllers/main/hopdong');
const router = express.Router();

router.get('/hopdong', hopdongController.list)
router.get('/create', hopdongController.create)
router.post('/create', hopdongController.store);
router.get('/hopdong/delete/:Id', hopdongController.delete);
router.get('/hopdong/edit/:Id', hopdongController.edit);
router.post('/hopdong/update/:Id', hopdongController.update);
module.exports = router