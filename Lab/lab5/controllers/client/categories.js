exports.list = async(req,res, next)=>{
    fetch('http://localhost:3000/api/categories/')
    .then(response => response.json())
    .then(data =>{
        res.render('category/list',{
           categories: data.data 
        })
    }
    )
    .catch(error => console.error('Error', error));
};