exports.list = async(req, res, next) => {
    fetch('http://localhost:3000/api/hopdong/')
        .then(response => response.json())
        .then(data => {
            res.render('index', {
                hopdong: data.data,   
            })
        })
        .catch(error => console.error('Error:', error));
};

exports.create = (req, res, next) => {
    res.render('create');
};

exports.store = async (req, res, next) => {
    // gọi api 
    let ten_nguoi_mua = req.body.ten_nguoi_mua;
    let ten_nguoi_ban = req.body.ten_nguoi_ban;
    let gia_tien = req.body. gia_tien;
    let ngay_ky = req.body.ngay_ky;
    let trang_thai = req.body.trang_thai;

    let hopdong = {
        ten_nguoi_mua: ten_nguoi_mua,
        ten_nguoi_ban: ten_nguoi_ban,
        gia_tien:  gia_tien,
        ngay_ky: ngay_ky,
        trang_thai :trang_thai,
    }
    fetch('http://localhost:3000/api/hopdong/', {
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
            body: JSON.stringify(hopdong), // body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .then(data => {
            // res.send(data)
            if (data.result.affectedRows) {
                res.redirect('/hopdong')

            } else {
                res.send('Lỗi không thể thêm')
            }
        })
        .catch(error => console.error('Error:', error));

};

exports.delete = (req, res, next) => {
    // gọi api 
    let Id = req.params.Id;
    fetch(`http://localhost:3000/api/hopdong/${Id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    })
    .then(response => response.json())
    .then(data => {
        // res.send(data)
        if (data.result.affectedRows) {
            res.redirect('/hopdong')

        } else {
            res.send('Lỗi không thể xoá')
        }
        
    })
    .catch(error => console.error('Error:', error));

};


exports.edit = (req, res, next) => {
    // gọi api 
    let Id = req.params.Id;
    fetch(`http://localhost:3000/api/hopdong/${Id}`)
        .then(response => response.json())
        .then(data => {
            // res.send(data)
            // hiển thị ra giao diện
            res.render('edit', {
                hopdong: data.data[0]
            })
        })
        .catch(error => console.error('Error:', error));

};

exports.update = async (req, res, next) => {
    let Id = req.params.Id;

    let ten_nguoi_mua = req.body.ten_nguoi_mua;
    let ten_nguoi_ban = req.body.ten_nguoi_ban;
    let gia_tien = req.body. gia_tien;
    let ngay_ky = req.body.ngay_ky;
    let trang_thai = req.body.trang_thai;

    let hopdong = {
        ten_nguoi_mua: ten_nguoi_mua,
        ten_nguoi_ban: ten_nguoi_ban,
        gia_tien:  gia_tien,
        ngay_ky: ngay_ky,
        trang_thai :trang_thai,
    }

    // res.send(req.body)
    fetch(`http:/localhost:3000/api/hopdong/${Id}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(hopdong), 
        })
        .then(response => response.json())
        .then(data => {
            // res.send(data)
            if (data.result.affectedRows) {
                res.redirect('/hopdong')

            } else {
                res.send('Lỗi không thể cập nhật')
            }
           
        })
        .catch(error => console.error('Error:', error));

};