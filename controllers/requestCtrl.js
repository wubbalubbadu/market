const Requests = require('../models/requestModel')

// Filter, sorting and paginating

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        
       const queryObj = {...this.queryString} //queryString = req.query
       console.log(queryObj)
       const excludedFields = ['page', 'sort', 'limit']
       excludedFields.forEach(el => delete(queryObj[el]))
       
       let queryStr = JSON.stringify(queryObj)
       queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
       this.query.find(JSON.parse(queryStr))
         
       return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const requestCtrl = {
    getRequests: async(req, res) =>{
        try {
            const features = new APIfeatures(Requests.find(), req.query)
            .filtering().sorting().paginating()

            const requests = await features.query

            res.json({
                status: 'success',
                result: requests.length,
                requests: requests
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createRequest: async(req, res) =>{
        try {
            req.body.user = req.user.id;
            const {title, description, category, user, low_price, high_price} = req.body;
            
            const newRequest = new Requests({
                title: title.toLowerCase(), description, category, user, low_price, high_price
            })

            await newRequest.save()
            res.json({msg: "Created a Request", data: newRequest})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteRequest: async(req, res) =>{
        try {
            await Requests.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Request"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateRequest: async(req, res) =>{
        try {
            const {title, description, category, user, low_price, high_price} = req.body;
          
            await Requests.findOneAndUpdate({_id: req.params.id}, {
                title: title.toLowerCase(), description, category, user, low_price, high_price
            })

            res.json({msg: "Updated a Request"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = requestCtrl