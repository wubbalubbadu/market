const router = require('express').Router()
const requestCtrl = require('../controllers/requestCtrl')


router.route('/requests')
    .get(requestCtrl.getRequests)
    .post(requestCtrl.createRequest)


router.route('/requests/:id')
    .delete(requestCtrl.deleteRequest)
    .put(requestCtrl.updateRequest)

router.route('/requests/num')
    .get(requestCtrl.getNumRequests)

module.exports = router