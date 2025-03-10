export const sendResponse = (res, data)=>{
    return res.status(data.status).json({
        success : data.success,
        message : data.message,
        data : data.result || null
    })
}