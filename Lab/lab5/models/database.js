// Kết nối với db mysql
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
module.exports = connection;

