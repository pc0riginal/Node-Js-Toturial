// get request
// post request
// communicate client and server using http protocol
// status codes
// 100 range - info responses
// 200 -ok - success codes 
// 301 - resource moved - codes for redirect
// 404 - not found - user or client error codes
// 500 - internal server error - server error codes
// const http = require('http')
// const fs  = require('fs')
const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    console.log('request made!')
    // console.log(req)
    // res.setHeader('Content-Type','text-plain')
    res.setHeader('Content-Type','text/html')
    let path = './views/'
    // console.log(req.url,req.method)
    switch(req.url){
        case '/' :
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-us':
            path += 'about.html'
            res.statusCode = 301
            res.setHeader('Location','/about')
            break
        default :
            path += '404.html'
            res.statusCode = 404
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
        } else{
            res.write(data)
            res.end()
        }
    })
    // res.end()
})

server.listen(5000,'127.0.0.1',()=>{
    console.log('server listen on 5000 port')
})

// const server = http.createServer((req,res)=>{
//     // console.log('request made!')
//     // console.log(req)
//     console.log(req.url,req.method)
//     // set header content type
//     // res.setHeader('Content-Type','text-plain')
//     res.setHeader('Content-Type','text/html')

//     let path = './views/'
//     switch(req.url){
//         case '/' :
//             path += 'index.html'
//             res.statusCode = 200
//             break
//         case '/about' :
//             path += 'about.html'
//             res.statusCode = 200
//             break
//         case '/about-us' :
//             res.statusCode = 301
//             res.setHeader('Location','/about')
//             res.end()
//             break
//         default :
//             path += '404.html'
//             res.statusCode = 400
//             break
//     }


//     // write response to browser
//     // res.write('Hello coders')
//     // res.write('<head><link rel="StyleSheet" href="#"></head>')
//     // res.write('<h1>Hello world</h1>')
//     // res.write('<p>Hello coders</p>')
//     fs.readFile(path,(err,data)=>{
//         if(err){
//             console.log(err)
//             res.end() // if error than not hanging anymore
//         }else{
//             // res.write(data)
//             // console.log('about')
//             res.end(data) // we can send like this also if there is one write using in
//         }
//     })

//     // res end
//     // res.end()
// })

// server.listen(3000,'localhost',()=>{ // loopback ip and our computer as server , port number is doors in computer 
//     console.log('listning for requests on port 3000')
// })