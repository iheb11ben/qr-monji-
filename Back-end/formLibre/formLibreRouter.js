const {
    createFormLibreController,
    getFormLibreController,
    getFormLibreByIdController,
    updateFormLibreController,
    deleteFormLibreController}=require('./formLibreController')
    const formLibreRouter=require('express').Router()

formLibreRouter.route('/').post(createFormLibreController).get(getFormLibreController)
formLibreRouter.route('/:id').get(getFormLibreByIdController).patch(updateFormLibreController).delete(deleteFormLibreController)

module.exports=formLibreRouter