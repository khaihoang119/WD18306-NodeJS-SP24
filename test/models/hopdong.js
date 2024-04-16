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
    
}
