const express = require('express')
const route = express.Router() // express routers
const blogController = require('../controllers/blogController') // importing all functions



route.get('/',blogController.blog_index)

route.post('/',blogController.blog_create_post)

route.get('/create',blogController.blog_create_get)

route.get('/:id',blogController.blog_details)

route.delete('/:id',blogController.blog_delete)

module.exports = route