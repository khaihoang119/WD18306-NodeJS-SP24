var db = require('./db');

module.exports = class Hopdong{
    constructor(){}

    static async showAll(){
        return new Promise((resolve, reject) =>{
            let sql = ` SELECT * FROM hop_dong`;
            db.query(sql, function(err,data){
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            });
        });
    }

    static async getById(Id) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM hop_dong WHERE Id=${Id}`;
            db.query(sql, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static async create(hopdong) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO hop_dong SET ?', hopdong, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static async delete(Id) {
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM hop_dong WHERE Id=${Id}`;
            db.query(sql, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static async update(hopdong, Id) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE hop_dong SET ? WHERE Id=?', [hopdong, Id], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
    
}
