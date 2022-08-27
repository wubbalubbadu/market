const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')
// const passport = require('passport')
require('dotenv').config()
// router.post('/register', userCtrl.register)

//router.post('/login', userCtrl.login)

//router.get('/logout', userCtrl.logout)

router.get('/logout', (req,res)=>{
    req.logout()
    res.redirect('/')
})

router.post('/google_login', userCtrl.googleLogin)
//router.get('/refresh_token', userCtrl.refreshToken)

router.get('/userinfo', userCtrl.getUser)

router.put('/addToLoves', userCtrl.addToLoves)


module.exports = router