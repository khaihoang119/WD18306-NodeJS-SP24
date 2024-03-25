const categoreis = [
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
exports.list = (req, res, next) =>{
    res.status(200).json({
        data: categoreis
    })
};
// exports.create