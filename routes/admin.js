const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/add-product',(req,res,next)=>{
   res.sendFile(path.join(__dirname,'../','views','addproduct.html'))
})

router.post('/add-product',(req,res,next)=>{
    res.send('<h1>Product Submitted</h1>')
})

module.exports = router
