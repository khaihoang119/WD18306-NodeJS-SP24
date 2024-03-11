const express = require('express');
const app = express();
const port = 3000;
let ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views', 'views/');
app.use(express.urlencoded({ extended: true })); // Middleware để xử lý dữ liệu được gửi từ form

// Khai báo static file
app.use(express.static('assets' ));

//router
app.get ('/', (req, res)=>{
   
    res.render('index',{
        
    });
});




app.listen(port, () =>{
    console.log(`Ứng dụng đang chạy với port: ${port}`);
});