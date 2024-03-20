const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');

//Kết nối db mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: ' localhost',
    user: 'root',
    password: 'mysql',
    database: 'nodejs'
});

//khai báo sử dụng template ejs
app.set('view engine', 'ejs');
app.set('view', 'view/');
app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended: true}));

//khai báo static file
app.use(express.static('assets'));

//router
app.get('/', (req, res)=>{
    connection.query('SELECT * FROM products', function(error, result, fields){
        if(error) throw error;
        console.log(error);
        res.render('client/index',{
            title: 'Trang chủ',
            product: result
        });
    });
});
