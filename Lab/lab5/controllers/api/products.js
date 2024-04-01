const Products = require('../../models/product');

exports.list = async (req, res, next) =>{
    var product = await Products.getAll();
    console.log(product);

    res.status(200).json({
        data: product
    })
}