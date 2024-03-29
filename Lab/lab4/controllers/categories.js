const Categories = require('../models/categories');

exports.getCategories = async(req, res, next) =>{
    var categories = await Categories.getCategories();
    res.render('admin/list-category',{
        title:'Danh sách danh mục',
        cate:categories,
        path: '/',
        activeCategories: true

    });
};

//Get categories
exports.getAddCategory = (req, res, next) =>{
    res.render('admin/add-category',{
        pageTitle: 'Thêm danh mục sản phẩm',
        path: '/',
        activeAddCategory: true
    });
};
exports.postAddCategory = async(req, res, next) =>{
    let category = {
        categoryName: req.body.categoryName,
    };
    let result = await Categories.saveCategory(category);
    if(result){
        res.render('admin/add-category',{

        });
    }else{
        res.send('co loi xay ra');
    }
}; 