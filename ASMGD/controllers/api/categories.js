// controllers/api/categories.js

const Category = require("../../models/category");


exports.list = async (req, res, next) => {

    var categories = await Category.getAll();
    console.log(categories);

    res.status(200).json({
        data: categories
    })
};

exports.create = async (req, res, next) => {
    let categoryName = req.body.categoryName;

    let category = {
        categoryName: categoryName,
    }
    let result = await Category.create(category);

    console.log(result);
    // // res.send(result);

    res.status(201).json({
        result: result,
        category: category
    })
};


exports.detail = async (req, res, next) => {
    // const file = req.file

    let categoryId = req.params.categoryId;

    let result = await Category.getById(categoryId);

    console.log(result);
    // res.send(result);

    res.status(201).json({
        data: result,
    })
};
exports.update = async (req, res, next) => {
    let categoryId = req.params.categoryId;
    let categoryName = req.body.categoryName;

    let category = {
        categoryName: categoryName,
    }
    let result = await Category.update(category, categoryId);

    console.log(result);
    // res.send(result);
    res.status(201).json({
        result: result,
        category: category
    })
};
exports.delete = async (req, res, next) => {
    let categoryId = req.params.categoryId;

    let result = await Category.delete(categoryId);

    console.log(result);
    // res.send(result);
    res.status(201).json({
        result: result
    })
};