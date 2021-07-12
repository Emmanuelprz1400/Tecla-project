const Router = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares');

const {
    getTrendsByCategory,
    getCategories,
    seachByName,
}
    = require('../controllers')

const router = Router();

router.get('/trends', getTrendsByCategory);

router.get('/categories', getCategories);

router.get('/search/:name', [
    check('name', 'El término de búsqueda es obligatorio').not().isEmpty(),
    validateFields
], seachByName);

module.exports = router;
