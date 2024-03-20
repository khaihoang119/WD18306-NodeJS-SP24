const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
let ejs = require('ejs');


app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended: true })); // Middleware để xử lý dữ liệu được gửi từ form
app.set('view engine', 'ejs');
app.set('views', 'views/');

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
});
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

//Data inventors
const inventors = [
    { id:1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id:2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { id:3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { id:4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { id:5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { id:6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }
];

// Trang inventor
// app.get('/inventors', (req, res) => {
//     let list = '';
//     inventors.forEach(element => {
//         list += `
//                     <td><a href="/inventors/${element.id}">${element.first} ${element.last}</a></td>
//                  `; // Thêm first name và sửa cách thức hiển thị
//     });
   
    
//     res.send(list); // Di chuyển res.send ra khỏi vòng lặp
// });

app.get('/inventors', (req, res)=>{
    let list = '';
    inventors.forEach(element => {
        list += `<tr>
        <td><a class="text-decoration-none text-black" href="/inventors/${element.id}">${element.first} ${element.last}</a></td>  
        </tr>
                 `; // Thêm first name và sửa cách thức hiển thị
    });
    
    res.render('index', { 
        inventorsList: list 
    }); // Render danh sách nhà phát minh vào index.ejs
});

//Trang xử lý chi tiết
app.get('/inventors/:id', (req, res)=>{
    
    let id = req.params.id;
    let inventor = inventors.find(element=> element.id==id); 
    res.render('detail',{
        firstname: inventor.first,
        lastname: inventor.last,
        birthYear: inventor.year,
        death: inventor.passed
    })
});

// Trang xử lý chi tiết xử lý trả về dạng json
// app.get('/inventors/:id', (req, res) => {
//     console.log('/trang chi tiết');
//     let id = req.params.id;
//     let inventor = inventors.find(element => element.id == id);

//     if (inventor) {
//         // Tạo đối tượng JSON từ thông tin chi tiết nhà khoa học
//         let inventorInfo = {
//             fullName: `${inventor.first} ${inventor.last}`,
//             year: inventor.year,
//             passed: inventor.passed
//         };
//         // Trả về dữ liệu dưới dạng JSON và thiết lập trạng thái 200 (OK)
//         res.status(200).json(inventorInfo);
//     } else {
//         // Nếu không tìm thấy nhà khoa học, trả về trạng thái 404 (Not Found)
//         res.status(404).json({ error: 'Không tìm thấy nhà khoa học' });
//     }
// });

//Trang thêm thông tin nhà khoa học
app.get('/add-inventor', (req, res) =>{
    res.render("add", {});
   
});

app.post('/inventor', (req, res) => {
    let newInventor=req.body;
    newInventor.id=inventors.length+1;
    inventors.push(newInventor);
    res.redirect('/inventors');
    });

app.listen(port, () => {
    console.log(`Ứng dụng đang chạy với port: ${port}`);
});


