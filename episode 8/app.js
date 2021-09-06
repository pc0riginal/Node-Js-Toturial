// mongodb , mongoose , schemas & models - > allow to communicate with db collections and wrap up with schema

// import package 
const express = require('express') // return function to express

// express app 
const app = express()

// middleware morgan
const morgan = require('morgan')

// mongoose for db
const mongoose = require('mongoose')

// importing model
const Blog = require('./models/blog')

const DbURI = 'mongodb+srv://vishal:vishal123@cluster0.4gnmc.mongodb.net/nodeJs?retryWrites=true&w=majority'
// const DbURI = 'mongodb+srv://nodeJs:nodeJs@cluster0.4gnmc.mongodb.net/nodeJs?retryWrites=true&w=majority'

// connecting database
mongoose.connect(DbURI)
    .then(()=>{console.log('database connected!')
        app.listen(3000)
    })
    .catch((err)=>console.log(err))


// register view engine
app.set('view engine','ejs')

// listen for request

// middleware & static files
app.use(express.static('public'))
app.use(morgan('dev'))

// mongoose and mongo sandbox routes
app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title:'coding blog 1',
        snippet:'about coding',
        body:'coding is funny'
    })
    blog.save()
        .then((result)=>res.send(result))
        .catch((err)=>console.log(err))
})

app.get('/all-blogs',(req,res)=>{
    Blog.find()
        .then((result)=>res.send(result))
        .catch((err)=>console.log(err))
})

app.get('/single-blog',(req,res)=>{
    Blog.findById('6132f56ce6b79c273710a1cd')
        .then((result)=>res.send(result))
        .catch((err)=>console.log(err))
})

// routes
app.get('/',(req,res)=>{
    // const blogs = [
    //     {title:'coding is future',snippet:'somet fdhig dfnkdjs jvakj'},
    //     {title:'code like a pro',snippet:'somet fdhig dfnkdjs jvakj'},
    //     {title:'code eat & learn',snippet:'somet fdhig dfnkdjs jvakj'}
    // ]
    // res.render('index',{title:'Coding',blogs})
    // res.send('<p>hello world</p>')
    res.redirect('/blogs')
})

app.get('/blogs',(req,res)=>{
    Blog.find().sort({ createdAt:-1 })
        .then((r)=>{
            res.render('index',{title:'All Blogs',blogs:r})
        })
        .catch((err)=>console.log(err))
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
    // res.send('<p>hello about</p>')
})

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'create'})
})

// 404 page - it is always on bottom
app.use((req,res)=>{
    res.status(404).render('404',{title:'Error-404'})
}) //middleware 
