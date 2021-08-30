// import package 
const express = require('express') // return function to express

const app = express()
// express app 
// const app = express()
app.listen(3000)
// listen for request
// app.listen(3000)
// relative path = './views/index.html'
// absolute path = 'D:/nodejs/episode 4/views/index.html'


app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname})
})

app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root:__dirname})
})

app.get('/about-us',(req,res)=>{
    globalThis.setTimeout(()=>{
        // res.setHeader('Content-Type','text/html')
        // res.write('you will be redirect in 3 seconds...')
        // res.setHeader('Location','/about')
        res.redirect('/about')
    },3000)
})

app.use((req,res)=>{
    res.sendFile('./views/404.html',{root:__dirname})
})


// app.get('/',(req,res)=>{
//     res.sendFile('./views/index.html',{root:__dirname}) 
//     // res.send('<p>hello world</p>')
// })

// app.get('/about',(req,res)=>{
//     res.sendFile('./views/about.html',{root:__dirname})
//     // res.send('<p>hello about</p>')
// })


// // redirects 
// app.get('/about-us',(req,res)=>{
//         globalThis.setTimeout(() => {
//             console.log('redirecting in 3 seconds...')
//             res.redirect('/about')
//         }, 3000);
// })

// // 404 page - it is always on bottom
// app.use((req,res)=>{
//     res.status(404).sendFile('./views/404.html',{root:__dirname})
// }) //middleware 
