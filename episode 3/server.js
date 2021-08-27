// npm 
// npm install -g 
// npm i --save
// npm install - install all dependencies 

const http = require('http') // rquire for making server
const fs  = require('fs') // reqire for read nd write files
const _ = require('lodash') // require for math functions

const server = http.createServer((req,res)=>{
    // loadsh
    const num = _.random(0,20)
    console.log(num)
    console.log(_.now())
    const greet = _.once(()=>{
        console.log('hello')
    })
    greet()
    
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
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end() // if error than not hanging anymore
        }else{
            res.end(data) // short of res.write and res.end
        }
    })

})
// for listening server
server.listen(3000,'localhost',()=>{
    console.log('listning for requests on port 3000')
})