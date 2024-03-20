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

app.post('/add-product', upload.single('productImage'), (req, res) => {
    //lấy dữ liệu từ form sau khi upload ảnh
    const file = req.file
    let title = req.body.title;
    let price = req.body.price;
    let description = req.body.description;
    let nameImage = file.filename;
    //Thêm vào mảng json 1 cuối sách mới
    listProduct.push({
        id: 1,
        title: title,
        price: price,
        description: description,
        image: nameImage,
    })
    //chuyển về trang sản phẩm
    res.redirect('/products');
});
//khai bao sử dụng template ejs
app.set('view engine', 'ejs');
app.set('views', 'views/');

app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended: true })); // Middleware để xử lý dữ liệu được gửi từ form

// Khai báo static file
app.use(express.static('assets'));

//router
app.get('/', (req, res) => {
    let id = req.params.id;
    connection.query('SELECT * FROM products', function (error, result, fields) {
        if (error) throw error;
        console.log(error);
        // res.send(console.log(result))
        res.render('client/index', {
            title: 'Trang chủ',
            products: result
        });
    })

    // res.render('index', {
    //     title: 'Trang chủ',
        

    // });
});


app.get('/products', (req, res) => {
    let id = req.params.id;
    connection.query('SELECT * FROM products', function (error, result, fields) {
        if (error) throw error;
        console.log(error);
        // res.send(console.log(result))
        res.render('client/products', {
            products: result
        });
    })
    
    // res.render('products', {
    //     products: listProduct
    // });
});
// app.get('/product-detail', (req, res) => {
//     let id = req.params.id;
//     connection.query('SELECT * FROM products', function (error, result, fields) {
//         if (error) throw error;
//         console.log(error);
//         // res.send(console.log(result))
//         res.render('product-detail', {
//             products: result
//         });
//     })
    
//     // res.render('products', {
//     //     products: listProduct
//     // });
// });
app.get('/product-detail/:id', (req, res) => {
    const productId = 1;

    // Truy vấn cơ sở dữ liệu để lấy thông tin chi tiết của sản phẩm với id tương ứng
    connection.query(`SELECT * FROM products WHERE productID=${productId}`, (error, results, fields) => {
        if (error) {
            throw error;
        }
        
        if (results.length > 0) {
            // Nếu sản phẩm được tìm thấy, trả về thông tin chi tiết của sản phẩm
            res.render('client/product-detail', {
                product: results[0] // Đây là dữ liệu chi tiết của sản phẩm đầu tiên trong kết quả truy vấn
            });
        } else {
            // Nếu không tìm thấy sản phẩm, trả về trang lỗi hoặc thông báo không tìm thấy sản phẩm
            res.status(404).send('Sản phẩm không tồn tại');
        }
    });
});
app.get('/add-product', (req, res) => {
    res.render('client/add-product');
});


app.get('/admin', (req, res)=>{
    res.render('admin/index');
});

app.get('/admin-add-product',(req, res)=>{
    res.render('admin/admin-add-product')
});

app.get('/admin-add-category',(req, res) =>{
    res.render('admin/admin-add-category')
});
app.get('/admin-list-product', (req, res)=>{
    res.render('admin/admin-list-product')
});
app.get('/admin-list-category', (req, res)=>{
    res.render('admin/admin-list-category')
});
app.get('/admin-list-account', (req, res)=>{
    res.render('admin/admin-list-account')
});
app.listen(port, () => {
    console.log(`Ứng dụng đang chạy với port: ${port}`);
});