import express from "express";
import { authControler } from './auth.contoler.js';
const router = express.Router();


router.post('/login', authControler.loginUser)

export const authRouter = router