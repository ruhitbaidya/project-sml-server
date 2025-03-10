import jwt from "jsonwebtoken";
import { config } from "../../config/congif.js";

export const tokenGen =  (data) => {
    const token = jwt.sign(data, config.token_src, {
        expiresIn : "1d"
    })
    return token
}