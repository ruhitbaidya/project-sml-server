import { userModel } from "./user.model.js"


const createuserServices = async(user)=>{
    const result = await userModel.create(user);
    return result
}


export const userServices = {
    createuserServices
}