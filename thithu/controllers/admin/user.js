
exports.list = async(req,res, next)=>{
    fetch('http://localhost:3000/api/user')
    .then(response => response.json())
    .then(data =>{
        res.render('user',{
           user: data.data 
        })
    })
    .catch(error => console.error('Error', error));
};