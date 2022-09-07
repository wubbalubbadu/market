const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')


router.route('/products')
    .get(productCtrl.getProducts)
    .post(productCtrl.createProduct)

router.route('/products/:id')
    .delete(productCtrl.deleteProduct)
    .put(productCtrl.updateProduct)
router.route('/products/checked/:id')
    .put(productCtrl.checkProduct)
    
module.exports = router