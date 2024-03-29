var sequelize = require('./database');

module.exports = class Product{
    constructor(){};
    
    static async getProducts(){
        const Product = sequelize.define("products", {
            productName: DataTypes.TEXT,
            productPrice: DataTypes.INTEGER,
            productDes: DataTypes.TEXT
          });
          
          (async () => {
            await sequelize.sync({ force: true });
            // Code here
          })();
    }
}