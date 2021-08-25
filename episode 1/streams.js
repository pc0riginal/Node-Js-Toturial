const fs =  require('fs')

const readStream = fs.createReadStream('./docs/blog2.txt',{encoding:'utf-8'})
const writeStream = fs.createWriteStream('./docs/blog5.txt')

// const readStream = fs.createReadStream('./docs/blog2.txt',{encoding:'utf8'})
// const writeStream = fs.createWriteStream('./docs/blog3.txt')

readStream.on('data',(chunk)=>{
    // console.log('---new chunck---\n')
    // console.log(chunk)
    writeStream.write(chunk)
    writeStream.write('\n---new chunk---\n')
})

// readStream.on('data',(chunk)=>{
//     console.log('---new chunk---')
//     console.log(chunk)
//     // console.log(chunk.toString())
//     writeStream.write('\nNew Chuck\n')
//     writeStream.write(chunk)
// })

// readStream.pipe(writeStream)