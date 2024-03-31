const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')
// app.use(express.static('assets'))
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/assets', express.static('public'))/
const router = express.Router();

const productsController = require('../controllers/admin/products');
const cateController = require('../controllers/admin/categories')
const useController = require('../controllers/admin/user')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'assets/images/product/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });


router.get('/layouts/dashboard', productsController.getDashBoard);
router.get('/product/list', productsController.getProducts);
router.get('/product/add', productsController.getAddProduct);
router.get('/product/detail/:id', productsController.getDetailProAdmin);
// đường dẫn thực hiện sữa 
router.put('/product/detail/:id', productsController.updateProduct);
router.post('/product/detail/:id', upload.single('image'), productsController.updateProduct);
router.post('/product/add', upload.single('image'), productsController.postAddProduct);
router.get('/product/delete/:id', productsController.DeletePro);

// dẫn api categories
router.get('/categories/list', cateController.getCategories);
router.get('/categories/add', cateController.getCateAdd);

router.get('/user/list', useController.getUser);
router.get('/user/detail/:id', useController.getIdUser);
router.get('/user/add', useController.getAddUser);
router.post('/user/add', useController.addNewUser);

module.exports = router;