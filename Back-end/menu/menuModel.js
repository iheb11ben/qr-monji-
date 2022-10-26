const mongoose=require('mongoose');

const MenuSchema=new mongoose.Schema(
    {
        nomQr:{type:String,
            required:true},
        name:{
            type:String,
            required:true,
        },
        plat:[{
           nomPlat : String,
           prixPlat : Number,
            
        }]
      ,
        // prix:{
        //     type:Array,
        //     required: true,
        // },
        user:{type:mongoose.Types.ObjectId,
            ref:'user'}
    },
    {timestamps:true}
);
module.exports=mongoose.model('menu',MenuSchema);