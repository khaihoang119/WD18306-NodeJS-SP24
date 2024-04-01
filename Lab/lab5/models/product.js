var connection = require('./database');

module.exports = class Product{
    constructor(){}

    //hiển thị sản phẩm
    static getAll() {
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
}