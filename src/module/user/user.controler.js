import { catchAsyncFunction } from "../../utils/catchAsyncFunction.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { userModel } from "./user.model.js";
import { userServices } from "./user.services.js";

export const userCrreateControl = catchAsyncFunction(async(req, res)=>{
    const info = req.body
    const findUser = await userModel.findOne({ email: info.email });
    if (findUser) {
        sendResponse(res, {
            status : 406,
            success : false,
            message : "This Email Already Exist",
            result : null
        })
    }
    if (!findUser) {
        const result = await userServices.createuserServices(info)
        sendResponse(res, {
            status : 200,
            success : true,
            message : "user Create Successfully",
            result : result
        })
    } 
    
   
})