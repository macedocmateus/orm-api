import { Request, Response } from "express";
import { prisma } from "../prisma";

class UsersController {
    async index(request: Request, response: Response) {
        // Função parecida com select do sql ou knex list do query builder porem em orm com prisma em modelo de objeto
        const users = await prisma.user.findMany();

        return response.json(users);
    }

    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        // Função parecida com insert into do sql ou knex create do query builder porem em orm com prisma em modelo de objeto
        await prisma.user.create({ data: { name, email } });

        return response.status(201).json();
    }

    async show(request: Request, response: Response) {}
}

export { UsersController };
