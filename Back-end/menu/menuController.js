const { async } = require('rxjs')
const {
    creatMenuService,
    getMenusService,
    getMenuByIDService,
    updateMenuService,
    deleteMenuService,
   
}=require('./menuService')

const {StatusCodes}=require('http-status-codes')
const { ModuleResolutionKind } = require('typescript')

const createMenuController = async(req,res)=>{
    const Menu = await creatMenuService({...req.body})
    res.status(StatusCodes.CREATED).send(Menu)
}
const getMenuController=async(req,res)=>{
    const Menus = await getMenusService()
    res.status(StatusCodes.OK).send(Menus)
}

const getMenuByIdController=async(req,res)=>{
    const id=req.params.id
    const Menu = await getMenuByIDService(id)
    if(!Menu){
        return res.status(StatusCodes.BAD_REQUEST).send('id non trouvable')
    }
    res.status(StatusCodes.OK).send(Menu)
}

const updateMenuController=async(req,res)=>{
    const{
        body:{name},
        params:{id:MenuID}
    }=req
    const Meun_to_update=await updateMenuService(MenuID,req.body)
    if(!Meun_to_update){
        return res.status(StatusCodes.OK).send('id non trouvable')
    }
    res.status(StatusCodes.OK).send('Menu up to date')
}

const deleteMenuController = async(req,res)=>{
    const id=req.params.id
    const Menu_to_delete = await deleteMenuService(id)
    if(!Menu_to_delete){
        return res.status(StatusCodes.BAD_REQUEST).send('id non trouvable')
    }
    const Menus = await getMenusService()
    res.status(StatusCodes.OK).send(Menus)

    
}
const getMenubyuserController=async(req,res)=>{
    const Menus = await getMenusService()
    res.status(StatusCodes.OK).send(Menus)
}
module.exports={
    createMenuController,
    getMenuController,
    getMenuByIdController,
    updateMenuController,
    deleteMenuController,
    getMenubyuserController
}