import { catchAsyncFunction } from "../../utils/catchAsyncFunction.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { userServices } from "./user.services.js";

export const userCrreateControl = catchAsyncFunction(async(req, res)=>{
    console.log(req.body)
    const result = await userServices.createuserServices(req.body)
    sendResponse(res, {
        status : 200,
        success : true,
        message : "user Create Successfully",
        result : result
    })
})