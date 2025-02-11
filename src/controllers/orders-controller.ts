import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";
import { knex } from "@/database/knex";
import { z } from "zod"


class OrdersController {
    async create(request: Request, response: Response, next: NextFunction){
        try {
            const bodySchema = z.object({
                table_session_id: z.number(),
                product_id: z.number(),
                quantity: z.number(),
            })

            const {  table_session_id, product_id, quantity } = bodySchema.parse(request.body)

            const session = await knex<TablesSessionsRepository>("table_sessions").where({id: table_session_id}).first()


            if(!session){
                throw new AppError(" Essa session não existe")
            }

            if(session.closed_at){
                throw new AppError ("essa mesa está encerrada")
            }

            return response.status(201).json(session)
        } catch (error) {
            next(error)
        }
    }
}

export { OrdersController }