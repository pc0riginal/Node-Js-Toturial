// mvc => model , view, controller
// mvc is way of structuring our code & files
// keeps code more modular, reusable & easier to read

const express = require('express') // return function to express
const morgan = require('morgan')  // middleware morgan
const mongoose = require('mongoose') // mongoose for db
const app = express() // express app
const blogRoutes = require('./routes/blogRoutes')

const DbURI = 'mongodb+srv://nodeJs:nodeJs@cluster0.4gnmc.mongodb.net/nodeJs?retryWrites=true&w=majority'

// connecting database
mongoose.connect(DbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>{
        console.log('connected to db!')
        app.listen(3000)
    })
    .catch((err)=>{
        console.log(err)
    })

// register view engine
app.set('view engine','ejs')

// middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({extended:true})) // middleware to handle form data req.body

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.redirect('/blogs')
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})

// blog routes
app.use('/blogs',blogRoutes)

// 404 page - it is always on bottom
app.use((req,res)=>{
    res.status(404).render('404',{title:'Error-404'})
}) //middleware 
