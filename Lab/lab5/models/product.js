var connection = require('./database');
var products = [];

module.exports = class Product {
    constructor() {

    }
    static saveProduct() {

    }
    //trả về tất cả sản phẩm
    static async fetchAll() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM products';
            connection.query(sql, function (err, data) {
                if (err) {
                    reject(err);
                }else{
                    resolve(data)
                }
            });
        });
    }

    //add product to db
    static async saveProduct(product){
        return new Promise((resolve, reject) =>{
            connection.query('INSERT INTO products SET ?',product, function(err, data){
                if(err){
                    reject(err);
                } else{
                    resolve(data);
                }
                // res.redirect("/product");
            });
        });
    }
}