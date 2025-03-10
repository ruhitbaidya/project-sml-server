import express from "express";
import { productContoler } from "./product.conroler.js";

const router = express.Router();



router.get("/get-product", productContoler.getAllProductControler);
router.post("/product-create", productContoler.createProductControler)


export const productRouter = router