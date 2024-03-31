const { render } = require('ejs');
const User = require('../../model/product');
const { response } = require('express');
const API_USER = 'http://localhost:3000/api/user';
exports.getUser = (req, res) => {
    fetch(API_USER)
        .then(response => response.json())
        .then(data => {
            res.render('admin/user/list', {
                pageTitle: 'User',
                path: '/admin/user/list',
                user: data.user
            })
        })
}
exports.getAddUser = (req, res) => {
    res.render('admin/user/add', {
        pageTitle: 'Thêm người dùng',
        path: '/admin/user/add',
    })
}
exports.addNewUser = (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        role: req.body.role,
        status: req.body.status,
    };
    User.addUser(user).then(() => {
        fetch(API_USER, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
    }).then(response => {
        res.redirect("/admin/user/list");
    })
}
exports.getIdUser = (req, res) => {
    const id = req.params.id;
    fetch(API_USER + '/' + id)
        .then(() => {
            User.getIdUser(id)
                .then(data => {
                    res.render('admin/user/detail', {
                        pageTitle: 'Chi tiết người dùng',
                        user: data,
                        path: "/admin/user/detail"
                    })
                })
        })

}
