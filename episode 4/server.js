// npm 
// npm install -g 
// npm i --save
// npm install - install all dependencies 

// why need nodejs express - need easier to read code and easy way
const http = require('http')
const fs  = require('fs')
const _ = require('lodash')

const server = http.createServer((req,res)=>{
    // loadsh
    const num = _.random(0,20)
    console.log(num)

    const greet = _.once(()=>{
        console.log('hello')
    })
    
    // console.log(req.url,req.method)
    // set header content type
    // res.setHeader('Content-Type','text-plain')
    res.setHeader('Content-Type','text/html')

    let path = './views/'
    switch(req.url){
        case '/' :
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about' :
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-me' :
            res.statusCode = 301
            res.setHeader('Location','/about')
            res.end()
            break
        default :
            path += '404.html'
            res.statusCode = 400
            break
    }


    // write response to browser
    // res.write('Hello coders')
    // res.write('<head><link rel="StyleSheet" href="#"></head>')
    // res.write('<h1>Hello world</h1>')
    // res.write('<p>Hello coders</p>')
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end() // if error than not hanging anymore
        }else{
            // res.write(data)
            // console.log('about')
            res.end(data) // we can send like this also if there is one write using in
        }
    })

    // res end
    // res.end()
})

server.listen(3000,'localhost',()=>{ // loopback ip and our computer as server , port number is doors in computer 
    console.log('listning for requests on port 3000')
})