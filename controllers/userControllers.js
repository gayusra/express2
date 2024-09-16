const { getUser } = require("../models/userModels")

exports. loginPage = (req,res,next)=>{   //this is a function
    res.render('login')
}

exports. dashboard = (req,res,next)=>{
    console.log(req.query)
    const user = getUser(req.query.email)
    res.render('dashboard',{
        user:user
    })
}

exports.loginProcess = (req,res,next)=>{
    //get user data
     const user = getUser(req.body.email)
     //console.log(req.body)
     if(user !==null && user.password === req.body.password){
           //or res.render('dashboard')
        res.redirect('/dashboard?email='+req.body.email)
     }
     else if(user === null){
        res.render('error',{
            message:'No User exists'
        })

    }else{
        res.render('error',{
            message:'invalid email or password'
        })
    }
     
    
}


