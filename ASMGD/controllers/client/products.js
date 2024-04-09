exports.list = async(req, res, next) => {
    fetch('http://localhost:3000/api/products/')
        .then(response => response.json())
        .then(data => {
            res.render('./client/products', {
                products: data.data,   
            })
        })
        .catch(error => console.error('Error:', error));
};