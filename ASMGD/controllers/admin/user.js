exports.list = async (req, res, next) => {
    // gọi api 
    fetch('http:/localhost:3000/api/users/')
        .then(response => response.json())
        .then(data => {
            // res.send(data)
            // hiển thị ra giao diện
            res.render('./admin/user/list', {
                users: data.data
            })
        })
        .catch(error => console.error('Error:', error));

};