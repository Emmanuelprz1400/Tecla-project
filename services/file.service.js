const {Product} = require('../models');

const {v2: cloudinary} = require('cloudinary');

const postImg = async(img) => {
    const {tempFilePath} = img;
    const {secureUrl} = await cloudinary.uploader.upload(tempFilePath, { folder: 'Ecommerce'})
    return secureUrl;
}

const putImg = async(req, res, product) => {
    if(product.img) {
        const nameArr = product.img.split('/');
        const name = nameArr[nameArr.length -1];
        const [public_id] = name.split('.');
        cloudinary.uploader.destroy('Ecommerce/'+public_id);
    }

    const {tempFilePath} = req.files.file;
    const {secureUrl} = await cloudinary.uploader.upload(tempFilePath, { folder: 'Ecommerce'})
    return secureUrl;

}

module.exports = {postImg, putImg}