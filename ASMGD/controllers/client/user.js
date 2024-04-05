const API_URL = 'http:/localhost:3000/'

exports.list = async (req, res, next) => {
    // gọi api 
    res.render('client/user/login');
};
exports.create = async (req, res, next) => {
    // gọi api 
    res.render('client/user/register');
};
