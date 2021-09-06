const mongoose = require('mongoose')
const Schema = mongoose.Schema

// define the structure of our document 
const blogSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{ timestamps:true })

// model name singular of collection name it surrounds with schema
const Blog = mongoose.model('Blog',blogSchema) // it automatically create checks the plural of this name in db

module.exports = Blog
