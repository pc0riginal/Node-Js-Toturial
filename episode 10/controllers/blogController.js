const Blog = require('../models/blog') // importing model

// blog_index 


// app.get('/blogs',(req,res)=>{
//     Blog.find().sort({ createdAt:-1 })
//         .then((r)=>{
//             res.render('index',{title:'All Blogs',blogs:r})
//         })
//         .catch((err)=>console.log(err))
// })
const blog_index = (req,res)=>{
    Blog.find().sort({ createdAt:-1 })
        .then((r)=>{
            res.render('index',{title:'All Blogs',blogs:r})
        })
        .catch((err)=>console.log(err))
}
// app.get('/blogs',blog_index)


// app.get('/blogs/:id',(req,res)=>{
//     Blog.findById(req.params.id)
//         .then((result)=>
//             res.render('details',{title:'single blog',blog:result})
//         )
//         .catch((err)=>console.log(err))
// })

const blog_details = (req,res)=>{
    Blog.findById(req.params.id)
        .then((r)=>{
            res.render('details',{blog:r,title:'blog details'})
        })
        .catch((err)=>console.log(err))
}

// app.get('/blogs/:id',blog_details)


// app.get('/blogs/create',(req,res)=>{
//     res.render('create',{title:'create'})
// })

const blog_create_get = (req,res)=>{
    res.render('create',{title:'create'})
}

// app.get('/blogs/create',blog_create_get)

// app.post('/blogs',(req,res)=>{
//     // console.log(req.body)
//     const blog = new Blog(req.body)
//     blog.save()
//         .then((result)=>res.redirect('/blogs'))
//         .catch((err)=>console.log(err))
// })

const blog_create_post = (req,res)=>{
    console.log(req.body)
    const blog = new Blog(req.body)

    blog.save()
        .then((r)=>res.redirect('/blogs'))
        .catch((err)=>console.log(err))
}

// app.post('/blogs',blog_create_post)

// app.delete('/blogs/:id',(req,res)=>{
//     Blog.findByIdAndDelete(req.params.id)
//         .then((r)=>{
//             res.json({redirect:'/blogs'})
//         })
//         .catch((err)=>console.log(err))
// })

const blog_delete = (req,res)=>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then(result => { 
            res.json({ redirect:'/blogs' }) 
        })
        .catch(err => console.log(err))
}

// app.delete('/blogs/:id',blog_delete)

module.exports = {blog_index,blog_details,blog_create_get,blog_create_post,blog_delete}