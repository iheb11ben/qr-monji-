const{login,register,getBYID,updateUserController}= require('../auth/authController')
  const userRouter = require('express').Router();
  
  userRouter.route('/login').post(login)

  userRouter.route('/register').post(register);
  userRouter.route('/:id').get(getBYID).patch(updateUserController)
  module.exports = userRouter