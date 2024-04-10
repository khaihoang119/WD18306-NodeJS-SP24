
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
    let categoryName = req.body.categoryName;

    let category = {
        categoryName: categoryName,
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
    let categoryId = req.params.categoryId;
    fetch( API_URL+ `api/categories/${categoryId}`)
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
    let categoryId = req.params.categoryId; 

    let categoryName = req.body.categoryName;

    let category = {
        categoryName: categoryName,
    }

    // res.send(req.body)
    fetch( API_URL+ `api/categories/${categoryId}`, {
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
    let categoryId = req.params.categoryId;
    fetch( API_URL + `api/categories/${categoryId}`, {
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
    })
    .catch(error => console.error('Error:', error));

};
