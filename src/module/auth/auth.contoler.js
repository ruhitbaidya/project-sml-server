import { catchAsyncFunction } from "../../utils/catchAsyncFunction.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { authServices } from "./auth.services.js";


const loginUser = catchAsyncFunction(async(req, res)=>{
    const userInfo= req.body;
    const result = await authServices.userLoginServices(req.body)
    sendResponse(res, {
        status : result.status,
        message : result.message,
        success : result.success,
        result : result.result
    })
})

export const authControler = {
    loginUser
}