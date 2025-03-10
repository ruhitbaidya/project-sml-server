import { productModel } from "./product.modal.js"

const createProductServices = async (data) => {
    const result = await productModel.create(data);
    return result
}


const getAllProductServices = async () => {
    const result = await productModel.find();
    return result
}


export const productServices = {
    getAllProductServices,
    createProductServices
}