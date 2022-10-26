const {
    createMenuController,
    getMenuController,
    getMenuByIdController,
    updateMenuController,
    getMenubyuserController,
    deleteMenuController}=require('./menuController')
    const MenuRouter=require('express').Router()

MenuRouter.route('/').post(createMenuController).get(getMenuController)
MenuRouter.route('/:id').get(getMenuByIdController).patch(updateMenuController).delete(deleteMenuController)
MenuRouter.route('/user/:id').get(getMenubyuserController)

module.exports=MenuRouter