const express = require('express')
const router = express.Router()
const path = require('path')


router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html')) // move one folder forward
})

module.exports = router