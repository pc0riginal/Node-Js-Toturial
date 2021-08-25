const fs = require('fs')
// reading files

// fs.readFile('./docs/blog2.txt',(err,data)=>{
//     if(err){
//         console.log(`error found! please check file name, error:  ${err}`)
//     } else{
//         console.log(data.toString())
//     }
// })
// console.log('last line')
// fs.readFile('./docs/blog1.txt',(err,data)=>{ //async method 
//     if (err){
//         console.log(err)
//     }
//     // console.log(data)
//     console.log(data.toString())
// })

// console.log('last line')

// writing files
fs.writeFile('./docs/blog4.txt','hello , good evening',()=>{
    console.log('file written')
})
// fs.writeFile('./docs/blog1.txt','hello, world',()=>{
//     console.log('file was written')
// })

// fs.writeFile('./docs/blog2.txt','hello, again',()=>{
//     console.log('file was written')
// })

// directories 
console.log(!fs.existsSync('./assests'))

if(!fs.existsSync('./assests')){
    fs.mkdir('./assests',(err)=>{
        if(err){
            console.log(err)
        } else{
            console.log('dir created!')
        }
    })
} else{
    fs.rmdir('./assests',(err)=>{
        if(err){
            console.log(err)
        } else{
            console.log('dir removed!')
        }
    })
}
// if (!fs.existsSync('./assests')){
//     fs.mkdir('./assests',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('dir created!')
//     })
// } else{
//     fs.rmdir('./assests',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder is deleted!')
//     })
// }

// deleting file

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted!')
    })
}