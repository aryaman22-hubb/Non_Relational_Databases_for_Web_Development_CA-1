const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})

const testing = mongoose.model('testing',restaurantSchema)
module.exports = testing