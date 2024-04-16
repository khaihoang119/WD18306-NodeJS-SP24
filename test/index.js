const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');

//khai báo sử dụng template ejs
app.set('view engine', 'ejs');
app.set('views', 'views/');
app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended: true}));

// chỉ định thư mục gốc 
app.use(express.static('assets'))
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


const hopdongRouter = require('./routers/hopdong')
app.use(hopdongRouter);

const apiRouters = require ('./routers/api')
app.use('/api', apiRouters)

app.listen(port, () => {
    console.log(`Ứng dụng đang chạy với port: ${port}`);
});