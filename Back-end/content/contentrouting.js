const ContentRoute = require('express').Router()
const {createQrController,getQrController,getAllQrController,getbyIdUserController,updateContentController,deleteContentController}= require('./contentController');
// const multer = require('../middleware/multer')
ContentRoute.route('').post(createQrController)
ContentRoute.route('/affiche/:id').get(getQrController).delete(deleteContentController)
ContentRoute.route('/affiche').get(getAllQrController)
ContentRoute.route('/afficheUser/:id').get(getbyIdUserController)
ContentRoute.route('/update/:id').patch(updateContentController)
module.exports=ContentRoute