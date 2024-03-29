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

// const adminRouters = require('./routers/admin');
// app.use('/admin',adminRouters);
 
// // const errorController = require('./controllers/error');
// // app.use('/admin', adminRoutes);
// const apiRoutes = require('./routers/api');
// app.use('/api', apiRoutes);


app.listen(port, () => {
    console.log(`Ứng dụng đang chạy với port: ${port}`);
});