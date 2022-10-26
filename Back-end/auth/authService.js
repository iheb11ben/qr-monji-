const user = require('./user')
registerService=(data)=>{
    return user.create(data)
}
const loginSerice=(use,pass)=>{
    return user.findOne({
        email:use,password:pass
    })
 }
 const getUserBYID=(id)=>{
    return user.findById(id)
 }
 const updateUser=(id,data)=>{
    return user.findByIdAndUpdate({ _id: id }, data, {
        new: true,
        runValidators: true,
      });
 }
 const getUserByIdOrEmailService = (data) => {
    return user.findOne(data)
}

module.exports={registerService,loginSerice,getUserBYID,updateUser,getUserByIdOrEmailService}