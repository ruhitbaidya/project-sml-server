import express from "express";
import { userCrreateControl } from "./user.controler.js";
import { dataValidation } from "../../middleware/dataValidation.js";
import { registerValidation } from "./user.validation.js";


const router = express.Router();

router.post("/create-user", dataValidation(registerValidation), userCrreateControl);



export const userRouter = router