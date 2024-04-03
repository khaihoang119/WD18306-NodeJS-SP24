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
    // const file = req.file

    let name = req.body.name;
    let status = req.body.status;

    let category = {
        name: name,
        status: status,
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

    let category_id = req.params.category_id;

    let result = await Category.getById(category_id);

    console.log(result);
    // res.send(result);

    res.status(201).json({
        data: result,
    })
};
exports.update = async (req, res, next) => {
    let category_id = req.params.category_id;
    let name = req.body.name;
    let status = req.body.status;

    let category = {
        name: name,
        status: status,
    }
    let result = await Category.update(category, category_id);

    console.log(result);
    // res.send(result);
    res.status(201).json({
        result: result,
        category: category
    })
};
exports.delete = async (req, res, next) => {
    let category_id = req.params.category_id;

    let result = await Category.delete(category_id);

    console.log(result);
    // res.send(result);
    res.status(201).json({
        result: result
    })
};