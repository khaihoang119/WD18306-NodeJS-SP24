// controllers/admin/categories.js


// ****API
// GET /api/categories (lấy danh sách loại sản phẩm)
// POST /api/categories (tạo mới một loại sản phẩm)
// GET /api/categories/:category_id (lấy chi tiết loại sản phẩm với category_id cụ thể)
// PUT /api/categories/:category_id (update loại sản phẩm với category_id cụ thể)
// DELETE /api/categories/:category_id (delete loại sản phẩm với category_id cụ thể)

const API_URL = 'http:/localhost:3000/';
// GET /admin/categories (hiển thị danh sách loại sản phẩm) 
exports.list = async (req, res, next) => {
    // gọi api 
    fetch(API_URL+  'api/categories/')
        .then(response => response.json())
        .then(data => {
            // res.send(data)
            // hiển thị ra giao diện
            res.render('admin/category/list', {
                categories: data.data
            })
        })
        .catch(error => console.error('Error:', error));

};

// GET /admin/categories/create (hiển thị form thêm) 
exports.create = (req, res, next) => {
    res.render('admin/category/create');
};

// POST /admin/categories/create (thực hiện thêm) 
exports.store = async (req, res, next) => {
    // gọi api 
    let name = req.body.name;
    let status = req.body.status;

    let category = {
        name: name,
        status: status,
    }
    fetch( API_URL+ 'api/categories/', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(category), // body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .then(data => {
            // res.send(data)
            if (data.result.affectedRows) {
                res.redirect('/admin/categories/')

            } else {
                res.send('Lỗi không thể thêm')
            }
            // hiển thị ra giao diện
            // res.redirect('/admin/categories/')
        })
        .catch(error => console.error('Error:', error));

};

// GET /admin/categories/edit/:category_id (hiển thị form chỉnh sửa)
exports.edit = (req, res, next) => {
    // gọi api 
    let category_id = req.params.category_id;
    fetch( API_URL+ `api/categories/${category_id}`)
        .then(response => response.json())
        .then(data => {
            // res.send(data)
            // hiển thị ra giao diện
            res.render('admin/category/edit', {
                category: data.data[0]
            })
        })
        .catch(error => console.error('Error:', error));

};

// POST /admin/categories/update/:category_id (thực hiện cập nhật)
exports.update = async (req, res, next) => {
    // gọi api 
    let category_id = req.params.category_id;

    let name = req.body.name;
    let status = req.body.status;

    let category = {
        name: name,
        status: status,
    }

    // res.send(req.body)
    fetch( API_URL+ `api/categories/${category_id}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(category), // body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .then(data => {
            // res.send(data)
            if (data.result.affectedRows) {
                res.redirect('/admin/categories/')

            } else {
                res.send('Lỗi không thể cập nhật')
            }
            // hiển thị ra giao diện
            // res.redirect('/admin/categories/')
        })
        .catch(error => console.error('Error:', error));

};

// GET /admin/categories/delete/:category_id (thực hiện xoá) 
exports.delete = (req, res, next) => {
    // gọi api 
    let category_id = req.params.category_id;
    fetch( API_URL + `api/categories/${category_id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    })
    .then(response => response.json())
    .then(data => {
        // res.send(data)
        if (data.result.affectedRows) {
            res.redirect('/admin/categories/')

        } else {
            res.send('Lỗi không thể xoá')
        }
        // hiển thị ra giao diện
        // res.redirect('/admin/categories/')
    })
    .catch(error => console.error('Error:', error));

};
