import { ZodError } from "zod";


export const globalErrorHandel = (err, req, res, next) => {
    let errors = "";
    let message = "Internal Server Error"
    if (err instanceof ZodError) {
        errors = err.errors.map((e) => ({
            field: e.path.join("."), 
            message: e.message
        }))
        message = errors[0].message
    }
    res.status(408).json({
        message: message,
        success: false,
        errors : errors || err
    })
}