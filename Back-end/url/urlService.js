const urls = require("./urlModel");
const creatUrlService = (data) => {
    return urls.create(data);
} ;

const getUrlService = () =>{
    return urls.find();
};
const getUrlByIDService = (id) =>{
    return urls.findById(id);
};
const updateUrlService = (id,data) =>{
    return urls.findByIdAndUpdate({ _id: id},data,{
        new:true,
        runValidators:true,
    });
};
const deleteUrlService = (id) =>{
    return urls.findByIdAndDelete({_id:id});
};
const getUrlbyIdUser =(id)=>{
   
    return urls.find({user:id})
 }
module.exports = {
    creatUrlService,
    getUrlService,
    getUrlByIDService,
    updateUrlService,
    deleteUrlService,
    getUrlbyIdUser
};