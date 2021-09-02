// middleware code which runs (on server) b/w getting a req and sending a res top to bottom run
// use of middleware
// logger middleware to log details of every req
// authentication check middleware for protected routes
// to parse json data from req
// return 404 pages

// import package 
const express = require('express') // return function to express

// express app 
const app = express()

// middleware morgan
const morgan = require('morgan')

// register view engine
app.set('view engine','ejs')

// app.set('views','myviews')
// listen for request
app.listen(3000)

app.use((req,res,next)=>{
    console.log('hostname',req.hostname)
    console.log('ip',req.ip)
    console.log('method',req.method)
    console.log('path',req.path)
    next()
})

// middleware & static files
app.use(express.static('public'))
// app.use(express.static('public'))

// app.use(morgan('dev'))

// app.use(morgan('dev'))

app.get('/',(req,res)=>{
    const blogs = [
        {title:'coding is future',snippet:'somet fdhig dfnkdjs jvakj'},
        {title:'code like a pro',snippet:'somet fdhig dfnkdjs jvakj'},
        {title:'code eat & learn',snippet:'somet fdhig dfnkdjs jvakj'}
    ]
    res.render('index',{title:'Coding',blogs})
    // res.send('<p>hello world</p>')
})

// app.use((req,res,next)=>{
//     console.log('another middleware!')
//     next()
// })

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
    // res.send('<p>hello about</p>')
})

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create'})
})

// redirects 
app.get('/about-us',(req,res)=>{
    res.render('redirect')
    
})

// 404 page - it is always on bottom
app.use((req,res)=>{
    res.status(404).render('404',{title:'Error-404'})
}) //middleware 
