const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    },
    user: {
        type: String,
        required: true
      }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Requests", productSchema)