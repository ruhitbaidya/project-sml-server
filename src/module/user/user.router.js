import express from "express";
import { userCrreateControl } from "./user.controler.js";


const router = express.Router();

router.post("/create-user", userCrreateControl);



export const userRouter = router