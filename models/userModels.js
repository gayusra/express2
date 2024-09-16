const fs = require('fs')  //file reading
const path = require('path')


exports.getUser = (email) =>{
    const bufferdData = fs.readFileSync(path.join(__dirname,'..','data','user.json')) //reading the file
    const jsonData = JSON.parse(bufferdData)

    const filteredUser = jsonData.filter((user)=>{
        return user.email == email
    }) 

    if(filteredUser.length > 0){  // filter its return a data in a new array so using length
        return filteredUser[0]
    }
    return null
}

