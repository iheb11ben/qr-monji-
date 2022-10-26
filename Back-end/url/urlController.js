
const { creatUrlService,
        getUrlService,
        getUrlByIDService,
        updateUrlService,
        deleteUrlService,
        getUrlbyIdUser
    }=require('./urlService')
const {StatusCodes}=require('http-status-codes')
const createUrlController = async(req,res)=>{
    const Url = await creatUrlService({...req.body})
    res.status(StatusCodes.CREATED).send({
        msg: 'Url Created',
    })
}
const getUrlController=async(req,res)=>{
    const Url = await getUrlService()
    res.status(StatusCodes.OK).send(Url)
}

const getUrlByIdController=async(req,res)=>{
    const id=req.params.id
    const Url = await getUrlByIDService(id)
    if(!Url){
        return res.status(StatusCodes.BAD_REQUEST).send('id non trouvable')
    }
    res.status(StatusCodes.OK).send(Url)
}
const getUrlbyUserController=async(req,res)=>{  
res.send(await getUrlbyIdUser(req.params.id))
}

const updateUrlController=async(req,res)=>{
    const{
        body:{url},
        params:{id:UrlID}
    }=req
    const Url_to_update=await updateUrlService(UrlID,req.body)
    if(!Url_to_update){
        return res.status(StatusCodes.OK).send('id non trouvable')
    }
    res.status(StatusCodes.OK).send('Url up to date')
}

const deleteUrlController = async(req,res)=>{
    const id=req.params.id
    const FormLibre_to_delete = await deleteUrlService(id)
    if(!FormLibre_to_delete){
        return res.status(StatusCodes.BAD_REQUEST).send('id non trouvable')
    }
    res.status(StatusCodes.OK).send({msg:'DELETED'})
}
module.exports={
    createUrlController,
    getUrlController,
    getUrlByIdController,
    getUrlbyUserController,
    updateUrlController,
    deleteUrlController,
    getUrlbyUserController
}