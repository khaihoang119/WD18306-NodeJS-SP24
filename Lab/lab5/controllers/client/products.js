
const Product = require('../../models/product');
let API_URL = 'http://localhost:3000/';

exports.list = (req, res, next) => {
    fetch(API_URL + 'api/products')
        .then(response => response.json())
        .then(data => {
            res.render('./client/products', {
                products: data.data,   
            })
        })
        .catch(error => console.error('Error:', error));
};