const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../models/userModel')

require('dotenv').config()
passport.serializeUser((user, done)=>{
    done(null, user.id)
})
passport.deserializeUser((id, done)=>{
    User.findById(id).then((user)=>{
        done(null,user)
    })

    done(null, user.id)
})
passport.use(
    new GoogleStrategy({
        callbackURL : 'user/google/redirect',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({googleId:profile.id}).then((currentUser)=>{
            if(currentUser){
                console.log('user is', currentUser);
                done(null, currentUser)
            } else{
                new User({
                    name: profile.displayName,
                    googleId: profile.id,
                    profilePic: profile._json.image.url
                }).save().then((newUser) => {
                    console.log('new user created' , newUser)
                    done(null,newUser)
                })
                
            }
        })
        
    })
)