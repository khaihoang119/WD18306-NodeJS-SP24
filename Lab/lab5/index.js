const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');


//khai báo sử dụng template ejs
app.set('view engine', 'ejs');
app.set('views', 'views/');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));

//khai báo static file
app.use(express.static('assets'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


const shopRoutes = require('./routers/client');
app.use(shopRoutes);

const adminRouters = require('./routers/admin')
app.use('/admin', adminRouters);

const apiRoutes = require('./routers/api');
app.use('/api',apiRoutes);



app.listen(port, () => {
    console.log(`Ứng dụng đang chạy với port: ${port}`);
});