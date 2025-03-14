import { model, Schema } from "mongoose";


const UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true,
        unique : true,
    },
    password : {
        type : String,
        required : true
    },
    statue : {
        type : Boolean,
        default : true
    },
    role : {
        type : String,
        default : "customer"
    }
}, {timestamps : true});


export const userModel = model("user", UserSchema)