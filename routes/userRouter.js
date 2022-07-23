const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')
const passport = require('passport')
require('dotenv').config()
// router.post('/register', userCtrl.register)

//router.post('/login', userCtrl.login)

//router.get('/logout', userCtrl.logout)

router.get('/logout', (req,res)=>{
    req.logout()
    res.redirect('/')
})

router.post('/google_login', userCtrl.googleLogin)
router.get('/refresh_token', userCtrl.refreshToken)

router.get('/userinfo', auth,  userCtrl.getUser)

router.patch('/addcart', auth, userCtrl.addCart)

router.get('/history', auth, userCtrl.history)

router.post('/history', auth, userCtrl.history)


module.exports = router