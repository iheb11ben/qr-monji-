const { async } = require('rxjs')
const {
    creatFormLibreService,
    getFormLibresService,
    getFormLibreByIDService,
    updateFormLibreService,
    deleteFormLibreService,
}=require('./formLibreService')

const {StatusCodes}=require('http-status-codes')
const { ModuleResolutionKind } = require('typescript')

const createFormLibreController = async(req,res)=>{
    const FormLibre = await creatFormLibreService({...req.body})
    res.status(StatusCodes.CREATED).send({
        msg: 'FormLibre Created',
    })
}
const getFormLibreController=async(req,res)=>{
    const FormLibres = await getFormLibresService()
    res.status(StatusCodes.OK).send(FormLibres)
}

const getFormLibreByIdController=async(req,res)=>{
    const id=req.params.id
    const FormLibre = await getFormLibreByIDService(id)
    if(!FormLibre){
        return res.status(StatusCodes.BAD_REQUEST).send('id non trouvable')
    }
    res.status(StatusCodes.OK).send(FormLibre)
}

const updateFormLibreController=async(req,res)=>{
    const{
        body:{name},
        params:{id:FormLibreID}
    }=req
    const Meun_to_update=await updateFormLibreService(FormLibreID,req.body)
    if(!Meun_to_update){
        return res.status(StatusCodes.OK).send('id non trouvable')
    }
    res.status(StatusCodes.OK).send('FormLibre up to date')
}

const deleteFormLibreController = async(req,res)=>{
    const id=req.params.id
    const FormLibre_to_delete = await deleteFormLibreService(id)
    if(!FormLibre_to_delete){
        return res.status(StatusCodes.BAD_REQUEST).send('id non trouvable')
    }
    res.status(StatusCodes.OK).send('DELETED')
}
module.exports={
    createFormLibreController,
    getFormLibreController,
    getFormLibreByIdController,
    updateFormLibreController,
    deleteFormLibreController
}