
const Product = require('../models/product');
// const newProduct = new Product;
exports.getProductsMain = async (req, res, next) => {
    var products = await Product.getProducts();
    res.render('client/index', {
        prods: products,
        pageTitle: 'Trang chủ',
        path: '/',
        activeShop: true,
    });
    // console.log(products);
};

