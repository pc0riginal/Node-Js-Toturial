// import package 
const express = require('express') // return function to express

// express app 
const app = express()

// register view engine
app.set('view engine','ejs')

// app.set('views','myviews')
// listen for request
app.listen(3000)

app.get('/',(req,res)=>{
    const blogs = [
        {title:'coding is future',snippet:'somet fdhig dfnkdjs jvakj'},
        {title:'code like a pro',snippet:'somet fdhig dfnkdjs jvakj'},
        {title:'code eat & learn',snippet:'somet fdhig dfnkdjs jvakj'}
    ]
    res.render('index',{title:'Coding',blogs})
    // res.send('<p>hello world</p>')
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
    // res.send('<p>hello about</p>')
})

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create'})
})

// redirects 
// app.get('/about-us',(req,res)=>{
//         globalThis.setTimeout(() => {
//             console.log('redirecting in 3 seconds...')
//             res.redirect('/about')
//         }, 3000);
// })

// 404 page - it is always on bottom
app.use((req,res)=>{
    res.status(404).render('404',{title:'Error-404'})
}) //middleware 
