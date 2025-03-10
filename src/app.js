import express, { urlencoded } from "express";
import cors from "cors";
import { mainRouter } from "./router/rootRouter.js";
import { globalErrorHandel } from "./error/globalErrorHandel.js";
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get("/", (req, res)=>{
    res.status(200).json({
        success : true,
        message : "This Route Ready for Run"
    })
})


app.use(mainRouter)

app.use(globalErrorHandel)


export default app;