const express = require('express');
const app = express();
const port = 3000;
let ejs = require('ejs');
app.set('view engine', 'ejs');

app.use(express.static('assets'));

//router
app.get ('/', (req, res)=>{
    res.send('<h2>Đây là trang chủ</h2>')
});


app.get ('/', (req, res)=>{
    res.send('<h2>Đây là trang chủ</h2>')
});

app.listen(port, () =>{
    console.log(`Ứng dụng đang chạy với port: ${port}`);
});