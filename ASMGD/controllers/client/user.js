const API_URL = 'http:/localhost:3000/'

exports.list = async (req, res, next) => {
    // gọi api 
    res.render('client/user/login');
};

exports.create = async (req, res, next) => {
    // gọi api 
    res.render('client/user/register');
};
exports.store = async (req, res, next) => {
    // gọi api 
    let username = req.body.username;
    let password = req.body.password;
    let fullname = req.body.fullname;
    let email = req.body.email;
    let role = req.body.role;
   
    let user = {
        username : username,
        password : password,
        fullname : fullname,
        email : email,
        role : role,
    }
    fetch( API_URL+ 'api/users/', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(user), // body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .then(data => {
            // res.send(data)
            if (data.result.affectedRows) {
                res.redirect('/admin')

            } else {
                res.send('Lỗi không thể thêm')
            }
            
        })
        .catch(error => console.error('Error:', error));

};

