const user = [
    {
        id:1,
        name: 'name1',
        status: 1
    },
    {
        id:2,
        name: 'name2',
        status: 1
    }
]
exports.getUser = (res, req, next) =>{
    res.status(200).json({
        // users: [{title: 'user', userName: 'admin'}]
        data: user
    })
};