// const product = [];
// exports.getaddProduct = (req, res, next) =>{
//     res.render('add-product',{
//         title: 'Add Product' ,
//         path: '/admin/add-product', 
//         activeAddProduct: true
//     });
// };
// exports.postAddProduct = (req, res, next) => {
//     products.push({ title: req.body.title });
//     res.redirect('/');
//     };
//     exports.getProducts = (req, res, next) => {
//     res.render('client', {
//     prods: products,
//     pageTitle: 'Shop',
//     path: '/',
//     hasProducts: products.length > 0,
//     activeShop: true,
//     });
//     };

const Product = require('../models/product');
const newProduct = new Product;
exports.getProducts = async (req, res, next) => {
    var products = await newProduct.fetchAll();
    res.render('client', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        activeShop: true,
    });
    // console.log(products);
}