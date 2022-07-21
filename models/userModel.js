const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    googleId: {
        type: String,
        required: true

    },
    profilePic: {
        type: String,
    },
    //email: {
    //    type: String,
    //     required: true,
    //     unique: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // },
    role: {
        type: Number,
        default: 0
    },
    loves: {
        type: Array,
        default: []
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema)