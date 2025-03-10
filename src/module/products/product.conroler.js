import { catchAsyncFunction } from "../../utils/catchAsyncFunction.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { productServices } from "./product.services.js";


const createProductControler = catchAsyncFunction(async (req, res) => {
    const product = req.body
    const result = await productServices.createProductServices(product)
    sendResponse(res, {
        status: 200,
        success : true,
        message: "Product Create Successfull",
        result
    })
})

const getAllProductControler = catchAsyncFunction(async (req, res) => {
    const result = await productServices.getAllProductServices();
    sendResponse(res, {
        status: 200,
        success : true,
        message: "Get All Product",
        result
    })
})


export const productContoler = {
    getAllProductControler,
    createProductControler
}