const bcrypt = require('bcrypt');

const User = require("../../models/user");

exports.list = async (req, res, next) => {

    var users = await User.getAll();
    console.log(users);

    res.status(200).json({
        data: users
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

    let user = {
        username: username,
        password: password
    }
    let result = await User.login(user);

    if(result){
        console.log(result);

        let hashPasswordDB = result[0].userPassword;

        let match = bcrypt.compare(password, hashPasswordDB)
        if(match){
            res.render('client/index',{
                status:1,
                data: result,
            });
            
            
            // res.redirect('/');
           
        }
    }else{
        console.log('sai');
    }
    
    // req.session.username = result;
    
};

// exports.getDashboard = (req, res) => {
//     if (!req.session.user) {
//         res.redirect('/login');
//         return;
//     }
    
//     res.render('dashboard', { user: req.session.user });
// };