const Products = require('../models/productModel')

// Filter, sorting and paginating

class APIfeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    filtering() {

        const queryObj = { ...this.queryString } //queryString = req.query
        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(el => delete (queryObj[el]))

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

        //    gte = greater than or equal
        //    lte = lesser than or equal
        //    lt = lesser than
        //    gt = greater than
        this.query.find(JSON.parse(queryStr))

        return this;
    }

    sorting() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        } else {
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating() {
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const productCtrl = {
    getProducts: async (req, res) => {
        console.log(req.query)
        const { category, title, offset } = req.query;
        let query = {}
        let options = { limit: 10 }
        if (category) {
            query.category = category
        }
        if (title) {
            query.title = new RegExp(title, 'i')
        }
        if (offset) {
            options.skip = Number(offset)
        }
        
        try {
            const products = await Products.find(query).setOptions(options);
            const totalCount = await Products.estimatedDocumentCount(query).setOptions(options);
            res.json({
                products,
                totalCount,
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: err.message })
        }

    },
    getProducts_: async (req, res) => {
        console.log(req)
        try {
            const features = new APIfeatures(Products.find(), req.query)
                .filtering().sorting().paginating()

            const products = await features.query


            res.json({
                status: 'success',
                result: products.length,
                products: products
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    createProduct: async (req, res) => {
        try {
            const { title, price, description, images, category, condition, googleId } = req.body;
            const newProduct = new Products({
                title: title.toLowerCase(), price, description, images, category, condition, googleId
            })

            await newProduct.save()
            res.json({ msg: "Created a product", data: newProduct })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteProduct: async (req, res) => {
        try {
            await Products.findByIdAndDelete(req.params.id)
            res.json({ msg: "Deleted a Product" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateProduct: async (req, res) => {
        try {
            const { title, price, description, images, category, condition, googleId } = req.body;

            await Products.findOneAndUpdate({ _id: req.params.id }, {
                title: title.toLowerCase(), price, description, images, category, condition, googleId
            })

            res.json({ msg: "Updated a Product" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}


module.exports = productCtrl