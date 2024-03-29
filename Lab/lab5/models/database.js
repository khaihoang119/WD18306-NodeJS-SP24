// // Kết nối với db mysql
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'mysql',
//     database: 'nodejs'
// });
// connection.connect(function(err){
//     if(err) throw err;
//     console.log('Database is connected');
// });
// module.exports = connection;


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodejs', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
let connectDB = async() =>{
  try{
    await sequelize.authenticate();
    console.log('Kết nối thành công.');
  }catch(error){
    console.error('Unable to connect to the database: ', error);
  }
}

module.exports = connectDB;
