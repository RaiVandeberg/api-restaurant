import { ProductConstroller } from "@/controllers/products-controller";
import { Router } from "express";

const productsRouter = Router()
const productController = new ProductConstroller()

productsRouter.get("/", productController.index)

export { productsRouter}