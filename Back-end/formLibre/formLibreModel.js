const mongoose=require('mongoose');
const FormLibreSchema=new mongoose.Schema(
    {

        nomQr:{type:String},
        name:{
            type:String,
            required:true,
        },
        email:{
            type:Array,
            required:true,
        },
        telephon:{
            type:Array,
            required:true,
        },
        activite:{
            type:Array,
            required:true,
        },
        adresse:{type:Array},
        ville:{type:Array},
        user:{type:mongoose.Types.ObjectId,
            ref:'user'}
    },
    {timestamps:true}
);
module.exports=mongoose.model('formLibre',FormLibreSchema);