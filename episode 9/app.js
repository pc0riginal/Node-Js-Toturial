// get,post,delete,put requests
// route parameters = > localhost:3000/blogs/:id /1234 /50 /hello -> may change as variable

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
const { restart } = require('nodemon')
const { render } = require('ejs')

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

// routes
app.get('/',(req,res)=>{
    res.redirect('/blogs')
})

app.post('/blogs',(req,res)=>{
    // console.log(req.body)
    const blog = new Blog(req.body)
    blog.save()
        .then((result)=>res.redirect('/blogs'))
        .catch((err)=>console.log(err))
})

app.get('/blogs',(req,res)=>{
    Blog.find()
        .then((result)=>
            res.render('index',{title:'All Blogs',blogs:result})
        )
        .catch((err)=>console.log(err))
})

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'create'})
})

app.get('/blogs/:id',(req,res)=>{
    Blog.findById(req.params.id)
        .then((result)=>
            res.render('details',{title:'single blog',blog:result})
        )
        .catch((err)=>console.log(err))
})

app.delete('/blogs/:id',(req,res)=>{
    Blog.findByIdAndDelete(req.params.id)
        .then()
        .catch((err)=>console.log(err))
})
// app.get('/blogs',(req,res)=>{
//     Blog.find().sort({ createdAt:-1 })
//         .then((r)=>{
//             res.render('index',{title:'All Blogs',blogs:r})
//         })
//         .catch((err)=>console.log(err))
// })

// app.post('/blogs',(req,res)=>{
//     console.log(req.body)
//     const blog = new Blog(req.body)

//     blog.save()
//         .then((r)=>res.redirect('/blogs'))
//         .catch((err)=>console.log(err))
// })



// app.get('/blogs/:id',(req,res)=>{
//     Blog.findById(req.params.id)
//         .then((r)=>{
//             res.render('details',{blog:r,title:'blog details'})
//         })
//         .catch((err)=>console.log(err))
// })

// app.delete('/blogs/:id',(req,res)=>{
//     const id = req.params.id
//     Blog.findByIdAndDelete(id)
//         .then(result => { 
//             res.json({ redirect:'/blogs' }) 
//         })
//         .catch(err => console.log(err))
// })

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})



// 404 page - it is always on bottom
app.use((req,res)=>{
    res.status(404).render('404',{title:'Error-404'})
}) //middleware 
