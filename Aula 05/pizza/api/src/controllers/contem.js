const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const contem = await prisma.contem.create({
            data: req.body
        });
        return res.status(201).json(contem);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const contem = await prisma.contem.findMany();
    return res.json(contem);
}

const readOne = async (req, res) => {
    try {
        const contem = await prisma.contem.findUnique({
            where: {
                pedidoId_pizzaId: {
                    pedidoId: parseInt(req.params.pedidoId),
                    pizzaId: parseInt(req.params.pizzaId)
                }
            }
        });
        return res.json(contem);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const contem = await prisma.contem.update({
            where: {
                pedidoId_pizzaId: {
                    pedidoId: parseInt(req.params.pedidoId),
                    pizzaId: parseInt(req.params.pizzaId)
                }
            },
            data: req.body
        });
        return res.status(202).json(contem);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.contem.delete({
            where: {
                pedidoId_pizzaId: {
                    pedidoId: parseInt(req.params.pedidoId),
                    pizzaId: parseInt(req.params.pizzaId)
                }
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { create, read, readOne, update, remove };
