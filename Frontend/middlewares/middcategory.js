//Library
const categories = require('../db/categories');

//Error controler (using get in categories)
async function takeCategories  (){
    try {
        let categories = await categories.getApiCategories();
        return categories
    } catch (error) {
        console.log('Se produjo un error en la API para Categorías');
        try {
            categories.failCategories();
        } catch (error) {
            throw new Error(error.message)
        }
    }
    
}

//Response is exported to the API
module.exports = {takeCategories}
