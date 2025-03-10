import { userModel } from "../user/user.model.js"


const userLoginServices = async(info)=>{
    console.log(info)
    const findUser = await userModel.findOne({email: info.email});
    if(!findUser){
        return {
            success : false,
            status : 404,
            message : "user Not Found",
            result : null
        }
    }

        if(info.password === info.password){
            return {
                success : true,
                status : 200,
                message: " User Login Successful",
                result : "Your Token"
            }
        }else{
            return {
                success : false,
                status : 406,
                message: " Unauthorize user",
                result : null
            }
        }

}

export const authServices = {
    userLoginServices
}