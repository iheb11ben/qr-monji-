const mongoose =require('mongoose')
const cnx= (url)=>{
    return mongoose.connect(url)
    .then (()=> console.log("DB => connected"))
    .catch((error)=>console.log(error))
}
module.exports =cnx