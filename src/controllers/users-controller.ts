import { Request, Response, NextFunction } from "express";

class UsersController {
    async index(request: Request, response: Response) {
        return response.json();
    }

    async create(request: Request, response: Response, next: NextFunction) {
        try {
            throw new Error("Deu erro");

            return response.status(201).json();
        } catch (error) {
            next(error);
        }
    }

    async show(request: Request, response: Response) {
        return response.json();
    }
}

export { UsersController };
