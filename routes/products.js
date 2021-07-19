const Router = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares');

const {
    getProducts,
    getProduct,
    getProductsByCategory,
    postProduct,
    putProduct,
    deleteProduct
}
    = require('../controllers');

const validateFileUploaded = require('../middlewares/validate-file');
const { dbValidators } = require('../helpers');

const router = Router();

router.get('/', getProducts);

router.get('/:id', [
    check('id', 'El término de búsqueda es obligatorio').not().isEmpty().isInt(),
    validateFields
], getProduct);

router.get('/categories/:category_id', [
    check('category_id', 'El término de búsqueda es obligatorio').not().isEmpty().isInt(),
    validateFields
], getProductsByCategory);

router.post('/', [
    validateFileUploaded,
    check('description_', 'La descripción es obligatoria').not().isEmpty().isString(),
    check('price', 'El precio es obligatorio').not().isEmpty().isNumeric(),
    check('stock', 'El stock es obligatorio').not().isEmpty().isInt(),
    check('id_category', 'El id de categoria es obligatorio').not().isEmpty().isInt(),
    check('id_status', 'El id de status es obligatorio').not().isEmpty().isInt(),
    validateFields
], postProduct);

router.put('/:id', [
    check('id', 'El id es obligatorio').not().isEmpty().isInt(),
    check('id').custom(dbValidators.productExistsById),
    validateFields
], putProduct);

router.delete('/:id', [
    check('id', 'El id es obligatorio').not().isEmpty().isInt(),
    check('id').custom(dbValidators.productExistsById),
    validateFields
], deleteProduct)

module.exports = router;
