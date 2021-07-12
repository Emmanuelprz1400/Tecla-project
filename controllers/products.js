const fetch = require('node-fetch');

const {
    CATEGORY_ID,
    SITE_ID,
    trendsUrl,
    searchByNameUrl,
    getCategoriesUrl
} = require('../mercado-libre/apiPaths');

const getTrendsByCategory = async (req, res) => {
    const data = await fetch(trendsUrl(SITE_ID, CATEGORY_ID));
    const trends = await data.json();
    return res.json(trends)
}

const getCategories = async (req, res) => {
    const data = await fetch(getCategoriesUrl(SITE_ID));
    const categories = await data.json();
    return res.json(categories)
}

const seachByName = async (req, res) => {
    const { name } = req.params;
    const data = await fetch(searchByNameUrl(SITE_ID, name));
    const products = await data.json();
    return res.json(products)
}

module.exports = {
    getTrendsByCategory,
    getCategories,
    seachByName,
}


