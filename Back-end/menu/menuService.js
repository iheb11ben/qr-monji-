const Menu = require("./menuModel");
const creatMenuService = (data) => {
    return Menu.create(data);
} ;

const getMenusService = () =>{
    return Menu.find();
};
const getMenuByIDService = (id) =>{
    return Menu.findById(id);
};
const updateMenuService = (id,data) =>{
    return Menu.findByIdAndUpdate({ _id: id},data,{
        new:true,
        runValidators:true,
    });
};
const deleteMenuService = (id) =>{
    return Menu.findByIdAndDelete({_id:id});
};
const getMenuByIDuser = (id) =>{
    return Menu.find({user:id});
};

module.exports = {
    creatMenuService,
    getMenusService,
    getMenuByIDService,
    updateMenuService,
    deleteMenuService,
    getMenuByIDuser,
   
};