// const { render } = require('ejs');
const { name } = require('ejs')
const User = require('../../model/product')

exports.getUser = (req, res, next) => {
    User.getListUser()
            .then(user => {
                res.status(200).json({
                    user: user
                })
            })
    }

exports.addUser = (req, res, next) => {
    const user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        role: req.body.role,
        status: req.body.status,
    }
    User.addUser(user)
    .then(user =>{
        res.status(201).json({
            userData: user,
        })
    })

}