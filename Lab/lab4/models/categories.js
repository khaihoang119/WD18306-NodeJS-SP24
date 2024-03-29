var connection = require('./database');
module.exports = class Categories{
    constructor(){}
    static async getCategories() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM categories';
            connection.query(sql, function (err, data) {
                if (err) {
                    reject(err);
                }else{
                    resolve(data)
                }
            });
        });
    }

    static async saveCategory(category){
        return new Promise ((resolve, reject) =>{
            connection.query('INSERT INTO categories SET ?', category, function(err, data){
                if(err){
                    reject(err);
                } else{
                    resolve(data);
                }
            });
        });
    };
}