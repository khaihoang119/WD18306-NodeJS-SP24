var db = require('./database');

module.exports = class Category {
    constructor() {}
    // lấy ra tất cả
    static async getAll() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM categories`;
            db.query(sql, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
    // lấy ra 1 loại theo id
    static async getById(categoryId) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM categories WHERE categoryId=${categoryId}`;
            db.query(sql, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
    //thêm một loai sản phẩm
    static async create(category) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO categories SET ?', category, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
    // cập nhật
    static async update(category, categoryId) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE categories SET ? WHERE categoryId=?', [category, categoryId], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
    // xoá
    static async delete(categoryId) {
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM categories WHERE categoryId= ${categoryId}`;
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