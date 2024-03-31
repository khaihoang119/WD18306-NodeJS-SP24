
const Product = require('../../models/product');
let API_URL = 'http://localhost:3000/';

exports.getProductAPi = (req, res, next) => {
    Product.fetchAll()
        .then(products => {
            res.send(products).json();
        })
}

exports.getProductsClient = (req, res, next) => {
    fetch(API_URL + 'products')
        .then(response => response.json())
        .then(products => {
            res.render('./client/products', {
                products: products,   
            })
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            res.status(500).send('Error fetching products');
        });
};
exports.productsClient = (req, res, next) =>{
    res.render('./client/index',{
        pageTitle: 'client',
        path:'/',
        activeClient: true,
       
    });
}