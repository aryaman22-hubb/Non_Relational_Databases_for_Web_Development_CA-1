const express = require('express')
const mongoose = require('mongoose')
const restaurant = require('./restaurantSchema')
const menu = require('./menuSchema')
const app = express()
const PORT = 3000

app.get("/",(req,res)=>{
    res.send("Database CA-1");
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})



