const express = require('express')
const app = express();
const path = require('path')

//body parser means - its converts the form data to string (parsing the data)
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(express.static(path.join(__dirname,'public')))

app.use(adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html')) //add status code
})


app.use(bodyParser.urlencoded())









app.listen(3000,()=>{
    console.log('server is running on the port')
})