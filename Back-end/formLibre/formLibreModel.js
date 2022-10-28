const mongoose=require('mongoose');
const FormLibreSchema=new mongoose.Schema(
    {

        nomQr:{type:String},
        nom:{
            type:Array,
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
        choix:{type:Array},
        adresse:{type:Array},
        ville:{type:Array},
        user:{type:mongoose.Types.ObjectId,
            ref:'user'}
    },
    {timestamps:true}
);
module.exports=mongoose.model('formLibre',FormLibreSchema);