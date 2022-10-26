const FormLibre = require("./formLibreModel");
const creatFormLibreService = (data) => {
    return FormLibre.create(data);
} ;

const getFormLibresService = () =>{
    return FormLibre.find();
};
const getFormLibreByIDService = (id) =>{
    return FormLibre.findById(id);
};
const updateFormLibreService = (id,data) =>{
    return FormLibre.findByIdAndUpdate({ _id: id},data,{
        new:true,
        runValidators:true,
    });
};
const deleteFormLibreService = (id) =>{
    return FormLibre.findByIdAndDelete({_id:id});
};

module.exports = {
    creatFormLibreService,
    getFormLibresService,
    getFormLibreByIDService,
    updateFormLibreService,
    deleteFormLibreService,
};