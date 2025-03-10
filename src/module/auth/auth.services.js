import { userModel } from "../user/user.model.js"
import { tokenGen } from "./tokenGenrate.js";


const userLoginServices = async(info)=>{
    try {
        console.log(info)
        const findUser = await userModel.findOne({ email: info.email });
        if (!findUser) {
            return {
                status : 404,
                message : "Unauthorize User",
                success : false,
                result : null
            }
        }
        if (findUser) {
            if (findUser.password === info.password) {
                return {
                    status : 200,
                    message : "successfull Login",
                    success : true,
                    result : tokenGen({id: findUser._id, role : findUser.role, name : findUser.name, email: findUser.email})
                }
            } else {
                return {
                    status : 404,
                    message : "Unauthorize User",
                    success : false,
                    result : null
                }
            }
        }
    } catch (err){
        return err
    }
}

export const authServices = {
    userLoginServices
}