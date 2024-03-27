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


const userRouter = require('./routers/user')
app.use('/', userRouter);

app.listen(port, () => {
    console.log(`Ứng dụng đang chạy với port: ${port}`);
});