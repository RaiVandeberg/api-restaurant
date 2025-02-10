import { Router } from "express";
import { tablesSessionsRoutes } from "./tables-sessions-routes";
import { productsRouter } from "./produts-routes";
import { tablesRoutes } from "./tables-routes";

const routes = Router()
routes.use("/tables-sessions", tablesSessionsRoutes)
routes.use("/products", productsRouter)
routes.use("/tables", tablesRoutes)

export { routes }