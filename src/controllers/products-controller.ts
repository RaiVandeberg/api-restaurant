import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/AppError";

class ProductConstroller {
    async index(request: Request, response: Response, next: NextFunction) {
       try {
        
        return response.json({ message: "Hello World" });
       } catch (error) {
         next(error);
       }

    }
}


export { ProductConstroller }