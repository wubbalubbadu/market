const router = require('express').Router()
const requestCtrl = require('../controllers/requestCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/requests')
    .get(requestCtrl.getRequests)
    .post(auth, requestCtrl.createRequest)


router.route('/requests/:id')
    .delete(auth, requestCtrl.deleteRequest)
    .put(auth, requestCtrl.updateRequest)

module.exports = router