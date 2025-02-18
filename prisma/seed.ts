import { prisma } from "../src/prisma";

async function seed() {
    await prisma.user.createMany({
        data: [
            {
                name: "Mateus Macedo",
                email: "mateus@email.com",
            },

            {
                name: "Jonatan Santos",
                email: "jonan@email.com",
            },

            {
                name: "Helen Oliveira",
                email: "lenoli@email.com",
            },

            {
                name: "Wagner Pereira",
                email: "wagper@email.com",
            },

            {
                name: "Paola Souza",
                email: "pahsouza@email.com",
            },
        ],
    });
}
seed().then(() => {
    console.log("Database seeded!");
    prisma.$disconnect();
});
