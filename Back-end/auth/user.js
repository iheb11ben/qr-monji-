const mongoose=require('mongoose');
const bcrypt = require('bcryptjs')
const schemaUser=new mongoose.Schema(
    {
        username: {
            type:String,
            required:true, 
           
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,min:8,max:16
        },
        role:{
            type:String,
            default: 'user'
        },
    },
    {timestamps:true}
);
schemaUser.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  
schemaUser.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  };

module.exports=mongoose.model('user',schemaUser);