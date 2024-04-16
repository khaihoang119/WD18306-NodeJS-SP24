const Hopdong = require('../../models/hopdong')

exports.list = async(req, res, next) =>{
    var hop_dong = await Hopdong.showAll();
    console.log(hop_dong);
    res.status(200).json({
        data: hop_dong
    })
};

exports.create = async (req, res, next) => {
    // const file = req.file
    let ten_nguoi_mua = req.body.ten_nguoi_mua;
    let  ten_nguoi_ban = req.body.ten_nguoi_ban;
    let gia_tien = req.body. gia_tien;
    let ngay_ky = req.body.ngay_ky;
    let trang_thai = req.body.trang_thai;

    let hopdong = {
        ten_nguoi_mua: ten_nguoi_mua,
        ten_nguoi_ban: ten_nguoi_ban,
        gia_tien:  gia_tien,
        ngay_ky: ngay_ky,
        trang_thai :trang_thai,
    }
    let result = await Hopdong.create(hopdong);

    console.log(result);
    // // res.send(result);

    res.status(201).json({
        result: result,
        hopdong: hopdong
    })
};