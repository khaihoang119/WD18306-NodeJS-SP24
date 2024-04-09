exports.list = async (req, res, next) => {
    // gọi api 
    fetch('http:/localhost:3000/api/products/')
        .then(response => response.json())
        .then(data => {
            // res.send(data)
            // hiển thị ra giao diện
            res.render('./admin/products/list', {
                products: data.data
            })
        })
        .catch(error => console.error('Error:', error));

};

// GET /admin/categories/create (hiển thị form thêm) 
exports.create = (req, res, next) => {
    res.render('admin/products/create');
};

// POST /admin/categories/create (thực hiện thêm) 
exports.store = async (req, res, next) => {
    // gọi api 
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
        categoryId: categoryId,
    }
    fetch('http:/localhost:3000/api/products/', {
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
            body: JSON.stringify(products), // body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .then(data => {
            // res.send(data)
            if (data.result.affectedRows) {
                res.redirect('/admin/products/')

            } else {
                res.send('Lỗi không thể thêm')
            }
        })
        .catch(error => console.error('Error:', error));

};


exports.delete = (req, res, next) => {
    // gọi api 
    let productId = req.params.productId;
    fetch(`http:/localhost:3000/api/products/${productId}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    })
    .then(response => response.json())
    .then(data => {
        // res.send(data)
        if (data.result.affectedRows) {
            res.redirect('/admin/list-products')

        } else {
            res.send('Lỗi không thể xoá')
        }
        
    })
    .catch(error => console.error('Error:', error));

};


exports.edit = (req, res, next) => {
    // gọi api 
    let productId = req.params.productId;
    fetch(`http:/localhost:3000/api/products/${productId}`)
        .then(response => response.json())
        .then(data => {
            // res.send(data)
            // hiển thị ra giao diện
            res.render('admin/edit-product', {
                products: data.data[0]
            })
        })
        .catch(error => console.error('Error:', error));

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
        categoryId: categoryId,
    }

    // res.send(req.body)
    fetch(`http:/localhost:3000/api/products/${productId}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(products), 
        })
        .then(response => response.json())
        .then(data => {
            // res.send(data)
            if (data.result.affectedRows) {
                res.redirect('/admin/list-products')

            } else {
                res.send('Lỗi không thể cập nhật')
            }
           
        })
        .catch(error => console.error('Error:', error));

};