
const express = require('express')
const app = express()
const {engine} = require('express-handlebars')
const {loginPage,dashboard, loginProcess} = require('./controllers/userControllers')

const path = require('path')

app.engine('hbs',engine({extname:'hbs',defaultLayout:false}))
app.set('view engine','hbs') // using template engine

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:false}))

app.get('/',loginPage)
app.get('/dashboard',dashboard)
app.post('/login',loginProcess)



app.listen(8080,()=>{
    console.log('server is running on the port')
})

/*
In Express.js, MVC (Model-View-Controller) is a design pattern that separates an application into three main components:
Model: Represents the data and the logic to interact with the database.
View: Defines how the data is displayed to the user (typically rendered HTML).
Controller: Handles the user requests, processes data through models, and determines what view to render.
*/