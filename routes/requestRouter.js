const router = require('express').Router()
const requestCtrl = require('../controllers/requestCtrl')


router.route('/requests')
    .get(requestCtrl.getRequests)
    .post(requestCtrl.createRequest)


router.route('/requests/:id')
    .delete(requestCtrl.deleteRequest)
    .put(requestCtrl.updateRequest)

router.route('/requests/checked/:id')
    .put(requestCtrl.checkRequest)
module.exports = router