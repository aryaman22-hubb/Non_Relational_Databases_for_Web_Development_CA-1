const mongoose=require('mongoose')

const menuSchema= new mongoose.Schema({
    dish :{
        name:{
            type:String,
            required:true
        },
        cost:{
            type:Number,
            required:true
        }
    }
})

const test = mongoose.model("test",menuSchema)
module.exports = test