
const Product = require('../models/product');
// const newProduct = new Product;
exports.getProductsMain = async (req, res, next) => {
    var products = await Product.fetchAll();
    res.render('client/index', {
        prods: products,
        pageTitle: 'Trang chủ',
        path: '/',
        activeShop: true,
    });
    // console.log(products);
};
exports.getProducts = async (req, res, next) => {
    var products = await Product.fetchAll();
    res.render('client/products', {
        prods: products,
        pageTitle: 'Sản phẩm',
        path: '/',
        activeShop: true
    });
};
exports.getProductsAdmin = async (req, res, next) => {
    var products = await Product.fetchAll();
    res.render('admin/list-products', {
        prods: products,
        pageTitle: 'Sản phẩm',
        path: '/',
        activeShop: true
    });
};
//add products
// const product = [];
exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Thêm Sản Phẩm',
        path: '/',
        activeAddProduct: true
    });
};
exports.postAddProduct = async (req, res, next) => {
    // let productName = req.body.productName;
    // let productPrice = req.body.productPrice;
    // let productDes = req.body.productDes;
    // let productImg = req.body.productImage;
    let product = {
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productImg: req.body.productImage,
        productDes: req.body.productDes,
        categoryID: req.body.productCategory
        
    };
    let result = await Product.saveProduct(product);
    if (result) {
        res.render('admin/add-product',{

        });
    } else {
        res.send('co loi xay ra');
    }
};
//xóa sản phẩm
// exports.deleteProductById = async (req, res) => {
//     const productId = req.params.id;

//     let result = await Product.deleteProduct(productId);
//     if (result) {
//       res.render('admin/list-products',{
//         delete: result,
//         path: '/',
//         activeDeleteProduct: true
//       })
//     } else {
//         res.send('co loi xay ra');
//     }
//   };
