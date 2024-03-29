const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');


//khai báo sử dụng template ejs
app.set('view engine', 'ejs');
app.set('views', 'views/');
app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended: true}));

//khai báo static file
app.use(express.static('assets'));

//router
// app.get('/', (req, res)=>{
//     connection.query('SELECT * FROM products', function(error, result, fields){
//         if(error) throw error;
//         console.log(error);
//         res.render('client/index',{
//             title: 'Trang chủ',
//             product: result
//         });
//     });
// });
// const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routers/client');
app.use(shopRoutes);

const adminRouters = require('./routers/admin');
app.use('/admin',adminRouters);
//tạm thời
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'nodejs'
});
connection.connect(function(err){
    if(err) throw err;
    console.log('Database is connected');
});
// const errorController = require('./controllers/error');
// app.use('/admin', adminRoutes);
const categoryRoutes = require('./routers/admin');
app.use('/categories', categoryRoutes);

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
app.get('/edit-product/:productId', (req, res) => {
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
                res.render('admin/edit-product', { product: results[0] });
            }
        }
    })
});

app.post('/edit-product/:productId', (req, res) => {
    const productId = req.params.productId;
    const { productName, productPrice, productDes, productImage } = req.body;
    
    // Truy vấn để cập nhật thông tin sản phẩm vào cơ sở dữ liệu
    connection.query('UPDATE products SET productName = ?, productPrice = ?, productDes = ?, productImg = ? WHERE productId = ?', [productName, productPrice, productDes, productImage, productId], (error, result) => {
        if (error) {
            console.error('Lỗi khi cập nhật sản phẩm:', error);
            res.status(500).send('Lỗi khi cập nhật sản phẩm');
        } else {
            console.log('Sản phẩm đã được cập nhật thành công');
            res.redirect('/'); // Chuyển hướng đến trang danh sách sản phẩm sau khi cập nhật thành công
        }
    });
});


app.listen(port, () => {
    console.log(`Ứng dụng đang chạy với port: ${port}`);
});