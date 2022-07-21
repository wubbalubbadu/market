const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')
const passport = require('passport')

// router.post('/register', userCtrl.register)

//router.post('/login', userCtrl.login)

//router.get('/logout', userCtrl.logout)

router.get('/logout', (req,res)=>{
    req.logout()
    res.redirect('/')
})

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

router.get('/google/redirect', passport.authenticate('google'), (req,res)=>{
    res.send(req.user)
})

//router.get('/refresh_token', userCtrl.refreshToken)

router.get('/userinfo', auth,  userCtrl.getUser)

router.patch('/addcart', auth, userCtrl.addCart)

router.get('/history', auth, userCtrl.history)

router.post('/history', auth, userCtrl.history)


module.exports = router