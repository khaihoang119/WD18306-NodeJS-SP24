const Products = require('../../models/product');

exports.list = async (req, res, next) =>{
    var product = await Products.getAll();
    console.log(product);

    res.status(200).json({
        data: product
    })
};

exports.create = async (req, res, next) => {
    // const file = req.file

    let productName = req.body.productName;
    let productPrice = req.body.productPrice;
    let productDes = req.body.productDes;
    let productImg = req.body.productImg;
    let categoryId = req.body.categoryId;

    let products = {
        productName: productName,
        productPrice: productPrice,
        productDes: productDes,
        productImg: productImg,
        categoryId :categoryId,
    }
    let result = await Products.create(products);

    console.log(result);
    // // res.send(result);

    res.status(201).json({
        result: result,
        products: products
    })
};
exports.delete = async (req, res, next) => {
    let productId = req.params.productId;

    let result = await Products.delete(productId);

    console.log(result);
    // res.send(result);
    res.status(201).json({
        result: result
    })
};


exports.detail = async (req, res, next) => {
    // const file = req.file

    let productId = req.params.productId;

    let result = await Products.getById(productId);

    console.log(result);
    // res.send(result);

    res.status(201).json({
        data: result,
    })
};
exports.update = async (req, res, next) => {
    let productId = req.params.productId;
    
    let productName = req.body.productName;
    let productPrice = req.body.productPrice;
    let productDes = req.body.productDes;
    let productImg = req.body.productImg;
    let categoryId = req.body.categoryId;

    let products = {
        productName: productName,
        productPrice: productPrice,
        productDes: productDes,
        productImg: productImg,
        categoryId :categoryId,
    }
    let result = await Products.update(products, productId);

    console.log(result);
    // res.send(result);
    res.status(201).json({
        result: result,
        products: products
    })
};