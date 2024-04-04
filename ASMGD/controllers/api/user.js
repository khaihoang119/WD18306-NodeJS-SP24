const bcrypt = require('bcrypt');

const User = require("../../models/user");

exports.list = async (req, res, next) => {

    var user = await User.login();
    console.log(user);

    res.status(200).json({
        data: user
    })
};

exports.create = async(req, res, next) =>{
    let username = req.body.username;
    let password = req.body.password;
    let fullname = req.body.fullname;
    let email = req.body.email;
    let role = req.body.role;

    let hashPassword = await bcrypt.hash(password, 10);

    let user = {
        userName : username,
        userPassword : hashPassword,
        userFullName : fullname,
        userRole : role,
        userEmail : email,
    }

    let result = await User.create(user);
        console.log(user);
        console.log(result);

        res.status(201).json({
            result: result,
            data: user
        })
        console.log(user);
};

exports.login = async (req, res, next) =>{
    let username = req.body.username;
    let password = req.body.password;

    let result = await User.login(username);

    if(result){
        console.log(result);

        let hashPasswordDB = result[0].userPassword;

        let match = bcrypt.compare(password, hashPasswordDB)
        if(match){
            res.status(201).json({
                status:1,
                data: result,
            })
        }
    }else{
        console.log('sai');
    }
};