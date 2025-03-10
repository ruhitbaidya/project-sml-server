import express from "express";
import { userRouter } from "../module/user/user.router.js";
import { authControler } from "../module/auth/auth.contoler.js";
import { authRouter } from "../module/auth/auth.router.js";
import { productRouter } from "../module/products/product.router.js";

const rootRouter = express.Router();

const route = [
    {
        path : "/",
        routes : userRouter
    },
    {
        path : "/auth",
        routes : authRouter
    },
    {
        path: "/",
        routes : productRouter
    }
];


route.forEach((item)=> rootRouter.use(`/api/v1${item.path}`, item.routes))

export const mainRouter = rootRouter