const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: String,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    images:{
        type: Object,
        required: false
    },
    category:{
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    },
    seller: {
        type: String,
        required: true
      }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Products", productSchema)