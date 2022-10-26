const {registerService,loginSerice,getUserBYID,updateUser,getUserByIdOrEmailService}=require('../auth/authService')
const {StatusCodes}=require('http-status-codes')


const login=async(req,res)=>{
const {email,password}=req.body

if (!email || !password) {

    res.status(StatusCodes.BAD_REQUEST).json('All data must be provided');
}
const isUserExist = await getUserByIdOrEmailService({ email: email });

if (!isUserExist) {
    res.status(StatusCodes.BAD_REQUEST).json('Invalid user');
}
const isPasswordMatch = isUserExist.comparePassword(password);
if (!isPasswordMatch) {
    res.status(StatusCodes.BAD_REQUEST).json('Invalid password');
}

res.status(StatusCodes.OK).json(isUserExist)
///////////////

}




const register =async(req,res)=>{
    const {username,email,password}=req.body
    
    if (!username || !email || !password) {
        res.status(StatusCodes.BAD_REQUEST).json('All data are required')
    }
    const Register = await registerService({ username, email, password })
    res.status(StatusCodes.CREATED).json({msg:'User created',Register})
}

const getBYID=async(req,res)=>{
    const id=req.params.id
    const user=await getUserBYID(id)
    if (!user){
        return res.status(StatusCodes.BAD_REQUEST).send('id non trouvable ')
    }
    res.status(StatusCodes.OK).send({user})
}
const updateUserController=async(req,res)=>{
    const {
     body:{username,email,password,role},
        params:{id:userID}
    }=req
   const User_to_update=await updateUser(userID,req.body)
  
if (!User_to_update){
    return res.status(StatusCodes.OK).send('id non trouvable ')
}
res.status(StatusCodes.OK).send({msg:'User up to date'})
}
module.exports={login,register,getBYID,updateUserController}