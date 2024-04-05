var db = require('./database');

module.exports = class User{
    constructor(){}
    
    static async getAll() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM user`;
            db.query(sql, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static async login(username){
        return new Promise((resolve, reject) =>{
            let sql =  `SELECT * FROM user WHERE userName='${username}'`;
            db.query(sql, (err, data)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            });
        });
    }
}