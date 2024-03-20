const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');

//Kết nối với db mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'nodejs'
});
//khai báo để sử dụng multer
var multer = require('multer');
var storage = multer.diskStorage({
    description: function (req, file, cb) {
        cb(null, 'assets/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
var upload = multer({ storage: storage });

//khai bao sử dụng template ejs
app.set('view engine', 'ejs');
app.set('views', 'views/');
app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended: true })); // Middleware để xử lý dữ liệu được gửi từ form

// Khai báo static file
app.use(express.static('assets'));

//router
app.get('/', (req, res) => {
    var today = new Date();
    currentDay = today.getDay();
    var day = '';
    switch (currentDay) {
        case 0:
            day = 'Chủ nhật';
            break;
        case 1:
            day = 'Thứ hai';
            break;
        case 2:
            day = 'Thứ ba';
            break;
        case 3:
            day = 'Thứ tư';
            break;
        case 4:
            day = 'Thứ năm';
            break;
        case 5:
            day = 'Thứ sáu';
            break;
        case 6:
            day = 'Thứ bảy';
            break;
        default:
            console.log(`Error: ${currentDay}`);
    }

    res.render('index', {
        title: 'Trang chủ',
        kindOfDay: day

    });
});

app.get('/products', (req, res) => {
    let id = req.params.id;
    connection.query('SELECT * FROM products', function (error, result, fields) {
        if (error) throw error;
        console.log(error);
        // res.send(console.log(result))
        res.render('products', {
            products: result
        });
    })

});

app.get('/product-detail/:id', (req, res) => {
    const productId = 1;

    // Truy vấn cơ sở dữ liệu để lấy thông tin chi tiết của sản phẩm với id tương ứng
    connection.query(`SELECT * FROM products WHERE productID=${productId}`, (error, results, fields) => {
        if (error) {
            throw error;
        }

        if (results.length > 0) {
            // Nếu sản phẩm được tìm thấy, trả về thông tin chi tiết của sản phẩm
            res.render('product-detail', {
                product: results[0] // Đây là dữ liệu chi tiết của sản phẩm đầu tiên trong kết quả truy vấn
            });
        } else {
            // Nếu không tìm thấy sản phẩm, trả về trang lỗi hoặc thông báo không tìm thấy sản phẩm
            res.status(404).send('Sản phẩm không tồn tại');
        }
    });
});




app.get('/add-product', (req, res) => {
    res.render('add-product');
});

app.post('/add-product', (req, res) => {
    const product = {
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productImg: req.body.productImage,
        productDes: req.body.productDescription
    };

    connection.query('INSERT INTO products SET ?', product, function (error, result) {
        if (error) {
            throw error;
        }
        console.log("1 product inserted");
        res.redirect("/products");
    });
});

app.get('/product-list', (req, res)=>{
    let id = req.params.id;
    connection.query('SELECT * FROM products', function (error, result, fields) {
        if (error) throw error;
        console.log(error);
        // res.send(console.log(result))
        res.render('product-list', {
            products: result
        });
    })
});

app.delete('/delete-product/:productId', (req, res) => {
    const productId = req.params.productId;
    connection.query('DELETE FROM products WHERE productId = ?', productId, function (error, result) {
        if (error) {
            console.error('Lỗi khi xóa sản phẩm:', error);
            res.status(500).send('Lỗi khi xóa sản phẩm');
        } else {
            console.log('Sản phẩm đã được xóa thành công');
            res.sendStatus(200);
        }
    });
});

app.get('/product-edit/:productId', (req, res) => {
    const productId = req.params.productId;
    
    // Truy vấn sản phẩm từ cơ sở dữ liệu dựa trên productId
    connection.query('SELECT * FROM products WHERE productId = ?', productId, (error, results) => {
        if (error) {
            console.error('Lỗi khi truy vấn sản phẩm:', error);
            res.status(500).send('Lỗi khi truy vấn sản phẩm');
        } else {
            // Nếu không tìm thấy sản phẩm, hiển thị lỗi hoặc thông báo không tìm thấy sản phẩm
            if (results.length === 0) {
                res.status(404).send('Không tìm thấy sản phẩm');
            } else {
                // Nếu tìm thấy sản phẩm, render trang chỉnh sửa sản phẩm và truyền dữ liệu của sản phẩm cần chỉnh sửa vào template
                res.render('product-edit', { product: results[0] });
            }
        }
    })
});

app.post('/product-edit/:productId', (req, res) => {
    const productId = req.params.productId;
    const { productName, productPrice, productDescription, productImage } = req.body;

    // Truy vấn để cập nhật thông tin sản phẩm vào cơ sở dữ liệu
    connection.query('UPDATE products SET productName = ?, productPrice = ?, productDes = ?, productImg = ? WHERE productId = ?', [productName, productPrice, productDescription, productImage, productId], (error, result) => {
        if (error) {
            console.error('Lỗi khi cập nhật sản phẩm:', error);
            res.status(500).send('Lỗi khi cập nhật sản phẩm');
        } else {
            console.log('Sản phẩm đã được cập nhật thành công');
            res.redirect('/product-list'); // Chuyển hướng đến trang danh sách sản phẩm sau khi cập nhật thành công
        }
    });
});



app.listen(port, () => {
    console.log(`Ứng dụng đang chạy với port: ${port}`);
});