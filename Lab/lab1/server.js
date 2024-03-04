const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // Middleware để xử lý dữ liệu được gửi từ form


//router
app.get('/', (req, res, next) => {
    console.log('/trang home');
    res.send('<p>Đây là trang home</p>');
});

app.get('/product', (req, res, next) => {
    console.log('/trang sản phẩm');
    res.send(`<p>Đây là trang sản phẩm</p> <p>ID:${req.body.productId} Name:${req.body.productName}</p>`);  
});

app.get('/add-product', (req, res, next) => {
    console.log('/Trang thêm sản phẩm');
    res.send(`<form action="/product" method="POST"><input type="text"
    name = "productId" ><input type="text"
name = "productName" > <button type="submit">Add Product</button></form > `);
})
// Route để xử lý dữ liệu được gửi từ form thêm sản phẩm
app.post('/product', (req, res, next) => {
    const productName = req.body.productName;
    const productId = req.body.productId;
    // Xử lý dữ liệu, ví dụ: lưu vào cơ sở dữ liệu
    console.log('Product name:', productName);
    console.log('Product id:', productId);
    res.redirect('/product'); // Chuyển hướng sau khi xử lý thành công
});
app.get('/product/:id', (req, res, next) => {
    console.log('/trang chi tiết sản phẩm');

    res.send(`<p>Đây là trang sản phẩm chi tiết: ${req.params.id}</p>`);
})

app.listen(port, () => {
    console.log(`Ứng dụng đang chạy với port: ${port}`);
});