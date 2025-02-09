import { Router } from "express";

import { productsRouter } from "./produts-routes";

const routes = Router()
routes.use("/products", productsRouter)

export { routes }