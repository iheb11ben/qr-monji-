const mongoose=require('mongoose');
const UrlSchema=new mongoose.Schema(
    {
        url:{
            type:String,
            required:true,
        },
        user:{type:mongoose.Types.ObjectId,
            ref:'user'}
    },
    {timestamps:true}
);
module.exports=mongoose.model('urls',UrlSchema);