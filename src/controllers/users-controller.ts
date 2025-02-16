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

    async show(request: Request, response: Response) {
        const { id } = request.params;

        // Função parecida com select com where id do sql ou knex list id do query builder porem em orm com prisma em modelo de objeto
        const user = await prisma.user.findUnique({ where: { id } });

        return response.json(user);
    }

    async update(request: Request, response: Response) {
        const { name, email } = request.body;
        const { id } = request.params;

        await prisma.user.update({ where: { id }, data: { name, email } });

        return response.json();
    }

    async remove(request: Request, response: Response) {
        const { id } = request.params;

        const user = await prisma.user.delete({ where: { id } });

        return response.json();
    }

    async updateEmail(request: Request, response: Response) {
        const { email } = request.body;
        const { id } = request.params;

        await prisma.user.update({ where: { id }, data: { email } });

        return response.json();
    }
}

export { UsersController };
