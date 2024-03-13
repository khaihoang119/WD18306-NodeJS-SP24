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
        id:1,
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

//dữ liệu cho sản phẩm
var listProduct = [
    { id: 1, title: 'Áo khoác kaki', price: 289000, description: "áo khoác làm từ vải kaki chất liệu thoáng mát", image: "product-2.jpg" },
    { id: 2, title: 'Giày', price: 189000, description: "áo khoác làm từ vải kaki chất liệu thoáng mát", image: "product-1.jpg" },
    { id: 3, title: 'Giày canvas', price: 200000, description: "áo khoác làm từ vải kaki chất liệu thoáng mát", image: "product-3.jpg" },
    { id: 4, title: 'Áo hoddies', price: 190000, description: "áo khoác làm từ vải kaki chất liệu thoáng mát", image: "product-4.jpg" },
    { id: 5, title: 'Áo thun ', price: 100000, description: "áo khoác làm từ vải kaki chất liệu thoáng mát", image: "product-5.jpg" },
    { id: 6, title: 'Khăn tắm', price: 90000, description: "áo khoác làm từ vải kaki chất liệu thoáng mát", image: "product-6.jpg" },
]
app.get('/products', (req, res) => {
    connection.query('SELECT * FORM products', function(error, result, fields){
        if(error) throw error;
            console.log(error);
            // res.send(console.log(result))
            res.render('products', {
                products: result
            });
    })
    // res.render('products', {
    //     products: listProduct
    // });
});
// app.get('/product:id',(req, res)=>{
//     let id = req.params.id;
//     connection.query(`SELECT * FORM products WHERE id=${id}`, function(error, result, fileds){
//         if(error) throw error;
//         console.log(error);
//         res.send(result[0]);
//         // res.render('product/detail',{
//         //     data: result[0]
//         // })
//     });
// });

app.get('/add-product', (req, res) => {
    res.render('add-product');
});


app.listen(port, () => {
    console.log(`Ứng dụng đang chạy với port: ${port}`);
});