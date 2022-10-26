const mongoose = require('mongoose');

const content = new mongoose.Schema ({
    nomQr:{type:String},
    nom:{type:Array},
    prenom:{type:Array},
    phone:{type:Array},
    email:{type:Array}, 
    adresse:{type:Array},
    ville:{type:Array},
    user:{type:mongoose.Types.ObjectId,
    ref:'user'},
    
})
module.exports=mongoose.model('content',content)