var db = require('./database');
module.exports = class Product{
    
    constructor(){}

    static async getAll(){
        return new Promise((resolve, reject) => {
            let sql = 'SELECT *FROM products';
            db.query(sql, function(err, data){
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            });
        });
    }

    static async getById(productId) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM products WHERE productId=${productId}`;
            db.query(sql, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static async create(products) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO products SET ?', products, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static async update(products, productId) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE products SET ? WHERE productId=?', [products, productId], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
    static async delete(productId) {
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM products WHERE productId= ${productId}`;
            db.query(sql, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

}