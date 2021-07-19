const {
    Category,
    Pay_Method,
    Product,
    Purchase,
    Status,
    User
} = require('../models');


const productExistsById = async(id = '') => {
    const productExists = await Product.findByPk(id);
    if(!productExists){
        throw new Error(`El producto con el id: ${id} no existe`);
    }
    return true;
}

module.exports = {
    productExistsById
}