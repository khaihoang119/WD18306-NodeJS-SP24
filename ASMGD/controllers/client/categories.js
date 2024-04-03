
// controllers/client/categories.js


// POST /api/categories (tạo mới một loại sản phẩm)
// GET /api/categories (lấy danh sách loại sản phẩm)
// GET /api/categories/:category_id (lấy chi tiết loại sản phẩm với category_id cụ thể)
// PUT /api/categories/:category_id (update loại sản phẩm với category_id cụ thể)
// DELETE /api/categories/:category_id (delete loại sản phẩm với category_id cụ thể)
const API_URL = 'http:/localhost:3000/'

exports.list = async (req, res, next) => {
    // gọi api 
    fetch( API_URL+ 'api/categories/')
        .then(response => response.json())
        .then(data => {
            // res.send(data)
            // hiển thị ra giao diện
            res.render('client/category/list', {
                categories: data.data
            })
        })
        .catch(error => console.error('Error:', error));
};
