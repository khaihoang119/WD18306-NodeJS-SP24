
// controllers/client/categories.js

const API_URL = 'http:/localhost:3000/'

exports.list = async (req, res, next) => {
    // gọi api 
    fetch( API_URL+ 'api/categories/')
        .then(response => response.json())
        .then(data => {
            // res.send(data)
            // hiển thị ra giao diện
            res.render('client/category/list', {
                categories: data.data
            })
        })
        .catch(error => console.error('Error:', error));
};
