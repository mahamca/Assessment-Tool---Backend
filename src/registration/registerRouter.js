import express, { response ,request} from 'express'
import { Register } from './registerModel.js'

const registerRouter = express.Router()

registerRouter.post('/create/',async(request,response)=>{

    // const all_user = await Register.find({})
    // const {username} = request.body

    const all_user = await Register.find({})
    const {username} = request.body
    
console.log(username);

   const user_check = all_user.find(register => register.username === username)
 
   if(user_check === undefined)
 {
    const add_new=new Register(request.body)
    await add_new.save()
    response.json("Data Saved")
 }
 else{
    console.log("User with the user name already exists!")
 }
    
})


registerRouter.get('/all/',async(request,response)=>{
    const registered_data=await Register.find({})
    response.json(registered_data)
})


registerRouter.get('/:id/',async(request,response)=>{
    const {id}=request.params
    const single_data = await Register.findById(id)
    response.json(single_data)
})

registerRouter.patch('/:id/',async(request,response)=>{
    const {id} = request.params
    await Register.findByIdAndUpdate(id,request.body)
    response.json("Data Updated")
})

registerRouter.delete('/:id/',async(request,response)=>{
    const {id} = request.params
    await Register.deleteOne({_id:id})
    response.json("Data Deleted")
})


export default registerRouter